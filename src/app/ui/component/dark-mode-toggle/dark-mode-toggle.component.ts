import {
  ChangeDetectionStrategy,
  Component, effect, Inject, model,
} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {DOCUMENT} from '@angular/common';

@Component({
  selector: 'ui-dark-mode-toggle',
  template: `
    <div class="dark-mode-toggle">
      <button type="button" class="light" (click)="isDarkMode.set(false)">☀</button>

      <span class="toggle">
        <input
          class="toggle-track"
          type="checkbox"
          id="dark-mode"
          [value]="isDarkMode()"
          (change)="isDarkMode.set(!isDarkMode())"
        />
        <label style="color: transparent" for="dark-mode">
          Toggle Switch
        </label>
      </span>

      <button type="button" class="dark" (click)="isDarkMode.set(true)">☾</button>
    </div>
  `,
  styleUrls: ['dark-mode-toggle.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    FormsModule
  ]
})
export class DarkModeToggleComponent {

  isDarkMode = model(false);

  constructor(@Inject(DOCUMENT) private document: Document) {
    effect(() => {
      console.log('this.isDarkMode(): ', this.isDarkMode())
        this.toggleTheme(this.isDarkMode());
    });
  }

  toggleTheme = (isDarkMode: boolean): void => {
    if (!isDarkMode) {
      this.document.body.classList.remove('dark');
      this.document.body.classList.add('light');
    } else {
      this.document.body.classList.add('dark');
      this.document.body.classList.remove('light');
    }
  };

}
