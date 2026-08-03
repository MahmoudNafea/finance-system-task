import { Component, input } from '@angular/core';
import type { StatusTone } from '../../models';

@Component({
  selector: 'app-status-badge',
  templateUrl: './status-badge.component.html',
  styleUrl: './status-badge.component.scss',
})
export class StatusBadgeComponent {
  readonly label = input.required<string>();
  readonly tone = input.required<StatusTone>();
}
