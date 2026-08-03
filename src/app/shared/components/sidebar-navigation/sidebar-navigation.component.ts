import { Component, inject, output } from '@angular/core';
import { TranslationService } from '../../services/translation.service';

@Component({
  selector: 'app-sidebar-navigation',
  templateUrl: './sidebar-navigation.component.html',
  styleUrl: './sidebar-navigation.component.scss',
})
export class SidebarNavigationComponent {
  i18n = inject(TranslationService);
  get DASHBOARD() {
    return this.i18n.DASHBOARD();
  }

  closeMenu = output<void>();
}
