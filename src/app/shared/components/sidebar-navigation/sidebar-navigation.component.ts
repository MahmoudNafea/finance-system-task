import { Component, input, output } from '@angular/core';
import { TranslatePipe } from '../../../helpers/pipes/translate.pipe';
import type { SidebarNavigationItem } from '../../models';

@Component({
  selector: 'app-sidebar-navigation',
  imports: [TranslatePipe],
  templateUrl: './sidebar-navigation.component.html',
  styleUrl: './sidebar-navigation.component.scss',
})
export class SidebarNavigationComponent {
  items = input.required<SidebarNavigationItem[]>();

  closeMenu = output<void>();
}
