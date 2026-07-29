import { Component, ViewChild } from '@angular/core';
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
const _c0 = ["summaryScroller"];
const _forTrack0 = ($index, $item) => $item.label;
function DashboardPage_Conditional_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "app-purchase-requests");
} }
function DashboardPage_Conditional_7_For_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "app-summary-card", 8);
} if (rf & 2) {
    const summary_r3 = ctx.$implicit;
    i0.ɵɵproperty("label", summary_r3.label)("value", summary_r3.value)("trend", summary_r3.trend)("positive", summary_r3.positive)("icon", summary_r3.icon);
} }
function DashboardPage_Conditional_7_Template(rf, ctx) { if (rf & 1) {
    const _r1 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 5)(1, "button", 6);
    i0.ɵɵlistener("click", function DashboardPage_Conditional_7_Template_button_click_1_listener() { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.scrollSummaries(1)); });
    i0.ɵɵtext(2, "\u2039");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "section", 7, 0);
    i0.ɵɵrepeaterCreate(5, DashboardPage_Conditional_7_For_6_Template, 1, 5, "app-summary-card", 8, _forTrack0);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "button", 9);
    i0.ɵɵlistener("click", function DashboardPage_Conditional_7_Template_button_click_7_listener() { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.scrollSummaries(-1)); });
    i0.ɵɵtext(8, "\u203A");
    i0.ɵɵelementEnd()();
    i0.ɵɵelement(9, "app-operations-table");
    i0.ɵɵelementStart(10, "section", 10);
    i0.ɵɵelement(11, "app-recent-activities")(12, "app-purchase-status");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(13, "section", 11);
    i0.ɵɵelement(14, "app-dashboard-data-table", 12)(15, "app-dashboard-data-table", 13);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(16, "section", 14);
    i0.ɵɵelement(17, "app-contracts-table")(18, "app-budget-items");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(5);
    i0.ɵɵrepeater(ctx_r1.summaries);
} }
export class DashboardPage {
    summaryScroller;
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
        { label: 'رصيد الموازنة المعتمد', value: '50 مليون ريال', trend: '28%', positive: false, icon: 'document' },
        { label: 'رصيد الحر', value: '10 مليون ريال', trend: '28%', positive: false, icon: 'document' },
        { label: 'المبالغ المدفوع', value: '15 مليون ريال', trend: '28%', positive: true, icon: 'document' },
        { label: 'الارتباطات', value: '20 مليون ريال', trend: '15%', positive: false, icon: 'wallet' },
        { label: 'الالتزامات', value: '5 مليون ريال', trend: '28%', positive: true, icon: 'approved' },
    ];
    scrollSummaries(direction) {
        this.summaryScroller?.nativeElement.scrollBy({ left: direction * 312, behavior: 'smooth' });
    }
    static ɵfac = function DashboardPage_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || DashboardPage)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: DashboardPage, selectors: [["app-dashboard-page"]], viewQuery: function DashboardPage_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(_c0, 5);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.summaryScroller = _t.first);
        } }, decls: 8, vars: 5, consts: [["summaryScroller", ""], ["dir", "rtl", 1, "dashboard"], [1, "dashboard__body"], ["aria-label", "\u0645\u062D\u062A\u0648\u0649 \u0644\u0648\u062D\u0629 \u0627\u0644\u0642\u064A\u0627\u062F\u0629", 1, "dashboard__main"], [3, "tabChange", "tabs", "activeTab"], [1, "dashboard__summary-carousel"], ["type", "button", "aria-label", "\u0627\u0644\u0628\u0637\u0627\u0642\u0627\u062A \u0627\u0644\u062A\u0627\u0644\u064A\u0629", 1, "dashboard__summary-arrow", "dashboard__summary-arrow--right", 3, "click"], ["aria-label", "\u0645\u0644\u062E\u0635 \u0627\u0644\u0645\u064A\u0632\u0627\u0646\u064A\u0629", 1, "dashboard__summary"], [3, "label", "value", "trend", "positive", "icon"], ["type", "button", "aria-label", "\u0627\u0644\u0628\u0637\u0627\u0642\u0627\u062A \u0627\u0644\u0633\u0627\u0628\u0642\u0629", 1, "dashboard__summary-arrow", "dashboard__summary-arrow--left", 3, "click"], ["aria-label", "\u0645\u0644\u062E\u0635 \u0627\u0644\u0623\u0646\u0634\u0637\u0629 \u0648\u0627\u0644\u0645\u0634\u062A\u0631\u064A\u0627\u062A", 1, "dashboard__insights"], ["aria-label", "\u0627\u0644\u0645\u0639\u0627\u0645\u0644\u0627\u062A \u0627\u0644\u0623\u062E\u064A\u0631\u0629 \u0648\u0627\u0644\u0645\u0633\u062A\u0648\u062F\u0639\u0627\u062A", 1, "dashboard__data-tables"], ["kind", "processes"], ["kind", "stocks"], ["aria-label", "\u0627\u0644\u0639\u0642\u0648\u062F \u0648\u0628\u0646\u0648\u062F \u0627\u0644\u0645\u0648\u0627\u0632\u0646\u0629", 1, "dashboard__final-row"]], template: function DashboardPage_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "main", 1);
            i0.ɵɵelement(1, "app-dashboard-header");
            i0.ɵɵelementStart(2, "div", 2);
            i0.ɵɵelement(3, "app-sidebar-navigation");
            i0.ɵɵelementStart(4, "section", 3)(5, "app-dashboard-tabs", 4);
            i0.ɵɵlistener("tabChange", function DashboardPage_Template_app_dashboard_tabs_tabChange_5_listener($event) { return ctx.activeTab = $event; });
            i0.ɵɵelementEnd();
            i0.ɵɵconditionalCreate(6, DashboardPage_Conditional_6_Template, 1, 0, "app-purchase-requests")(7, DashboardPage_Conditional_7_Template, 19, 0);
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
            PurchaseRequestsComponent], styles: ["[_nghost-%COMP%] {\n  display: block;\n  min-width: 100%;\n  min-height: 100dvh;\n}\n\n.dashboard[_ngcontent-%COMP%] {\n  --dashboard-bg: #f6f8f9;\n  --panel-border: rgb(14 37 60 / 10%);\n  --maroon: #97133f;\n\n  width: 100%;\n  min-width: 1024px;\n  min-height: 2621px;\n  overflow: hidden;\n  border-radius: 24px;\n  background: var(--dashboard-bg);\n  color: #0e253c;\n  font-family: \"Lusail\", \"Tahoma\", sans-serif;\n}\n\n.dashboard--requests[_ngcontent-%COMP%] {\n  min-height: 1960px;\n}\n\n.dashboard--requests[_ngcontent-%COMP%]   .dashboard__body[_ngcontent-%COMP%] {\n  min-height: 1810px;\n}\n\n.dashboard__body[_ngcontent-%COMP%] {\n  display: flex;\n  min-height: 2360px;\n  align-items: stretch;\n  gap: 16px;\n  padding-inline: 16px;\n}\n\n.dashboard__main[_ngcontent-%COMP%] {\n  display: flex;\n  min-width: 0;\n  flex: 1 1 1576px;\n  flex-direction: column;\n  gap: 16px;\n  padding-top: 0;\n}\n\n.dashboard__summary-carousel[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  height: 138px;\n}\n\n.dashboard__summary[_ngcontent-%COMP%] {\n  display: grid;\n  width: calc(100% - 32px);\n  height: 138px;\n  margin-inline: 16px;\n  grid-template-columns: repeat(5, minmax(0, 1fr));\n  gap: 16px;\n  overflow-x: auto;\n  scroll-behavior: smooth;\n  scrollbar-width: none;\n  scroll-snap-type: x proximity;\n}\n\n.dashboard__summary[_ngcontent-%COMP%]::-webkit-scrollbar {\n  display: none;\n}\n\n.dashboard__summary[_ngcontent-%COMP%]   app-summary-card[_ngcontent-%COMP%] {\n  scroll-snap-align: start;\n}\n\n.dashboard__summary-arrow[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 3;\n  top: 51px;\n  display: grid;\n  width: 32px;\n  height: 32px;\n  padding: 0;\n  place-items: center;\n  border: 1px solid #e9eaeb;\n  border-radius: 50%;\n  background: #fff;\n  box-shadow: 0 2px 5px rgb(0 0 0 / 10%);\n  color: #526173;\n  font-size: 25px;\n  line-height: 1;\n}\n\n.dashboard__summary-arrow--right[_ngcontent-%COMP%] {\n  right: 0;\n}\n\n.dashboard__summary-arrow--left[_ngcontent-%COMP%] {\n  left: 0;\n}\n\n.dashboard__insights[_ngcontent-%COMP%] {\n  display: grid;\n  width: calc(100% - 32px);\n  height: 504px;\n  margin-inline: 16px;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 16px;\n}\n\n.dashboard__data-tables[_ngcontent-%COMP%] {\n  display: grid;\n  width: calc(100% - 32px);\n  height: 548px;\n  margin-inline: 16px;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 16px;\n}\n\n.dashboard__final-row[_ngcontent-%COMP%] {\n  display: grid;\n  width: calc(100% - 32px);\n  height: 476px;\n  margin-inline: 16px;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 16px;\n}\n\n@media (max-width: 1600px) {\n  .dashboard__summary[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(5, minmax(0, 1fr));\n  }\n\n  app-summary-card[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n\n  .dashboard__insights[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n\n  .dashboard__data-tables[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n}"] });
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
                ], template: "<main class=\"dashboard\" [class.dashboard--requests]=\"activeTab === '\u0637\u0644\u0628 \u0645\u0634\u062A\u0631\u064A\u0627\u062A'\" dir=\"rtl\">\n  <app-dashboard-header />\n\n  <div class=\"dashboard__body\">\n    <app-sidebar-navigation />\n\n    <section class=\"dashboard__main\" aria-label=\"\u0645\u062D\u062A\u0648\u0649 \u0644\u0648\u062D\u0629 \u0627\u0644\u0642\u064A\u0627\u062F\u0629\">\n      <app-dashboard-tabs [tabs]=\"tabs\" [activeTab]=\"activeTab\" (tabChange)=\"activeTab = $event\" />\n\n      @if (activeTab === '\u0637\u0644\u0628 \u0645\u0634\u062A\u0631\u064A\u0627\u062A') {\n        <app-purchase-requests />\n      } @else {\n      <div class=\"dashboard__summary-carousel\">\n        <button type=\"button\" class=\"dashboard__summary-arrow dashboard__summary-arrow--right\" aria-label=\"\u0627\u0644\u0628\u0637\u0627\u0642\u0627\u062A \u0627\u0644\u062A\u0627\u0644\u064A\u0629\" (click)=\"scrollSummaries(1)\">\u2039</button>\n        <section #summaryScroller class=\"dashboard__summary\" aria-label=\"\u0645\u0644\u062E\u0635 \u0627\u0644\u0645\u064A\u0632\u0627\u0646\u064A\u0629\">\n          @for (summary of summaries; track summary.label) {\n            <app-summary-card\n              [label]=\"summary.label\"\n              [value]=\"summary.value\"\n              [trend]=\"summary.trend\"\n              [positive]=\"summary.positive\"\n              [icon]=\"summary.icon\"\n            />\n          }\n        </section>\n        <button type=\"button\" class=\"dashboard__summary-arrow dashboard__summary-arrow--left\" aria-label=\"\u0627\u0644\u0628\u0637\u0627\u0642\u0627\u062A \u0627\u0644\u0633\u0627\u0628\u0642\u0629\" (click)=\"scrollSummaries(-1)\">\u203A</button>\n      </div>\n\n      <app-operations-table />\n\n      <section class=\"dashboard__insights\" aria-label=\"\u0645\u0644\u062E\u0635 \u0627\u0644\u0623\u0646\u0634\u0637\u0629 \u0648\u0627\u0644\u0645\u0634\u062A\u0631\u064A\u0627\u062A\">\n        <app-recent-activities />\n        <app-purchase-status />\n      </section>\n\n      <section class=\"dashboard__data-tables\" aria-label=\"\u0627\u0644\u0645\u0639\u0627\u0645\u0644\u0627\u062A \u0627\u0644\u0623\u062E\u064A\u0631\u0629 \u0648\u0627\u0644\u0645\u0633\u062A\u0648\u062F\u0639\u0627\u062A\">\n        <app-dashboard-data-table kind=\"processes\" />\n        <app-dashboard-data-table kind=\"stocks\" />\n      </section>\n\n      <section class=\"dashboard__final-row\" aria-label=\"\u0627\u0644\u0639\u0642\u0648\u062F \u0648\u0628\u0646\u0648\u062F \u0627\u0644\u0645\u0648\u0627\u0632\u0646\u0629\">\n        <app-contracts-table />\n        <app-budget-items />\n      </section>\n      }\n    </section>\n  </div>\n</main>\n", styles: [":host {\n  display: block;\n  min-width: 100%;\n  min-height: 100dvh;\n}\n\n.dashboard {\n  --dashboard-bg: #f6f8f9;\n  --panel-border: rgb(14 37 60 / 10%);\n  --maroon: #97133f;\n\n  width: 100%;\n  min-width: 1024px;\n  min-height: 2621px;\n  overflow: hidden;\n  border-radius: 24px;\n  background: var(--dashboard-bg);\n  color: #0e253c;\n  font-family: \"Lusail\", \"Tahoma\", sans-serif;\n}\n\n.dashboard--requests {\n  min-height: 1960px;\n}\n\n.dashboard--requests .dashboard__body {\n  min-height: 1810px;\n}\n\n.dashboard__body {\n  display: flex;\n  min-height: 2360px;\n  align-items: stretch;\n  gap: 16px;\n  padding-inline: 16px;\n}\n\n.dashboard__main {\n  display: flex;\n  min-width: 0;\n  flex: 1 1 1576px;\n  flex-direction: column;\n  gap: 16px;\n  padding-top: 0;\n}\n\n.dashboard__summary-carousel {\n  position: relative;\n  width: 100%;\n  height: 138px;\n}\n\n.dashboard__summary {\n  display: grid;\n  width: calc(100% - 32px);\n  height: 138px;\n  margin-inline: 16px;\n  grid-template-columns: repeat(5, minmax(0, 1fr));\n  gap: 16px;\n  overflow-x: auto;\n  scroll-behavior: smooth;\n  scrollbar-width: none;\n  scroll-snap-type: x proximity;\n}\n\n.dashboard__summary::-webkit-scrollbar {\n  display: none;\n}\n\n.dashboard__summary app-summary-card {\n  scroll-snap-align: start;\n}\n\n.dashboard__summary-arrow {\n  position: absolute;\n  z-index: 3;\n  top: 51px;\n  display: grid;\n  width: 32px;\n  height: 32px;\n  padding: 0;\n  place-items: center;\n  border: 1px solid #e9eaeb;\n  border-radius: 50%;\n  background: #fff;\n  box-shadow: 0 2px 5px rgb(0 0 0 / 10%);\n  color: #526173;\n  font-size: 25px;\n  line-height: 1;\n}\n\n.dashboard__summary-arrow--right {\n  right: 0;\n}\n\n.dashboard__summary-arrow--left {\n  left: 0;\n}\n\n.dashboard__insights {\n  display: grid;\n  width: calc(100% - 32px);\n  height: 504px;\n  margin-inline: 16px;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 16px;\n}\n\n.dashboard__data-tables {\n  display: grid;\n  width: calc(100% - 32px);\n  height: 548px;\n  margin-inline: 16px;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 16px;\n}\n\n.dashboard__final-row {\n  display: grid;\n  width: calc(100% - 32px);\n  height: 476px;\n  margin-inline: 16px;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 16px;\n}\n\n@media (max-width: 1600px) {\n  .dashboard__summary {\n    grid-template-columns: repeat(5, minmax(0, 1fr));\n  }\n\n  app-summary-card {\n    width: 100%;\n  }\n\n  .dashboard__insights {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n\n  .dashboard__data-tables {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n}\n"] }]
    }], null, { summaryScroller: [{
            type: ViewChild,
            args: ['summaryScroller']
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(DashboardPage, { className: "DashboardPage", filePath: "src/app/pages/dashboard/dashboard.page.ts", lineNumber: 32 }); })();
