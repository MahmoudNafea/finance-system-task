import { Component } from '@angular/core';
import * as i0 from "@angular/core";
const _forTrack0 = ($index, $item) => $item.label;
function PurchaseStatusComponent_For_42_Case_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵnamespaceSVG();
    i0.ɵɵdomElementStart(0, "svg", 4);
    i0.ɵɵdomElement(1, "path", 32)(2, "path", 33);
    i0.ɵɵdomElementEnd();
} }
function PurchaseStatusComponent_For_42_Case_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵnamespaceSVG();
    i0.ɵɵdomElementStart(0, "svg", 4);
    i0.ɵɵdomElement(1, "rect", 34)(2, "rect", 35)(3, "rect", 36)(4, "rect", 37);
    i0.ɵɵdomElementEnd();
} }
function PurchaseStatusComponent_For_42_Case_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵnamespaceSVG();
    i0.ɵɵdomElementStart(0, "svg", 4);
    i0.ɵɵdomElement(1, "path", 38)(2, "circle", 39)(3, "circle", 40);
    i0.ɵɵdomElementEnd();
} }
function PurchaseStatusComponent_For_42_Case_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵnamespaceSVG();
    i0.ɵɵdomElementStart(0, "svg", 4);
    i0.ɵɵdomElement(1, "circle", 41)(2, "path", 42);
    i0.ɵɵdomElementEnd();
} }
function PurchaseStatusComponent_For_42_Case_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵnamespaceSVG();
    i0.ɵɵdomElementStart(0, "svg", 4);
    i0.ɵɵdomElement(1, "path", 43)(2, "path", 44);
    i0.ɵɵdomElementEnd();
} }
function PurchaseStatusComponent_For_42_Case_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵnamespaceSVG();
    i0.ɵɵdomElementStart(0, "svg", 4);
    i0.ɵɵdomElement(1, "path", 45)(2, "path", 46);
    i0.ɵɵdomElementEnd();
} }
function PurchaseStatusComponent_For_42_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵdomElementStart(0, "div", 28)(1, "span", 31);
    i0.ɵɵconditionalCreate(2, PurchaseStatusComponent_For_42_Case_2_Template, 3, 0, ":svg:svg", 4)(3, PurchaseStatusComponent_For_42_Case_3_Template, 5, 0, ":svg:svg", 4)(4, PurchaseStatusComponent_For_42_Case_4_Template, 4, 0, ":svg:svg", 4)(5, PurchaseStatusComponent_For_42_Case_5_Template, 3, 0, ":svg:svg", 4)(6, PurchaseStatusComponent_For_42_Case_6_Template, 3, 0, ":svg:svg", 4)(7, PurchaseStatusComponent_For_42_Case_7_Template, 3, 0, ":svg:svg", 4);
    i0.ɵɵdomElementEnd();
    i0.ɵɵdomElementStart(8, "small");
    i0.ɵɵtext(9);
    i0.ɵɵdomElementEnd();
    i0.ɵɵdomElementStart(10, "strong");
    i0.ɵɵtext(11);
    i0.ɵɵdomElementEnd()();
} if (rf & 2) {
    let tmp_10_0;
    const metric_r1 = ctx.$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵconditional((tmp_10_0 = metric_r1.icon) === "new" ? 2 : tmp_10_0 === "all" ? 3 : tmp_10_0 === "sent" ? 4 : tmp_10_0 === "pending" ? 5 : tmp_10_0 === "cancelled" ? 6 : tmp_10_0 === "delivered" ? 7 : -1);
    i0.ɵɵadvance(7);
    i0.ɵɵtextInterpolate(metric_r1.label);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(metric_r1.value);
} }
export class PurchaseStatusComponent {
    metrics = [
        { label: 'New', value: '50', icon: 'new' },
        { label: 'كل', value: '50', icon: 'all' },
        { label: 'مرسل', value: '50', icon: 'sent' },
        { label: 'قيد الانتظار', value: '50', icon: 'pending' },
        { label: 'تم الإلغاء', value: '50', icon: 'cancelled' },
        { label: 'تم التوصيل', value: '123', icon: 'delivered' },
    ];
    static ɵfac = function PurchaseStatusComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || PurchaseStatusComponent)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: PurchaseStatusComponent, selectors: [["app-purchase-status"]], decls: 50, vars: 0, consts: [["dir", "rtl", 1, "purchases"], [1, "purchases__header"], [1, "purchases__title"], ["aria-hidden", "true", 1, "purchases__icon"], ["viewBox", "0 0 24 24"], ["d", "M20 13.2 12.2 21 3 11.8V3h8.8L20 11.2a1.4 1.4 0 0 1 0 2Z"], ["cx", "7.5", "cy", "7.5", "r", "1.2"], ["aria-hidden", "true", 1, "purchases__divider"], ["type", "button", "aria-label", "\u062A\u0643\u0628\u064A\u0631", 1, "purchases__expand"], ["viewBox", "0 0 20 20", "aria-hidden", "true"], ["d", "M11.5 3H17v5.5M17 3l-6.5 6.5M8.5 17H3v-5.5M3 17l6.5-6.5"], [1, "purchases__toolbar"], ["type", "button", 1, "purchases__filter"], ["d", "M3 5h14M5.5 10h9M8 15h4"], [1, "purchases__search"], ["type", "search", "placeholder", "\u0628\u062D\u062B", "aria-label", "\u0628\u062D\u062B"], ["cx", "8.5", "cy", "8.5", "r", "5.5"], ["d", "m13 13 4 4"], [1, "purchases__filters"], [1, "purchases__filter-options"], ["type", "button"], ["viewBox", "0 0 16 16", "aria-hidden", "true"], ["d", "m3 6 5 5 5-5"], ["x", "2", "y", "3.5", "width", "12", "height", "10.5", "rx", "1.5"], ["d", "M5 2v3M11 2v3M2 7h12"], [1, "purchases__body"], [1, "purchases__metrics"], [1, "purchases__metric-grid"], [1, "purchases__metric"], ["aria-label", "350 \u0643\u0644 \u0627\u0644\u0645\u0639\u0627\u0645\u0644\u0627\u062A", 1, "purchases__chart"], [1, "purchases__donut"], ["aria-hidden", "true"], ["d", "m4 20 5-14 9 9-14 5Z"], ["d", "M14 4h.01M19 7h.01M17 2l-2 3M21 12l-3-1M10 2l1 3"], ["x", "3", "y", "3", "width", "7", "height", "7", "rx", "1"], ["x", "14", "y", "3", "width", "7", "height", "7", "rx", "1"], ["x", "3", "y", "14", "width", "7", "height", "7", "rx", "1"], ["x", "14", "y", "14", "width", "7", "height", "7", "rx", "1"], ["d", "M3 6h12v11H3zM15 10h4l3 3v4h-7"], ["cx", "7", "cy", "18", "r", "2"], ["cx", "18", "cy", "18", "r", "2"], ["cx", "12", "cy", "13", "r", "8"], ["d", "M9 2h6M12 5V2M12 9v5l3 2"], ["d", "M6 8a7 7 0 1 1-1 7M6 8V3M6 8h5"], ["d", "m10 11 5 5m0-5-5 5"], ["d", "m12 2 3 2 4-.2.8 3.8L22 11l-2.2 3.4-.8 3.8-4-.2-3 2-3-2-4 .2-.8-3.8L2 11l2.2-3.4.8-3.8 4 .2 3-2Z"], ["d", "m8 11 2.5 2.5L16 8"]], template: function PurchaseStatusComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵdomElementStart(0, "section", 0)(1, "header", 1)(2, "div", 2)(3, "span", 3);
            i0.ɵɵnamespaceSVG();
            i0.ɵɵdomElementStart(4, "svg", 4);
            i0.ɵɵdomElement(5, "path", 5)(6, "circle", 6);
            i0.ɵɵdomElementEnd()();
            i0.ɵɵnamespaceHTML();
            i0.ɵɵdomElementStart(7, "h2");
            i0.ɵɵtext(8, "\u062D\u0627\u0644\u0629 \u0627\u0644\u0645\u0634\u062A\u0631\u064A\u0627\u062A");
            i0.ɵɵdomElementEnd();
            i0.ɵɵdomElement(9, "span", 7);
            i0.ɵɵdomElementStart(10, "button", 8);
            i0.ɵɵnamespaceSVG();
            i0.ɵɵdomElementStart(11, "svg", 9);
            i0.ɵɵdomElement(12, "path", 10);
            i0.ɵɵdomElementEnd()()();
            i0.ɵɵnamespaceHTML();
            i0.ɵɵdomElementStart(13, "div", 11)(14, "button", 12);
            i0.ɵɵnamespaceSVG();
            i0.ɵɵdomElementStart(15, "svg", 9);
            i0.ɵɵdomElement(16, "path", 13);
            i0.ɵɵdomElementEnd();
            i0.ɵɵtext(17, " \u0627\u0644\u062A\u0635\u0641\u064A\u0629 ");
            i0.ɵɵdomElementEnd();
            i0.ɵɵnamespaceHTML();
            i0.ɵɵdomElementStart(18, "label", 14);
            i0.ɵɵdomElement(19, "input", 15);
            i0.ɵɵnamespaceSVG();
            i0.ɵɵdomElementStart(20, "svg", 9);
            i0.ɵɵdomElement(21, "circle", 16)(22, "path", 17);
            i0.ɵɵdomElementEnd();
            i0.ɵɵnamespaceHTML();
            i0.ɵɵdomElementStart(23, "kbd");
            i0.ɵɵtext(24, "K");
            i0.ɵɵdomElementEnd()()()();
            i0.ɵɵdomElementStart(25, "div", 18)(26, "h3");
            i0.ɵɵtext(27, "\u062D\u0627\u0644\u0629 \u0627\u0644\u0645\u0634\u062A\u0631\u064A\u0627\u062A");
            i0.ɵɵdomElementEnd();
            i0.ɵɵdomElementStart(28, "div", 19)(29, "button", 20);
            i0.ɵɵtext(30, " \u062C\u0645\u064A\u0639 \u0627\u0644\u0641\u0626\u0627\u062A ");
            i0.ɵɵnamespaceSVG();
            i0.ɵɵdomElementStart(31, "svg", 21);
            i0.ɵɵdomElement(32, "path", 22);
            i0.ɵɵdomElementEnd()();
            i0.ɵɵnamespaceHTML();
            i0.ɵɵdomElementStart(33, "button", 20);
            i0.ɵɵtext(34, " \u064A\u0648\u0646\u064A\u0648 2025 ");
            i0.ɵɵnamespaceSVG();
            i0.ɵɵdomElementStart(35, "svg", 21);
            i0.ɵɵdomElement(36, "rect", 23)(37, "path", 24);
            i0.ɵɵdomElementEnd()()()();
            i0.ɵɵnamespaceHTML();
            i0.ɵɵdomElementStart(38, "div", 25)(39, "div", 26)(40, "div", 27);
            i0.ɵɵrepeaterCreate(41, PurchaseStatusComponent_For_42_Template, 12, 3, "div", 28, _forTrack0);
            i0.ɵɵdomElementEnd()();
            i0.ɵɵdomElementStart(43, "div", 29)(44, "div", 30)(45, "div")(46, "strong");
            i0.ɵɵtext(47, "350");
            i0.ɵɵdomElementEnd();
            i0.ɵɵdomElementStart(48, "span");
            i0.ɵɵtext(49, "\u0643\u0644 \u0627\u0644\u0645\u0639\u0627\u0645\u0644\u0627\u062A");
            i0.ɵɵdomElementEnd()()()()()();
        } if (rf & 2) {
            i0.ɵɵadvance(41);
            i0.ɵɵrepeater(ctx.metrics);
        } }, styles: ["[_nghost-%COMP%] {\n  display: block;\n  width: 100%;\n  min-width: 0;\n  height: 504px;\n}\n\n*[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n}\n\n.purchases[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n  border: 1px solid rgb(14 37 60 / 10%);\n  border-radius: 16px;\n  background: #fff;\n  box-shadow: 0 1px 3px rgb(0 0 0 / 5%);\n  color: #0e253c;\n  font-family: \"Lusail\", \"Tahoma\", sans-serif;\n}\n\n.purchases__header[_ngcontent-%COMP%] {\n  display: flex;\n  height: 88px;\n  align-items: center;\n  justify-content: space-between;\n  padding: 16px 12px 16px 16px;\n  border-bottom: 1px solid rgb(14 37 60 / 10%);\n}\n\n.purchases__title[_ngcontent-%COMP%], \n.purchases__toolbar[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n\n.purchases__title[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0 12px;\n  flex: 0 0 auto;\n  color: #101828;\n  font-size: 24px;\n  font-weight: 600;\n  line-height: 28px;\n  white-space: nowrap;\n}\n\n.purchases__icon[_ngcontent-%COMP%] {\n  display: grid;\n  width: 32px;\n  height: 32px;\n  place-items: center;\n  border: 1px solid #e9eaeb;\n  border-radius: 6px;\n  background: #fff;\n  box-shadow: 0 1px 2px rgb(10 13 18 / 5%);\n  color: #667085;\n}\n\n.purchases__icon[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 18px;\n  height: 18px;\n  fill: none;\n  stroke: currentcolor;\n  stroke-linecap: round;\n  stroke-linejoin: round;\n  stroke-width: 1.7;\n}\n\n.purchases__divider[_ngcontent-%COMP%] {\n  width: 1px;\n  height: 28px;\n  background: rgb(14 37 60 / 10%);\n}\n\n.purchases__expand[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 20px;\n  margin-inline-start: 16px;\n  padding: 0;\n  border: 0;\n  background: transparent;\n  color: #8090a7;\n}\n\n.purchases__expand[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 20px;\n  fill: none;\n  stroke: currentcolor;\n  stroke-linecap: round;\n  stroke-linejoin: round;\n  stroke-width: 1.8;\n}\n\n.purchases__toolbar[_ngcontent-%COMP%] {\n  direction: rtl;\n  gap: 16px;\n}\n\n.purchases__filter[_ngcontent-%COMP%] {\n  display: inline-flex;\n  width: 97px;\n  height: 40px;\n  align-items: center;\n  justify-content: center;\n  gap: 4px;\n  padding: 10px 14px;\n  border: 1px solid #d5d7da;\n  border-radius: 8px;\n  background: #fff;\n  color: #344054;\n  font-size: 12px;\n}\n\n.purchases__filter[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 18px;\n  height: 18px;\n  fill: none;\n  stroke: currentcolor;\n  stroke-linecap: round;\n  stroke-width: 1.7;\n}\n\n.purchases__search[_ngcontent-%COMP%] {\n  position: relative;\n  width: 296px;\n  height: 40px;\n}\n\n.purchases__search[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  padding: 8px 38px 8px 40px;\n  border: 1px solid #d5d7da;\n  border-radius: 8px;\n  outline: 0;\n  font-size: 12px;\n}\n\n.purchases__search[_ngcontent-%COMP%]    > svg[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 10px;\n  right: 12px;\n  width: 20px;\n  height: 20px;\n  fill: none;\n  stroke: #667085;\n  stroke-linecap: round;\n  stroke-width: 1.7;\n}\n\n.purchases__search[_ngcontent-%COMP%]   kbd[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 10px;\n  left: 10px;\n  padding: 2px 7px;\n  border: 1px solid #e3e5e8;\n  border-radius: 4px;\n  background: #fff;\n  color: #98a0ab;\n  font-size: 10px;\n}\n\n.purchases__filters[_ngcontent-%COMP%] {\n  display: flex;\n  height: 62px;\n  align-items: center;\n  justify-content: space-between;\n  padding: 12px 12px 12px 16px;\n  border-bottom: 1px solid rgb(14 37 60 / 10%);\n}\n\n.purchases__filters[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #0e253c;\n  font-size: 16px;\n  font-weight: 600;\n  line-height: 24px;\n}\n\n.purchases__filter-options[_ngcontent-%COMP%] {\n  display: flex;\n  direction: rtl;\n  gap: 20px;\n}\n\n.purchases__filters[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  display: inline-flex;\n  height: 40px;\n  align-items: center;\n  justify-content: center;\n  gap: 12px;\n  min-width: 132px;\n  padding: 10px 14px;\n  border: 1px solid #d5d7da;\n  border-radius: 8px;\n  background: #fff;\n  color: #344054;\n  font-size: 12px;\n}\n\n.purchases__filters[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:last-child {\n  min-width: 116px;\n}\n\n.purchases__filters[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 16px;\n  height: 16px;\n  fill: none;\n  stroke: currentcolor;\n  stroke-linecap: round;\n  stroke-linejoin: round;\n  stroke-width: 1.7;\n}\n\n.purchases__body[_ngcontent-%COMP%] {\n  display: grid;\n  height: 354px;\n  grid-template-columns: minmax(0, 1.1fr) minmax(240px, .9fr);\n  gap: 24px;\n  padding-inline: 28px;\n}\n\n.purchases__metrics[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 354px;\n}\n\n.purchases__metric-grid[_ngcontent-%COMP%] {\n  display: grid;\n  width: 100%;\n  height: 354px;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  grid-template-rows: repeat(3, 118px);\n}\n\n.purchases__metric[_ngcontent-%COMP%] {\n  position: relative;\n  display: grid;\n  width: 100%;\n  height: 118px;\n  align-content: center;\n  padding: 32px 20px;\n  border-bottom: 1px solid #e9eaeb;\n}\n\n.purchases__metric[_ngcontent-%COMP%]:nth-child(odd) {\n  border-left: 1px solid #e9eaeb;\n}\n\n.purchases__metric[_ngcontent-%COMP%]:nth-last-child(-n + 2) {\n  border-bottom: 0;\n}\n\n.purchases__metric[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 36px;\n  left: 20px;\n  color: #7f8ba5;\n}\n\n.purchases__metric[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 28px;\n  height: 28px;\n  fill: none;\n  stroke: currentcolor;\n  stroke-linecap: round;\n  stroke-linejoin: round;\n  stroke-width: 1.7;\n}\n\n.purchases__metric[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  display: block;\n  color: rgb(14 37 60 / 85%);\n  font-size: 12px;\n  font-weight: 500;\n  line-height: 18px;\n}\n\n.purchases__metric[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  display: block;\n  color: #0e253c;\n  font-size: 22px;\n  font-weight: 600;\n  line-height: 32px;\n}\n\n.purchases__chart[_ngcontent-%COMP%] {\n  display: grid;\n  width: 100%;\n  max-width: 310px;\n  height: 354px;\n  place-items: center;\n}\n\n.purchases__donut[_ngcontent-%COMP%] {\n  display: grid;\n  width: min(100%, 310px);\n  aspect-ratio: 1;\n  place-items: center;\n  border-radius: 50%;\n  background: conic-gradient(\n    #63c1e4 0 50%,\n    #e2eaf0 50% 63%,\n    #b9cad6 63% 86%,\n    #0d4261 86% 100%\n  );\n}\n\n.purchases__donut[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  display: grid;\n  width: 56%;\n  aspect-ratio: 1;\n  place-items: center;\n  align-content: center;\n  border-radius: 50%;\n  background: #fff;\n}\n\n.purchases__donut[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #0d4261;\n  font-size: 28px;\n  font-weight: 600;\n  line-height: 36px;\n}\n\n.purchases__donut[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #6d8ca0;\n  font-size: 12px;\n  line-height: 18px;\n}"] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PurchaseStatusComponent, [{
        type: Component,
        args: [{ selector: 'app-purchase-status', template: "<section class=\"purchases\" dir=\"rtl\">\n  <header class=\"purchases__header\">\n    <div class=\"purchases__title\">\n      <span class=\"purchases__icon\" aria-hidden=\"true\">\n        <svg viewBox=\"0 0 24 24\">\n          <path d=\"M20 13.2 12.2 21 3 11.8V3h8.8L20 11.2a1.4 1.4 0 0 1 0 2Z\" />\n          <circle cx=\"7.5\" cy=\"7.5\" r=\"1.2\" />\n        </svg>\n      </span>\n      <h2>\u062D\u0627\u0644\u0629 \u0627\u0644\u0645\u0634\u062A\u0631\u064A\u0627\u062A</h2>\n      <span class=\"purchases__divider\" aria-hidden=\"true\"></span>\n      <button type=\"button\" class=\"purchases__expand\" aria-label=\"\u062A\u0643\u0628\u064A\u0631\">\n        <svg viewBox=\"0 0 20 20\" aria-hidden=\"true\">\n          <path d=\"M11.5 3H17v5.5M17 3l-6.5 6.5M8.5 17H3v-5.5M3 17l6.5-6.5\" />\n        </svg>\n      </button>\n    </div>\n\n    <div class=\"purchases__toolbar\">\n      <button type=\"button\" class=\"purchases__filter\">\n        <svg viewBox=\"0 0 20 20\" aria-hidden=\"true\">\n          <path d=\"M3 5h14M5.5 10h9M8 15h4\" />\n        </svg>\n        \u0627\u0644\u062A\u0635\u0641\u064A\u0629\n      </button>\n      <label class=\"purchases__search\">\n        <input type=\"search\" placeholder=\"\u0628\u062D\u062B\" aria-label=\"\u0628\u062D\u062B\" />\n        <svg viewBox=\"0 0 20 20\" aria-hidden=\"true\">\n          <circle cx=\"8.5\" cy=\"8.5\" r=\"5.5\" />\n          <path d=\"m13 13 4 4\" />\n        </svg>\n        <kbd>K</kbd>\n      </label>\n    </div>\n  </header>\n\n  <div class=\"purchases__filters\">\n    <h3>\u062D\u0627\u0644\u0629 \u0627\u0644\u0645\u0634\u062A\u0631\u064A\u0627\u062A</h3>\n    <div class=\"purchases__filter-options\">\n      <button type=\"button\">\n        \u062C\u0645\u064A\u0639 \u0627\u0644\u0641\u0626\u0627\u062A\n        <svg viewBox=\"0 0 16 16\" aria-hidden=\"true\"><path d=\"m3 6 5 5 5-5\" /></svg>\n      </button>\n      <button type=\"button\">\n        \u064A\u0648\u0646\u064A\u0648 2025\n        <svg viewBox=\"0 0 16 16\" aria-hidden=\"true\">\n          <rect x=\"2\" y=\"3.5\" width=\"12\" height=\"10.5\" rx=\"1.5\" />\n          <path d=\"M5 2v3M11 2v3M2 7h12\" />\n        </svg>\n      </button>\n    </div>\n  </div>\n\n  <div class=\"purchases__body\">\n    <div class=\"purchases__metrics\">\n      <div class=\"purchases__metric-grid\">\n        @for (metric of metrics; track metric.label) {\n          <div class=\"purchases__metric\">\n            <span aria-hidden=\"true\">\n              @switch (metric.icon) {\n                @case ('new') { <svg viewBox=\"0 0 24 24\"><path d=\"m4 20 5-14 9 9-14 5Z\"/><path d=\"M14 4h.01M19 7h.01M17 2l-2 3M21 12l-3-1M10 2l1 3\"/></svg> }\n                @case ('all') { <svg viewBox=\"0 0 24 24\"><rect x=\"3\" y=\"3\" width=\"7\" height=\"7\" rx=\"1\"/><rect x=\"14\" y=\"3\" width=\"7\" height=\"7\" rx=\"1\"/><rect x=\"3\" y=\"14\" width=\"7\" height=\"7\" rx=\"1\"/><rect x=\"14\" y=\"14\" width=\"7\" height=\"7\" rx=\"1\"/></svg> }\n                @case ('sent') { <svg viewBox=\"0 0 24 24\"><path d=\"M3 6h12v11H3zM15 10h4l3 3v4h-7\"/><circle cx=\"7\" cy=\"18\" r=\"2\"/><circle cx=\"18\" cy=\"18\" r=\"2\"/></svg> }\n                @case ('pending') { <svg viewBox=\"0 0 24 24\"><circle cx=\"12\" cy=\"13\" r=\"8\"/><path d=\"M9 2h6M12 5V2M12 9v5l3 2\"/></svg> }\n                @case ('cancelled') { <svg viewBox=\"0 0 24 24\"><path d=\"M6 8a7 7 0 1 1-1 7M6 8V3M6 8h5\"/><path d=\"m10 11 5 5m0-5-5 5\"/></svg> }\n                @case ('delivered') { <svg viewBox=\"0 0 24 24\"><path d=\"m12 2 3 2 4-.2.8 3.8L22 11l-2.2 3.4-.8 3.8-4-.2-3 2-3-2-4 .2-.8-3.8L2 11l2.2-3.4.8-3.8 4 .2 3-2Z\"/><path d=\"m8 11 2.5 2.5L16 8\"/></svg> }\n              }\n            </span>\n            <small>{{ metric.label }}</small>\n            <strong>{{ metric.value }}</strong>\n          </div>\n        }\n      </div>\n    </div>\n\n    <div class=\"purchases__chart\" aria-label=\"350 \u0643\u0644 \u0627\u0644\u0645\u0639\u0627\u0645\u0644\u0627\u062A\">\n      <div class=\"purchases__donut\">\n        <div>\n          <strong>350</strong>\n          <span>\u0643\u0644 \u0627\u0644\u0645\u0639\u0627\u0645\u0644\u0627\u062A</span>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n", styles: [":host {\n  display: block;\n  width: 100%;\n  min-width: 0;\n  height: 504px;\n}\n\n* {\n  box-sizing: border-box;\n}\n\n.purchases {\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n  border: 1px solid rgb(14 37 60 / 10%);\n  border-radius: 16px;\n  background: #fff;\n  box-shadow: 0 1px 3px rgb(0 0 0 / 5%);\n  color: #0e253c;\n  font-family: \"Lusail\", \"Tahoma\", sans-serif;\n}\n\n.purchases__header {\n  display: flex;\n  height: 88px;\n  align-items: center;\n  justify-content: space-between;\n  padding: 16px 12px 16px 16px;\n  border-bottom: 1px solid rgb(14 37 60 / 10%);\n}\n\n.purchases__title,\n.purchases__toolbar {\n  display: flex;\n  align-items: center;\n}\n\n.purchases__title h2 {\n  margin: 0 12px;\n  flex: 0 0 auto;\n  color: #101828;\n  font-size: 24px;\n  font-weight: 600;\n  line-height: 28px;\n  white-space: nowrap;\n}\n\n.purchases__icon {\n  display: grid;\n  width: 32px;\n  height: 32px;\n  place-items: center;\n  border: 1px solid #e9eaeb;\n  border-radius: 6px;\n  background: #fff;\n  box-shadow: 0 1px 2px rgb(10 13 18 / 5%);\n  color: #667085;\n}\n\n.purchases__icon svg {\n  width: 18px;\n  height: 18px;\n  fill: none;\n  stroke: currentcolor;\n  stroke-linecap: round;\n  stroke-linejoin: round;\n  stroke-width: 1.7;\n}\n\n.purchases__divider {\n  width: 1px;\n  height: 28px;\n  background: rgb(14 37 60 / 10%);\n}\n\n.purchases__expand {\n  width: 20px;\n  height: 20px;\n  margin-inline-start: 16px;\n  padding: 0;\n  border: 0;\n  background: transparent;\n  color: #8090a7;\n}\n\n.purchases__expand svg {\n  width: 20px;\n  height: 20px;\n  fill: none;\n  stroke: currentcolor;\n  stroke-linecap: round;\n  stroke-linejoin: round;\n  stroke-width: 1.8;\n}\n\n.purchases__toolbar {\n  direction: rtl;\n  gap: 16px;\n}\n\n.purchases__filter {\n  display: inline-flex;\n  width: 97px;\n  height: 40px;\n  align-items: center;\n  justify-content: center;\n  gap: 4px;\n  padding: 10px 14px;\n  border: 1px solid #d5d7da;\n  border-radius: 8px;\n  background: #fff;\n  color: #344054;\n  font-size: 12px;\n}\n\n.purchases__filter svg {\n  width: 18px;\n  height: 18px;\n  fill: none;\n  stroke: currentcolor;\n  stroke-linecap: round;\n  stroke-width: 1.7;\n}\n\n.purchases__search {\n  position: relative;\n  width: 296px;\n  height: 40px;\n}\n\n.purchases__search input {\n  width: 100%;\n  height: 100%;\n  padding: 8px 38px 8px 40px;\n  border: 1px solid #d5d7da;\n  border-radius: 8px;\n  outline: 0;\n  font-size: 12px;\n}\n\n.purchases__search > svg {\n  position: absolute;\n  top: 10px;\n  right: 12px;\n  width: 20px;\n  height: 20px;\n  fill: none;\n  stroke: #667085;\n  stroke-linecap: round;\n  stroke-width: 1.7;\n}\n\n.purchases__search kbd {\n  position: absolute;\n  top: 10px;\n  left: 10px;\n  padding: 2px 7px;\n  border: 1px solid #e3e5e8;\n  border-radius: 4px;\n  background: #fff;\n  color: #98a0ab;\n  font-size: 10px;\n}\n\n.purchases__filters {\n  display: flex;\n  height: 62px;\n  align-items: center;\n  justify-content: space-between;\n  padding: 12px 12px 12px 16px;\n  border-bottom: 1px solid rgb(14 37 60 / 10%);\n}\n\n.purchases__filters h3 {\n  margin: 0;\n  color: #0e253c;\n  font-size: 16px;\n  font-weight: 600;\n  line-height: 24px;\n}\n\n.purchases__filter-options {\n  display: flex;\n  direction: rtl;\n  gap: 20px;\n}\n\n.purchases__filters button {\n  display: inline-flex;\n  height: 40px;\n  align-items: center;\n  justify-content: center;\n  gap: 12px;\n  min-width: 132px;\n  padding: 10px 14px;\n  border: 1px solid #d5d7da;\n  border-radius: 8px;\n  background: #fff;\n  color: #344054;\n  font-size: 12px;\n}\n\n.purchases__filters button:last-child {\n  min-width: 116px;\n}\n\n.purchases__filters svg {\n  width: 16px;\n  height: 16px;\n  fill: none;\n  stroke: currentcolor;\n  stroke-linecap: round;\n  stroke-linejoin: round;\n  stroke-width: 1.7;\n}\n\n.purchases__body {\n  display: grid;\n  height: 354px;\n  grid-template-columns: minmax(0, 1.1fr) minmax(240px, .9fr);\n  gap: 24px;\n  padding-inline: 28px;\n}\n\n.purchases__metrics {\n  width: 100%;\n  height: 354px;\n}\n\n.purchases__metric-grid {\n  display: grid;\n  width: 100%;\n  height: 354px;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  grid-template-rows: repeat(3, 118px);\n}\n\n.purchases__metric {\n  position: relative;\n  display: grid;\n  width: 100%;\n  height: 118px;\n  align-content: center;\n  padding: 32px 20px;\n  border-bottom: 1px solid #e9eaeb;\n}\n\n.purchases__metric:nth-child(odd) {\n  border-left: 1px solid #e9eaeb;\n}\n\n.purchases__metric:nth-last-child(-n + 2) {\n  border-bottom: 0;\n}\n\n.purchases__metric > span {\n  position: absolute;\n  top: 36px;\n  left: 20px;\n  color: #7f8ba5;\n}\n\n.purchases__metric > span svg {\n  width: 28px;\n  height: 28px;\n  fill: none;\n  stroke: currentcolor;\n  stroke-linecap: round;\n  stroke-linejoin: round;\n  stroke-width: 1.7;\n}\n\n.purchases__metric small {\n  display: block;\n  color: rgb(14 37 60 / 85%);\n  font-size: 12px;\n  font-weight: 500;\n  line-height: 18px;\n}\n\n.purchases__metric strong {\n  display: block;\n  color: #0e253c;\n  font-size: 22px;\n  font-weight: 600;\n  line-height: 32px;\n}\n\n.purchases__chart {\n  display: grid;\n  width: 100%;\n  max-width: 310px;\n  height: 354px;\n  place-items: center;\n}\n\n.purchases__donut {\n  display: grid;\n  width: min(100%, 310px);\n  aspect-ratio: 1;\n  place-items: center;\n  border-radius: 50%;\n  background: conic-gradient(\n    #63c1e4 0 50%,\n    #e2eaf0 50% 63%,\n    #b9cad6 63% 86%,\n    #0d4261 86% 100%\n  );\n}\n\n.purchases__donut > div {\n  display: grid;\n  width: 56%;\n  aspect-ratio: 1;\n  place-items: center;\n  align-content: center;\n  border-radius: 50%;\n  background: #fff;\n}\n\n.purchases__donut strong {\n  color: #0d4261;\n  font-size: 28px;\n  font-weight: 600;\n  line-height: 36px;\n}\n\n.purchases__donut span {\n  color: #6d8ca0;\n  font-size: 12px;\n  line-height: 18px;\n}\n"] }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(PurchaseStatusComponent, { className: "PurchaseStatusComponent", filePath: "src/app/components/dashboard/purchase-status/purchase-status.component.ts", lineNumber: 8 }); })();
