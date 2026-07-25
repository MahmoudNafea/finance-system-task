import { Component } from '@angular/core';

interface SidebarItem {
  label: string;
  icon: string;
  badge?: string;
  children?: SidebarItem[];
}

@Component({
  selector: 'app-sidebar-navigation',
  templateUrl: './sidebar-navigation.component.html',
  styleUrl: './sidebar-navigation.component.scss',
})
export class SidebarNavigationComponent {
  protected readonly items: SidebarItem[] = [
    { label: 'الصفحة الرئيسية', icon: '⌂' },
    { label: 'الطلبات', icon: '◇' },
    {
      label: 'طلبات الادارات',
      icon: '▥',
      children: [
        { label: 'طلب اموال اضافية', icon: '▤' },
        { label: 'طلب موافقة شراء كاميرات', icon: '▣' },
        { label: 'توصيات البنود المركزية', icon: '⌁' },
        { label: 'مقترحات الادارات للموازنة', icon: '▧' },
      ],
    },
    {
      label: 'طلبات المستودع',
      icon: '▱',
      children: [
        { label: 'الاستهلاكية/التموينية', icon: '▢' },
        { label: 'طلب عهدة جديد', icon: '☑' },
        { label: 'إجراءات العهد', icon: '▣' },
        { label: 'طلبات الملابس', icon: '♙' },
      ],
    },
    { label: 'طلب صيانة', icon: '⚒' },
    { label: 'الاستعلامات', icon: '?' },
    { label: 'المستودعات', icon: '▥' },
    { label: 'المحاسبة', icon: '▤', badge: '8' },
    { label: 'المشتريات', icon: '▢' },
  ];
}
