import { Component } from '@angular/core';
import * as i0 from "@angular/core";
const _forTrack0 = ($index, $item) => $item.id;
function ContractsTableComponent_For_40_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵdomElementStart(0, "tr")(1, "td", 18);
    i0.ɵɵtext(2);
    i0.ɵɵdomElementEnd();
    i0.ɵɵdomElementStart(3, "td")(4, "span", 19)(5, "b");
    i0.ɵɵtext(6);
    i0.ɵɵdomElementEnd();
    i0.ɵɵtext(7);
    i0.ɵɵdomElementEnd()();
    i0.ɵɵdomElementStart(8, "td");
    i0.ɵɵtext(9);
    i0.ɵɵdomElementEnd();
    i0.ɵɵdomElementStart(10, "td")(11, "span", 20);
    i0.ɵɵtext(12);
    i0.ɵɵdomElementEnd();
    i0.ɵɵdomElementStart(13, "span", 21);
    i0.ɵɵdomElement(14, "i");
    i0.ɵɵdomElementEnd()();
    i0.ɵɵdomElementStart(15, "td")(16, "button", 22);
    i0.ɵɵnamespaceSVG();
    i0.ɵɵdomElementStart(17, "svg", 4);
    i0.ɵɵdomElement(18, "circle", 23)(19, "circle", 24)(20, "circle", 25);
    i0.ɵɵdomElementEnd()()()();
} if (rf & 2) {
    const row_r1 = ctx.$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(row_r1.id);
    i0.ɵɵadvance(3);
    i0.ɵɵclassMap(i0.ɵɵinterpolate1("contracts__logo ", row_r1.logoClass));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(row_r1.logo);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(row_r1.supplier);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(row_r1.date);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1("", row_r1.progress, "%");
    i0.ɵɵadvance(2);
    i0.ɵɵstyleProp("width", row_r1.progress, "%");
} }
export class ContractsTableComponent {
    rows = [
        { id: 'BDRS/2016/019/0008', supplier: 'البنك الوطني القطري', logo: '✣', logoClass: 'contracts__logo--bank', date: '22 يناير 2025', progress: 20 },
        { id: 'BDRS/2016/019/0009', supplier: 'أوريدو قطر', logo: 'O', logoClass: 'contracts__logo--ooredoo', date: '20 يناير 2025', progress: 50 },
        { id: 'BDRS/2016/019/0010', supplier: 'مصانع قطر', logo: 'ق', logoClass: 'contracts__logo--factory', date: '24 يناير 2025', progress: 80 },
        { id: 'BDRS/2016/019/0011', supplier: 'وقود قطر', logo: '✦', logoClass: 'contracts__logo--woqod', date: '26 يناير 2025', progress: 10 },
    ];
    static ɵfac = function ContractsTableComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || ContractsTableComponent)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ContractsTableComponent, selectors: [["app-contracts-table"]], decls: 48, vars: 0, consts: [["dir", "rtl", 1, "contracts"], [1, "contracts__header"], [1, "contracts__title"], ["aria-hidden", "true", 1, "contracts__icon"], ["viewBox", "0 0 24 24"], ["d", "m5 8 7-4 7 4-7 4-7-4Zm0 4 7 4 7-4"], ["aria-hidden", "true"], ["type", "button", "aria-label", "\u062A\u0643\u0628\u064A\u0631 \u062C\u062F\u0648\u0644 \u0627\u0644\u0639\u0642\u0648\u062F"], ["d", "M14 5h5v5M19 5l-6 6M10 19H5v-5M5 19l6-6"], [1, "contracts__toolbar"], ["type", "button", 1, "contracts__filter"], ["d", "M4 6h16M7 12h10m-7 6h4"], [1, "contracts__search"], [1, "visually-hidden"], ["type", "search", "placeholder", "\u0628\u062D\u062B"], ["cx", "11", "cy", "11", "r", "7"], ["d", "m16 16 4 4"], [1, "contracts__scrollbar"], [1, "contracts__id"], [1, "contracts__supplier"], [1, "contracts__progress-value"], [1, "contracts__progress"], ["type", "button", "aria-label", "\u0627\u0644\u0645\u0632\u064A\u062F", 1, "contracts__more"], ["cx", "12", "cy", "5", "r", "1"], ["cx", "12", "cy", "12", "r", "1"], ["cx", "12", "cy", "19", "r", "1"]], template: function ContractsTableComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵdomElementStart(0, "section", 0)(1, "header", 1)(2, "div", 2)(3, "span", 3);
            i0.ɵɵnamespaceSVG();
            i0.ɵɵdomElementStart(4, "svg", 4);
            i0.ɵɵdomElement(5, "path", 5);
            i0.ɵɵdomElementEnd()();
            i0.ɵɵnamespaceHTML();
            i0.ɵɵdomElementStart(6, "h2");
            i0.ɵɵtext(7, "\u0627\u0644\u0639\u0642\u0648\u062F");
            i0.ɵɵdomElementEnd();
            i0.ɵɵdomElement(8, "i", 6);
            i0.ɵɵdomElementStart(9, "button", 7);
            i0.ɵɵnamespaceSVG();
            i0.ɵɵdomElementStart(10, "svg", 4);
            i0.ɵɵdomElement(11, "path", 8);
            i0.ɵɵdomElementEnd()()();
            i0.ɵɵnamespaceHTML();
            i0.ɵɵdomElementStart(12, "div", 9)(13, "button", 10);
            i0.ɵɵtext(14, "\u0627\u0644\u062A\u0635\u0641\u064A\u0629 ");
            i0.ɵɵnamespaceSVG();
            i0.ɵɵdomElementStart(15, "svg", 4);
            i0.ɵɵdomElement(16, "path", 11);
            i0.ɵɵdomElementEnd()();
            i0.ɵɵnamespaceHTML();
            i0.ɵɵdomElementStart(17, "label", 12)(18, "span", 13);
            i0.ɵɵtext(19, "\u0627\u0644\u0628\u062D\u062B \u0641\u064A \u0627\u0644\u0639\u0642\u0648\u062F");
            i0.ɵɵdomElementEnd();
            i0.ɵɵdomElement(20, "input", 14);
            i0.ɵɵnamespaceSVG();
            i0.ɵɵdomElementStart(21, "svg", 4);
            i0.ɵɵdomElement(22, "circle", 15)(23, "path", 16);
            i0.ɵɵdomElementEnd();
            i0.ɵɵnamespaceHTML();
            i0.ɵɵdomElementStart(24, "kbd");
            i0.ɵɵtext(25, "K");
            i0.ɵɵdomElementEnd()()()();
            i0.ɵɵdomElementStart(26, "table")(27, "thead")(28, "tr")(29, "th");
            i0.ɵɵtext(30, "\u0631\u0642\u0645 \u0627\u0644\u0639\u0642\u062F");
            i0.ɵɵdomElementEnd();
            i0.ɵɵdomElementStart(31, "th");
            i0.ɵɵtext(32, "\u0627\u0644\u0645\u0648\u0631\u062F\u064A\u0646");
            i0.ɵɵdomElementEnd();
            i0.ɵɵdomElementStart(33, "th");
            i0.ɵɵtext(34, "\u062A\u0627\u0631\u064A\u062E");
            i0.ɵɵdomElementEnd();
            i0.ɵɵdomElementStart(35, "th");
            i0.ɵɵtext(36, "\u062D\u0627\u0644\u0629 \u0627\u0644\u0639\u0642\u062F");
            i0.ɵɵdomElementEnd();
            i0.ɵɵdomElement(37, "th");
            i0.ɵɵdomElementEnd()();
            i0.ɵɵdomElementStart(38, "tbody");
            i0.ɵɵrepeaterCreate(39, ContractsTableComponent_For_40_Template, 21, 10, "tr", null, _forTrack0);
            i0.ɵɵdomElementEnd()();
            i0.ɵɵdomElementStart(41, "footer")(42, "span");
            i0.ɵɵtext(43, "\u0639\u0631\u0636 256 \u0645\u0639\u0627\u0645\u0644\u0629 \u0623\u062E\u0631\u0649");
            i0.ɵɵdomElementEnd();
            i0.ɵɵdomElementStart(44, "i", 6);
            i0.ɵɵtext(45, "\u2190");
            i0.ɵɵdomElementEnd()();
            i0.ɵɵdomElementStart(46, "div", 17);
            i0.ɵɵdomElement(47, "i");
            i0.ɵɵdomElementEnd()();
        } if (rf & 2) {
            i0.ɵɵadvance(39);
            i0.ɵɵrepeater(ctx.rows);
        } }, styles: ["[_nghost-%COMP%] { display: block; width: 100%; min-width: 0; height: 476px; }\n*[_ngcontent-%COMP%] { box-sizing: border-box; }\n.contracts[_ngcontent-%COMP%] {\n  width: 100%; height: 100%; overflow: hidden; border: 1px solid rgb(14 37 60 / 10%);\n  border-radius: 16px; background: #fff; box-shadow: 0 1px 3px rgb(0 0 0 / 5%);\n  color: #0e253c; font-family: \"Lusail\", \"Tahoma\", sans-serif;\n}\n.contracts__header[_ngcontent-%COMP%] {\n  display: flex; height: 88px; align-items: center; justify-content: space-between;\n  padding: 16px 12px 16px 16px; border-bottom: 1px solid rgb(14 37 60 / 10%);\n}\n.contracts__title[_ngcontent-%COMP%], .contracts__toolbar[_ngcontent-%COMP%], .contracts__supplier[_ngcontent-%COMP%] { display: flex; align-items: center; }\n.contracts__title[_ngcontent-%COMP%] { gap: 14px; }\n.contracts__title[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] { margin: 0; color: #101828; font-size: 24px; font-weight: 600; line-height: 28px; }\n.contracts__title[_ngcontent-%COMP%]    > i[_ngcontent-%COMP%] { width: 1px; height: 32px; background: rgb(14 37 60 / 10%); }\n.contracts__icon[_ngcontent-%COMP%] {\n  display: grid; width: 32px; height: 32px; place-items: center; border: 1px solid #e9eaeb;\n  border-radius: 6px; box-shadow: 0 1px 2px rgb(10 13 18 / 5%); color: #667085;\n}\nsvg[_ngcontent-%COMP%] { width: 20px; height: 20px; fill: none; stroke: currentcolor; stroke-linecap: round; stroke-linejoin: round; stroke-width: 1.7; }\n.contracts__title[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] { display: grid; width: 24px; height: 24px; padding: 0; place-items: center; border: 0; background: transparent; color: #8090a7; }\n.contracts__toolbar[_ngcontent-%COMP%] { min-width: 0; gap: 16px; }\n.contracts__filter[_ngcontent-%COMP%] {\n  display: inline-flex; width: 97px; height: 40px; align-items: center; justify-content: center; gap: 6px;\n  border: 1px solid #d5d7da; border-radius: 8px; background: #fff; color: #344054; font-size: 12px;\n  box-shadow: 0 1px 2px rgb(10 13 18 / 5%);\n}\n.contracts__search[_ngcontent-%COMP%] { position: relative; width: 296px; height: 40px; }\n.contracts__search[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] { width: 100%; height: 100%; padding: 8px 40px; border: 1px solid #d5d7da; border-radius: 8px; outline: 0; }\n.contracts__search[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] { position: absolute; top: 10px; right: 12px; color: #667085; }\n.contracts__search[_ngcontent-%COMP%]   kbd[_ngcontent-%COMP%] {\n  position: absolute; top: 10px; left: 10px; padding: 2px 7px; border: 1px solid #e3e5e8;\n  border-radius: 4px; background: #fff; color: #98a0ab; font-size: 10px;\n}\ntable[_ngcontent-%COMP%] { width: 100%; border-collapse: collapse; table-layout: fixed; }\nth[_ngcontent-%COMP%], td[_ngcontent-%COMP%] {\n  height: 72px; padding: 8px 12px; border-bottom: 1px solid #e9eaeb;\n  color: #344054; font-size: 12px; text-align: right; vertical-align: middle;\n}\nth[_ngcontent-%COMP%] { height: 40px; background: #fff; color: #7a8695; font-size: 11px; font-weight: 500; }\nth[_ngcontent-%COMP%]:not(:last-child)::after { margin-inline-start: 6px; color: #a4acb8; content: \"\u2195\"; font-size: 9px; }\ntbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(odd) { background: #fafafa; }\ntbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(even) { background: #fff; }\nth[_ngcontent-%COMP%]:nth-child(1) { width: 170px; } th[_ngcontent-%COMP%]:nth-child(2) { width: 245px; } th[_ngcontent-%COMP%]:nth-child(3) { width: 145px; }\nth[_ngcontent-%COMP%]:nth-child(4) { width: 170px; } th[_ngcontent-%COMP%]:nth-child(5) { width: 34px; }\n.contracts__id[_ngcontent-%COMP%] { color: #263b78; direction: ltr; text-align: right; }\n.contracts__supplier[_ngcontent-%COMP%] { gap: 10px; white-space: nowrap; }\n.contracts__logo[_ngcontent-%COMP%] { display: grid; width: 24px; height: 24px; place-items: center; font-family: Arial, sans-serif; font-size: 23px; }\n.contracts__logo--bank[_ngcontent-%COMP%] { color: #0874a4; text-shadow: 2px 0 #b21445; }\n.contracts__logo--ooredoo[_ngcontent-%COMP%] { color: #f5222d; font-size: 25px; }\n.contracts__logo--factory[_ngcontent-%COMP%] { color: #a50064; }\n.contracts__logo--woqod[_ngcontent-%COMP%] { color: #098b52; text-shadow: 2px 0 #dbb71c; }\n.contracts__progress-value[_ngcontent-%COMP%] { display: inline-block; width: 35px; direction: ltr; font-family: Arial, sans-serif; }\n.contracts__progress[_ngcontent-%COMP%] {\n  display: inline-block; width: calc(100% - 50px); height: 4px; overflow: hidden;\n  border-radius: 4px; background: #c3d5de; vertical-align: middle; direction: ltr;\n}\n.contracts__progress[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] { display: block; height: 100%; margin-left: auto; background: #559cff; }\n.contracts__more[_ngcontent-%COMP%] { display: grid; width: 28px; height: 32px; padding: 0; place-items: center; border: 0; background: transparent; color: #98a2b3; }\n.contracts__more[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] { width: 18px; height: 18px; fill: currentcolor; stroke: none; }\nfooter[_ngcontent-%COMP%] { display: flex; height: 32px; align-items: center; justify-content: center; gap: 7px; color: #7f8ba5; font-size: 11px; }\nfooter[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  display: grid; width: 15px; height: 15px; place-items: center; border-radius: 50%;\n  background: #7f8ba5; color: #fff; font-size: 9px; font-style: normal;\n}\n.contracts__scrollbar[_ngcontent-%COMP%] { height: 7px; padding: 0 8px; }\n.contracts__scrollbar[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] { display: block; width: 208px; height: 7px; margin-right: 0; margin-left: auto; border-radius: 8px; background: #e3e5e8; }\n@media (max-width: 1600px) {\n  .contracts__search[_ngcontent-%COMP%] { width: auto; min-width: 0; flex: 1 1 auto; }\n  .contracts__toolbar[_ngcontent-%COMP%] { flex: 1 1 auto; }\n}"] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ContractsTableComponent, [{
        type: Component,
        args: [{ selector: 'app-contracts-table', template: "<section class=\"contracts\" dir=\"rtl\">\n  <header class=\"contracts__header\">\n    <div class=\"contracts__title\">\n      <span class=\"contracts__icon\" aria-hidden=\"true\">\n        <svg viewBox=\"0 0 24 24\"><path d=\"m5 8 7-4 7 4-7 4-7-4Zm0 4 7 4 7-4\"/></svg>\n      </span>\n      <h2>\u0627\u0644\u0639\u0642\u0648\u062F</h2>\n      <i aria-hidden=\"true\"></i>\n      <button type=\"button\" aria-label=\"\u062A\u0643\u0628\u064A\u0631 \u062C\u062F\u0648\u0644 \u0627\u0644\u0639\u0642\u0648\u062F\">\n        <svg viewBox=\"0 0 24 24\"><path d=\"M14 5h5v5M19 5l-6 6M10 19H5v-5M5 19l6-6\"/></svg>\n      </button>\n    </div>\n    <div class=\"contracts__toolbar\">\n      <button type=\"button\" class=\"contracts__filter\">\u0627\u0644\u062A\u0635\u0641\u064A\u0629\n        <svg viewBox=\"0 0 24 24\"><path d=\"M4 6h16M7 12h10m-7 6h4\"/></svg>\n      </button>\n      <label class=\"contracts__search\">\n        <span class=\"visually-hidden\">\u0627\u0644\u0628\u062D\u062B \u0641\u064A \u0627\u0644\u0639\u0642\u0648\u062F</span>\n        <input type=\"search\" placeholder=\"\u0628\u062D\u062B\" />\n        <svg viewBox=\"0 0 24 24\"><circle cx=\"11\" cy=\"11\" r=\"7\"/><path d=\"m16 16 4 4\"/></svg>\n        <kbd>K</kbd>\n      </label>\n    </div>\n  </header>\n\n  <table>\n    <thead><tr><th>\u0631\u0642\u0645 \u0627\u0644\u0639\u0642\u062F</th><th>\u0627\u0644\u0645\u0648\u0631\u062F\u064A\u0646</th><th>\u062A\u0627\u0631\u064A\u062E</th><th>\u062D\u0627\u0644\u0629 \u0627\u0644\u0639\u0642\u062F</th><th></th></tr></thead>\n    <tbody>\n      @for (row of rows; track row.id) {\n        <tr>\n          <td class=\"contracts__id\">{{ row.id }}</td>\n          <td><span class=\"contracts__supplier\"><b class=\"contracts__logo {{ row.logoClass }}\">{{ row.logo }}</b>{{ row.supplier }}</span></td>\n          <td>{{ row.date }}</td>\n          <td>\n            <span class=\"contracts__progress-value\">{{ row.progress }}%</span>\n            <span class=\"contracts__progress\"><i [style.width.%]=\"row.progress\"></i></span>\n          </td>\n          <td><button class=\"contracts__more\" type=\"button\" aria-label=\"\u0627\u0644\u0645\u0632\u064A\u062F\"><svg viewBox=\"0 0 24 24\"><circle cx=\"12\" cy=\"5\" r=\"1\"/><circle cx=\"12\" cy=\"12\" r=\"1\"/><circle cx=\"12\" cy=\"19\" r=\"1\"/></svg></button></td>\n        </tr>\n      }\n    </tbody>\n  </table>\n\n  <footer><span>\u0639\u0631\u0636 256 \u0645\u0639\u0627\u0645\u0644\u0629 \u0623\u062E\u0631\u0649</span><i aria-hidden=\"true\">\u2190</i></footer>\n  <div class=\"contracts__scrollbar\"><i></i></div>\n</section>\n", styles: [":host { display: block; width: 100%; min-width: 0; height: 476px; }\n* { box-sizing: border-box; }\n.contracts {\n  width: 100%; height: 100%; overflow: hidden; border: 1px solid rgb(14 37 60 / 10%);\n  border-radius: 16px; background: #fff; box-shadow: 0 1px 3px rgb(0 0 0 / 5%);\n  color: #0e253c; font-family: \"Lusail\", \"Tahoma\", sans-serif;\n}\n.contracts__header {\n  display: flex; height: 88px; align-items: center; justify-content: space-between;\n  padding: 16px 12px 16px 16px; border-bottom: 1px solid rgb(14 37 60 / 10%);\n}\n.contracts__title, .contracts__toolbar, .contracts__supplier { display: flex; align-items: center; }\n.contracts__title { gap: 14px; }\n.contracts__title h2 { margin: 0; color: #101828; font-size: 24px; font-weight: 600; line-height: 28px; }\n.contracts__title > i { width: 1px; height: 32px; background: rgb(14 37 60 / 10%); }\n.contracts__icon {\n  display: grid; width: 32px; height: 32px; place-items: center; border: 1px solid #e9eaeb;\n  border-radius: 6px; box-shadow: 0 1px 2px rgb(10 13 18 / 5%); color: #667085;\n}\nsvg { width: 20px; height: 20px; fill: none; stroke: currentcolor; stroke-linecap: round; stroke-linejoin: round; stroke-width: 1.7; }\n.contracts__title button { display: grid; width: 24px; height: 24px; padding: 0; place-items: center; border: 0; background: transparent; color: #8090a7; }\n.contracts__toolbar { min-width: 0; gap: 16px; }\n.contracts__filter {\n  display: inline-flex; width: 97px; height: 40px; align-items: center; justify-content: center; gap: 6px;\n  border: 1px solid #d5d7da; border-radius: 8px; background: #fff; color: #344054; font-size: 12px;\n  box-shadow: 0 1px 2px rgb(10 13 18 / 5%);\n}\n.contracts__search { position: relative; width: 296px; height: 40px; }\n.contracts__search input { width: 100%; height: 100%; padding: 8px 40px; border: 1px solid #d5d7da; border-radius: 8px; outline: 0; }\n.contracts__search svg { position: absolute; top: 10px; right: 12px; color: #667085; }\n.contracts__search kbd {\n  position: absolute; top: 10px; left: 10px; padding: 2px 7px; border: 1px solid #e3e5e8;\n  border-radius: 4px; background: #fff; color: #98a0ab; font-size: 10px;\n}\ntable { width: 100%; border-collapse: collapse; table-layout: fixed; }\nth, td {\n  height: 72px; padding: 8px 12px; border-bottom: 1px solid #e9eaeb;\n  color: #344054; font-size: 12px; text-align: right; vertical-align: middle;\n}\nth { height: 40px; background: #fff; color: #7a8695; font-size: 11px; font-weight: 500; }\nth:not(:last-child)::after { margin-inline-start: 6px; color: #a4acb8; content: \"\u2195\"; font-size: 9px; }\ntbody tr:nth-child(odd) { background: #fafafa; }\ntbody tr:nth-child(even) { background: #fff; }\nth:nth-child(1) { width: 170px; } th:nth-child(2) { width: 245px; } th:nth-child(3) { width: 145px; }\nth:nth-child(4) { width: 170px; } th:nth-child(5) { width: 34px; }\n.contracts__id { color: #263b78; direction: ltr; text-align: right; }\n.contracts__supplier { gap: 10px; white-space: nowrap; }\n.contracts__logo { display: grid; width: 24px; height: 24px; place-items: center; font-family: Arial, sans-serif; font-size: 23px; }\n.contracts__logo--bank { color: #0874a4; text-shadow: 2px 0 #b21445; }\n.contracts__logo--ooredoo { color: #f5222d; font-size: 25px; }\n.contracts__logo--factory { color: #a50064; }\n.contracts__logo--woqod { color: #098b52; text-shadow: 2px 0 #dbb71c; }\n.contracts__progress-value { display: inline-block; width: 35px; direction: ltr; font-family: Arial, sans-serif; }\n.contracts__progress {\n  display: inline-block; width: calc(100% - 50px); height: 4px; overflow: hidden;\n  border-radius: 4px; background: #c3d5de; vertical-align: middle; direction: ltr;\n}\n.contracts__progress i { display: block; height: 100%; margin-left: auto; background: #559cff; }\n.contracts__more { display: grid; width: 28px; height: 32px; padding: 0; place-items: center; border: 0; background: transparent; color: #98a2b3; }\n.contracts__more svg { width: 18px; height: 18px; fill: currentcolor; stroke: none; }\nfooter { display: flex; height: 32px; align-items: center; justify-content: center; gap: 7px; color: #7f8ba5; font-size: 11px; }\nfooter i {\n  display: grid; width: 15px; height: 15px; place-items: center; border-radius: 50%;\n  background: #7f8ba5; color: #fff; font-size: 9px; font-style: normal;\n}\n.contracts__scrollbar { height: 7px; padding: 0 8px; }\n.contracts__scrollbar i { display: block; width: 208px; height: 7px; margin-right: 0; margin-left: auto; border-radius: 8px; background: #e3e5e8; }\n@media (max-width: 1600px) {\n  .contracts__search { width: auto; min-width: 0; flex: 1 1 auto; }\n  .contracts__toolbar { flex: 1 1 auto; }\n}\n"] }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(ContractsTableComponent, { className: "ContractsTableComponent", filePath: "src/app/components/dashboard/contracts-table/contracts-table.component.ts", lineNumber: 17 }); })();
