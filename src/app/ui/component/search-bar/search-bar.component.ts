import {DOCUMENT} from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  Inject,
  model,
  output,
  signal,
  viewChild,
} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {filter, fromEvent, Observable,} from 'rxjs';

@Component({
  selector: 'ui-search-bar',
  template: `
    <form
      (submit)="onSubmit()"
      class="form"
      (click)="open.set(true)"
    >
      <button
        type="submit"
        class="magnifier-button"
        aria-label="Search for a movie"
      >
        🔍
      </button>
      <input
        aria-label="Search Input"
        name="search"
        [(ngModel)]="search"
        placeholder="Search for a movie..."
        class="input"
      />
    </form>
  `,
  styleUrls: ['search-bar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  host: {
    class: 'opened',
  },
  imports: [
    FormsModule
  ]
})
export class SearchBarComponent {
  formRef = viewChild<ElementRef<HTMLFormElement>>('form');

  open = signal(true);
  search = model('');

  searchSubmit = output<string>();

  onSubmit() {
    this.open.set(false);
    this.searchSubmit.emit(this.search());
  }

  private outsideClick(): Observable<Event> {
    // any click on the page (we can't use the option `once:true` as we might get multiple false trigger)
    return fromEvent(this.document, 'click').pipe(
      // forward if the form did NOT triggered the click
      // means we clicked somewhere else in the page but the form
      filter((e) => !this.formRef()!.nativeElement.contains(e.target as any)),
    );
  }

  constructor(
    @Inject(DOCUMENT) private document: Document,
  ) {

  }

}
