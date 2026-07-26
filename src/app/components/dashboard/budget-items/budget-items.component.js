import { Component } from '@angular/core';
import * as i0 from "@angular/core";
const _forTrack0 = ($index, $item) => $item.label;
function BudgetItemsComponent_For_50_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵdomElementStart(0, "div", 21)(1, "div", 23);
    i0.ɵɵdomElement(2, "i")(3, "b");
    i0.ɵɵdomElementEnd();
    i0.ɵɵdomElementStart(4, "span");
    i0.ɵɵtext(5);
    i0.ɵɵdomElementEnd()();
} if (rf & 2) {
    const month_r1 = ctx.$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵstyleProp("height", month_r1.base, "%");
    i0.ɵɵadvance();
    i0.ɵɵstyleProp("height", month_r1.top, "%");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(month_r1.label);
} }
export class BudgetItemsComponent {
    months = [
        { label: 'يناير', base: 42, top: 38 },
        { label: 'فبراير', base: 30, top: 28 },
        { label: 'مارس', base: 5, top: 35 },
        { label: 'أبريل', base: 25, top: 15 },
        { label: 'مايو', base: 31, top: 27 },
        { label: 'يونيو', base: 53, top: 28 },
        { label: 'يوليو', base: 53, top: 59 },
        { label: 'أغسطس', base: 25, top: 12 },
        { label: 'سبتمبر', base: 7, top: 11 },
        { label: 'أكتوبر', base: 40, top: 59 },
        { label: 'نوفمبر', base: 15, top: 23 },
        { label: 'ديسمبر', base: 29, top: 43 },
    ];
    static ɵfac = function BudgetItemsComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || BudgetItemsComponent)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: BudgetItemsComponent, selectors: [["app-budget-items"]], decls: 55, vars: 0, consts: [["dir", "rtl", 1, "budget"], [1, "budget__header"], [1, "budget__title"], ["aria-hidden", "true", 1, "budget__icon"], ["viewBox", "0 0 24 24"], ["d", "M5 7h14v13H5zM8 4h8v3M9 11h2v2H9zm4 0h2v2h-2z"], ["type", "button", "aria-label", "\u062A\u0643\u0628\u064A\u0631 \u0628\u0646\u0648\u062F \u0627\u0644\u0645\u0648\u0627\u0632\u0646\u0629"], ["d", "M14 5h5v5M19 5l-6 6M10 19H5v-5M5 19l6-6"], [1, "budget__toolbar"], ["type", "button", 1, "budget__filter"], ["d", "M4 6h16M7 12h10m-7 6h4"], [1, "budget__search"], [1, "visually-hidden"], ["type", "search", "placeholder", "\u0628\u062D\u062B"], ["cx", "11", "cy", "11", "r", "7"], ["d", "m16 16 4 4"], [1, "budget__content"], [1, "budget__heading"], [1, "budget__chart"], [1, "budget__axis"], [1, "budget__plot"], [1, "budget__column"], [1, "budget__legend"], [1, "budget__bar"]], template: function BudgetItemsComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵdomElementStart(0, "section", 0)(1, "header", 1)(2, "div", 2)(3, "span", 3);
            i0.ɵɵnamespaceSVG();
            i0.ɵɵdomElementStart(4, "svg", 4);
            i0.ɵɵdomElement(5, "path", 5);
            i0.ɵɵdomElementEnd()();
            i0.ɵɵnamespaceHTML();
            i0.ɵɵdomElementStart(6, "h2");
            i0.ɵɵtext(7, "\u0627\u0644\u0628\u0646\u0648\u062F");
            i0.ɵɵdomElementEnd();
            i0.ɵɵdomElement(8, "i");
            i0.ɵɵdomElementStart(9, "button", 6);
            i0.ɵɵnamespaceSVG();
            i0.ɵɵdomElementStart(10, "svg", 4);
            i0.ɵɵdomElement(11, "path", 7);
            i0.ɵɵdomElementEnd()()();
            i0.ɵɵnamespaceHTML();
            i0.ɵɵdomElementStart(12, "div", 8)(13, "button", 9);
            i0.ɵɵtext(14, "\u0627\u0644\u062A\u0635\u0641\u064A\u0629 ");
            i0.ɵɵnamespaceSVG();
            i0.ɵɵdomElementStart(15, "svg", 4);
            i0.ɵɵdomElement(16, "path", 10);
            i0.ɵɵdomElementEnd()();
            i0.ɵɵnamespaceHTML();
            i0.ɵɵdomElementStart(17, "label", 11)(18, "span", 12);
            i0.ɵɵtext(19, "\u0627\u0644\u0628\u062D\u062B \u0641\u064A \u0627\u0644\u0628\u0646\u0648\u062F");
            i0.ɵɵdomElementEnd();
            i0.ɵɵdomElement(20, "input", 13);
            i0.ɵɵnamespaceSVG();
            i0.ɵɵdomElementStart(21, "svg", 4);
            i0.ɵɵdomElement(22, "circle", 14)(23, "path", 15);
            i0.ɵɵdomElementEnd();
            i0.ɵɵnamespaceHTML();
            i0.ɵɵdomElementStart(24, "kbd");
            i0.ɵɵtext(25, "K");
            i0.ɵɵdomElementEnd()()()();
            i0.ɵɵdomElementStart(26, "div", 16)(27, "div", 17)(28, "h3");
            i0.ɵɵtext(29, "\u0628\u0646\u0648\u062F \u0627\u0644\u0645\u0648\u0627\u0632\u0646\u0629");
            i0.ɵɵdomElementEnd();
            i0.ɵɵdomElementStart(30, "p");
            i0.ɵɵtext(31, "\u0625\u062C\u0645\u0627\u0644\u064A \u0627\u0644\u0625\u064A\u0631\u0627\u062F\u0627\u062A: ");
            i0.ɵɵdomElementStart(32, "strong");
            i0.ɵɵtext(33, "$89,235.89");
            i0.ɵɵdomElementEnd()()();
            i0.ɵɵdomElementStart(34, "div", 18)(35, "div", 19)(36, "span");
            i0.ɵɵtext(37, "1,000.00");
            i0.ɵɵdomElementEnd();
            i0.ɵɵdomElementStart(38, "span");
            i0.ɵɵtext(39, "800.00");
            i0.ɵɵdomElementEnd();
            i0.ɵɵdomElementStart(40, "span");
            i0.ɵɵtext(41, "600.00");
            i0.ɵɵdomElementEnd();
            i0.ɵɵdomElementStart(42, "span");
            i0.ɵɵtext(43, "400.00");
            i0.ɵɵdomElementEnd();
            i0.ɵɵdomElementStart(44, "span");
            i0.ɵɵtext(45, "200.00");
            i0.ɵɵdomElementEnd();
            i0.ɵɵdomElementStart(46, "span");
            i0.ɵɵtext(47, "0");
            i0.ɵɵdomElementEnd()();
            i0.ɵɵdomElementStart(48, "div", 20);
            i0.ɵɵrepeaterCreate(49, BudgetItemsComponent_For_50_Template, 6, 5, "div", 21, _forTrack0);
            i0.ɵɵdomElementEnd()();
            i0.ɵɵdomElementStart(51, "div", 22);
            i0.ɵɵdomElement(52, "i");
            i0.ɵɵdomElementStart(53, "span");
            i0.ɵɵtext(54, "2025");
            i0.ɵɵdomElementEnd()()()();
        } if (rf & 2) {
            i0.ɵɵadvance(49);
            i0.ɵɵrepeater(ctx.months);
        } }, styles: ["[_nghost-%COMP%] { display: block; width: 100%; min-width: 0; height: 476px; }\n*[_ngcontent-%COMP%] { box-sizing: border-box; }\n.budget[_ngcontent-%COMP%] {\n  width: 100%; height: 100%; overflow: hidden; border: 1px solid rgb(14 37 60 / 10%);\n  border-radius: 16px; background: #fff; box-shadow: 0 1px 3px rgb(0 0 0 / 5%);\n  color: #0e253c; font-family: \"Lusail\", \"Tahoma\", sans-serif;\n}\n.budget__header[_ngcontent-%COMP%] {\n  display: flex; height: 88px; align-items: center; justify-content: space-between;\n  padding: 16px 12px 16px 16px; border-bottom: 1px solid rgb(14 37 60 / 10%);\n}\n.budget__title[_ngcontent-%COMP%], .budget__toolbar[_ngcontent-%COMP%] { display: flex; align-items: center; }\n.budget__title[_ngcontent-%COMP%] { gap: 14px; }\n.budget__title[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] { margin: 0; color: #101828; font-size: 24px; font-weight: 600; line-height: 28px; }\n.budget__title[_ngcontent-%COMP%]    > i[_ngcontent-%COMP%] { width: 1px; height: 32px; background: rgb(14 37 60 / 10%); }\n.budget__icon[_ngcontent-%COMP%] {\n  display: grid; width: 32px; height: 32px; place-items: center; border: 1px solid #e9eaeb;\n  border-radius: 6px; box-shadow: 0 1px 2px rgb(10 13 18 / 5%); color: #667085;\n}\nsvg[_ngcontent-%COMP%] { width: 20px; height: 20px; fill: none; stroke: currentcolor; stroke-linecap: round; stroke-linejoin: round; stroke-width: 1.7; }\n.budget__title[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] { display: grid; width: 24px; height: 24px; padding: 0; place-items: center; border: 0; background: transparent; color: #8090a7; }\n.budget__toolbar[_ngcontent-%COMP%] { min-width: 0; gap: 16px; }\n.budget__filter[_ngcontent-%COMP%] {\n  display: inline-flex; width: 97px; height: 40px; align-items: center; justify-content: center; gap: 6px;\n  border: 1px solid #d5d7da; border-radius: 8px; background: #fff; color: #344054; font-size: 12px;\n  box-shadow: 0 1px 2px rgb(10 13 18 / 5%);\n}\n.budget__search[_ngcontent-%COMP%] { position: relative; width: 296px; height: 40px; }\n.budget__search[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] { width: 100%; height: 100%; padding: 8px 40px; border: 1px solid #d5d7da; border-radius: 8px; outline: 0; }\n.budget__search[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] { position: absolute; top: 10px; right: 12px; color: #667085; }\n.budget__search[_ngcontent-%COMP%]   kbd[_ngcontent-%COMP%] {\n  position: absolute; top: 10px; left: 10px; padding: 2px 7px; border: 1px solid #e3e5e8;\n  border-radius: 4px; background: #fff; color: #98a0ab; font-size: 10px;\n}\n.budget__content[_ngcontent-%COMP%] { height: 388px; padding: 20px 20px 12px; }\n.budget__heading[_ngcontent-%COMP%] { display: flex; height: 28px; align-items: center; justify-content: space-between; }\n.budget__heading[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] { margin: 0; font-size: 16px; font-weight: 600; }\n.budget__heading[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] { margin: 0; color: #526173; font-size: 11px; }\n.budget__heading[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] { color: #0e253c; direction: ltr; font-family: Arial, sans-serif; font-size: 13px; }\n.budget__chart[_ngcontent-%COMP%] { display: flex; height: 284px; direction: ltr; }\n.budget__axis[_ngcontent-%COMP%] {\n  display: flex; width: 68px; height: 250px; flex: 0 0 68px; flex-direction: column;\n  justify-content: space-between; padding-top: 10px; color: #52677b; font-family: Arial, sans-serif; font-size: 11px;\n}\n.budget__plot[_ngcontent-%COMP%] {\n  display: grid; min-width: 0; flex: 1; direction: rtl;\n  grid-template-columns: repeat(12, minmax(18px, 1fr));\n  border-bottom: 1px solid #e5e9ee;\n  background: repeating-linear-gradient(to bottom, transparent 0, transparent 49px, #dce3e9 50px);\n}\n.budget__column[_ngcontent-%COMP%] { display: flex; min-width: 0; flex-direction: column; align-items: center; justify-content: flex-end; }\n.budget__bar[_ngcontent-%COMP%] { display: flex; width: 24px; height: 250px; flex-direction: column-reverse; justify-content: flex-start; }\n.budget__bar[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], .budget__bar[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] { display: block; width: 100%; flex-shrink: 0; }\n.budget__bar[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] { background: #bdd5f5; }\n.budget__bar[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] { background: #83aceb; }\n.budget__column[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] { height: 34px; padding-top: 8px; color: #526173; font-size: 10px; white-space: nowrap; }\n.budget__legend[_ngcontent-%COMP%] { display: flex; height: 35px; align-items: center; justify-content: center; gap: 8px; direction: ltr; color: #526173; font-family: Arial, sans-serif; font-size: 12px; }\n.budget__legend[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] { width: 4px; height: 4px; border-radius: 50%; background: #0e253c; }\n@media (max-width: 1600px) {\n  .budget__search[_ngcontent-%COMP%] { width: auto; min-width: 0; flex: 1 1 auto; }\n  .budget__toolbar[_ngcontent-%COMP%] { flex: 1 1 auto; }\n  .budget__content[_ngcontent-%COMP%] { padding-inline: 14px; }\n  .budget__bar[_ngcontent-%COMP%] { width: 20px; }\n}"] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(BudgetItemsComponent, [{
        type: Component,
        args: [{ selector: 'app-budget-items', template: "<section class=\"budget\" dir=\"rtl\">\n  <header class=\"budget__header\">\n    <div class=\"budget__title\">\n      <span class=\"budget__icon\" aria-hidden=\"true\">\n        <svg viewBox=\"0 0 24 24\"><path d=\"M5 7h14v13H5zM8 4h8v3M9 11h2v2H9zm4 0h2v2h-2z\"/></svg>\n      </span>\n      <h2>\u0627\u0644\u0628\u0646\u0648\u062F</h2><i></i>\n      <button type=\"button\" aria-label=\"\u062A\u0643\u0628\u064A\u0631 \u0628\u0646\u0648\u062F \u0627\u0644\u0645\u0648\u0627\u0632\u0646\u0629\"><svg viewBox=\"0 0 24 24\"><path d=\"M14 5h5v5M19 5l-6 6M10 19H5v-5M5 19l6-6\"/></svg></button>\n    </div>\n    <div class=\"budget__toolbar\">\n      <button type=\"button\" class=\"budget__filter\">\u0627\u0644\u062A\u0635\u0641\u064A\u0629\n        <svg viewBox=\"0 0 24 24\"><path d=\"M4 6h16M7 12h10m-7 6h4\"/></svg>\n      </button>\n      <label class=\"budget__search\"><span class=\"visually-hidden\">\u0627\u0644\u0628\u062D\u062B \u0641\u064A \u0627\u0644\u0628\u0646\u0648\u062F</span><input type=\"search\" placeholder=\"\u0628\u062D\u062B\" />\n        <svg viewBox=\"0 0 24 24\"><circle cx=\"11\" cy=\"11\" r=\"7\"/><path d=\"m16 16 4 4\"/></svg><kbd>K</kbd>\n      </label>\n    </div>\n  </header>\n  <div class=\"budget__content\">\n    <div class=\"budget__heading\"><h3>\u0628\u0646\u0648\u062F \u0627\u0644\u0645\u0648\u0627\u0632\u0646\u0629</h3><p>\u0625\u062C\u0645\u0627\u0644\u064A \u0627\u0644\u0625\u064A\u0631\u0627\u062F\u0627\u062A: <strong>$89,235.89</strong></p></div>\n    <div class=\"budget__chart\">\n      <div class=\"budget__axis\"><span>1,000.00</span><span>800.00</span><span>600.00</span><span>400.00</span><span>200.00</span><span>0</span></div>\n      <div class=\"budget__plot\">\n        @for (month of months; track month.label) {\n          <div class=\"budget__column\">\n            <div class=\"budget__bar\"><i [style.height.%]=\"month.base\"></i><b [style.height.%]=\"month.top\"></b></div>\n            <span>{{ month.label }}</span>\n          </div>\n        }\n      </div>\n    </div>\n    <div class=\"budget__legend\"><i></i><span>2025</span></div>\n  </div>\n</section>\n", styles: [":host { display: block; width: 100%; min-width: 0; height: 476px; }\n* { box-sizing: border-box; }\n.budget {\n  width: 100%; height: 100%; overflow: hidden; border: 1px solid rgb(14 37 60 / 10%);\n  border-radius: 16px; background: #fff; box-shadow: 0 1px 3px rgb(0 0 0 / 5%);\n  color: #0e253c; font-family: \"Lusail\", \"Tahoma\", sans-serif;\n}\n.budget__header {\n  display: flex; height: 88px; align-items: center; justify-content: space-between;\n  padding: 16px 12px 16px 16px; border-bottom: 1px solid rgb(14 37 60 / 10%);\n}\n.budget__title, .budget__toolbar { display: flex; align-items: center; }\n.budget__title { gap: 14px; }\n.budget__title h2 { margin: 0; color: #101828; font-size: 24px; font-weight: 600; line-height: 28px; }\n.budget__title > i { width: 1px; height: 32px; background: rgb(14 37 60 / 10%); }\n.budget__icon {\n  display: grid; width: 32px; height: 32px; place-items: center; border: 1px solid #e9eaeb;\n  border-radius: 6px; box-shadow: 0 1px 2px rgb(10 13 18 / 5%); color: #667085;\n}\nsvg { width: 20px; height: 20px; fill: none; stroke: currentcolor; stroke-linecap: round; stroke-linejoin: round; stroke-width: 1.7; }\n.budget__title button { display: grid; width: 24px; height: 24px; padding: 0; place-items: center; border: 0; background: transparent; color: #8090a7; }\n.budget__toolbar { min-width: 0; gap: 16px; }\n.budget__filter {\n  display: inline-flex; width: 97px; height: 40px; align-items: center; justify-content: center; gap: 6px;\n  border: 1px solid #d5d7da; border-radius: 8px; background: #fff; color: #344054; font-size: 12px;\n  box-shadow: 0 1px 2px rgb(10 13 18 / 5%);\n}\n.budget__search { position: relative; width: 296px; height: 40px; }\n.budget__search input { width: 100%; height: 100%; padding: 8px 40px; border: 1px solid #d5d7da; border-radius: 8px; outline: 0; }\n.budget__search svg { position: absolute; top: 10px; right: 12px; color: #667085; }\n.budget__search kbd {\n  position: absolute; top: 10px; left: 10px; padding: 2px 7px; border: 1px solid #e3e5e8;\n  border-radius: 4px; background: #fff; color: #98a0ab; font-size: 10px;\n}\n.budget__content { height: 388px; padding: 20px 20px 12px; }\n.budget__heading { display: flex; height: 28px; align-items: center; justify-content: space-between; }\n.budget__heading h3 { margin: 0; font-size: 16px; font-weight: 600; }\n.budget__heading p { margin: 0; color: #526173; font-size: 11px; }\n.budget__heading strong { color: #0e253c; direction: ltr; font-family: Arial, sans-serif; font-size: 13px; }\n.budget__chart { display: flex; height: 284px; direction: ltr; }\n.budget__axis {\n  display: flex; width: 68px; height: 250px; flex: 0 0 68px; flex-direction: column;\n  justify-content: space-between; padding-top: 10px; color: #52677b; font-family: Arial, sans-serif; font-size: 11px;\n}\n.budget__plot {\n  display: grid; min-width: 0; flex: 1; direction: rtl;\n  grid-template-columns: repeat(12, minmax(18px, 1fr));\n  border-bottom: 1px solid #e5e9ee;\n  background: repeating-linear-gradient(to bottom, transparent 0, transparent 49px, #dce3e9 50px);\n}\n.budget__column { display: flex; min-width: 0; flex-direction: column; align-items: center; justify-content: flex-end; }\n.budget__bar { display: flex; width: 24px; height: 250px; flex-direction: column-reverse; justify-content: flex-start; }\n.budget__bar i, .budget__bar b { display: block; width: 100%; flex-shrink: 0; }\n.budget__bar i { background: #bdd5f5; }\n.budget__bar b { background: #83aceb; }\n.budget__column > span { height: 34px; padding-top: 8px; color: #526173; font-size: 10px; white-space: nowrap; }\n.budget__legend { display: flex; height: 35px; align-items: center; justify-content: center; gap: 8px; direction: ltr; color: #526173; font-family: Arial, sans-serif; font-size: 12px; }\n.budget__legend i { width: 4px; height: 4px; border-radius: 50%; background: #0e253c; }\n@media (max-width: 1600px) {\n  .budget__search { width: auto; min-width: 0; flex: 1 1 auto; }\n  .budget__toolbar { flex: 1 1 auto; }\n  .budget__content { padding-inline: 14px; }\n  .budget__bar { width: 20px; }\n}\n"] }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(BudgetItemsComponent, { className: "BudgetItemsComponent", filePath: "src/app/components/dashboard/budget-items/budget-items.component.ts", lineNumber: 8 }); })();
