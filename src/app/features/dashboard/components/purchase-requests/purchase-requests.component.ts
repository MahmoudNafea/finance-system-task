import { Component, computed, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import type { PurchaseOrderStatus, RequestRow } from '../../models';
import { PurchaseRequestDrawerComponent } from '../purchase-request-drawer/purchase-request-drawer.component';
import { TranslatePipe } from '../../../../helpers/pipes/translate.pipe';

@Component({
  selector: 'app-purchase-requests',
  imports: [FormsModule, PurchaseRequestDrawerComponent, TranslatePipe],
  templateUrl: './purchase-requests.component.html',
  styleUrl: './purchase-requests.component.scss',
})
export class PurchaseRequestsComponent {

  drawerOpen = false;
  searchTerm = signal('');
  activeTabFilter = signal<'all' | PurchaseOrderStatus>('all');
  selectedStatus = signal<'all' | PurchaseOrderStatus>('all');
  tabFilters: { key: 'all' | PurchaseOrderStatus; label: string }[] = [
    { key: 'all', label: 'DASHBOARD.purchaseRequests.filters.all' },
    { key: 'delivered', label: 'DASHBOARD.purchaseRequests.filters.fullyCompleted' },
    { key: 'approved', label: 'DASHBOARD.purchaseRequests.filters.partiallyCompleted' },
    { key: 'underReview', label: 'DASHBOARD.purchaseRequests.filters.inProgress' },
    { key: 'rejected', label: 'DASHBOARD.purchaseRequests.filters.rejected' },
  ];
  statusFilters: { key: 'all' | PurchaseOrderStatus; label: string }[] = [
    { key: 'all', label: 'DASHBOARD.purchaseRequests.filters.all' },
    { key: 'underReview', label: 'DASHBOARD.purchaseRequests.filters.underReview' },
    { key: 'approved', label: 'DASHBOARD.purchaseRequests.filters.approved' },
    { key: 'rejected', label: 'DASHBOARD.purchaseRequests.filters.rejected' },
    { key: 'delivered', label: 'DASHBOARD.purchaseRequests.filters.delivered' },
    { key: 'pending', label: 'DASHBOARD.purchaseRequests.filters.pending' },
  ];
  cards = [
    { title: 'الرصيد المتاح', value: '50 مليون ريال', period: 'السنة 2024', trend: '+4%', positive: true, icon: 'document' },
    { title: 'الطلبات المرحلة', value: '10 مليون ريال', period: 'الشهر الحالي', trend: '+4%', positive: true, icon: 'document' },
    { title: 'الطلبات المرفوضة', value: '15 مليون ريال', period: 'من الشهر الماضي', trend: '28% ↗', positive: true, icon: 'rejected' },
    { title: 'الطلبات غير مرسلة', value: '20 مليون ريال', period: 'من الشهر الماضي', trend: '15% ↘', positive: false, icon: 'wallet' },
  ];
  rows: RequestRow[] = [
    { id: 'BDRS/2016/019/0008', budgetTitle: 'أجهزة و معدات متنوعة', budgetCode: '14027-1303139-000', statement: 'توريد أجهزة مودام', notes: '05', status: 'مقبول ✓', statusKey: 'approved', tone: 'success', requester: 'فارس أسامة طارق', email: 'farestarek@moi.gov.qa', date: '22 يناير 2025', selected: true },
    { id: 'BDRS/2016/019/0009', budgetTitle: 'تكاليف برامج الحاسبات الآلية', budgetCode: '14027-1303140-001', statement: 'تجديد تراخيص', notes: '02', status: 'تحت الإجراء ←', statusKey: 'underReview', tone: 'warning', requester: 'حامد هادي زعيم', email: 'hamedzaiim@moi.gov.qa', date: '20 يناير 2025' },
    { id: 'BDRS/2016/019/0010', budgetTitle: 'امن ودفاع و تسليح', budgetCode: '14027-1303141-002', statement: 'ترقية وتحديث تكنولوجيا', notes: '08', status: 'تم الانشاء ✓', statusKey: 'pending', tone: 'info', requester: 'جاسم محمد حامد', email: 'jassem@moi.gov.qa', date: '24 يناير 2025' },
    { id: 'BDRS/2016/019/0011', budgetTitle: 'أجهزة و معدات متنوعة', budgetCode: '14027-1303142-003', statement: 'توريد ملحقات أجهزة لوحية', notes: '11', status: 'للمراجعة ↩', statusKey: 'underReview', tone: 'neutral', requester: 'أمير علي الزاوي', email: 'amirzawi@moi.gov.qa', date: '26 يناير 2025' },
    { id: 'BDRS/2016/019/0012', budgetTitle: 'مصروفات تأمين', budgetCode: '14027-1303143-004', statement: 'دفع تأمين سيارات المدير', notes: '14', status: 'تم الارسال ✓', statusKey: 'underReview', tone: 'purple', requester: 'هيبة حاتم حجاب', email: 'hibahijab@moi.gov.qa', date: '18 يناير 2025' },
    { id: 'BDRS/2016/019/0013', budgetTitle: 'أجهزة ومعدات كهربائية', budgetCode: '14027-1303144-005', statement: 'شراء اسلاك لمكتب سعادة الوزير', notes: '20', status: 'مرفوض ✓', statusKey: 'rejected', tone: 'danger', requester: 'شعاع إبراهيم خليل', email: 'shaaakhalil@moi.gov.qa', date: '28 يناير 2025' },
    { id: 'BDRS/2016/019/0014', budgetTitle: 'قرطاسية ومطبوعات', budgetCode: '14027-1303145-006', statement: 'توريد احبار لتغطية احتياجات الوزارة', notes: '23', status: 'قيد الانتظار ✓', statusKey: 'pending', tone: 'danger', requester: 'سلمى سامي جرادات', email: 'salamjradate@moi.gov.qa', date: '16 يناير 2025' },
    { id: 'BDRS/2016/019/0015', budgetTitle: 'خدمات استشارية', budgetCode: '14027-1303146-007', statement: 'تجهيز محطات العمل الجديدة', notes: '31', status: 'مكتمل ✓', statusKey: 'delivered', tone: 'success', requester: 'علياء يوسف السالم', email: 'aliyaalsalem@moi.gov.qa', date: '30 يناير 2025' },
    { id: 'BDRS/2016/019/0016', budgetTitle: 'مصاريف سفر وتنقلات', budgetCode: '14027-1303147-008', statement: 'تدريب الموظفين على البرمجيات الجديدة', notes: '37', status: 'في التصحيح ←', statusKey: 'underReview', tone: 'warning', requester: 'مروان خالد الطاني', email: 'marwanaltai@moi.gov.qa', date: '14 يناير 2025' },
    { id: 'BDRS/2016/019/0017', budgetTitle: 'تسويق وإعلانات', budgetCode: '14027-1303148-009', statement: 'توريد معدات شبكية جديدة', notes: '42', status: 'معلق ✓', statusKey: 'pending', tone: 'info', requester: 'فاطمة ناصر الجبوري', email: 'fatimajabouri@moi.gov.qa', date: '12 يناير 2025' },
    { id: 'BDRS/2016/019/0018', budgetTitle: 'أدوات مكتبية', budgetCode: '14027-1303149-010', statement: 'تحديث نظام الأمن المعلوماتي', notes: '48', status: 'تم التحقق ↩', statusKey: 'approved', tone: 'neutral', requester: 'سيف الدين منصور', email: 'saifmana@moi.gov.qa', date: '8 يناير 2025' },
    { id: 'BDRS/2016/019/0019', budgetTitle: 'صيانة وتجديد المرافق', budgetCode: '14027-1303150-011', statement: 'استبدال أجهزة الكمبيوتر القديمة', notes: '53', status: 'غير قابل للتنفيذ ✓', statusKey: 'rejected', tone: 'purple', requester: 'منار عزيز المكي', email: 'manaralmaki@moi.gov.qa', date: '6 يناير 2025' },
    { id: 'BDRS/2016/019/0020', budgetTitle: 'تقنية المعلومات والاتصالات', budgetCode: '14027-1303151-012', statement: 'تنظيم ورش عمل للابتكار والتطوير', notes: '60', status: 'معلقة ✓', statusKey: 'pending', tone: 'success', requester: 'حسن لطيف العلي', email: 'hassanalali@moi.gov.qa', date: '4 يناير 2025' },
  ];

  filteredRows = computed(() => {
    const term = this.searchTerm().trim().toLocaleLowerCase();
    const status = this.selectedStatus();

    return this.rows.filter((row) => {
      const matchesStatus = status === 'all' || row.statusKey === status;
      const searchableText = [
        row.id,
        row.budgetTitle,
        row.budgetCode,
        row.statement,
        row.status,
        row.requester,
        row.email,
        row.date,
      ].join(' ').toLocaleLowerCase();

      return matchesStatus && (!term || searchableText.includes(term));
    });
  });
}
