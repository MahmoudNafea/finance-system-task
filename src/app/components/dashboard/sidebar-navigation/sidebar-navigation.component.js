import { Component } from '@angular/core';
import * as i0 from "@angular/core";
const _forTrack0 = ($index, $item) => $item.label;
function SidebarNavigationComponent_For_23_Conditional_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵdomElementStart(0, "small", 12);
    i0.ɵɵtext(1);
    i0.ɵɵdomElementEnd();
} if (rf & 2) {
    const item_r1 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(item_r1.badge);
} }
function SidebarNavigationComponent_For_23_Conditional_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵdomElementStart(0, "span", 13);
    i0.ɵɵtext(1, "\u2304");
    i0.ɵɵdomElementEnd();
} }
function SidebarNavigationComponent_For_23_Conditional_8_For_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵdomElementStart(0, "a", 15)(1, "span", 11);
    i0.ɵɵtext(2);
    i0.ɵɵdomElementEnd();
    i0.ɵɵdomElementStart(3, "span");
    i0.ɵɵtext(4);
    i0.ɵɵdomElementEnd()();
} if (rf & 2) {
    const child_r2 = ctx.$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(child_r2.icon);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(child_r2.label);
} }
function SidebarNavigationComponent_For_23_Conditional_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵdomElementStart(0, "div", 14);
    i0.ɵɵrepeaterCreate(1, SidebarNavigationComponent_For_23_Conditional_8_For_2_Template, 5, 2, "a", 15, _forTrack0);
    i0.ɵɵdomElementEnd();
} if (rf & 2) {
    const item_r1 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance();
    i0.ɵɵrepeater(item_r1.children);
} }
function SidebarNavigationComponent_For_23_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵdomElementStart(0, "div", 9)(1, "a", 10)(2, "span", 11);
    i0.ɵɵtext(3);
    i0.ɵɵdomElementEnd();
    i0.ɵɵdomElementStart(4, "span");
    i0.ɵɵtext(5);
    i0.ɵɵdomElementEnd();
    i0.ɵɵconditionalCreate(6, SidebarNavigationComponent_For_23_Conditional_6_Template, 2, 1, "small", 12);
    i0.ɵɵconditionalCreate(7, SidebarNavigationComponent_For_23_Conditional_7_Template, 2, 0, "span", 13);
    i0.ɵɵdomElementEnd();
    i0.ɵɵconditionalCreate(8, SidebarNavigationComponent_For_23_Conditional_8_Template, 3, 0, "div", 14);
    i0.ɵɵdomElementEnd();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    const ɵ$index_38_r3 = ctx.$index;
    i0.ɵɵadvance();
    i0.ɵɵclassProp("sidebar__item--active", ɵ$index_38_r3 === 0);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(item_r1.icon);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(item_r1.label);
    i0.ɵɵadvance();
    i0.ɵɵconditional(item_r1.badge ? 6 : -1);
    i0.ɵɵadvance();
    i0.ɵɵconditional(item_r1.children ? 7 : -1);
    i0.ɵɵadvance();
    i0.ɵɵconditional(item_r1.children ? 8 : -1);
} }
export class SidebarNavigationComponent {
    items = [
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
    static ɵfac = function SidebarNavigationComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || SidebarNavigationComponent)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: SidebarNavigationComponent, selectors: [["app-sidebar-navigation"]], decls: 24, vars: 0, consts: [["dir", "rtl", 1, "sidebar"], [1, "sidebar__identity"], ["aria-label", "3 \u0625\u0634\u0639\u0627\u0631\u0627\u062A", 1, "sidebar__indicator"], [1, "sidebar__search-section"], ["for", "sidebar-search"], [1, "sidebar__search"], ["id", "sidebar-search", "type", "search", "placeholder", "\u0628\u062D\u062B"], ["aria-hidden", "true"], ["aria-label", "\u0627\u0644\u062A\u0646\u0642\u0644 \u0627\u0644\u0631\u0626\u064A\u0633\u064A", 1, "sidebar__nav"], [1, "sidebar__group"], ["href", "#", 1, "sidebar__item"], ["aria-hidden", "true", 1, "sidebar__item-icon"], [1, "sidebar__badge"], ["aria-hidden", "true", 1, "sidebar__expand"], [1, "sidebar__children"], ["href", "#", 1, "sidebar__item", "sidebar__item--child"]], template: function SidebarNavigationComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵdomElementStart(0, "aside", 0)(1, "section", 1)(2, "strong");
            i0.ɵɵtext(3, "\u0645\u062D\u0645\u062F \u0639\u0628\u062F \u0627\u0644\u0644\u0647");
            i0.ɵɵdomElementEnd();
            i0.ɵɵdomElementStart(4, "span");
            i0.ɵɵtext(5, "\u0627\u062F\u0627\u0631\u0629 \u062A\u0637\u0648\u064A\u0631 \u0627\u0644\u0623\u0646\u0638\u0645\u0629");
            i0.ɵɵdomElementEnd();
            i0.ɵɵdomElementStart(6, "div", 2)(7, "span");
            i0.ɵɵtext(8, "\u2303");
            i0.ɵɵdomElementEnd();
            i0.ɵɵdomElementStart(9, "span");
            i0.ɵɵtext(10, "\u2304");
            i0.ɵɵdomElementEnd();
            i0.ɵɵdomElementStart(11, "small");
            i0.ɵɵtext(12, "3");
            i0.ɵɵdomElementEnd()()();
            i0.ɵɵdomElementStart(13, "section", 3)(14, "label", 4);
            i0.ɵɵtext(15, "\u0627\u0644\u0628\u062D\u062B");
            i0.ɵɵdomElementEnd();
            i0.ɵɵdomElementStart(16, "div", 5);
            i0.ɵɵdomElement(17, "input", 6)(18, "span", 7);
            i0.ɵɵdomElementStart(19, "kbd");
            i0.ɵɵtext(20, "\u2318K");
            i0.ɵɵdomElementEnd()()();
            i0.ɵɵdomElementStart(21, "nav", 8);
            i0.ɵɵrepeaterCreate(22, SidebarNavigationComponent_For_23_Template, 9, 7, "div", 9, _forTrack0);
            i0.ɵɵdomElementEnd()();
        } if (rf & 2) {
            i0.ɵɵadvance(22);
            i0.ɵɵrepeater(ctx.items);
        } }, styles: ["[_nghost-%COMP%] {\n  display: block;\n  width: 296px;\n  flex: 0 0 296px;\n}\n\n.sidebar[_ngcontent-%COMP%] {\n  width: 296px;\n  min-height: 2360px;\n  padding: 16px 16px 32px;\n  border-right: 1px solid #e9eaeb;\n  border-radius: 8px;\n  background: #fff;\n  color: #1f2937;\n  font-family: \"Lusail\", \"Tahoma\", sans-serif;\n}\n\n.sidebar__identity[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  min-height: 80px;\n  flex-direction: column;\n  justify-content: center;\n  padding: 0 16px 16px;\n  border-bottom: 1px solid #e9eaeb;\n}\n\n.sidebar__identity[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n\n.sidebar__identity[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  margin-top: 4px;\n  color: #7b8492;\n  font-size: 11px;\n}\n\n.sidebar__indicator[_ngcontent-%COMP%] {\n  position: absolute;\n  inset-inline-end: 0;\n  bottom: 13px;\n  display: grid;\n  grid-template-columns: 12px 24px;\n  grid-template-rows: 10px 10px;\n  color: #97133f;\n  font-size: 12px;\n}\n\n.sidebar__indicator[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  grid-row: 1 / 3;\n  display: grid;\n  place-items: center;\n  border-radius: 50%;\n  background: #f9f5f6;\n}\n\n.sidebar__search-section[_ngcontent-%COMP%] {\n  padding: 22px 16px 16px;\n}\n\n.sidebar__search-section[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 10px;\n  font-size: 13px;\n  font-weight: 600;\n}\n\n.sidebar__search[_ngcontent-%COMP%] {\n  position: relative;\n  height: 40px;\n}\n\n.sidebar__search[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 40px;\n  padding: 8px 38px 8px 45px;\n  border: 1px solid #d8dce1;\n  border-radius: 8px;\n  outline: 0;\n  font-size: 12px;\n}\n\n.sidebar__search[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 11px;\n  right: 12px;\n  width: 14px;\n  height: 14px;\n  border: 1.5px solid #7b8492;\n  border-radius: 50%;\n}\n\n.sidebar__search[_ngcontent-%COMP%]   kbd[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 10px;\n  left: 10px;\n  padding: 2px 5px;\n  border: 1px solid #e3e5e8;\n  border-radius: 4px;\n  background: #fff;\n  color: #98a0ab;\n  font-size: 10px;\n}\n\n.sidebar__nav[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n\n.sidebar__group[_ngcontent-%COMP%]:nth-last-child(3) {\n  margin-top: 12px;\n  padding-top: 16px;\n  border-top: 1px solid #e9eaeb;\n}\n\n.sidebar__item[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  min-height: 44px;\n  align-items: center;\n  gap: 10px;\n  padding: 10px 12px;\n  border-radius: 6px;\n  color: inherit;\n  font-size: 13px;\n  font-weight: 500;\n  text-decoration: none;\n}\n\n.sidebar__item--active[_ngcontent-%COMP%] {\n  background: #fcf9fa;\n  color: #97133f;\n  font-weight: 600;\n}\n\n.sidebar__item-icon[_ngcontent-%COMP%] {\n  display: grid;\n  width: 20px;\n  height: 20px;\n  flex: 0 0 20px;\n  place-items: center;\n  color: #7c8794;\n  font-size: 16px;\n}\n\n.sidebar__item--active[_ngcontent-%COMP%]   .sidebar__item-icon[_ngcontent-%COMP%] {\n  color: #97133f;\n}\n\n.sidebar__expand[_ngcontent-%COMP%] {\n  margin-inline-start: auto;\n  color: #9ca3af;\n}\n\n.sidebar__badge[_ngcontent-%COMP%] {\n  margin-inline-start: auto;\n  padding: 3px 7px;\n  border: 1px solid #e9eaeb;\n  border-radius: 999px;\n  color: #7c8794;\n  font-size: 10px;\n}\n\n.sidebar__children[_ngcontent-%COMP%] {\n  position: relative;\n  padding-inline-start: 12px;\n}\n\n.sidebar__children[_ngcontent-%COMP%]::before {\n  position: absolute;\n  top: 0;\n  bottom: 8px;\n  right: 27px;\n  width: 1px;\n  background: #e9eaeb;\n  content: \"\";\n}\n\n.sidebar__item--child[_ngcontent-%COMP%] {\n  min-height: 40px;\n  padding-right: 36px;\n  font-size: 12px;\n  font-weight: 400;\n}"] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SidebarNavigationComponent, [{
        type: Component,
        args: [{ selector: 'app-sidebar-navigation', template: "<aside class=\"sidebar\" dir=\"rtl\">\n  <section class=\"sidebar__identity\">\n    <strong>\u0645\u062D\u0645\u062F \u0639\u0628\u062F \u0627\u0644\u0644\u0647</strong>\n    <span>\u0627\u062F\u0627\u0631\u0629 \u062A\u0637\u0648\u064A\u0631 \u0627\u0644\u0623\u0646\u0638\u0645\u0629</span>\n    <div class=\"sidebar__indicator\" aria-label=\"3 \u0625\u0634\u0639\u0627\u0631\u0627\u062A\">\n      <span>\u2303</span><span>\u2304</span><small>3</small>\n    </div>\n  </section>\n\n  <section class=\"sidebar__search-section\">\n    <label for=\"sidebar-search\">\u0627\u0644\u0628\u062D\u062B</label>\n    <div class=\"sidebar__search\">\n      <input id=\"sidebar-search\" type=\"search\" placeholder=\"\u0628\u062D\u062B\" />\n      <span aria-hidden=\"true\"></span>\n      <kbd>\u2318K</kbd>\n    </div>\n  </section>\n\n  <nav class=\"sidebar__nav\" aria-label=\"\u0627\u0644\u062A\u0646\u0642\u0644 \u0627\u0644\u0631\u0626\u064A\u0633\u064A\">\n    @for (item of items; track item.label; let first = $first) {\n      <div class=\"sidebar__group\">\n        <a href=\"#\" class=\"sidebar__item\" [class.sidebar__item--active]=\"first\">\n          <span class=\"sidebar__item-icon\" aria-hidden=\"true\">{{ item.icon }}</span>\n          <span>{{ item.label }}</span>\n          @if (item.badge) {\n            <small class=\"sidebar__badge\">{{ item.badge }}</small>\n          }\n          @if (item.children) {\n            <span class=\"sidebar__expand\" aria-hidden=\"true\">\u2304</span>\n          }\n        </a>\n\n        @if (item.children) {\n          <div class=\"sidebar__children\">\n            @for (child of item.children; track child.label) {\n              <a href=\"#\" class=\"sidebar__item sidebar__item--child\">\n                <span class=\"sidebar__item-icon\" aria-hidden=\"true\">{{ child.icon }}</span>\n                <span>{{ child.label }}</span>\n              </a>\n            }\n          </div>\n        }\n      </div>\n    }\n  </nav>\n</aside>\n", styles: [":host {\n  display: block;\n  width: 296px;\n  flex: 0 0 296px;\n}\n\n.sidebar {\n  width: 296px;\n  min-height: 2360px;\n  padding: 16px 16px 32px;\n  border-right: 1px solid #e9eaeb;\n  border-radius: 8px;\n  background: #fff;\n  color: #1f2937;\n  font-family: \"Lusail\", \"Tahoma\", sans-serif;\n}\n\n.sidebar__identity {\n  position: relative;\n  display: flex;\n  min-height: 80px;\n  flex-direction: column;\n  justify-content: center;\n  padding: 0 16px 16px;\n  border-bottom: 1px solid #e9eaeb;\n}\n\n.sidebar__identity strong {\n  font-size: 14px;\n}\n\n.sidebar__identity > span {\n  margin-top: 4px;\n  color: #7b8492;\n  font-size: 11px;\n}\n\n.sidebar__indicator {\n  position: absolute;\n  inset-inline-end: 0;\n  bottom: 13px;\n  display: grid;\n  grid-template-columns: 12px 24px;\n  grid-template-rows: 10px 10px;\n  color: #97133f;\n  font-size: 12px;\n}\n\n.sidebar__indicator small {\n  grid-row: 1 / 3;\n  display: grid;\n  place-items: center;\n  border-radius: 50%;\n  background: #f9f5f6;\n}\n\n.sidebar__search-section {\n  padding: 22px 16px 16px;\n}\n\n.sidebar__search-section label {\n  display: block;\n  margin-bottom: 10px;\n  font-size: 13px;\n  font-weight: 600;\n}\n\n.sidebar__search {\n  position: relative;\n  height: 40px;\n}\n\n.sidebar__search input {\n  width: 100%;\n  height: 40px;\n  padding: 8px 38px 8px 45px;\n  border: 1px solid #d8dce1;\n  border-radius: 8px;\n  outline: 0;\n  font-size: 12px;\n}\n\n.sidebar__search > span {\n  position: absolute;\n  top: 11px;\n  right: 12px;\n  width: 14px;\n  height: 14px;\n  border: 1.5px solid #7b8492;\n  border-radius: 50%;\n}\n\n.sidebar__search kbd {\n  position: absolute;\n  top: 10px;\n  left: 10px;\n  padding: 2px 5px;\n  border: 1px solid #e3e5e8;\n  border-radius: 4px;\n  background: #fff;\n  color: #98a0ab;\n  font-size: 10px;\n}\n\n.sidebar__nav {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n\n.sidebar__group:nth-last-child(3) {\n  margin-top: 12px;\n  padding-top: 16px;\n  border-top: 1px solid #e9eaeb;\n}\n\n.sidebar__item {\n  position: relative;\n  display: flex;\n  min-height: 44px;\n  align-items: center;\n  gap: 10px;\n  padding: 10px 12px;\n  border-radius: 6px;\n  color: inherit;\n  font-size: 13px;\n  font-weight: 500;\n  text-decoration: none;\n}\n\n.sidebar__item--active {\n  background: #fcf9fa;\n  color: #97133f;\n  font-weight: 600;\n}\n\n.sidebar__item-icon {\n  display: grid;\n  width: 20px;\n  height: 20px;\n  flex: 0 0 20px;\n  place-items: center;\n  color: #7c8794;\n  font-size: 16px;\n}\n\n.sidebar__item--active .sidebar__item-icon {\n  color: #97133f;\n}\n\n.sidebar__expand {\n  margin-inline-start: auto;\n  color: #9ca3af;\n}\n\n.sidebar__badge {\n  margin-inline-start: auto;\n  padding: 3px 7px;\n  border: 1px solid #e9eaeb;\n  border-radius: 999px;\n  color: #7c8794;\n  font-size: 10px;\n}\n\n.sidebar__children {\n  position: relative;\n  padding-inline-start: 12px;\n}\n\n.sidebar__children::before {\n  position: absolute;\n  top: 0;\n  bottom: 8px;\n  right: 27px;\n  width: 1px;\n  background: #e9eaeb;\n  content: \"\";\n}\n\n.sidebar__item--child {\n  min-height: 40px;\n  padding-right: 36px;\n  font-size: 12px;\n  font-weight: 400;\n}\n"] }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(SidebarNavigationComponent, { className: "SidebarNavigationComponent", filePath: "src/app/components/dashboard/sidebar-navigation/sidebar-navigation.component.ts", lineNumber: 15 }); })();
