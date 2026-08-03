import { Component, inject } from '@angular/core';
import { DashboardI18nService } from '../../services/dashboard-i18n.service';

interface ActivityItem {
  text: string;
  link: string;
  tone: 'orange' | 'gray' | 'purple' | 'blue' | 'green';
}

@Component({
  selector: 'app-recent-activities',
  templateUrl: './recent-activities.component.html',
  styleUrl: './recent-activities.component.scss',
})
export class RecentActivitiesComponent {
  protected readonly i18n = inject(DashboardI18nService);
  protected readonly today: ActivityItem[] = [
    {
      text: 'إبراهيم خليل عبد الرحمن تم إرسال الرسالة إلى',
      link: 'المقدم: عبد العزيز الرويلي',
      tone: 'orange',
    },
    {
      text: 'إبراهيم خليل عبد الرحمن تم الإجابة عن طلبك',
      link: 'المقدم: عبد العزيز الرويلي',
      tone: 'gray',
    },
  ];

  protected readonly older: ActivityItem[] = [
    {
      text: '12:30 ظهراً • إبراهيم خليل عبد الرحمن تم قبول الطلب من',
      link: 'قسم المالية',
      tone: 'purple',
    },
    {
      text: '11:20 صباحاً • إبراهيم خليل عبد الرحمن تم الإجابة عن طلبك',
      link: 'قسم المالية',
      tone: 'blue',
    },
    {
      text: '01:30 مساءً • إبراهيم خليل عبد الرحمن تم قبول الطلب من',
      link: 'قسم المالية',
      tone: 'green',
    },
  ];
}
