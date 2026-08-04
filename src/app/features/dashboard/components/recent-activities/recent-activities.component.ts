import { Component } from '@angular/core';
import type { ActivityItem } from '../../models';
import { TranslatePipe } from '../../../../helpers/pipes/translate.pipe';

@Component({
  selector: 'app-recent-activities',
  imports: [TranslatePipe],
  templateUrl: './recent-activities.component.html',
  styleUrl: './recent-activities.component.scss',
})
export class RecentActivitiesComponent {

  today: ActivityItem[] = [
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

  older: ActivityItem[] = [
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
