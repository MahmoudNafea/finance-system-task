import { Component, input } from '@angular/core';

export type StatusTone = 'success' | 'warning' | 'info' | 'neutral' | 'purple';

@Component({
  selector: 'app-status-badge',
  templateUrl: './status-badge.component.html',
  styleUrl: './status-badge.component.scss',
})
export class StatusBadgeComponent {
  readonly label = input.required<string>();
  readonly tone = input.required<StatusTone>();
}
