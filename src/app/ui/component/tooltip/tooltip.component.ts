import {
  ChangeDetectionStrategy,
  Component,
  HostBinding,
  Input,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'ui-tooltip',
  template: `
  <ng-content></ng-content>
  `,
  styleUrls: ['./_tooltip.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class TooltipComponent {
}
