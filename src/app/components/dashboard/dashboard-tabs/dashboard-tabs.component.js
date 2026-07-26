import { Component, input, output } from '@angular/core';
import * as i0 from "@angular/core";
function DashboardTabsComponent_For_2_Conditional_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵdomElementStart(0, "span", 4);
    i0.ɵɵtext(1, "\u00D7");
    i0.ɵɵdomElementEnd();
} }
function DashboardTabsComponent_For_2_Template(rf, ctx) { if (rf & 1) {
    const _r1 = i0.ɵɵgetCurrentView();
    i0.ɵɵdomElementStart(0, "button", 3);
    i0.ɵɵdomListener("click", function DashboardTabsComponent_For_2_Template_button_click_0_listener() { const tab_r2 = i0.ɵɵrestoreView(_r1).$implicit; const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.tabChange.emit(tab_r2)); });
    i0.ɵɵconditionalCreate(1, DashboardTabsComponent_For_2_Conditional_1_Template, 2, 0, "span", 4);
    i0.ɵɵtext(2);
    i0.ɵɵdomElementEnd();
} if (rf & 2) {
    const tab_r2 = ctx.$implicit;
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵclassProp("dashboard-tabs__item--active", tab_r2 === ctx_r2.activeTab());
    i0.ɵɵattribute("aria-current", tab_r2 === ctx_r2.activeTab() ? "page" : null);
    i0.ɵɵadvance();
    i0.ɵɵconditional(tab_r2 === ctx_r2.activeTab() ? 1 : -1);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", tab_r2, " ");
} }
export class DashboardTabsComponent {
    tabs = input.required(/* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "tabs" }] : /* istanbul ignore next */ []));
    activeTab = input.required(/* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "activeTab" }] : /* istanbul ignore next */ []));
    tabChange = output();
    static ɵfac = function DashboardTabsComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || DashboardTabsComponent)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: DashboardTabsComponent, selectors: [["app-dashboard-tabs"]], inputs: { tabs: [1, "tabs"], activeTab: [1, "activeTab"] }, outputs: { tabChange: "tabChange" }, decls: 5, vars: 0, consts: [["aria-label", "\u0623\u0642\u0633\u0627\u0645 \u0627\u0644\u0646\u0638\u0627\u0645", "dir", "rtl", 1, "dashboard-tabs"], ["type", "button", 3, "dashboard-tabs__item--active"], ["type", "button", "aria-label", "\u0625\u0636\u0627\u0641\u0629 \u062A\u0628\u0648\u064A\u0628", 1, "dashboard-tabs__add"], ["type", "button", 3, "click"], ["aria-hidden", "true"]], template: function DashboardTabsComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵdomElementStart(0, "nav", 0);
            i0.ɵɵrepeaterCreate(1, DashboardTabsComponent_For_2_Template, 3, 5, "button", 1, i0.ɵɵrepeaterTrackByIdentity);
            i0.ɵɵdomElementStart(3, "button", 2);
            i0.ɵɵtext(4, "+");
            i0.ɵɵdomElementEnd()();
        } if (rf & 2) {
            i0.ɵɵadvance();
            i0.ɵɵrepeater(ctx.tabs());
        } }, styles: ["[_nghost-%COMP%] {\n  display: block;\n}\n\n.dashboard-tabs[_ngcontent-%COMP%] {\n  display: flex;\n  width: 100%;\n  height: 40px;\n  align-items: flex-end;\n  overflow: hidden;\n  font-family: \"Lusail\", \"Tahoma\", sans-serif;\n}\n\n.dashboard-tabs[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  display: inline-flex;\n  height: 36px;\n  align-items: center;\n  justify-content: center;\n  gap: 6px;\n  padding: 8px 16px;\n  border: 1px solid rgb(14 37 60 / 10%);\n  border-radius: 12px 12px 0 0;\n  background: #f6f8f9;\n  color: #0e253c;\n  font-size: 12px;\n  font-weight: 500;\n  line-height: 18px;\n  white-space: nowrap;\n}\n\n.dashboard-tabs[_ngcontent-%COMP%]   .dashboard-tabs__item--active[_ngcontent-%COMP%] {\n  height: 40px;\n  padding-block: 10px;\n  border-bottom: 0;\n  background: #fff;\n  color: #97133f;\n}\n\n.dashboard-tabs__item--active[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #8a919c;\n  font-size: 16px;\n  line-height: 1;\n}\n\n.dashboard-tabs[_ngcontent-%COMP%]   .dashboard-tabs__add[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 36px;\n  padding: 0;\n  border: 0;\n  background: transparent;\n  color: #0e253c;\n  font-size: 22px;\n  font-weight: 400;\n}"] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DashboardTabsComponent, [{
        type: Component,
        args: [{ selector: 'app-dashboard-tabs', template: "<nav class=\"dashboard-tabs\" aria-label=\"\u0623\u0642\u0633\u0627\u0645 \u0627\u0644\u0646\u0638\u0627\u0645\" dir=\"rtl\">\n  @for (tab of tabs(); track tab) {\n    <button\n      type=\"button\"\n      [class.dashboard-tabs__item--active]=\"tab === activeTab()\"\n      [attr.aria-current]=\"tab === activeTab() ? 'page' : null\"\n      (click)=\"tabChange.emit(tab)\"\n    >\n      @if (tab === activeTab()) {\n        <span aria-hidden=\"true\">\u00D7</span>\n      }\n      {{ tab }}\n    </button>\n  }\n  <button type=\"button\" class=\"dashboard-tabs__add\" aria-label=\"\u0625\u0636\u0627\u0641\u0629 \u062A\u0628\u0648\u064A\u0628\">+</button>\n</nav>\n", styles: [":host {\n  display: block;\n}\n\n.dashboard-tabs {\n  display: flex;\n  width: 100%;\n  height: 40px;\n  align-items: flex-end;\n  overflow: hidden;\n  font-family: \"Lusail\", \"Tahoma\", sans-serif;\n}\n\n.dashboard-tabs button {\n  display: inline-flex;\n  height: 36px;\n  align-items: center;\n  justify-content: center;\n  gap: 6px;\n  padding: 8px 16px;\n  border: 1px solid rgb(14 37 60 / 10%);\n  border-radius: 12px 12px 0 0;\n  background: #f6f8f9;\n  color: #0e253c;\n  font-size: 12px;\n  font-weight: 500;\n  line-height: 18px;\n  white-space: nowrap;\n}\n\n.dashboard-tabs .dashboard-tabs__item--active {\n  height: 40px;\n  padding-block: 10px;\n  border-bottom: 0;\n  background: #fff;\n  color: #97133f;\n}\n\n.dashboard-tabs__item--active span {\n  color: #8a919c;\n  font-size: 16px;\n  line-height: 1;\n}\n\n.dashboard-tabs .dashboard-tabs__add {\n  width: 40px;\n  height: 36px;\n  padding: 0;\n  border: 0;\n  background: transparent;\n  color: #0e253c;\n  font-size: 22px;\n  font-weight: 400;\n}\n"] }]
    }], null, { tabs: [{ type: i0.Input, args: [{ isSignal: true, alias: "tabs", required: true }] }], activeTab: [{ type: i0.Input, args: [{ isSignal: true, alias: "activeTab", required: true }] }], tabChange: [{ type: i0.Output, args: ["tabChange"] }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(DashboardTabsComponent, { className: "DashboardTabsComponent", filePath: "src/app/components/dashboard/dashboard-tabs/dashboard-tabs.component.ts", lineNumber: 8 }); })();
