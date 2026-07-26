import { Component } from '@angular/core';
import { AppHeaderComponent } from '../../components/dashboard/app-header/app-header.component';
import { DashboardTabsComponent } from '../../components/dashboard/dashboard-tabs/dashboard-tabs.component';
import { OperationsTableComponent } from '../../components/dashboard/operations-table/operations-table.component';
import { PurchaseStatusComponent } from '../../components/dashboard/purchase-status/purchase-status.component';
import { RecentActivitiesComponent } from '../../components/dashboard/recent-activities/recent-activities.component';
import { SidebarNavigationComponent } from '../../components/dashboard/sidebar-navigation/sidebar-navigation.component';
import { SummaryCardComponent } from '../../components/dashboard/summary-card/summary-card.component';
import { DashboardDataTableComponent } from '../../components/dashboard/dashboard-data-table/dashboard-data-table.component';
import { BudgetItemsComponent } from '../../components/dashboard/budget-items/budget-items.component';
import { ContractsTableComponent } from '../../components/dashboard/contracts-table/contracts-table.component';
import { PurchaseRequestsComponent } from '../../components/dashboard/purchase-requests/purchase-requests.component';
import * as i0 from "@angular/core";
const _forTrack0 = ($index, $item) => $item.label;
function DashboardPage_Conditional_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "app-purchase-requests");
} }
function DashboardPage_Conditional_7_For_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "app-summary-card", 5);
} if (rf & 2) {
    const summary_r1 = ctx.$implicit;
    i0.ɵɵproperty("label", summary_r1.label)("value", summary_r1.value)("trend", summary_r1.trend)("positive", summary_r1.positive);
} }
function DashboardPage_Conditional_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "section", 4);
    i0.ɵɵrepeaterCreate(1, DashboardPage_Conditional_7_For_2_Template, 1, 4, "app-summary-card", 5, _forTrack0);
    i0.ɵɵelementEnd();
    i0.ɵɵelement(3, "app-operations-table");
    i0.ɵɵelementStart(4, "section", 6);
    i0.ɵɵelement(5, "app-recent-activities")(6, "app-purchase-status");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "section", 7);
    i0.ɵɵelement(8, "app-dashboard-data-table", 8)(9, "app-dashboard-data-table", 9);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(10, "section", 10);
    i0.ɵɵelement(11, "app-contracts-table")(12, "app-budget-items");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵrepeater(ctx_r1.summaries);
} }
export class DashboardPage {
    activeTab = 'لوحة القيادة';
    tabs = [
        'لوحة القيادة',
        'طلب مشتريات',
        'العهد',
        'الطلبات',
        'الفواتير',
        'العقود والمناقصات',
        'الموازنة',
    ];
    summaries = [
        { label: 'رصيد الموازنة المعتمد', value: '50 مليون ريال', trend: '28%', positive: false },
        { label: 'رصيد الحر', value: '10 مليون ريال', trend: '28%', positive: false },
        { label: 'المبالغ المدفوع', value: '15 مليون ريال', trend: '28%', positive: true },
        { label: 'الارتباطات', value: '20 مليون ريال', trend: '15%', positive: false },
        { label: 'الالتزامات', value: '5 مليون ريال', trend: '28%', positive: true },
    ];
    static ɵfac = function DashboardPage_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || DashboardPage)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: DashboardPage, selectors: [["app-dashboard-page"]], decls: 8, vars: 5, consts: [["dir", "rtl", 1, "dashboard"], [1, "dashboard__body"], ["aria-label", "\u0645\u062D\u062A\u0648\u0649 \u0644\u0648\u062D\u0629 \u0627\u0644\u0642\u064A\u0627\u062F\u0629", 1, "dashboard__main"], [3, "tabChange", "tabs", "activeTab"], ["aria-label", "\u0645\u0644\u062E\u0635 \u0627\u0644\u0645\u064A\u0632\u0627\u0646\u064A\u0629", 1, "dashboard__summary"], [3, "label", "value", "trend", "positive"], ["aria-label", "\u0645\u0644\u062E\u0635 \u0627\u0644\u0623\u0646\u0634\u0637\u0629 \u0648\u0627\u0644\u0645\u0634\u062A\u0631\u064A\u0627\u062A", 1, "dashboard__insights"], ["aria-label", "\u0627\u0644\u0645\u0639\u0627\u0645\u0644\u0627\u062A \u0627\u0644\u0623\u062E\u064A\u0631\u0629 \u0648\u0627\u0644\u0645\u0633\u062A\u0648\u062F\u0639\u0627\u062A", 1, "dashboard__data-tables"], ["kind", "processes"], ["kind", "stocks"], ["aria-label", "\u0627\u0644\u0639\u0642\u0648\u062F \u0648\u0628\u0646\u0648\u062F \u0627\u0644\u0645\u0648\u0627\u0632\u0646\u0629", 1, "dashboard__final-row"]], template: function DashboardPage_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "main", 0);
            i0.ɵɵelement(1, "app-dashboard-header");
            i0.ɵɵelementStart(2, "div", 1);
            i0.ɵɵelement(3, "app-sidebar-navigation");
            i0.ɵɵelementStart(4, "section", 2)(5, "app-dashboard-tabs", 3);
            i0.ɵɵlistener("tabChange", function DashboardPage_Template_app_dashboard_tabs_tabChange_5_listener($event) { return ctx.activeTab = $event; });
            i0.ɵɵelementEnd();
            i0.ɵɵconditionalCreate(6, DashboardPage_Conditional_6_Template, 1, 0, "app-purchase-requests")(7, DashboardPage_Conditional_7_Template, 13, 0);
            i0.ɵɵelementEnd()()();
        } if (rf & 2) {
            i0.ɵɵclassProp("dashboard--requests", ctx.activeTab === "\u0637\u0644\u0628 \u0645\u0634\u062A\u0631\u064A\u0627\u062A");
            i0.ɵɵadvance(5);
            i0.ɵɵproperty("tabs", ctx.tabs)("activeTab", ctx.activeTab);
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.activeTab === "\u0637\u0644\u0628 \u0645\u0634\u062A\u0631\u064A\u0627\u062A" ? 6 : 7);
        } }, dependencies: [AppHeaderComponent,
            DashboardTabsComponent,
            OperationsTableComponent,
            PurchaseStatusComponent,
            RecentActivitiesComponent,
            SidebarNavigationComponent,
            SummaryCardComponent,
            DashboardDataTableComponent,
            BudgetItemsComponent,
            ContractsTableComponent,
            PurchaseRequestsComponent], styles: ["[_nghost-%COMP%] {\n  display: block;\n  min-width: 100%;\n  min-height: 100dvh;\n}\n\n.dashboard[_ngcontent-%COMP%] {\n  --dashboard-bg: #f6f8f9;\n  --panel-border: rgb(14 37 60 / 10%);\n  --maroon: #97133f;\n\n  width: 100%;\n  min-width: 1024px;\n  min-height: 2621px;\n  overflow: hidden;\n  border-radius: 24px;\n  background: var(--dashboard-bg);\n  color: #0e253c;\n  font-family: \"Lusail\", \"Tahoma\", sans-serif;\n}\n\n.dashboard--requests[_ngcontent-%COMP%] {\n  min-height: 1960px;\n}\n\n.dashboard--requests[_ngcontent-%COMP%]   .dashboard__body[_ngcontent-%COMP%] {\n  min-height: 1810px;\n}\n\n.dashboard__body[_ngcontent-%COMP%] {\n  display: flex;\n  min-height: 2360px;\n  align-items: stretch;\n  gap: 16px;\n  padding-inline: 16px;\n}\n\n.dashboard__main[_ngcontent-%COMP%] {\n  display: flex;\n  min-width: 0;\n  flex: 1 1 1576px;\n  flex-direction: column;\n  gap: 16px;\n  padding-top: 0;\n}\n\n.dashboard__summary[_ngcontent-%COMP%] {\n  display: grid;\n  width: calc(100% - 32px);\n  height: 138px;\n  margin-inline: 16px;\n  grid-template-columns: repeat(5, minmax(0, 1fr));\n  gap: 16px;\n}\n\n.dashboard__insights[_ngcontent-%COMP%] {\n  display: grid;\n  width: calc(100% - 32px);\n  height: 504px;\n  margin-inline: 16px;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 16px;\n}\n\n.dashboard__data-tables[_ngcontent-%COMP%] {\n  display: grid;\n  width: calc(100% - 32px);\n  height: 548px;\n  margin-inline: 16px;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 16px;\n}\n\n.dashboard__final-row[_ngcontent-%COMP%] {\n  display: grid;\n  width: calc(100% - 32px);\n  height: 476px;\n  margin-inline: 16px;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 16px;\n}\n\n@media (max-width: 1600px) {\n  .dashboard__summary[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(5, minmax(0, 1fr));\n  }\n\n  app-summary-card[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n\n  .dashboard__insights[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n\n  .dashboard__data-tables[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n}"] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DashboardPage, [{
        type: Component,
        args: [{ selector: 'app-dashboard-page', imports: [
                    AppHeaderComponent,
                    DashboardTabsComponent,
                    OperationsTableComponent,
                    PurchaseStatusComponent,
                    RecentActivitiesComponent,
                    SidebarNavigationComponent,
                    SummaryCardComponent,
                    DashboardDataTableComponent,
                    BudgetItemsComponent,
                    ContractsTableComponent,
                    PurchaseRequestsComponent,
                ], template: "<main class=\"dashboard\" [class.dashboard--requests]=\"activeTab === '\u0637\u0644\u0628 \u0645\u0634\u062A\u0631\u064A\u0627\u062A'\" dir=\"rtl\">\n  <app-dashboard-header />\n\n  <div class=\"dashboard__body\">\n    <app-sidebar-navigation />\n\n    <section class=\"dashboard__main\" aria-label=\"\u0645\u062D\u062A\u0648\u0649 \u0644\u0648\u062D\u0629 \u0627\u0644\u0642\u064A\u0627\u062F\u0629\">\n      <app-dashboard-tabs [tabs]=\"tabs\" [activeTab]=\"activeTab\" (tabChange)=\"activeTab = $event\" />\n\n      @if (activeTab === '\u0637\u0644\u0628 \u0645\u0634\u062A\u0631\u064A\u0627\u062A') {\n        <app-purchase-requests />\n      } @else {\n      <section class=\"dashboard__summary\" aria-label=\"\u0645\u0644\u062E\u0635 \u0627\u0644\u0645\u064A\u0632\u0627\u0646\u064A\u0629\">\n        @for (summary of summaries; track summary.label) {\n          <app-summary-card\n            [label]=\"summary.label\"\n            [value]=\"summary.value\"\n            [trend]=\"summary.trend\"\n            [positive]=\"summary.positive\"\n          />\n        }\n      </section>\n\n      <app-operations-table />\n\n      <section class=\"dashboard__insights\" aria-label=\"\u0645\u0644\u062E\u0635 \u0627\u0644\u0623\u0646\u0634\u0637\u0629 \u0648\u0627\u0644\u0645\u0634\u062A\u0631\u064A\u0627\u062A\">\n        <app-recent-activities />\n        <app-purchase-status />\n      </section>\n\n      <section class=\"dashboard__data-tables\" aria-label=\"\u0627\u0644\u0645\u0639\u0627\u0645\u0644\u0627\u062A \u0627\u0644\u0623\u062E\u064A\u0631\u0629 \u0648\u0627\u0644\u0645\u0633\u062A\u0648\u062F\u0639\u0627\u062A\">\n        <app-dashboard-data-table kind=\"processes\" />\n        <app-dashboard-data-table kind=\"stocks\" />\n      </section>\n\n      <section class=\"dashboard__final-row\" aria-label=\"\u0627\u0644\u0639\u0642\u0648\u062F \u0648\u0628\u0646\u0648\u062F \u0627\u0644\u0645\u0648\u0627\u0632\u0646\u0629\">\n        <app-contracts-table />\n        <app-budget-items />\n      </section>\n      }\n    </section>\n  </div>\n</main>\n", styles: [":host {\n  display: block;\n  min-width: 100%;\n  min-height: 100dvh;\n}\n\n.dashboard {\n  --dashboard-bg: #f6f8f9;\n  --panel-border: rgb(14 37 60 / 10%);\n  --maroon: #97133f;\n\n  width: 100%;\n  min-width: 1024px;\n  min-height: 2621px;\n  overflow: hidden;\n  border-radius: 24px;\n  background: var(--dashboard-bg);\n  color: #0e253c;\n  font-family: \"Lusail\", \"Tahoma\", sans-serif;\n}\n\n.dashboard--requests {\n  min-height: 1960px;\n}\n\n.dashboard--requests .dashboard__body {\n  min-height: 1810px;\n}\n\n.dashboard__body {\n  display: flex;\n  min-height: 2360px;\n  align-items: stretch;\n  gap: 16px;\n  padding-inline: 16px;\n}\n\n.dashboard__main {\n  display: flex;\n  min-width: 0;\n  flex: 1 1 1576px;\n  flex-direction: column;\n  gap: 16px;\n  padding-top: 0;\n}\n\n.dashboard__summary {\n  display: grid;\n  width: calc(100% - 32px);\n  height: 138px;\n  margin-inline: 16px;\n  grid-template-columns: repeat(5, minmax(0, 1fr));\n  gap: 16px;\n}\n\n.dashboard__insights {\n  display: grid;\n  width: calc(100% - 32px);\n  height: 504px;\n  margin-inline: 16px;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 16px;\n}\n\n.dashboard__data-tables {\n  display: grid;\n  width: calc(100% - 32px);\n  height: 548px;\n  margin-inline: 16px;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 16px;\n}\n\n.dashboard__final-row {\n  display: grid;\n  width: calc(100% - 32px);\n  height: 476px;\n  margin-inline: 16px;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 16px;\n}\n\n@media (max-width: 1600px) {\n  .dashboard__summary {\n    grid-template-columns: repeat(5, minmax(0, 1fr));\n  }\n\n  app-summary-card {\n    width: 100%;\n  }\n\n  .dashboard__insights {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n\n  .dashboard__data-tables {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n}\n"] }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(DashboardPage, { className: "DashboardPage", filePath: "src/app/pages/dashboard/dashboard.page.ts", lineNumber: 32 }); })();
