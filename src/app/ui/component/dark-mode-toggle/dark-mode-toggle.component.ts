import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'ui-dark-mode-toggle',
  template: `
    <div class="dark-mode-toggle">
      <button type="button" class="light">☀</button>

      <span class="toggle">
        <input
          class="toggle-track"
          type="checkbox"
          id="dark-mode"
          [checked]="checked"
        />
        <label style="color: transparent" for="dark-mode">
          Toggle Switch
        </label>
      </span>

      <button type="button" class="dark">☾</button>
    </div>
  `,
  styleUrls: ['dark-mode-toggle.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.Emulated,
  standalone: true,
})
export class DarkModeToggleComponent {

  checked = false;

}
