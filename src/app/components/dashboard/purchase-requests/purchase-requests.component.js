import { Component } from '@angular/core';
import { PurchaseRequestDrawerComponent } from '../purchase-request-drawer/purchase-request-drawer.component';
import * as i0 from "@angular/core";
const _forTrack0 = ($index, $item) => $item.title;
const _forTrack1 = ($index, $item) => $item.id;
function PurchaseRequestsComponent_For_22_Template(rf, ctx) { if (rf & 1) {
    const _r1 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 25);
    i0.ɵɵlistener("click", function PurchaseRequestsComponent_For_22_Template_button_click_0_listener() { const filter_r2 = i0.ɵɵrestoreView(_r1).$implicit; const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.activeFilter = filter_r2); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const filter_r2 = ctx.$implicit;
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵclassProp("active", filter_r2 === ctx_r2.activeFilter);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(filter_r2);
} }
function PurchaseRequestsComponent_For_37_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "article", 17)(1, "div")(2, "span")(3, "strong");
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "b");
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(7, "i");
    i0.ɵɵtext(8);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(9, "footer")(10, "span");
    i0.ɵɵtext(11);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(12, "b");
    i0.ɵɵtext(13);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const card_r4 = ctx.$implicit;
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(card_r4.title);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(card_r4.value);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(card_r4.icon);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(card_r4.period);
    i0.ɵɵadvance();
    i0.ɵɵclassProp("positive", card_r4.positive);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(card_r4.trend);
} }
function PurchaseRequestsComponent_For_64_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "tr")(1, "td")(2, "label", 26);
    i0.ɵɵelement(3, "input", 27)(4, "i");
    i0.ɵɵelementStart(5, "span");
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(7, "td")(8, "strong");
    i0.ɵɵtext(9);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(10, "small");
    i0.ɵɵtext(11);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(12, "td");
    i0.ɵɵtext(13);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(14, "td");
    i0.ɵɵtext(15, "5 \u0645\u0646\u062A\u062C\u0627\u062A");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(16, "td");
    i0.ɵɵtext(17);
    i0.ɵɵelementStart(18, "span", 28);
    i0.ɵɵtext(19, "\u2667");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(20, "td")(21, "span");
    i0.ɵɵtext(22);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(23, "td")(24, "div", 29);
    i0.ɵɵelement(25, "span", 30);
    i0.ɵɵelementStart(26, "span")(27, "strong");
    i0.ɵɵtext(28);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(29, "small");
    i0.ɵɵtext(30);
    i0.ɵɵelementEnd()()()();
    i0.ɵɵelementStart(31, "td");
    i0.ɵɵtext(32);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(33, "td")(34, "button", 31);
    i0.ɵɵtext(35, "\u22EE");
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const row_r5 = ctx.$implicit;
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("checked", row_r5.selected);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(row_r5.id);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(row_r5.budgetTitle);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(row_r5.budgetCode);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(row_r5.statement);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate1("", row_r5.notes, " ");
    i0.ɵɵadvance(4);
    i0.ɵɵclassMap(i0.ɵɵinterpolate1("requests__badge requests__badge--", row_r5.tone));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(row_r5.status);
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate(row_r5.requester);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(row_r5.email);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(row_r5.date);
} }
function PurchaseRequestsComponent_Conditional_88_Template(rf, ctx) { if (rf & 1) {
    const _r6 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "app-purchase-request-drawer", 32);
    i0.ɵɵlistener("closed", function PurchaseRequestsComponent_Conditional_88_Template_app_purchase_request_drawer_closed_0_listener() { i0.ɵɵrestoreView(_r6); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.drawerOpen = false); });
    i0.ɵɵelementEnd();
} }
export class PurchaseRequestsComponent {
    drawerOpen = false;
    activeFilter = 'كل الطلبات';
    filters = ['كل الطلبات', 'منجز كليا', 'منجز جزئيا', 'تحت الإجراء', 'المرفوضة'];
    cards = [
        { title: 'الرصيد المتاح', value: '50 مليون ريال', period: 'السنة 2024', trend: '+4%', positive: true, icon: '▰' },
        { title: 'الطلبات المرحلة', value: '10 مليون ريال', period: 'الشهر الحالي', trend: '+4%', positive: true, icon: '◧' },
        { title: 'الطلبات المرفوضة', value: '15 مليون ريال', period: 'من الشهر الماضي', trend: '28% ↗', positive: true, icon: '◧' },
        { title: 'الطلبات غير مرسلة', value: '20 مليون ريال', period: 'من الشهر الماضي', trend: '15% ↘', positive: false, icon: '▣' },
    ];
    rows = [
        { id: 'BDRS/2016/019/0008', budgetTitle: 'أجهزة و معدات متنوعة', budgetCode: '14027-1303139-000', statement: 'توريد أجهزة مودام', notes: '05', status: 'مقبول ✓', tone: 'success', requester: 'فارس أسامة طارق', email: 'farestarek@moi.gov.qa', date: '22 يناير 2025', selected: true },
        { id: 'BDRS/2016/019/0009', budgetTitle: 'تكاليف برامج الحاسبات الآلية', budgetCode: '14027-1303140-001', statement: 'تجديد تراخيص', notes: '02', status: 'تحت الإجراء ←', tone: 'warning', requester: 'حامد هادي زعيم', email: 'hamedzaiim@moi.gov.qa', date: '20 يناير 2025' },
        { id: 'BDRS/2016/019/0010', budgetTitle: 'امن ودفاع و تسليح', budgetCode: '14027-1303141-002', statement: 'ترقية وتحديث تكنولوجيا', notes: '08', status: 'تم الانشاء ✓', tone: 'info', requester: 'جاسم محمد حامد', email: 'jassem@moi.gov.qa', date: '24 يناير 2025' },
        { id: 'BDRS/2016/019/0011', budgetTitle: 'أجهزة و معدات متنوعة', budgetCode: '14027-1303142-003', statement: 'توريد ملحقات أجهزة لوحية', notes: '11', status: 'للمراجعة ↩', tone: 'neutral', requester: 'أمير علي الزاوي', email: 'amirzawi@moi.gov.qa', date: '26 يناير 2025' },
        { id: 'BDRS/2016/019/0012', budgetTitle: 'مصروفات تأمين', budgetCode: '14027-1303143-004', statement: 'دفع تأمين سيارات المدير', notes: '14', status: 'تم الارسال ✓', tone: 'purple', requester: 'هيبة حاتم حجاب', email: 'hibahijab@moi.gov.qa', date: '18 يناير 2025' },
        { id: 'BDRS/2016/019/0013', budgetTitle: 'أجهزة ومعدات كهربائية', budgetCode: '14027-1303144-005', statement: 'شراء اسلاك لمكتب سعادة الوزير', notes: '20', status: 'مرفوض ✓', tone: 'danger', requester: 'شعاع إبراهيم خليل', email: 'shaaakhalil@moi.gov.qa', date: '28 يناير 2025' },
        { id: 'BDRS/2016/019/0014', budgetTitle: 'قرطاسية ومطبوعات', budgetCode: '14027-1303145-006', statement: 'توريد احبار لتغطية احتياجات الوزارة', notes: '23', status: 'قيد الانتظار ✓', tone: 'danger', requester: 'سلمى سامي جرادات', email: 'salamjradate@moi.gov.qa', date: '16 يناير 2025' },
        { id: 'BDRS/2016/019/0015', budgetTitle: 'خدمات استشارية', budgetCode: '14027-1303146-007', statement: 'تجهيز محطات العمل الجديدة', notes: '31', status: 'مكتمل ✓', tone: 'success', requester: 'علياء يوسف السالم', email: 'aliyaalsalem@moi.gov.qa', date: '30 يناير 2025' },
        { id: 'BDRS/2016/019/0016', budgetTitle: 'مصاريف سفر وتنقلات', budgetCode: '14027-1303147-008', statement: 'تدريب الموظفين على البرمجيات الجديدة', notes: '37', status: 'في التصحيح ←', tone: 'warning', requester: 'مروان خالد الطاني', email: 'marwanaltai@moi.gov.qa', date: '14 يناير 2025' },
        { id: 'BDRS/2016/019/0017', budgetTitle: 'تسويق وإعلانات', budgetCode: '14027-1303148-009', statement: 'توريد معدات شبكية جديدة', notes: '42', status: 'معلق ✓', tone: 'info', requester: 'فاطمة ناصر الجبوري', email: 'fatimajabouri@moi.gov.qa', date: '12 يناير 2025' },
        { id: 'BDRS/2016/019/0018', budgetTitle: 'أدوات مكتبية', budgetCode: '14027-1303149-010', statement: 'تحديث نظام الأمن المعلوماتي', notes: '48', status: 'تم التحقق ↩', tone: 'neutral', requester: 'سيف الدين منصور', email: 'saifmana@moi.gov.qa', date: '8 يناير 2025' },
        { id: 'BDRS/2016/019/0019', budgetTitle: 'صيانة وتجديد المرافق', budgetCode: '14027-1303150-011', statement: 'استبدال أجهزة الكمبيوتر القديمة', notes: '53', status: 'غير قابل للتنفيذ ✓', tone: 'purple', requester: 'منار عزيز المكي', email: 'manaralmaki@moi.gov.qa', date: '6 يناير 2025' },
        { id: 'BDRS/2016/019/0020', budgetTitle: 'تقنية المعلومات والاتصالات', budgetCode: '14027-1303151-012', statement: 'تنظيم ورش عمل للابتكار والتطوير', notes: '60', status: 'معلقة ✓', tone: 'success', requester: 'حسن لطيف العلي', email: 'hassanalali@moi.gov.qa', date: '4 يناير 2025' },
    ];
    static ɵfac = function PurchaseRequestsComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || PurchaseRequestsComponent)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: PurchaseRequestsComponent, selectors: [["app-purchase-requests"]], decls: 89, vars: 1, consts: [["dir", "rtl", 1, "requests"], [1, "requests__hero"], [1, "requests__heading"], ["aria-hidden", "true", 1, "requests__feature"], ["type", "button", "aria-label", "\u062A\u0643\u0628\u064A\u0631", 1, "requests__expand"], [1, "requests__hero-actions"], ["type", "button", 1, "requests__create", 3, "click"], ["type", "button", "aria-label", "\u0627\u0644\u0645\u0632\u064A\u062F", 1, "requests__more"], [1, "requests__filters"], ["aria-label", "\u062D\u0627\u0644\u0627\u062A \u0627\u0644\u0637\u0644\u0628\u0627\u062A"], ["type", "button", 3, "active"], [1, "requests__tools"], ["type", "button", 1, "requests__filter"], [1, "requests__search"], ["type", "search", "placeholder", "\u0628\u062D\u062B"], ["aria-label", "\u0645\u0644\u062E\u0635 \u0637\u0644\u0628\u0627\u062A \u0627\u0644\u0645\u0634\u062A\u0631\u064A\u0627\u062A", 1, "requests__summaries"], ["type", "button", "aria-label", "\u0627\u0644\u062A\u0627\u0644\u064A", 1, "requests__arrow", "requests__arrow--right"], [1, "requests__summary"], ["type", "button", "aria-label", "\u0627\u0644\u0633\u0627\u0628\u0642", 1, "requests__arrow", "requests__arrow--left"], [1, "requests__table-card"], [1, "requests__table-wrap"], [1, "requests__pagination"], ["type", "button"], [1, "requests__actions"], ["type", "button", 1, "requests__primary", 3, "click"], ["type", "button", 3, "click"], [1, "requests__selection"], ["type", "checkbox", 3, "checked"], [1, "requests__notes"], [1, "requests__person"], [1, "requests__avatar"], ["type", "button", "aria-label", "\u0627\u0644\u0645\u0632\u064A\u062F", 1, "requests__dots"], [3, "closed"]], template: function PurchaseRequestsComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "section", 0)(1, "header", 1)(2, "div", 2)(3, "span", 3);
            i0.ɵɵtext(4, "\u25B1");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(5, "span")(6, "h1");
            i0.ɵɵtext(7, "\u0637\u0644\u0628 \u0645\u0634\u062A\u0631\u064A\u0627\u062A");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(8, "p");
            i0.ɵɵtext(9, "\u0637\u0644\u0628 \u064A\u0647\u062F\u0641 \u0625\u0644\u0649 \u062A\u0648\u0641\u064A\u0631 \u0627\u0644\u0645\u0633\u062A\u0647\u0644\u0643\u0627\u062A \u0648\u0627\u0644\u062A\u0645\u0648\u064A\u0646\u0627\u062A \u0627\u0644\u0644\u0627\u0632\u0645\u0629 \u0644\u0636\u0645\u0627\u0646 \u0627\u0633\u062A\u0645\u0631\u0627\u0631\u064A\u0629 \u0627\u0644\u0639\u0645\u0644 \u0627\u0644\u064A\u0648\u0645\u064A \u0648\u062A\u0644\u0628\u064A\u0629 \u0627\u062D\u062A\u064A\u0627\u062C\u0627\u062A \u0627\u0644\u0623\u0642\u0633\u0627\u0645 \u0627\u0644\u0645\u0639\u0646\u064A\u0629 \u0628\u0643\u0641\u0627\u0621\u0629.");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(10, "button", 4);
            i0.ɵɵtext(11, "\u2197");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(12, "div", 5)(13, "button", 6);
            i0.ɵɵlistener("click", function PurchaseRequestsComponent_Template_button_click_13_listener() { return ctx.drawerOpen = true; });
            i0.ɵɵelementStart(14, "b");
            i0.ɵɵtext(15, "\uFF0B");
            i0.ɵɵelementEnd();
            i0.ɵɵtext(16, " \u0625\u0646\u0634\u0627\u0621 \u0637\u0644\u0628");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(17, "button", 7);
            i0.ɵɵtext(18, "\u22EE");
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(19, "section", 8)(20, "nav", 9);
            i0.ɵɵrepeaterCreate(21, PurchaseRequestsComponent_For_22_Template, 2, 3, "button", 10, i0.ɵɵrepeaterTrackByIdentity);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(23, "div", 11)(24, "button", 12);
            i0.ɵɵtext(25, "\u0627\u0644\u062A\u0635\u0641\u064A\u0629 ");
            i0.ɵɵelementStart(26, "span");
            i0.ɵɵtext(27, "\u2637");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(28, "label", 13);
            i0.ɵɵelement(29, "input", 14)(30, "i");
            i0.ɵɵelementStart(31, "kbd");
            i0.ɵɵtext(32, "K");
            i0.ɵɵelementEnd()()()();
            i0.ɵɵelementStart(33, "section", 15)(34, "button", 16);
            i0.ɵɵtext(35, "\u203A");
            i0.ɵɵelementEnd();
            i0.ɵɵrepeaterCreate(36, PurchaseRequestsComponent_For_37_Template, 14, 7, "article", 17, _forTrack0);
            i0.ɵɵelementStart(38, "button", 18);
            i0.ɵɵtext(39, "\u2039");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(40, "section", 19)(41, "div", 20)(42, "table")(43, "thead")(44, "tr")(45, "th");
            i0.ɵɵtext(46, "\u0631\u0642\u0645 \u0627\u0644\u0645\u0639\u0627\u0645\u0644\u0629");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(47, "th");
            i0.ɵɵtext(48, "\u0628\u0646\u062F \u0648\u0639\u0646\u0648\u0627\u0646 \u0627\u0644\u0645\u0648\u0627\u0632\u0646\u0629");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(49, "th");
            i0.ɵɵtext(50, "\u0627\u0644\u0628\u064A\u0627\u0646");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(51, "th");
            i0.ɵɵtext(52, "\u0639\u062F\u062F \u0627\u0644\u0645\u0646\u062A\u062C\u0627\u062A");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(53, "th");
            i0.ɵɵtext(54, "\u0639\u062F\u062F \u0627\u0644\u0645\u0644\u0627\u062D\u0638\u0627\u062A");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(55, "th");
            i0.ɵɵtext(56, "\u062D\u0627\u0644\u0629 \u0627\u0644\u0637\u0644\u0628");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(57, "th");
            i0.ɵɵtext(58, "\u0645\u0646\u0634\u0623 \u0627\u0644\u0637\u0644\u0628");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(59, "th");
            i0.ɵɵtext(60, "\u062A\u0627\u0631\u064A\u062E");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(61, "th");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(62, "tbody");
            i0.ɵɵrepeaterCreate(63, PurchaseRequestsComponent_For_64_Template, 36, 13, "tr", null, _forTrack1);
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(65, "footer", 21)(66, "span");
            i0.ɵɵtext(67, "\u0627\u0644\u0635\u0641\u062D\u0629 1 \u0645\u0646 10");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(68, "div")(69, "button", 22);
            i0.ɵɵtext(70, "\u0627\u0644\u0633\u0627\u0628\u0642");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(71, "button", 22);
            i0.ɵɵtext(72, "\u0627\u0644\u062A\u0627\u0644\u064A");
            i0.ɵɵelementEnd()()()();
            i0.ɵɵelementStart(73, "footer", 23)(74, "div")(75, "button", 24);
            i0.ɵɵlistener("click", function PurchaseRequestsComponent_Template_button_click_75_listener() { return ctx.drawerOpen = true; });
            i0.ɵɵtext(76, "\uFF0B \u0625\u0646\u0634\u0627\u0621 \u0627\u0644\u0637\u0644\u0628");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(77, "button", 22);
            i0.ɵɵtext(78, "\u0625\u0631\u0633\u0627\u0644 \u25C1");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(79, "button", 22);
            i0.ɵɵtext(80, "\u2699 \u0627\u0644\u0625\u062C\u0631\u0627\u0621\u0627\u062A\u2304");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(81, "div")(82, "button", 22);
            i0.ɵɵtext(83, "\u25A3 \u0637\u0628\u0627\u0639\u0629");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(84, "button", 22);
            i0.ɵɵtext(85, "\u21A9 \u0639\u0648\u062F\u0629");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(86, "button", 22);
            i0.ɵɵtext(87, "\u22EE");
            i0.ɵɵelementEnd()()()();
            i0.ɵɵconditionalCreate(88, PurchaseRequestsComponent_Conditional_88_Template, 1, 0, "app-purchase-request-drawer");
        } if (rf & 2) {
            i0.ɵɵadvance(21);
            i0.ɵɵrepeater(ctx.filters);
            i0.ɵɵadvance(15);
            i0.ɵɵrepeater(ctx.cards);
            i0.ɵɵadvance(27);
            i0.ɵɵrepeater(ctx.rows);
            i0.ɵɵadvance(25);
            i0.ɵɵconditional(ctx.drawerOpen ? 88 : -1);
        } }, dependencies: [PurchaseRequestDrawerComponent], styles: ["[_nghost-%COMP%] { display: block; width: 100%; min-width: 0; }\n*[_ngcontent-%COMP%] { box-sizing: border-box; }\n.requests[_ngcontent-%COMP%] {\n  display: flex; min-height: 1637px; flex-direction: column; gap: 24px; padding: 12px;\n  border-radius: 8px; background: #fff; color: #0e253c; font-family: \"Lusail\", \"Tahoma\", sans-serif;\n}\n.requests__hero[_ngcontent-%COMP%] {\n  display: flex; height: 88px; align-items: center; justify-content: space-between; padding: 16px;\n  border: 1px solid #e0e5eb; border-radius: 8px; background: #fff;\n}\n.requests__heading[_ngcontent-%COMP%], .requests__hero-actions[_ngcontent-%COMP%], .requests__tools[_ngcontent-%COMP%], .requests__summaries[_ngcontent-%COMP%], .requests__person[_ngcontent-%COMP%] { display: flex; align-items: center; }\n.requests__heading[_ngcontent-%COMP%] { min-width: 0; gap: 16px; }\n.requests__heading[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%]:nth-child(2) { min-width: 0; }\n.requests__heading[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] { margin: 0; color: #101828; font-size: 24px; font-weight: 600; line-height: 28px; }\n.requests__heading[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] { overflow: hidden; margin: 3px 0 0; color: #526173; font-size: 11px; text-overflow: ellipsis; white-space: nowrap; }\n.requests__feature[_ngcontent-%COMP%] {\n  display: grid; width: 32px; height: 32px; flex: 0 0 32px; place-items: center;\n  border: 1px solid #e9eaeb; border-radius: 6px; box-shadow: 0 1px 2px rgb(10 13 18 / 5%); color: #667085;\n}\n.requests__expand[_ngcontent-%COMP%] { width: 32px; margin-inline-start: 16px; border: 0; border-right: 1px solid #e9eaeb; background: transparent; color: #8090a7; font-size: 20px; }\n.requests__hero-actions[_ngcontent-%COMP%] { direction: ltr; gap: 12px; }\n.requests__create[_ngcontent-%COMP%], .requests__primary[_ngcontent-%COMP%] {\n  height: 40px; padding: 0 16px; border: 0; border-radius: 6px; background: #97133f; color: #fff; font-size: 12px; font-weight: 600;\n}\n.requests__create[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] { font-size: 18px; }\n.requests__more[_ngcontent-%COMP%] { width: 32px; height: 40px; border: 0; border-radius: 6px; background: #f8fafb; color: #526173; font-size: 20px; }\n.requests__filters[_ngcontent-%COMP%] {\n  display: flex; height: 64px; align-items: center; justify-content: space-between; padding: 8px 12px;\n  border-top: 1px solid rgb(14 37 60 / 20%); border-bottom: 1px solid rgb(14 37 60 / 20%); background: #fff;\n}\n.requests__filters[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%] { display: flex; align-self: stretch; }\n.requests__filters[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  min-width: 100px; padding: 0 16px; border: 0; border-bottom: 2px solid transparent;\n  background: #fff; color: #344054; font-size: 12px;\n}\n.requests__filters[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   button.active[_ngcontent-%COMP%] { border-bottom-color: #97133f; color: #97133f; font-weight: 600; }\n.requests__tools[_ngcontent-%COMP%] { direction: rtl; gap: 12px; }\n.requests__filter[_ngcontent-%COMP%] { width: 97px; height: 40px; border: 1px solid #d5d7da; border-radius: 8px; background: #fff; color: #344054; font-size: 12px; }\n.requests__search[_ngcontent-%COMP%] { position: relative; width: 296px; height: 40px; }\n.requests__search[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] { width: 100%; height: 100%; padding: 8px 38px; border: 1px solid #d5d7da; border-radius: 8px; outline: 0; }\n.requests__search[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] { position: absolute; top: 11px; right: 12px; width: 15px; height: 15px; border: 1.5px solid #667085; border-radius: 50%; }\n.requests__search[_ngcontent-%COMP%]   kbd[_ngcontent-%COMP%] { position: absolute; top: 10px; left: 10px; padding: 2px 7px; border: 1px solid #e3e5e8; border-radius: 4px; background: #fff; color: #98a0ab; font-size: 10px; }\n.requests__summaries[_ngcontent-%COMP%] { position: relative; height: 154px; gap: 16px; }\n.requests__summary[_ngcontent-%COMP%] {\n  min-width: 0; height: 154px; flex: 1 1 0; overflow: hidden; border: 1px solid rgb(14 37 60 / 10%);\n  border-radius: 16px; background: #f6f8f9; box-shadow: 0 3px 6px rgb(0 0 0 / 6%);\n}\n.requests__summary[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] { display: flex; height: 100px; align-items: center; justify-content: space-between; padding: 20px; }\n.requests__summary[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] { display: flex; flex-direction: column; gap: 5px; }\n.requests__summary[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] { color: #52677b; font-size: 14px; font-weight: 600; }\n.requests__summary[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] { color: #202020; font-size: 16px; }\n.requests__summary[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  display: grid; width: 56px; height: 56px; place-items: center; border: 1px solid #e9eaeb;\n  border-radius: 50%; background: #f4f7fe; color: #97133f; font-size: 22px; font-style: normal;\n}\n.requests__summary[_ngcontent-%COMP%]   footer[_ngcontent-%COMP%] { display: flex; height: 54px; align-items: center; justify-content: space-between; padding: 12px 20px; border-top: 1px solid #e9eaeb; background: #fff; color: #66758a; font-size: 11px; }\n.requests__summary[_ngcontent-%COMP%]   footer[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] { color: #f04438; font-family: Arial, sans-serif; }\n.requests__summary[_ngcontent-%COMP%]   footer[_ngcontent-%COMP%]   b.positive[_ngcontent-%COMP%] { color: #22c55e; }\n.requests__arrow[_ngcontent-%COMP%] {\n  position: absolute; z-index: 2; top: 58px; display: grid; width: 36px; height: 36px; place-items: center;\n  border: 1px solid #e9eaeb; border-radius: 50%; background: #fff; box-shadow: 0 2px 5px rgb(0 0 0 / 10%); color: #526173; font-size: 28px;\n}\n.requests__arrow--right[_ngcontent-%COMP%] { right: -14px; }.requests__arrow--left[_ngcontent-%COMP%] { left: -14px; }\n.requests__table-card[_ngcontent-%COMP%] { height: 1044px; overflow: hidden; border: 1px solid #e9eaeb; border-radius: 16px; background: #fff; box-shadow: 0 1px 2px rgb(10 13 18 / 5%); }\n.requests__table-wrap[_ngcontent-%COMP%] { height: 988px; overflow: hidden; }\ntable[_ngcontent-%COMP%] { width: 100%; border-collapse: collapse; table-layout: fixed; }\nth[_ngcontent-%COMP%], td[_ngcontent-%COMP%] { height: 72px; padding: 8px 12px; border-bottom: 1px solid #e9eaeb; color: #526173; font-size: 11px; text-align: right; vertical-align: middle; }\nth[_ngcontent-%COMP%] { height: 44px; background: #fff; color: #7a8695; font-weight: 500; }\nth[_ngcontent-%COMP%]:not(:last-child)::after { margin-inline-start: 6px; color: #a4acb8; content: \"\u2195\"; font-size: 9px; }\ntbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(odd) { background: #fafafa; } tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(even) { background: #fff; }\nth[_ngcontent-%COMP%]:nth-child(1) { width: 194px; } th[_ngcontent-%COMP%]:nth-child(2) { width: 180px; } th[_ngcontent-%COMP%]:nth-child(3) { width: 185px; }\nth[_ngcontent-%COMP%]:nth-child(4) { width: 125px; } th[_ngcontent-%COMP%]:nth-child(5) { width: 125px; } th[_ngcontent-%COMP%]:nth-child(6) { width: 135px; }\nth[_ngcontent-%COMP%]:nth-child(7) { width: 240px; } th[_ngcontent-%COMP%]:nth-child(8) { width: 150px; } th[_ngcontent-%COMP%]:nth-child(9) { width: 45px; }\ntd[_ngcontent-%COMP%]    > strong[_ngcontent-%COMP%], td[_ngcontent-%COMP%]    > small[_ngcontent-%COMP%] { display: block; } td[_ngcontent-%COMP%]    > strong[_ngcontent-%COMP%] { color: #3d4958; font-weight: 500; } td[_ngcontent-%COMP%]    > small[_ngcontent-%COMP%] { direction: ltr; color: #667085; font-size: 9px; }\n.requests__selection[_ngcontent-%COMP%] { display: flex; align-items: center; gap: 8px; color: #263b78; direction: rtl; white-space: nowrap; }\n.requests__selection[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] { position: absolute; opacity: 0; }\n.requests__selection[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] { display: grid; width: 18px; height: 18px; place-items: center; border: 1px solid #d5d7da; border-radius: 6px; background: #fff; }\n.requests__selection[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    + i[_ngcontent-%COMP%] { border-color: #97133f; background: #97133f; }\n.requests__selection[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    + i[_ngcontent-%COMP%]::after { color: #fff; content: \"\u2713\"; font-size: 12px; }\n.requests__notes[_ngcontent-%COMP%] { color: #7d8999; font-size: 15px; }\n.requests__badge[_ngcontent-%COMP%] { display: inline-flex; height: 22px; align-items: center; padding: 2px 8px; border: 1px solid; border-radius: 999px; font-size: 10px; white-space: nowrap; }\n.requests__badge--success[_ngcontent-%COMP%] { border-color: #abefc6; background: #ecfdf3; color: #099250; }\n.requests__badge--warning[_ngcontent-%COMP%] { border-color: #dc6803; background: #fffaeb; color: #dc6803; }\n.requests__badge--info[_ngcontent-%COMP%] { border-color: #b9e6fe; background: #f0f9ff; color: #0086c9; }\n.requests__badge--neutral[_ngcontent-%COMP%] { border-color: #e9eaeb; background: #fafafa; color: #535862; }\n.requests__badge--purple[_ngcontent-%COMP%] { border-color: #d9d6fe; background: #f4f3ff; color: #6938ef; }\n.requests__badge--danger[_ngcontent-%COMP%] { border-color: #fda29b; background: #fee4e2; color: #b42318; }\n.requests__person[_ngcontent-%COMP%] { gap: 9px; }.requests__person[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%]:last-child { display: flex; min-width: 0; flex-direction: column; }\n.requests__avatar[_ngcontent-%COMP%] { position: relative; width: 40px; height: 40px; flex: 0 0 40px; border: 1px solid #e3e5e8; border-radius: 50%; background: #fafafa; }\n.requests__avatar[_ngcontent-%COMP%]::before { position: absolute; top: 8px; left: 14px; width: 10px; height: 10px; border: 2px solid #7d8592; border-radius: 50%; content: \"\"; }\n.requests__avatar[_ngcontent-%COMP%]::after { position: absolute; bottom: 7px; left: 9px; width: 20px; height: 10px; border: 2px solid #7d8592; border-bottom: 0; border-radius: 12px 12px 0 0; content: \"\"; }\n.requests__dots[_ngcontent-%COMP%] { border: 0; background: transparent; color: #a4acb8; font-size: 20px; }\n.requests__pagination[_ngcontent-%COMP%] { display: flex; height: 56px; align-items: center; justify-content: space-between; padding: 10px 16px; color: #526173; font-size: 11px; }\n.requests__pagination[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] { display: flex; gap: 8px; }.requests__pagination[_ngcontent-%COMP%]   button[_ngcontent-%COMP%], .requests__actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] { height: 36px; padding: 0 14px; border: 1px solid #d5d7da; border-radius: 8px; background: #fff; color: #344054; font-size: 11px; }\n.requests__actions[_ngcontent-%COMP%] { display: flex; height: 72px; align-items: center; justify-content: space-between; padding-top: 16px; border-top: 1px solid #d5d7da; }\n.requests__actions[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] { display: flex; gap: 12px; }.requests__actions[_ngcontent-%COMP%]   .requests__primary[_ngcontent-%COMP%] { height: 40px; border: 0; background: #97133f; color: #fff; }\n@media (max-width: 1600px) {\n  .requests__search[_ngcontent-%COMP%] { width: 240px; }\n  .requests__filters[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] { min-width: 82px; padding-inline: 10px; }\n  .requests__summary[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] { padding-inline: 14px; }\n}"] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PurchaseRequestsComponent, [{
        type: Component,
        args: [{ selector: 'app-purchase-requests', imports: [PurchaseRequestDrawerComponent], template: "<section class=\"requests\" dir=\"rtl\">\n  <header class=\"requests__hero\">\n    <div class=\"requests__heading\">\n      <span class=\"requests__feature\" aria-hidden=\"true\">\u25B1</span>\n      <span><h1>\u0637\u0644\u0628 \u0645\u0634\u062A\u0631\u064A\u0627\u062A</h1><p>\u0637\u0644\u0628 \u064A\u0647\u062F\u0641 \u0625\u0644\u0649 \u062A\u0648\u0641\u064A\u0631 \u0627\u0644\u0645\u0633\u062A\u0647\u0644\u0643\u0627\u062A \u0648\u0627\u0644\u062A\u0645\u0648\u064A\u0646\u0627\u062A \u0627\u0644\u0644\u0627\u0632\u0645\u0629 \u0644\u0636\u0645\u0627\u0646 \u0627\u0633\u062A\u0645\u0631\u0627\u0631\u064A\u0629 \u0627\u0644\u0639\u0645\u0644 \u0627\u0644\u064A\u0648\u0645\u064A \u0648\u062A\u0644\u0628\u064A\u0629 \u0627\u062D\u062A\u064A\u0627\u062C\u0627\u062A \u0627\u0644\u0623\u0642\u0633\u0627\u0645 \u0627\u0644\u0645\u0639\u0646\u064A\u0629 \u0628\u0643\u0641\u0627\u0621\u0629.</p></span>\n      <button type=\"button\" class=\"requests__expand\" aria-label=\"\u062A\u0643\u0628\u064A\u0631\">\u2197</button>\n    </div>\n    <div class=\"requests__hero-actions\">\n      <button type=\"button\" class=\"requests__create\" (click)=\"drawerOpen = true\"><b>\uFF0B</b> \u0625\u0646\u0634\u0627\u0621 \u0637\u0644\u0628</button>\n      <button type=\"button\" class=\"requests__more\" aria-label=\"\u0627\u0644\u0645\u0632\u064A\u062F\">\u22EE</button>\n    </div>\n  </header>\n\n  <section class=\"requests__filters\">\n    <nav aria-label=\"\u062D\u0627\u0644\u0627\u062A \u0627\u0644\u0637\u0644\u0628\u0627\u062A\">\n      @for (filter of filters; track filter) {\n        <button type=\"button\" [class.active]=\"filter === activeFilter\" (click)=\"activeFilter = filter\">{{ filter }}</button>\n      }\n    </nav>\n    <div class=\"requests__tools\">\n      <button type=\"button\" class=\"requests__filter\">\u0627\u0644\u062A\u0635\u0641\u064A\u0629 <span>\u2637</span></button>\n      <label class=\"requests__search\"><input type=\"search\" placeholder=\"\u0628\u062D\u062B\" /><i></i><kbd>K</kbd></label>\n    </div>\n  </section>\n\n  <section class=\"requests__summaries\" aria-label=\"\u0645\u0644\u062E\u0635 \u0637\u0644\u0628\u0627\u062A \u0627\u0644\u0645\u0634\u062A\u0631\u064A\u0627\u062A\">\n    <button class=\"requests__arrow requests__arrow--right\" type=\"button\" aria-label=\"\u0627\u0644\u062A\u0627\u0644\u064A\">\u203A</button>\n    @for (card of cards; track card.title) {\n      <article class=\"requests__summary\">\n        <div><span><strong>{{ card.title }}</strong><b>{{ card.value }}</b></span><i>{{ card.icon }}</i></div>\n        <footer><span>{{ card.period }}</span><b [class.positive]=\"card.positive\">{{ card.trend }}</b></footer>\n      </article>\n    }\n    <button class=\"requests__arrow requests__arrow--left\" type=\"button\" aria-label=\"\u0627\u0644\u0633\u0627\u0628\u0642\">\u2039</button>\n  </section>\n\n  <section class=\"requests__table-card\">\n    <div class=\"requests__table-wrap\">\n      <table>\n        <thead><tr><th>\u0631\u0642\u0645 \u0627\u0644\u0645\u0639\u0627\u0645\u0644\u0629</th><th>\u0628\u0646\u062F \u0648\u0639\u0646\u0648\u0627\u0646 \u0627\u0644\u0645\u0648\u0627\u0632\u0646\u0629</th><th>\u0627\u0644\u0628\u064A\u0627\u0646</th><th>\u0639\u062F\u062F \u0627\u0644\u0645\u0646\u062A\u062C\u0627\u062A</th><th>\u0639\u062F\u062F \u0627\u0644\u0645\u0644\u0627\u062D\u0638\u0627\u062A</th><th>\u062D\u0627\u0644\u0629 \u0627\u0644\u0637\u0644\u0628</th><th>\u0645\u0646\u0634\u0623 \u0627\u0644\u0637\u0644\u0628</th><th>\u062A\u0627\u0631\u064A\u062E</th><th></th></tr></thead>\n        <tbody>\n          @for (row of rows; track row.id) {\n            <tr>\n              <td><label class=\"requests__selection\"><input type=\"checkbox\" [checked]=\"row.selected\" /><i></i><span>{{ row.id }}</span></label></td>\n              <td><strong>{{ row.budgetTitle }}</strong><small>{{ row.budgetCode }}</small></td>\n              <td>{{ row.statement }}</td><td>5 \u0645\u0646\u062A\u062C\u0627\u062A</td><td>{{ row.notes }} <span class=\"requests__notes\">\u2667</span></td>\n              <td><span class=\"requests__badge requests__badge--{{ row.tone }}\">{{ row.status }}</span></td>\n              <td><div class=\"requests__person\"><span class=\"requests__avatar\"></span><span><strong>{{ row.requester }}</strong><small>{{ row.email }}</small></span></div></td>\n              <td>{{ row.date }}</td><td><button class=\"requests__dots\" type=\"button\" aria-label=\"\u0627\u0644\u0645\u0632\u064A\u062F\">\u22EE</button></td>\n            </tr>\n          }\n        </tbody>\n      </table>\n    </div>\n    <footer class=\"requests__pagination\"><span>\u0627\u0644\u0635\u0641\u062D\u0629 1 \u0645\u0646 10</span><div><button type=\"button\">\u0627\u0644\u0633\u0627\u0628\u0642</button><button type=\"button\">\u0627\u0644\u062A\u0627\u0644\u064A</button></div></footer>\n  </section>\n\n  <footer class=\"requests__actions\">\n    <div><button class=\"requests__primary\" type=\"button\" (click)=\"drawerOpen = true\">\uFF0B \u0625\u0646\u0634\u0627\u0621 \u0627\u0644\u0637\u0644\u0628</button><button type=\"button\">\u0625\u0631\u0633\u0627\u0644 \u25C1</button><button type=\"button\">\u2699 \u0627\u0644\u0625\u062C\u0631\u0627\u0621\u0627\u062A\u2304</button></div>\n    <div><button type=\"button\">\u25A3 \u0637\u0628\u0627\u0639\u0629</button><button type=\"button\">\u21A9 \u0639\u0648\u062F\u0629</button><button type=\"button\">\u22EE</button></div>\n  </footer>\n</section>\n\n@if (drawerOpen) {\n  <app-purchase-request-drawer (closed)=\"drawerOpen = false\" />\n}\n", styles: [":host { display: block; width: 100%; min-width: 0; }\n* { box-sizing: border-box; }\n.requests {\n  display: flex; min-height: 1637px; flex-direction: column; gap: 24px; padding: 12px;\n  border-radius: 8px; background: #fff; color: #0e253c; font-family: \"Lusail\", \"Tahoma\", sans-serif;\n}\n.requests__hero {\n  display: flex; height: 88px; align-items: center; justify-content: space-between; padding: 16px;\n  border: 1px solid #e0e5eb; border-radius: 8px; background: #fff;\n}\n.requests__heading, .requests__hero-actions, .requests__tools, .requests__summaries, .requests__person { display: flex; align-items: center; }\n.requests__heading { min-width: 0; gap: 16px; }\n.requests__heading > span:nth-child(2) { min-width: 0; }\n.requests__heading h1 { margin: 0; color: #101828; font-size: 24px; font-weight: 600; line-height: 28px; }\n.requests__heading p { overflow: hidden; margin: 3px 0 0; color: #526173; font-size: 11px; text-overflow: ellipsis; white-space: nowrap; }\n.requests__feature {\n  display: grid; width: 32px; height: 32px; flex: 0 0 32px; place-items: center;\n  border: 1px solid #e9eaeb; border-radius: 6px; box-shadow: 0 1px 2px rgb(10 13 18 / 5%); color: #667085;\n}\n.requests__expand { width: 32px; margin-inline-start: 16px; border: 0; border-right: 1px solid #e9eaeb; background: transparent; color: #8090a7; font-size: 20px; }\n.requests__hero-actions { direction: ltr; gap: 12px; }\n.requests__create, .requests__primary {\n  height: 40px; padding: 0 16px; border: 0; border-radius: 6px; background: #97133f; color: #fff; font-size: 12px; font-weight: 600;\n}\n.requests__create b { font-size: 18px; }\n.requests__more { width: 32px; height: 40px; border: 0; border-radius: 6px; background: #f8fafb; color: #526173; font-size: 20px; }\n.requests__filters {\n  display: flex; height: 64px; align-items: center; justify-content: space-between; padding: 8px 12px;\n  border-top: 1px solid rgb(14 37 60 / 20%); border-bottom: 1px solid rgb(14 37 60 / 20%); background: #fff;\n}\n.requests__filters nav { display: flex; align-self: stretch; }\n.requests__filters nav button {\n  min-width: 100px; padding: 0 16px; border: 0; border-bottom: 2px solid transparent;\n  background: #fff; color: #344054; font-size: 12px;\n}\n.requests__filters nav button.active { border-bottom-color: #97133f; color: #97133f; font-weight: 600; }\n.requests__tools { direction: rtl; gap: 12px; }\n.requests__filter { width: 97px; height: 40px; border: 1px solid #d5d7da; border-radius: 8px; background: #fff; color: #344054; font-size: 12px; }\n.requests__search { position: relative; width: 296px; height: 40px; }\n.requests__search input { width: 100%; height: 100%; padding: 8px 38px; border: 1px solid #d5d7da; border-radius: 8px; outline: 0; }\n.requests__search i { position: absolute; top: 11px; right: 12px; width: 15px; height: 15px; border: 1.5px solid #667085; border-radius: 50%; }\n.requests__search kbd { position: absolute; top: 10px; left: 10px; padding: 2px 7px; border: 1px solid #e3e5e8; border-radius: 4px; background: #fff; color: #98a0ab; font-size: 10px; }\n.requests__summaries { position: relative; height: 154px; gap: 16px; }\n.requests__summary {\n  min-width: 0; height: 154px; flex: 1 1 0; overflow: hidden; border: 1px solid rgb(14 37 60 / 10%);\n  border-radius: 16px; background: #f6f8f9; box-shadow: 0 3px 6px rgb(0 0 0 / 6%);\n}\n.requests__summary > div { display: flex; height: 100px; align-items: center; justify-content: space-between; padding: 20px; }\n.requests__summary > div > span { display: flex; flex-direction: column; gap: 5px; }\n.requests__summary strong { color: #52677b; font-size: 14px; font-weight: 600; }\n.requests__summary > div b { color: #202020; font-size: 16px; }\n.requests__summary > div i {\n  display: grid; width: 56px; height: 56px; place-items: center; border: 1px solid #e9eaeb;\n  border-radius: 50%; background: #f4f7fe; color: #97133f; font-size: 22px; font-style: normal;\n}\n.requests__summary footer { display: flex; height: 54px; align-items: center; justify-content: space-between; padding: 12px 20px; border-top: 1px solid #e9eaeb; background: #fff; color: #66758a; font-size: 11px; }\n.requests__summary footer b { color: #f04438; font-family: Arial, sans-serif; }\n.requests__summary footer b.positive { color: #22c55e; }\n.requests__arrow {\n  position: absolute; z-index: 2; top: 58px; display: grid; width: 36px; height: 36px; place-items: center;\n  border: 1px solid #e9eaeb; border-radius: 50%; background: #fff; box-shadow: 0 2px 5px rgb(0 0 0 / 10%); color: #526173; font-size: 28px;\n}\n.requests__arrow--right { right: -14px; }.requests__arrow--left { left: -14px; }\n.requests__table-card { height: 1044px; overflow: hidden; border: 1px solid #e9eaeb; border-radius: 16px; background: #fff; box-shadow: 0 1px 2px rgb(10 13 18 / 5%); }\n.requests__table-wrap { height: 988px; overflow: hidden; }\ntable { width: 100%; border-collapse: collapse; table-layout: fixed; }\nth, td { height: 72px; padding: 8px 12px; border-bottom: 1px solid #e9eaeb; color: #526173; font-size: 11px; text-align: right; vertical-align: middle; }\nth { height: 44px; background: #fff; color: #7a8695; font-weight: 500; }\nth:not(:last-child)::after { margin-inline-start: 6px; color: #a4acb8; content: \"\u2195\"; font-size: 9px; }\ntbody tr:nth-child(odd) { background: #fafafa; } tbody tr:nth-child(even) { background: #fff; }\nth:nth-child(1) { width: 194px; } th:nth-child(2) { width: 180px; } th:nth-child(3) { width: 185px; }\nth:nth-child(4) { width: 125px; } th:nth-child(5) { width: 125px; } th:nth-child(6) { width: 135px; }\nth:nth-child(7) { width: 240px; } th:nth-child(8) { width: 150px; } th:nth-child(9) { width: 45px; }\ntd > strong, td > small { display: block; } td > strong { color: #3d4958; font-weight: 500; } td > small { direction: ltr; color: #667085; font-size: 9px; }\n.requests__selection { display: flex; align-items: center; gap: 8px; color: #263b78; direction: rtl; white-space: nowrap; }\n.requests__selection input { position: absolute; opacity: 0; }\n.requests__selection i { display: grid; width: 18px; height: 18px; place-items: center; border: 1px solid #d5d7da; border-radius: 6px; background: #fff; }\n.requests__selection input:checked + i { border-color: #97133f; background: #97133f; }\n.requests__selection input:checked + i::after { color: #fff; content: \"\u2713\"; font-size: 12px; }\n.requests__notes { color: #7d8999; font-size: 15px; }\n.requests__badge { display: inline-flex; height: 22px; align-items: center; padding: 2px 8px; border: 1px solid; border-radius: 999px; font-size: 10px; white-space: nowrap; }\n.requests__badge--success { border-color: #abefc6; background: #ecfdf3; color: #099250; }\n.requests__badge--warning { border-color: #dc6803; background: #fffaeb; color: #dc6803; }\n.requests__badge--info { border-color: #b9e6fe; background: #f0f9ff; color: #0086c9; }\n.requests__badge--neutral { border-color: #e9eaeb; background: #fafafa; color: #535862; }\n.requests__badge--purple { border-color: #d9d6fe; background: #f4f3ff; color: #6938ef; }\n.requests__badge--danger { border-color: #fda29b; background: #fee4e2; color: #b42318; }\n.requests__person { gap: 9px; }.requests__person > span:last-child { display: flex; min-width: 0; flex-direction: column; }\n.requests__avatar { position: relative; width: 40px; height: 40px; flex: 0 0 40px; border: 1px solid #e3e5e8; border-radius: 50%; background: #fafafa; }\n.requests__avatar::before { position: absolute; top: 8px; left: 14px; width: 10px; height: 10px; border: 2px solid #7d8592; border-radius: 50%; content: \"\"; }\n.requests__avatar::after { position: absolute; bottom: 7px; left: 9px; width: 20px; height: 10px; border: 2px solid #7d8592; border-bottom: 0; border-radius: 12px 12px 0 0; content: \"\"; }\n.requests__dots { border: 0; background: transparent; color: #a4acb8; font-size: 20px; }\n.requests__pagination { display: flex; height: 56px; align-items: center; justify-content: space-between; padding: 10px 16px; color: #526173; font-size: 11px; }\n.requests__pagination div { display: flex; gap: 8px; }.requests__pagination button, .requests__actions button { height: 36px; padding: 0 14px; border: 1px solid #d5d7da; border-radius: 8px; background: #fff; color: #344054; font-size: 11px; }\n.requests__actions { display: flex; height: 72px; align-items: center; justify-content: space-between; padding-top: 16px; border-top: 1px solid #d5d7da; }\n.requests__actions > div { display: flex; gap: 12px; }.requests__actions .requests__primary { height: 40px; border: 0; background: #97133f; color: #fff; }\n@media (max-width: 1600px) {\n  .requests__search { width: 240px; }\n  .requests__filters nav button { min-width: 82px; padding-inline: 10px; }\n  .requests__summary > div { padding-inline: 14px; }\n}\n"] }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(PurchaseRequestsComponent, { className: "PurchaseRequestsComponent", filePath: "src/app/components/dashboard/purchase-requests/purchase-requests.component.ts", lineNumber: 26 }); })();
