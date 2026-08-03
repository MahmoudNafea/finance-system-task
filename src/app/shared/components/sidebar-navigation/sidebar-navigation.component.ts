import { NgTemplateOutlet } from '@angular/common';
import { Component, inject, output } from '@angular/core';
import { TranslationService } from '../../services/translation.service';

interface SidebarItem {
  label: string;
  icon: string;
  badge?: string;
  children?: SidebarItem[];
}

@Component({
  selector: 'app-sidebar-navigation',
  imports: [NgTemplateOutlet],
  templateUrl: './sidebar-navigation.component.html',
  styleUrl: './sidebar-navigation.component.scss',
})
export class SidebarNavigationComponent {
  protected readonly i18n = inject(TranslationService);
  readonly closed = output<void>();
  protected readonly items: SidebarItem[] = [
    { label: 'الصفحة الرئيسية', icon: 'home' },
    { label: 'الطلبات', icon: 'layers' },
    {
      label: 'طلبات الادارات',
      icon: 'building',
      children: [
        { label: 'طلب اموال اضافية', icon: 'coins' },
        { label: 'طلب موافقة شراء كاميرات', icon: 'camera' },
        { label: 'توصيات البنود المركزية', icon: 'link' },
        { label: 'مقترحات الادارات للموازنة', icon: 'document' },
      ],
    },
    {
      label: 'طلبات المستودع',
      icon: 'cart',
      children: [
        { label: 'الاستهلاكية/التموينية', icon: 'box' },
        { label: 'طلب عهدة جديد', icon: 'check-square' },
        { label: 'إجراءات العهد', icon: 'squares' },
        { label: 'طلبات الملابس', icon: 'shirt' },
      ],
    },
    { label: 'طلب صيانة', icon: 'tools' },
    { label: 'الاستعلامات', icon: 'help' },
    { label: 'المستودعات', icon: 'store' },
    { label: 'المحاسبة', icon: 'database', badge: '8' },
    { label: 'المشتريات', icon: 'bag' },
  ];
}
