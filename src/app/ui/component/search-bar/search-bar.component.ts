import {ChangeDetectionStrategy, Component, ViewEncapsulation,} from '@angular/core';

type UiActions = {
  searchChange: string;
  formClick: Event;
  outsideFormClick: Event;
  formSubmit: Event;
};

@Component({
  selector: 'ui-search-bar',
  template: `
    <form
      #form
      class="form"
    >
      <button
        type="submit"
        class="magnifier-button"
        aria-label="Search for a movie"
      >
      </button>
      <input
        aria-label="Search Input"
        value=""
        placeholder="Search for a movie..."
        class="input"
      />
    </form>
  `,
  styleUrls: ['search-bar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.Emulated,
  providers: [],
  standalone: true,
  imports: [],
})
export class SearchBarComponent {

}
