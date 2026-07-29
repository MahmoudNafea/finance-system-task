import { NgTemplateOutlet } from '@angular/common';
import { Component } from '@angular/core';
import * as i0 from "@angular/core";
const _c0 = a0 => ({ icon: a0 });
const _forTrack0 = ($index, $item) => $item.label;
function SidebarNavigationComponent_For_26_Conditional_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "small", 17);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r1 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(item_r1.badge);
} }
function SidebarNavigationComponent_For_26_Conditional_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 18);
    i0.ɵɵtext(1, "\u2304");
    i0.ɵɵelementEnd();
} }
function SidebarNavigationComponent_For_26_Conditional_8_For_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "a", 20)(1, "span", 15);
    i0.ɵɵelementContainer(2, 16);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "span");
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const child_r2 = ctx.$implicit;
    i0.ɵɵnextContext(3);
    const navIcon_r3 = i0.ɵɵreference(28);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngTemplateOutlet", navIcon_r3)("ngTemplateOutletContext", i0.ɵɵpureFunction1(3, _c0, child_r2.icon));
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(child_r2.label);
} }
function SidebarNavigationComponent_For_26_Conditional_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 19);
    i0.ɵɵrepeaterCreate(1, SidebarNavigationComponent_For_26_Conditional_8_For_2_Template, 5, 5, "a", 20, _forTrack0);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r1 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance();
    i0.ɵɵrepeater(item_r1.children);
} }
function SidebarNavigationComponent_For_26_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 13)(1, "a", 14)(2, "span", 15);
    i0.ɵɵelementContainer(3, 16);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "span");
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd();
    i0.ɵɵconditionalCreate(6, SidebarNavigationComponent_For_26_Conditional_6_Template, 2, 1, "small", 17);
    i0.ɵɵconditionalCreate(7, SidebarNavigationComponent_For_26_Conditional_7_Template, 2, 0, "span", 18);
    i0.ɵɵelementEnd();
    i0.ɵɵconditionalCreate(8, SidebarNavigationComponent_For_26_Conditional_8_Template, 3, 0, "div", 19);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    const ɵ$index_44_r4 = ctx.$index;
    i0.ɵɵnextContext();
    const navIcon_r3 = i0.ɵɵreference(28);
    i0.ɵɵadvance();
    i0.ɵɵclassProp("sidebar__item--active", ɵ$index_44_r4 === 0);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngTemplateOutlet", navIcon_r3)("ngTemplateOutletContext", i0.ɵɵpureFunction1(8, _c0, item_r1.icon));
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(item_r1.label);
    i0.ɵɵadvance();
    i0.ɵɵconditional(item_r1.badge ? 6 : -1);
    i0.ɵɵadvance();
    i0.ɵɵconditional(item_r1.children ? 7 : -1);
    i0.ɵɵadvance();
    i0.ɵɵconditional(item_r1.children ? 8 : -1);
} }
function SidebarNavigationComponent_ng_template_27_Case_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(0, "svg", 3);
    i0.ɵɵelement(1, "path", 21);
    i0.ɵɵelementEnd();
} }
function SidebarNavigationComponent_ng_template_27_Case_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(0, "svg", 3);
    i0.ɵɵelement(1, "path", 22);
    i0.ɵɵelementEnd();
} }
function SidebarNavigationComponent_ng_template_27_Case_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(0, "svg", 3);
    i0.ɵɵelement(1, "path", 23);
    i0.ɵɵelementEnd();
} }
function SidebarNavigationComponent_ng_template_27_Case_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(0, "svg", 3);
    i0.ɵɵelement(1, "ellipse", 24)(2, "path", 25);
    i0.ɵɵelementEnd();
} }
function SidebarNavigationComponent_ng_template_27_Case_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(0, "svg", 3);
    i0.ɵɵelement(1, "path", 26)(2, "circle", 27);
    i0.ɵɵelementEnd();
} }
function SidebarNavigationComponent_ng_template_27_Case_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(0, "svg", 3);
    i0.ɵɵelement(1, "path", 28);
    i0.ɵɵelementEnd();
} }
function SidebarNavigationComponent_ng_template_27_Case_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(0, "svg", 3);
    i0.ɵɵelement(1, "path", 29);
    i0.ɵɵelementEnd();
} }
function SidebarNavigationComponent_ng_template_27_Case_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(0, "svg", 3);
    i0.ɵɵelement(1, "path", 30);
    i0.ɵɵelementEnd();
} }
function SidebarNavigationComponent_ng_template_27_Case_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(0, "svg", 3);
    i0.ɵɵelement(1, "path", 31);
    i0.ɵɵelementEnd();
} }
function SidebarNavigationComponent_ng_template_27_Case_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(0, "svg", 3);
    i0.ɵɵelement(1, "rect", 32)(2, "path", 33);
    i0.ɵɵelementEnd();
} }
function SidebarNavigationComponent_ng_template_27_Case_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(0, "svg", 3);
    i0.ɵɵelement(1, "rect", 34)(2, "rect", 35)(3, "path", 36);
    i0.ɵɵelementEnd();
} }
function SidebarNavigationComponent_ng_template_27_Case_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(0, "svg", 3);
    i0.ɵɵelement(1, "path", 37);
    i0.ɵɵelementEnd();
} }
function SidebarNavigationComponent_ng_template_27_Case_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(0, "svg", 3);
    i0.ɵɵelement(1, "path", 38);
    i0.ɵɵelementEnd();
} }
function SidebarNavigationComponent_ng_template_27_Case_13_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(0, "svg", 3);
    i0.ɵɵelement(1, "circle", 39)(2, "path", 40);
    i0.ɵɵelementEnd();
} }
function SidebarNavigationComponent_ng_template_27_Case_14_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(0, "svg", 3);
    i0.ɵɵelement(1, "path", 41);
    i0.ɵɵelementEnd();
} }
function SidebarNavigationComponent_ng_template_27_Case_15_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(0, "svg", 3);
    i0.ɵɵelement(1, "ellipse", 42)(2, "path", 43);
    i0.ɵɵelementEnd();
} }
function SidebarNavigationComponent_ng_template_27_Case_16_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(0, "svg", 3);
    i0.ɵɵelement(1, "path", 44);
    i0.ɵɵelementEnd();
} }
function SidebarNavigationComponent_ng_template_27_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵconditionalCreate(0, SidebarNavigationComponent_ng_template_27_Case_0_Template, 2, 0, ":svg:svg", 3)(1, SidebarNavigationComponent_ng_template_27_Case_1_Template, 2, 0, ":svg:svg", 3)(2, SidebarNavigationComponent_ng_template_27_Case_2_Template, 2, 0, ":svg:svg", 3)(3, SidebarNavigationComponent_ng_template_27_Case_3_Template, 3, 0, ":svg:svg", 3)(4, SidebarNavigationComponent_ng_template_27_Case_4_Template, 3, 0, ":svg:svg", 3)(5, SidebarNavigationComponent_ng_template_27_Case_5_Template, 2, 0, ":svg:svg", 3)(6, SidebarNavigationComponent_ng_template_27_Case_6_Template, 2, 0, ":svg:svg", 3)(7, SidebarNavigationComponent_ng_template_27_Case_7_Template, 2, 0, ":svg:svg", 3)(8, SidebarNavigationComponent_ng_template_27_Case_8_Template, 2, 0, ":svg:svg", 3)(9, SidebarNavigationComponent_ng_template_27_Case_9_Template, 3, 0, ":svg:svg", 3)(10, SidebarNavigationComponent_ng_template_27_Case_10_Template, 4, 0, ":svg:svg", 3)(11, SidebarNavigationComponent_ng_template_27_Case_11_Template, 2, 0, ":svg:svg", 3)(12, SidebarNavigationComponent_ng_template_27_Case_12_Template, 2, 0, ":svg:svg", 3)(13, SidebarNavigationComponent_ng_template_27_Case_13_Template, 3, 0, ":svg:svg", 3)(14, SidebarNavigationComponent_ng_template_27_Case_14_Template, 2, 0, ":svg:svg", 3)(15, SidebarNavigationComponent_ng_template_27_Case_15_Template, 3, 0, ":svg:svg", 3)(16, SidebarNavigationComponent_ng_template_27_Case_16_Template, 2, 0, ":svg:svg", 3);
} if (rf & 2) {
    let tmp_3_0;
    const icon_r5 = ctx.icon;
    i0.ɵɵconditional((tmp_3_0 = icon_r5) === "home" ? 0 : tmp_3_0 === "layers" ? 1 : tmp_3_0 === "building" ? 2 : tmp_3_0 === "coins" ? 3 : tmp_3_0 === "camera" ? 4 : tmp_3_0 === "link" ? 5 : tmp_3_0 === "document" ? 6 : tmp_3_0 === "cart" ? 7 : tmp_3_0 === "box" ? 8 : tmp_3_0 === "check-square" ? 9 : tmp_3_0 === "squares" ? 10 : tmp_3_0 === "shirt" ? 11 : tmp_3_0 === "tools" ? 12 : tmp_3_0 === "help" ? 13 : tmp_3_0 === "store" ? 14 : tmp_3_0 === "database" ? 15 : tmp_3_0 === "bag" ? 16 : -1);
} }
export class SidebarNavigationComponent {
    items = [
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
    static ɵfac = function SidebarNavigationComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || SidebarNavigationComponent)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: SidebarNavigationComponent, selectors: [["app-sidebar-navigation"]], decls: 29, vars: 0, consts: [["navIcon", ""], ["dir", "rtl", 1, "sidebar"], ["type", "button", "aria-label", "\u0637\u064A \u0627\u0644\u0642\u0627\u0626\u0645\u0629", 1, "sidebar__collapse"], ["viewBox", "0 0 24 24"], ["d", "m15 5-7 7 7 7"], [1, "sidebar__identity"], ["aria-label", "3 \u0625\u0634\u0639\u0627\u0631\u0627\u062A", 1, "sidebar__indicator"], [1, "sidebar__search-section"], ["for", "sidebar-search"], [1, "sidebar__search"], ["id", "sidebar-search", "type", "search", "placeholder", "\u0628\u062D\u062B"], ["aria-hidden", "true"], ["aria-label", "\u0627\u0644\u062A\u0646\u0642\u0644 \u0627\u0644\u0631\u0626\u064A\u0633\u064A", 1, "sidebar__nav"], [1, "sidebar__group"], ["href", "#", 1, "sidebar__item"], ["aria-hidden", "true", 1, "sidebar__item-icon"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "sidebar__badge"], ["aria-hidden", "true", 1, "sidebar__expand"], [1, "sidebar__children"], ["href", "#", 1, "sidebar__item", "sidebar__item--child"], ["d", "m4 10 8-6 8 6v9H4zM9 20v-6h6v6"], ["d", "m12 3 9 5-9 5-9-5 9-5Zm-8 9 8 5 8-5M4 16l8 5 8-5"], ["d", "M5 21V6l7-3v18M12 9h7v12M8 8h1M8 12h1M8 16h1M15 12h1M15 16h1M3 21h18"], ["cx", "9", "cy", "6", "rx", "6", "ry", "3"], ["d", "M3 6v4c0 1.7 2.7 3 6 3 1 0 2-.1 2.8-.4M3 10v4c0 1.7 2.7 3 6 3M13 11c0-1.7 2.7-3 6-3s6 1.3 6 3-2.7 3-6 3-6-1.3-6-3Zm0 0v4c0 1.7 2.7 3 6 3s6-1.3 6-3v-4M13 15v3c0 1.7 2.7 3 6 3s6-1.3 6-3v-3"], ["d", "M4 7h4l2-3h4l2 3h4v13H4z"], ["cx", "12", "cy", "13", "r", "4"], ["d", "m10 14 4-4M7.5 16.5l-1 1a3.5 3.5 0 0 1-5-5l4-4a3.5 3.5 0 0 1 5 0M16.5 7.5l1-1a3.5 3.5 0 0 1 5 5l-4 4a3.5 3.5 0 0 1-5 0"], ["d", "M6 3h12v18H6zM9 8h6M9 12h6M9 16h3M15 17l2 2 4-5"], ["d", "M3 4h2l2 12h11l3-8H6M8 20h.01M18 20h.01"], ["d", "M4 7h16v13H4zM7 4h10v3M9 11h6"], ["x", "4", "y", "4", "width", "16", "height", "16", "rx", "2"], ["d", "m8 12 3 3 6-7"], ["x", "3", "y", "7", "width", "14", "height", "14", "rx", "2"], ["x", "7", "y", "3", "width", "14", "height", "14", "rx", "2"], ["d", "m8 14 2 2 4-5"], ["d", "m8 4-5 3 3 5 2-1v10h8V11l2 1 3-5-5-3c-.5 2-1.8 3-4 3S8.5 6 8 4Z"], ["d", "m14 6 4-4 4 4-4 4M4 14l6 6M3 21l7-7M13 3l8 8M15 15l6 6M18 12l3 3"], ["cx", "12", "cy", "12", "r", "9"], ["d", "M9.5 9a2.7 2.7 0 1 1 4.5 2c-1.3 1-2 1.4-2 3M12 18h.01"], ["d", "M4 9h16v12H4zM3 9l2-5h14l2 5M8 21v-6h4v6M3 9c0 2 4 2 4 0 0 2 4 2 4 0 0 2 4 2 4 0 0 2 4 2 4 0"], ["cx", "12", "cy", "5", "rx", "8", "ry", "3"], ["d", "M4 5v6c0 1.7 3.6 3 8 3s8-1.3 8-3V5M4 11v6c0 1.7 3.6 3 8 3s8-1.3 8-3v-6"], ["d", "M4 7h16v14H4zM8 7a4 4 0 0 1 8 0M8 12c1 2 2.3 3 4 3s3-1 4-3"]], template: function SidebarNavigationComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "aside", 1)(1, "button", 2);
            i0.ɵɵnamespaceSVG();
            i0.ɵɵelementStart(2, "svg", 3);
            i0.ɵɵelement(3, "path", 4);
            i0.ɵɵelementEnd()();
            i0.ɵɵnamespaceHTML();
            i0.ɵɵelementStart(4, "section", 5)(5, "strong");
            i0.ɵɵtext(6, "\u0645\u062D\u0645\u062F \u0639\u0628\u062F \u0627\u0644\u0644\u0647");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(7, "span");
            i0.ɵɵtext(8, "\u0627\u062F\u0627\u0631\u0629 \u062A\u0637\u0648\u064A\u0631 \u0627\u0644\u0623\u0646\u0638\u0645\u0629");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(9, "div", 6)(10, "span");
            i0.ɵɵtext(11, "\u2303");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(12, "span");
            i0.ɵɵtext(13, "\u2304");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(14, "small");
            i0.ɵɵtext(15, "3");
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(16, "section", 7)(17, "label", 8);
            i0.ɵɵtext(18, "\u0627\u0644\u0628\u062D\u062B");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(19, "div", 9);
            i0.ɵɵelement(20, "input", 10)(21, "span", 11);
            i0.ɵɵelementStart(22, "kbd");
            i0.ɵɵtext(23, "\u2318K");
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(24, "nav", 12);
            i0.ɵɵrepeaterCreate(25, SidebarNavigationComponent_For_26_Template, 9, 10, "div", 13, _forTrack0);
            i0.ɵɵelementEnd()();
            i0.ɵɵtemplate(27, SidebarNavigationComponent_ng_template_27_Template, 17, 1, "ng-template", null, 0, i0.ɵɵtemplateRefExtractor);
        } if (rf & 2) {
            i0.ɵɵadvance(25);
            i0.ɵɵrepeater(ctx.items);
        } }, dependencies: [NgTemplateOutlet], styles: ["[_nghost-%COMP%] {\n  display: block;\n  width: 296px;\n  flex: 0 0 296px;\n}\n\n.sidebar[_ngcontent-%COMP%] {\n  position: relative;\n  width: 296px;\n  min-height: 2360px;\n  padding: 16px 16px 32px;\n  border-right: 1px solid #e9eaeb;\n  border-radius: 8px;\n  background: #fff;\n  color: #1f2937;\n  font-family: \"Lusail\", \"Tahoma\", sans-serif;\n}\n\n.sidebar__collapse[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 2;\n  top: 0;\n  left: 0;\n  display: grid;\n  width: 40px;\n  height: 40px;\n  padding: 0;\n  place-items: center;\n  border: 0;\n  border-radius: 0 0 8px;\n  background: #97133f;\n  color: #fff;\n}\n\n.sidebar__collapse[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 22px;\n  height: 22px;\n  fill: none;\n  stroke: currentcolor;\n  stroke-linecap: round;\n  stroke-linejoin: round;\n  stroke-width: 2;\n}\n\n.sidebar__identity[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  min-height: 80px;\n  flex-direction: column;\n  justify-content: center;\n  padding: 0 16px 16px;\n  border-bottom: 1px solid #e9eaeb;\n}\n\n.sidebar__identity[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 600;\n}\n\n.sidebar__identity[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  margin-top: 4px;\n  color: #7b8492;\n  font-size: 12px;\n  font-weight: 500;\n}\n\n.sidebar__indicator[_ngcontent-%COMP%] {\n  position: absolute;\n  inset-inline-end: 0;\n  bottom: 13px;\n  display: grid;\n  align-items: center;\n  grid-template-columns: 16px 28px;\n  grid-template-rows: 12px 12px;\n  column-gap: 6px;\n  color: #97133f;\n  font-size: 12px;\n}\n\n.sidebar__indicator[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%]:first-child {\n  grid-column: 2;\n  grid-row: 1;\n  text-align: center;\n}\n\n.sidebar__indicator[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%]:nth-child(2) {\n  grid-column: 2;\n  grid-row: 2;\n  text-align: center;\n}\n\n.sidebar__indicator[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  display: grid;\n  width: 28px;\n  height: 28px;\n  grid-column: 1;\n  grid-row: 1 / 3;\n  align-self: center;\n  place-items: center;\n  border-radius: 50%;\n  background: #f9f5f6;\n  font-size: 12px;\n  line-height: 1;\n}\n\n.sidebar__search-section[_ngcontent-%COMP%] {\n  padding: 24px 16px 28px;\n}\n\n.sidebar__search-section[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 12px;\n  font-size: 16px;\n  font-weight: 600;\n}\n\n.sidebar__search[_ngcontent-%COMP%] {\n  position: relative;\n  height: 44px;\n}\n\n.sidebar__search[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 44px;\n  padding: 8px 38px 8px 45px;\n  border: 1px solid #d8dce1;\n  border-radius: 8px;\n  outline: 0;\n  font-size: 12px;\n}\n\n.sidebar__search[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 11px;\n  right: 12px;\n  width: 14px;\n  height: 14px;\n  border: 1.5px solid #7b8492;\n  border-radius: 50%;\n}\n\n.sidebar__search[_ngcontent-%COMP%]   kbd[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 10px;\n  left: 10px;\n  padding: 2px 5px;\n  border: 1px solid #e3e5e8;\n  border-radius: 4px;\n  background: #fff;\n  color: #98a0ab;\n  font-size: 10px;\n}\n\n.sidebar__nav[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n\n.sidebar__group[_ngcontent-%COMP%]:nth-last-child(3) {\n  margin-top: 12px;\n  padding-top: 16px;\n  border-top: 1px solid #e9eaeb;\n}\n\n.sidebar__item[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  min-height: 44px;\n  align-items: center;\n  gap: 10px;\n  padding: 10px 12px;\n  border-radius: 6px;\n  color: inherit;\n  font-size: 14px;\n  font-weight: 500;\n  text-decoration: none;\n}\n\n.sidebar__item--active[_ngcontent-%COMP%] {\n  background: #fcf9fa;\n  color: #97133f;\n  font-weight: 600;\n}\n\n.sidebar__item-icon[_ngcontent-%COMP%] {\n  display: grid;\n  width: 20px;\n  height: 20px;\n  flex: 0 0 20px;\n  place-items: center;\n  color: #7c8794;\n}\n\n.sidebar__item-icon[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 20px;\n  overflow: visible;\n  fill: none;\n  stroke: currentcolor;\n  stroke-linecap: round;\n  stroke-linejoin: round;\n  stroke-width: 1.7;\n}\n\n.sidebar__item--active[_ngcontent-%COMP%]   .sidebar__item-icon[_ngcontent-%COMP%] {\n  color: #97133f;\n}\n\n.sidebar__expand[_ngcontent-%COMP%] {\n  margin-inline-start: auto;\n  color: #9ca3af;\n  font-size: 0;\n}\n\n.sidebar__expand[_ngcontent-%COMP%]::after {\n  display: block;\n  width: 7px;\n  height: 7px;\n  border-bottom: 1.8px solid currentcolor;\n  border-left: 1.8px solid currentcolor;\n  content: \"\";\n  transform: rotate(-45deg);\n}\n\n.sidebar__badge[_ngcontent-%COMP%] {\n  margin-inline-start: auto;\n  padding: 3px 7px;\n  border: 1px solid #e9eaeb;\n  border-radius: 999px;\n  color: #7c8794;\n  font-size: 10px;\n}\n\n.sidebar__children[_ngcontent-%COMP%] {\n  position: relative;\n  padding-inline-start: 12px;\n}\n\n.sidebar__children[_ngcontent-%COMP%]::before {\n  position: absolute;\n  top: 0;\n  bottom: 8px;\n  right: 21px;\n  width: 1px;\n  background: #e9eaeb;\n  content: \"\";\n}\n\n.sidebar__item--child[_ngcontent-%COMP%] {\n  min-height: 40px;\n  padding-right: 30px;\n  font-size: 13px;\n  font-weight: 400;\n}\n\n.sidebar__item--child[_ngcontent-%COMP%]::before {\n  position: absolute;\n  z-index: 1;\n  top: 50%;\n  right: 21px;\n  width: 9px;\n  height: 10px;\n  border-bottom: 1px solid #e9eaeb;\n  border-radius: 0 0 7px;\n  content: \"\";\n  transform: translateY(-100%);\n}"] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SidebarNavigationComponent, [{
        type: Component,
        args: [{ selector: 'app-sidebar-navigation', imports: [NgTemplateOutlet], template: "<aside class=\"sidebar\" dir=\"rtl\">\n  <button type=\"button\" class=\"sidebar__collapse\" aria-label=\"\u0637\u064A \u0627\u0644\u0642\u0627\u0626\u0645\u0629\">\n    <svg viewBox=\"0 0 24 24\"><path d=\"m15 5-7 7 7 7\"></path></svg>\n  </button>\n  <section class=\"sidebar__identity\">\n    <strong>\u0645\u062D\u0645\u062F \u0639\u0628\u062F \u0627\u0644\u0644\u0647</strong>\n    <span>\u0627\u062F\u0627\u0631\u0629 \u062A\u0637\u0648\u064A\u0631 \u0627\u0644\u0623\u0646\u0638\u0645\u0629</span>\n    <div class=\"sidebar__indicator\" aria-label=\"3 \u0625\u0634\u0639\u0627\u0631\u0627\u062A\">\n      <span>\u2303</span><span>\u2304</span><small>3</small>\n    </div>\n  </section>\n\n  <section class=\"sidebar__search-section\">\n    <label for=\"sidebar-search\">\u0627\u0644\u0628\u062D\u062B</label>\n    <div class=\"sidebar__search\">\n      <input id=\"sidebar-search\" type=\"search\" placeholder=\"\u0628\u062D\u062B\" />\n      <span aria-hidden=\"true\"></span>\n      <kbd>\u2318K</kbd>\n    </div>\n  </section>\n\n  <nav class=\"sidebar__nav\" aria-label=\"\u0627\u0644\u062A\u0646\u0642\u0644 \u0627\u0644\u0631\u0626\u064A\u0633\u064A\">\n    @for (item of items; track item.label; let first = $first) {\n      <div class=\"sidebar__group\">\n        <a href=\"#\" class=\"sidebar__item\" [class.sidebar__item--active]=\"first\">\n          <span class=\"sidebar__item-icon\" aria-hidden=\"true\">\n            <ng-container [ngTemplateOutlet]=\"navIcon\" [ngTemplateOutletContext]=\"{ icon: item.icon }\" />\n          </span>\n          <span>{{ item.label }}</span>\n          @if (item.badge) {\n            <small class=\"sidebar__badge\">{{ item.badge }}</small>\n          }\n          @if (item.children) {\n            <span class=\"sidebar__expand\" aria-hidden=\"true\">\u2304</span>\n          }\n        </a>\n\n        @if (item.children) {\n          <div class=\"sidebar__children\">\n            @for (child of item.children; track child.label) {\n              <a href=\"#\" class=\"sidebar__item sidebar__item--child\">\n                <span class=\"sidebar__item-icon\" aria-hidden=\"true\">\n                  <ng-container [ngTemplateOutlet]=\"navIcon\" [ngTemplateOutletContext]=\"{ icon: child.icon }\" />\n                </span>\n                <span>{{ child.label }}</span>\n              </a>\n            }\n          </div>\n        }\n      </div>\n    }\n  </nav>\n</aside>\n\n<ng-template #navIcon let-icon=\"icon\">\n  @switch (icon) {\n    @case ('home') { <svg viewBox=\"0 0 24 24\"><path d=\"m4 10 8-6 8 6v9H4zM9 20v-6h6v6\"/></svg> }\n    @case ('layers') { <svg viewBox=\"0 0 24 24\"><path d=\"m12 3 9 5-9 5-9-5 9-5Zm-8 9 8 5 8-5M4 16l8 5 8-5\"/></svg> }\n    @case ('building') { <svg viewBox=\"0 0 24 24\"><path d=\"M5 21V6l7-3v18M12 9h7v12M8 8h1M8 12h1M8 16h1M15 12h1M15 16h1M3 21h18\"/></svg> }\n    @case ('coins') { <svg viewBox=\"0 0 24 24\"><ellipse cx=\"9\" cy=\"6\" rx=\"6\" ry=\"3\"/><path d=\"M3 6v4c0 1.7 2.7 3 6 3 1 0 2-.1 2.8-.4M3 10v4c0 1.7 2.7 3 6 3M13 11c0-1.7 2.7-3 6-3s6 1.3 6 3-2.7 3-6 3-6-1.3-6-3Zm0 0v4c0 1.7 2.7 3 6 3s6-1.3 6-3v-4M13 15v3c0 1.7 2.7 3 6 3s6-1.3 6-3v-3\"/></svg> }\n    @case ('camera') { <svg viewBox=\"0 0 24 24\"><path d=\"M4 7h4l2-3h4l2 3h4v13H4z\"/><circle cx=\"12\" cy=\"13\" r=\"4\"/></svg> }\n    @case ('link') { <svg viewBox=\"0 0 24 24\"><path d=\"m10 14 4-4M7.5 16.5l-1 1a3.5 3.5 0 0 1-5-5l4-4a3.5 3.5 0 0 1 5 0M16.5 7.5l1-1a3.5 3.5 0 0 1 5 5l-4 4a3.5 3.5 0 0 1-5 0\"/></svg> }\n    @case ('document') { <svg viewBox=\"0 0 24 24\"><path d=\"M6 3h12v18H6zM9 8h6M9 12h6M9 16h3M15 17l2 2 4-5\"/></svg> }\n    @case ('cart') { <svg viewBox=\"0 0 24 24\"><path d=\"M3 4h2l2 12h11l3-8H6M8 20h.01M18 20h.01\"/></svg> }\n    @case ('box') { <svg viewBox=\"0 0 24 24\"><path d=\"M4 7h16v13H4zM7 4h10v3M9 11h6\"/></svg> }\n    @case ('check-square') { <svg viewBox=\"0 0 24 24\"><rect x=\"4\" y=\"4\" width=\"16\" height=\"16\" rx=\"2\"/><path d=\"m8 12 3 3 6-7\"/></svg> }\n    @case ('squares') { <svg viewBox=\"0 0 24 24\"><rect x=\"3\" y=\"7\" width=\"14\" height=\"14\" rx=\"2\"/><rect x=\"7\" y=\"3\" width=\"14\" height=\"14\" rx=\"2\"/><path d=\"m8 14 2 2 4-5\"/></svg> }\n    @case ('shirt') { <svg viewBox=\"0 0 24 24\"><path d=\"m8 4-5 3 3 5 2-1v10h8V11l2 1 3-5-5-3c-.5 2-1.8 3-4 3S8.5 6 8 4Z\"/></svg> }\n    @case ('tools') { <svg viewBox=\"0 0 24 24\"><path d=\"m14 6 4-4 4 4-4 4M4 14l6 6M3 21l7-7M13 3l8 8M15 15l6 6M18 12l3 3\"/></svg> }\n    @case ('help') { <svg viewBox=\"0 0 24 24\"><circle cx=\"12\" cy=\"12\" r=\"9\"/><path d=\"M9.5 9a2.7 2.7 0 1 1 4.5 2c-1.3 1-2 1.4-2 3M12 18h.01\"/></svg> }\n    @case ('store') { <svg viewBox=\"0 0 24 24\"><path d=\"M4 9h16v12H4zM3 9l2-5h14l2 5M8 21v-6h4v6M3 9c0 2 4 2 4 0 0 2 4 2 4 0 0 2 4 2 4 0 0 2 4 2 4 0\"/></svg> }\n    @case ('database') { <svg viewBox=\"0 0 24 24\"><ellipse cx=\"12\" cy=\"5\" rx=\"8\" ry=\"3\"/><path d=\"M4 5v6c0 1.7 3.6 3 8 3s8-1.3 8-3V5M4 11v6c0 1.7 3.6 3 8 3s8-1.3 8-3v-6\"/></svg> }\n    @case ('bag') { <svg viewBox=\"0 0 24 24\"><path d=\"M4 7h16v14H4zM8 7a4 4 0 0 1 8 0M8 12c1 2 2.3 3 4 3s3-1 4-3\"/></svg> }\n  }\n</ng-template>\n", styles: [":host {\n  display: block;\n  width: 296px;\n  flex: 0 0 296px;\n}\n\n.sidebar {\n  position: relative;\n  width: 296px;\n  min-height: 2360px;\n  padding: 16px 16px 32px;\n  border-right: 1px solid #e9eaeb;\n  border-radius: 8px;\n  background: #fff;\n  color: #1f2937;\n  font-family: \"Lusail\", \"Tahoma\", sans-serif;\n}\n\n.sidebar__collapse {\n  position: absolute;\n  z-index: 2;\n  top: 0;\n  left: 0;\n  display: grid;\n  width: 40px;\n  height: 40px;\n  padding: 0;\n  place-items: center;\n  border: 0;\n  border-radius: 0 0 8px;\n  background: #97133f;\n  color: #fff;\n}\n\n.sidebar__collapse svg {\n  width: 22px;\n  height: 22px;\n  fill: none;\n  stroke: currentcolor;\n  stroke-linecap: round;\n  stroke-linejoin: round;\n  stroke-width: 2;\n}\n\n.sidebar__identity {\n  position: relative;\n  display: flex;\n  min-height: 80px;\n  flex-direction: column;\n  justify-content: center;\n  padding: 0 16px 16px;\n  border-bottom: 1px solid #e9eaeb;\n}\n\n.sidebar__identity strong {\n  font-size: 16px;\n  font-weight: 600;\n}\n\n.sidebar__identity > span {\n  margin-top: 4px;\n  color: #7b8492;\n  font-size: 12px;\n  font-weight: 500;\n}\n\n.sidebar__indicator {\n  position: absolute;\n  inset-inline-end: 0;\n  bottom: 13px;\n  display: grid;\n  align-items: center;\n  grid-template-columns: 16px 28px;\n  grid-template-rows: 12px 12px;\n  column-gap: 6px;\n  color: #97133f;\n  font-size: 12px;\n}\n\n.sidebar__indicator > span:first-child {\n  grid-column: 2;\n  grid-row: 1;\n  text-align: center;\n}\n\n.sidebar__indicator > span:nth-child(2) {\n  grid-column: 2;\n  grid-row: 2;\n  text-align: center;\n}\n\n.sidebar__indicator small {\n  display: grid;\n  width: 28px;\n  height: 28px;\n  grid-column: 1;\n  grid-row: 1 / 3;\n  align-self: center;\n  place-items: center;\n  border-radius: 50%;\n  background: #f9f5f6;\n  font-size: 12px;\n  line-height: 1;\n}\n\n.sidebar__search-section {\n  padding: 24px 16px 28px;\n}\n\n.sidebar__search-section label {\n  display: block;\n  margin-bottom: 12px;\n  font-size: 16px;\n  font-weight: 600;\n}\n\n.sidebar__search {\n  position: relative;\n  height: 44px;\n}\n\n.sidebar__search input {\n  width: 100%;\n  height: 44px;\n  padding: 8px 38px 8px 45px;\n  border: 1px solid #d8dce1;\n  border-radius: 8px;\n  outline: 0;\n  font-size: 12px;\n}\n\n.sidebar__search > span {\n  position: absolute;\n  top: 11px;\n  right: 12px;\n  width: 14px;\n  height: 14px;\n  border: 1.5px solid #7b8492;\n  border-radius: 50%;\n}\n\n.sidebar__search kbd {\n  position: absolute;\n  top: 10px;\n  left: 10px;\n  padding: 2px 5px;\n  border: 1px solid #e3e5e8;\n  border-radius: 4px;\n  background: #fff;\n  color: #98a0ab;\n  font-size: 10px;\n}\n\n.sidebar__nav {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n\n.sidebar__group:nth-last-child(3) {\n  margin-top: 12px;\n  padding-top: 16px;\n  border-top: 1px solid #e9eaeb;\n}\n\n.sidebar__item {\n  position: relative;\n  display: flex;\n  min-height: 44px;\n  align-items: center;\n  gap: 10px;\n  padding: 10px 12px;\n  border-radius: 6px;\n  color: inherit;\n  font-size: 14px;\n  font-weight: 500;\n  text-decoration: none;\n}\n\n.sidebar__item--active {\n  background: #fcf9fa;\n  color: #97133f;\n  font-weight: 600;\n}\n\n.sidebar__item-icon {\n  display: grid;\n  width: 20px;\n  height: 20px;\n  flex: 0 0 20px;\n  place-items: center;\n  color: #7c8794;\n}\n\n.sidebar__item-icon svg {\n  width: 20px;\n  height: 20px;\n  overflow: visible;\n  fill: none;\n  stroke: currentcolor;\n  stroke-linecap: round;\n  stroke-linejoin: round;\n  stroke-width: 1.7;\n}\n\n.sidebar__item--active .sidebar__item-icon {\n  color: #97133f;\n}\n\n.sidebar__expand {\n  margin-inline-start: auto;\n  color: #9ca3af;\n  font-size: 0;\n}\n\n.sidebar__expand::after {\n  display: block;\n  width: 7px;\n  height: 7px;\n  border-bottom: 1.8px solid currentcolor;\n  border-left: 1.8px solid currentcolor;\n  content: \"\";\n  transform: rotate(-45deg);\n}\n\n.sidebar__badge {\n  margin-inline-start: auto;\n  padding: 3px 7px;\n  border: 1px solid #e9eaeb;\n  border-radius: 999px;\n  color: #7c8794;\n  font-size: 10px;\n}\n\n.sidebar__children {\n  position: relative;\n  padding-inline-start: 12px;\n}\n\n.sidebar__children::before {\n  position: absolute;\n  top: 0;\n  bottom: 8px;\n  right: 21px;\n  width: 1px;\n  background: #e9eaeb;\n  content: \"\";\n}\n\n.sidebar__item--child {\n  min-height: 40px;\n  padding-right: 30px;\n  font-size: 13px;\n  font-weight: 400;\n}\n\n.sidebar__item--child::before {\n  position: absolute;\n  z-index: 1;\n  top: 50%;\n  right: 21px;\n  width: 9px;\n  height: 10px;\n  border-bottom: 1px solid #e9eaeb;\n  border-radius: 0 0 7px;\n  content: \"\";\n  transform: translateY(-100%);\n}\n"] }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(SidebarNavigationComponent, { className: "SidebarNavigationComponent", filePath: "src/app/components/dashboard/sidebar-navigation/sidebar-navigation.component.ts", lineNumber: 17 }); })();
