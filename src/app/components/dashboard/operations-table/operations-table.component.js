import { Component } from '@angular/core';
import { StatusBadgeComponent, } from '../status-badge/status-badge.component';
import * as i0 from "@angular/core";
const _forTrack0 = ($index, $item) => $item.id;
function OperationsTableComponent_For_44_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "tr")(1, "td")(2, "label", 15);
    i0.ɵɵelement(3, "input", 16)(4, "i", 7);
    i0.ɵɵelementStart(5, "span");
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(7, "td");
    i0.ɵɵtext(8);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "td");
    i0.ɵɵtext(10);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "td");
    i0.ɵɵtext(12);
    i0.ɵɵelementStart(13, "span", 7);
    i0.ɵɵtext(14, "\u2667");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(15, "td");
    i0.ɵɵelement(16, "app-status-badge", 17);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(17, "td")(18, "div", 18);
    i0.ɵɵelement(19, "span", 19);
    i0.ɵɵelementStart(20, "span")(21, "strong");
    i0.ɵɵtext(22);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(23, "small");
    i0.ɵɵtext(24);
    i0.ɵɵelementEnd()()()();
    i0.ɵɵelementStart(25, "td");
    i0.ɵɵtext(26);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(27, "td", 20)(28, "button", 21);
    i0.ɵɵtext(29, "\u2713");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(30, "button", 22);
    i0.ɵɵtext(31, "\u21B6");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(32, "button", 23);
    i0.ɵɵtext(33, "\u2297");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(34, "button", 24);
    i0.ɵɵtext(35, "\u25C9");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(36, "button", 25);
    i0.ɵɵtext(37, "\u22EE");
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const row_r1 = ctx.$implicit;
    i0.ɵɵclassProp("operations__row--selected", row_r1.selected);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("checked", row_r1.selected);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(row_r1.id);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(row_r1.statement);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(row_r1.products);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("", row_r1.notes, " ");
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("label", row_r1.status)("tone", row_r1.tone);
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate(row_r1.requester);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(row_r1.email);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(row_r1.date);
} }
export class OperationsTableComponent {
    rows = [
        {
            id: 'BDRS/2016/019/0008',
            statement: 'توريد أجهزة مودام',
            products: '5 منتجات',
            notes: '05',
            status: 'مقبول ✓',
            tone: 'success',
            requester: 'فارس أسامة طارق',
            email: 'farestarek@moi.gov.qa',
            date: '22 يناير 2025',
            selected: true,
        },
        {
            id: 'BDRS/2016/019/0009',
            statement: 'تجديد تراخيص',
            products: '5 منتجات',
            notes: '02',
            status: 'تحت الإجراء ←',
            tone: 'warning',
            requester: 'حامد هادي زعيم',
            email: 'hamedzaiim@moi.gov.qa',
            date: '20 يناير 2025',
        },
        {
            id: 'BDRS/2016/019/0010',
            statement: 'ترقية وتحديث تكنولوجيا',
            products: '5 منتجات',
            notes: '08',
            status: 'تم الانشاء ✓',
            tone: 'info',
            requester: 'جاسم محمد حامد',
            email: 'jassem@moi.gov.qa',
            date: '24 يناير 2025',
        },
        {
            id: 'BDRS/2016/019/0011',
            statement: 'توريد ملحقات أجهزة لوحية',
            products: '5 منتجات',
            notes: '11',
            status: 'للمراجعة ↩',
            tone: 'neutral',
            requester: 'أمير علي الزاوي',
            email: 'amirzawi@moi.gov.qa',
            date: '26 يناير 2025',
        },
        {
            id: 'BDRS/2016/019/0012',
            statement: 'دفع تأمين سيارات المدير',
            products: '5 منتجات',
            notes: '14',
            status: 'تم الارسال ✓',
            tone: 'purple',
            requester: 'هيبة حاتم حجاب',
            email: 'hibahijab@moi.gov.qa',
            date: '18 يناير 2025',
        },
    ];
    static ɵfac = function OperationsTableComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || OperationsTableComponent)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: OperationsTableComponent, selectors: [["app-operations-table"]], decls: 53, vars: 0, consts: [["dir", "rtl", 1, "operations"], [1, "operations__header"], [1, "operations__title"], ["aria-hidden", "true", 1, "operations__title-icon"], ["type", "button", "aria-label", "\u062A\u0643\u0628\u064A\u0631 \u0627\u0644\u062C\u062F\u0648\u0644", 1, "operations__expand"], [1, "operations__toolbar"], ["type", "button", 1, "operations__filter"], ["aria-hidden", "true"], [1, "operations__search"], [1, "visually-hidden"], ["type", "search", "placeholder", "\u0628\u062D\u062B"], [1, "operations__table-wrap"], [3, "operations__row--selected"], [1, "operations__footer"], ["type", "button"], [1, "operations__selection"], ["type", "checkbox", 3, "checked"], [3, "label", "tone"], [1, "operations__requester"], ["aria-hidden", "true", 1, "operations__avatar"], ["aria-label", "\u0625\u062C\u0631\u0627\u0621\u0627\u062A \u0627\u0644\u0645\u0639\u0627\u0645\u0644\u0629", 1, "operations__actions"], ["type", "button", "aria-label", "\u0627\u0639\u062A\u0645\u0627\u062F"], ["type", "button", "aria-label", "\u0625\u0631\u062C\u0627\u0639"], ["type", "button", "aria-label", "\u0625\u0644\u063A\u0627\u0621"], ["type", "button", "aria-label", "\u0639\u0631\u0636"], ["type", "button", "aria-label", "\u0627\u0644\u0645\u0632\u064A\u062F"]], template: function OperationsTableComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "section", 0)(1, "header", 1)(2, "div", 2)(3, "span", 3);
            i0.ɵɵtext(4, "\u25B1");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(5, "h2");
            i0.ɵɵtext(6, "\u0623\u0639\u0645\u0627\u0644\u064A");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(7, "button", 4);
            i0.ɵɵtext(8, "\u2197");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(9, "div", 5)(10, "button", 6)(11, "span", 7);
            i0.ɵɵtext(12, "\u2637");
            i0.ɵɵelementEnd();
            i0.ɵɵtext(13, " \u0627\u0644\u062A\u0635\u0641\u064A\u0629 ");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(14, "label", 8)(15, "span", 9);
            i0.ɵɵtext(16, "\u0627\u0644\u0628\u062D\u062B \u0641\u064A \u0627\u0644\u0623\u0639\u0645\u0627\u0644");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(17, "input", 10)(18, "span", 7);
            i0.ɵɵelementStart(19, "kbd");
            i0.ɵɵtext(20, "K");
            i0.ɵɵelementEnd()()()();
            i0.ɵɵelementStart(21, "div", 11)(22, "table")(23, "thead")(24, "tr")(25, "th");
            i0.ɵɵtext(26, "\u0631\u0642\u0645 \u0627\u0644\u0645\u0639\u0627\u0645\u0644\u0629");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(27, "th");
            i0.ɵɵtext(28, "\u0627\u0644\u0628\u064A\u0627\u0646");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(29, "th");
            i0.ɵɵtext(30, "\u0639\u062F\u062F \u0627\u0644\u0645\u0646\u062A\u062C\u0627\u062A");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(31, "th");
            i0.ɵɵtext(32, "\u0639\u062F\u062F \u0627\u0644\u0645\u0644\u0627\u062D\u0638\u0627\u062A");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(33, "th");
            i0.ɵɵtext(34, "\u062D\u0627\u0644\u0629 \u0627\u0644\u0637\u0644\u0628");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(35, "th");
            i0.ɵɵtext(36, "\u0645\u0646\u0634\u0623 \u0627\u0644\u0637\u0644\u0628");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(37, "th");
            i0.ɵɵtext(38, "\u062A\u0627\u0631\u064A\u062E");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(39, "th")(40, "span", 9);
            i0.ɵɵtext(41, "\u0627\u0644\u0625\u062C\u0631\u0627\u0621\u0627\u062A");
            i0.ɵɵelementEnd()()()();
            i0.ɵɵelementStart(42, "tbody");
            i0.ɵɵrepeaterCreate(43, OperationsTableComponent_For_44_Template, 38, 12, "tr", 12, _forTrack0);
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(45, "footer", 13)(46, "span");
            i0.ɵɵtext(47, "\u0627\u0644\u0635\u0641\u062D\u0629 1 \u0645\u0646 10");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(48, "div")(49, "button", 14);
            i0.ɵɵtext(50, "\u0627\u0644\u0633\u0627\u0628\u0642");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(51, "button", 14);
            i0.ɵɵtext(52, "\u0627\u0644\u062A\u0627\u0644\u064A");
            i0.ɵɵelementEnd()()()();
        } if (rf & 2) {
            i0.ɵɵadvance(43);
            i0.ɵɵrepeater(ctx.rows);
        } }, dependencies: [StatusBadgeComponent], styles: ["[_nghost-%COMP%] {\n  display: block;\n  width: calc(100% - 32px);\n  height: 556px;\n  margin-inline: 16px;\n}\n\n.operations[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 556px;\n  overflow: hidden;\n  border: 1px solid rgb(14 37 60 / 10%);\n  border-radius: 16px;\n  background: #fff;\n  color: #0e253c;\n  font-family: \"Lusail\", \"Tahoma\", sans-serif;\n}\n\n.operations__header[_ngcontent-%COMP%] {\n  display: flex;\n  height: 88px;\n  align-items: center;\n  justify-content: space-between;\n  padding: 16px 12px 16px 16px;\n  border-bottom: 1px solid rgb(14 37 60 / 10%);\n}\n\n.operations__title[_ngcontent-%COMP%], \n.operations__toolbar[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n\n.operations__title[_ngcontent-%COMP%] {\n  gap: 16px;\n}\n\n.operations__toolbar[_ngcontent-%COMP%] {\n  direction: rtl;\n  gap: 12px;\n}\n\n.operations__title[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #101828;\n  font-size: 24px;\n  font-weight: 600;\n  line-height: 28px;\n}\n\n.operations__title-icon[_ngcontent-%COMP%] {\n  display: grid;\n  width: 32px;\n  height: 32px;\n  flex: 0 0 32px;\n  place-items: center;\n  border: 1px solid #e9eaeb;\n  border-radius: 6px;\n  background: #fff;\n  box-shadow: 0 1px 2px rgb(10 13 18 / 5%);\n  color: #667085;\n  font-size: 17px;\n}\n\n.operations__title[_ngcontent-%COMP%]   button[_ngcontent-%COMP%], \n.operations__filter[_ngcontent-%COMP%], \n.operations__actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  border: 0;\n  background: transparent;\n  color: #7d8999;\n}\n\n.operations__expand[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 20px;\n  margin-inline-start: 8px;\n  padding: 0;\n  font-size: 18px;\n  line-height: 20px;\n}\n\n.operations__filter[_ngcontent-%COMP%] {\n  display: inline-flex;\n  width: 97px;\n  height: 40px;\n  align-items: center;\n  justify-content: center;\n  gap: 4px;\n  padding: 10px 14px;\n  border: 1px solid #d5d7da;\n  border-radius: 8px;\n  background: #fff;\n  color: #344054;\n  font-size: 12px;\n}\n\n.operations__search[_ngcontent-%COMP%] {\n  position: relative;\n  display: block;\n  width: 296px;\n  height: 40px;\n}\n\n.operations__search[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  padding: 8px 38px 8px 40px;\n  border: 1px solid #d5d7da;\n  border-radius: 8px;\n  outline: 0;\n  font-size: 12px;\n}\n\n.operations__search[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 12px;\n  right: 12px;\n  width: 13px;\n  height: 13px;\n  border: 1.5px solid #7b8492;\n  border-radius: 50%;\n}\n\n.operations__search[_ngcontent-%COMP%]   kbd[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 10px;\n  left: 10px;\n  padding: 2px 7px;\n  border: 1px solid #e3e5e8;\n  border-radius: 4px;\n  background: #fff;\n  color: #98a0ab;\n  font-size: 10px;\n}\n\n.operations__table-wrap[_ngcontent-%COMP%] {\n  height: 404px;\n  overflow-x: auto;\n  overflow-y: hidden;\n}\n\n.operations[_ngcontent-%COMP%]   table[_ngcontent-%COMP%] {\n  width: 100%;\n  min-width: 1542px;\n  border-collapse: collapse;\n  table-layout: fixed;\n}\n\n.operations[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], \n.operations[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 8px 12px 8px 16px;\n  border-bottom: 1px solid #e9eaeb;\n  color: #526173;\n  font-size: 11px;\n  text-align: right;\n  vertical-align: middle;\n}\n\n.operations[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  height: 44px;\n  background: #fff;\n  color: #7a8695;\n  font-weight: 500;\n}\n\n.operations[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:not(:last-child)::after {\n  margin-inline-start: 6px;\n  color: #a4acb8;\n  content: \"\u2195\";\n  font-size: 9px;\n}\n\n.operations[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-child, \n.operations[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:first-child {\n  width: 177px;\n}\n\n.operations[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-child(2), \n.operations[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:nth-child(2) {\n  width: 177px;\n}\n\n.operations[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-child(3), \n.operations[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:nth-child(3), \n.operations[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-child(4), \n.operations[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:nth-child(4), \n.operations[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-child(5), \n.operations[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:nth-child(5) {\n  width: 138px;\n}\n\n.operations[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-child(6), \n.operations[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:nth-child(6) {\n  width: 296px;\n}\n\n.operations[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-child(7), \n.operations[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:nth-child(7) {\n  width: 177px;\n}\n\n.operations[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:last-child, \n.operations[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:last-child {\n  width: 301px;\n}\n\n.operations[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  height: 72px;\n}\n\n.operations__row--selected[_ngcontent-%COMP%] {\n  background: #f5f8ff;\n}\n\n.operations__selection[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  color: #263b78;\n  white-space: nowrap;\n}\n\n.operations__selection[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  position: absolute;\n  opacity: 0;\n  pointer-events: none;\n}\n\n.operations__selection[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  display: grid;\n  width: 18px;\n  height: 18px;\n  flex: 0 0 18px;\n  place-items: center;\n  border: 1px solid #d5d7da;\n  border-radius: 6px;\n  background: #fff;\n}\n\n.operations__selection[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    + i[_ngcontent-%COMP%] {\n  border-color: #97133f;\n  background: #97133f;\n}\n\n.operations__selection[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    + i[_ngcontent-%COMP%]::after {\n  color: #fff;\n  content: \"\u2713\";\n  font-size: 12px;\n  line-height: 1;\n}\n\n.operations__requester[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 9px;\n}\n\n.operations__requester[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%]:last-child {\n  display: flex;\n  min-width: 0;\n  flex-direction: column;\n}\n\n.operations__requester[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #303b4b;\n  font-size: 11px;\n  font-weight: 500;\n}\n\n.operations__requester[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  overflow: hidden;\n  color: #667085;\n  font-size: 9px;\n  text-overflow: ellipsis;\n}\n\n.operations__avatar[_ngcontent-%COMP%] {\n  position: relative;\n  width: 34px;\n  height: 34px;\n  flex: 0 0 34px;\n  border: 1px solid #d8dce1;\n  border-radius: 50%;\n}\n\n.operations__avatar[_ngcontent-%COMP%]::before {\n  position: absolute;\n  top: 7px;\n  left: 12px;\n  width: 8px;\n  height: 8px;\n  border: 1.5px solid #7d8999;\n  border-radius: 50%;\n  content: \"\";\n}\n\n.operations__avatar[_ngcontent-%COMP%]::after {\n  position: absolute;\n  bottom: 6px;\n  left: 8px;\n  width: 16px;\n  height: 8px;\n  border: 1.5px solid #7d8999;\n  border-bottom: 0;\n  border-radius: 10px 10px 0 0;\n  content: \"\";\n}\n\n.operations__actions[_ngcontent-%COMP%] {\n  direction: ltr;\n  white-space: nowrap;\n}\n\n.operations__actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  width: 30px;\n  height: 30px;\n  padding: 0;\n  font-size: 14px;\n}\n\n.operations__footer[_ngcontent-%COMP%] {\n  display: flex;\n  height: 64px;\n  align-items: center;\n  justify-content: space-between;\n  padding: 12px 16px;\n  color: #667085;\n  font-size: 12px;\n}\n\n.operations__footer[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n}\n\n.operations__footer[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  min-width: 57px;\n  height: 36px;\n  border: 1px solid #d5d7da;\n  border-radius: 8px;\n  background: #fff;\n  color: #344054;\n  font-size: 12px;\n}"] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(OperationsTableComponent, [{
        type: Component,
        args: [{ selector: 'app-operations-table', imports: [StatusBadgeComponent], template: "<section class=\"operations\" dir=\"rtl\">\n  <header class=\"operations__header\">\n    <div class=\"operations__title\">\n      <span class=\"operations__title-icon\" aria-hidden=\"true\">\u25B1</span>\n      <h2>\u0623\u0639\u0645\u0627\u0644\u064A</h2>\n      <button type=\"button\" class=\"operations__expand\" aria-label=\"\u062A\u0643\u0628\u064A\u0631 \u0627\u0644\u062C\u062F\u0648\u0644\">\u2197</button>\n    </div>\n\n    <div class=\"operations__toolbar\">\n      <button type=\"button\" class=\"operations__filter\">\n        <span aria-hidden=\"true\">\u2637</span>\n        \u0627\u0644\u062A\u0635\u0641\u064A\u0629\n      </button>\n      <label class=\"operations__search\">\n        <span class=\"visually-hidden\">\u0627\u0644\u0628\u062D\u062B \u0641\u064A \u0627\u0644\u0623\u0639\u0645\u0627\u0644</span>\n        <input type=\"search\" placeholder=\"\u0628\u062D\u062B\" />\n        <span aria-hidden=\"true\"></span>\n        <kbd>K</kbd>\n      </label>\n    </div>\n  </header>\n\n  <div class=\"operations__table-wrap\">\n    <table>\n      <thead>\n        <tr>\n          <th>\u0631\u0642\u0645 \u0627\u0644\u0645\u0639\u0627\u0645\u0644\u0629</th>\n          <th>\u0627\u0644\u0628\u064A\u0627\u0646</th>\n          <th>\u0639\u062F\u062F \u0627\u0644\u0645\u0646\u062A\u062C\u0627\u062A</th>\n          <th>\u0639\u062F\u062F \u0627\u0644\u0645\u0644\u0627\u062D\u0638\u0627\u062A</th>\n          <th>\u062D\u0627\u0644\u0629 \u0627\u0644\u0637\u0644\u0628</th>\n          <th>\u0645\u0646\u0634\u0623 \u0627\u0644\u0637\u0644\u0628</th>\n          <th>\u062A\u0627\u0631\u064A\u062E</th>\n          <th><span class=\"visually-hidden\">\u0627\u0644\u0625\u062C\u0631\u0627\u0621\u0627\u062A</span></th>\n        </tr>\n      </thead>\n      <tbody>\n        @for (row of rows; track row.id) {\n          <tr [class.operations__row--selected]=\"row.selected\">\n            <td>\n              <label class=\"operations__selection\">\n                <input type=\"checkbox\" [checked]=\"row.selected\" />\n                <i aria-hidden=\"true\"></i>\n                <span>{{ row.id }}</span>\n              </label>\n            </td>\n            <td>{{ row.statement }}</td>\n            <td>{{ row.products }}</td>\n            <td>{{ row.notes }} <span aria-hidden=\"true\">\u2667</span></td>\n            <td><app-status-badge [label]=\"row.status\" [tone]=\"row.tone\" /></td>\n            <td>\n              <div class=\"operations__requester\">\n                <span class=\"operations__avatar\" aria-hidden=\"true\"></span>\n                <span><strong>{{ row.requester }}</strong><small>{{ row.email }}</small></span>\n              </div>\n            </td>\n            <td>{{ row.date }}</td>\n            <td class=\"operations__actions\" aria-label=\"\u0625\u062C\u0631\u0627\u0621\u0627\u062A \u0627\u0644\u0645\u0639\u0627\u0645\u0644\u0629\">\n              <button type=\"button\" aria-label=\"\u0627\u0639\u062A\u0645\u0627\u062F\">\u2713</button>\n              <button type=\"button\" aria-label=\"\u0625\u0631\u062C\u0627\u0639\">\u21B6</button>\n              <button type=\"button\" aria-label=\"\u0625\u0644\u063A\u0627\u0621\">\u2297</button>\n              <button type=\"button\" aria-label=\"\u0639\u0631\u0636\">\u25C9</button>\n              <button type=\"button\" aria-label=\"\u0627\u0644\u0645\u0632\u064A\u062F\">\u22EE</button>\n            </td>\n          </tr>\n        }\n      </tbody>\n    </table>\n  </div>\n\n  <footer class=\"operations__footer\">\n    <span>\u0627\u0644\u0635\u0641\u062D\u0629 1 \u0645\u0646 10</span>\n    <div>\n      <button type=\"button\">\u0627\u0644\u0633\u0627\u0628\u0642</button>\n      <button type=\"button\">\u0627\u0644\u062A\u0627\u0644\u064A</button>\n    </div>\n  </footer>\n</section>\n", styles: [":host {\n  display: block;\n  width: calc(100% - 32px);\n  height: 556px;\n  margin-inline: 16px;\n}\n\n.operations {\n  width: 100%;\n  height: 556px;\n  overflow: hidden;\n  border: 1px solid rgb(14 37 60 / 10%);\n  border-radius: 16px;\n  background: #fff;\n  color: #0e253c;\n  font-family: \"Lusail\", \"Tahoma\", sans-serif;\n}\n\n.operations__header {\n  display: flex;\n  height: 88px;\n  align-items: center;\n  justify-content: space-between;\n  padding: 16px 12px 16px 16px;\n  border-bottom: 1px solid rgb(14 37 60 / 10%);\n}\n\n.operations__title,\n.operations__toolbar {\n  display: flex;\n  align-items: center;\n}\n\n.operations__title {\n  gap: 16px;\n}\n\n.operations__toolbar {\n  direction: rtl;\n  gap: 12px;\n}\n\n.operations__title h2 {\n  margin: 0;\n  color: #101828;\n  font-size: 24px;\n  font-weight: 600;\n  line-height: 28px;\n}\n\n.operations__title-icon {\n  display: grid;\n  width: 32px;\n  height: 32px;\n  flex: 0 0 32px;\n  place-items: center;\n  border: 1px solid #e9eaeb;\n  border-radius: 6px;\n  background: #fff;\n  box-shadow: 0 1px 2px rgb(10 13 18 / 5%);\n  color: #667085;\n  font-size: 17px;\n}\n\n.operations__title button,\n.operations__filter,\n.operations__actions button {\n  border: 0;\n  background: transparent;\n  color: #7d8999;\n}\n\n.operations__expand {\n  width: 20px;\n  height: 20px;\n  margin-inline-start: 8px;\n  padding: 0;\n  font-size: 18px;\n  line-height: 20px;\n}\n\n.operations__filter {\n  display: inline-flex;\n  width: 97px;\n  height: 40px;\n  align-items: center;\n  justify-content: center;\n  gap: 4px;\n  padding: 10px 14px;\n  border: 1px solid #d5d7da;\n  border-radius: 8px;\n  background: #fff;\n  color: #344054;\n  font-size: 12px;\n}\n\n.operations__search {\n  position: relative;\n  display: block;\n  width: 296px;\n  height: 40px;\n}\n\n.operations__search input {\n  width: 100%;\n  height: 100%;\n  padding: 8px 38px 8px 40px;\n  border: 1px solid #d5d7da;\n  border-radius: 8px;\n  outline: 0;\n  font-size: 12px;\n}\n\n.operations__search > span {\n  position: absolute;\n  top: 12px;\n  right: 12px;\n  width: 13px;\n  height: 13px;\n  border: 1.5px solid #7b8492;\n  border-radius: 50%;\n}\n\n.operations__search kbd {\n  position: absolute;\n  top: 10px;\n  left: 10px;\n  padding: 2px 7px;\n  border: 1px solid #e3e5e8;\n  border-radius: 4px;\n  background: #fff;\n  color: #98a0ab;\n  font-size: 10px;\n}\n\n.operations__table-wrap {\n  height: 404px;\n  overflow-x: auto;\n  overflow-y: hidden;\n}\n\n.operations table {\n  width: 100%;\n  min-width: 1542px;\n  border-collapse: collapse;\n  table-layout: fixed;\n}\n\n.operations th,\n.operations td {\n  padding: 8px 12px 8px 16px;\n  border-bottom: 1px solid #e9eaeb;\n  color: #526173;\n  font-size: 11px;\n  text-align: right;\n  vertical-align: middle;\n}\n\n.operations th {\n  height: 44px;\n  background: #fff;\n  color: #7a8695;\n  font-weight: 500;\n}\n\n.operations th:not(:last-child)::after {\n  margin-inline-start: 6px;\n  color: #a4acb8;\n  content: \"\u2195\";\n  font-size: 9px;\n}\n\n.operations td:first-child,\n.operations th:first-child {\n  width: 177px;\n}\n\n.operations td:nth-child(2),\n.operations th:nth-child(2) {\n  width: 177px;\n}\n\n.operations td:nth-child(3),\n.operations th:nth-child(3),\n.operations td:nth-child(4),\n.operations th:nth-child(4),\n.operations td:nth-child(5),\n.operations th:nth-child(5) {\n  width: 138px;\n}\n\n.operations td:nth-child(6),\n.operations th:nth-child(6) {\n  width: 296px;\n}\n\n.operations td:nth-child(7),\n.operations th:nth-child(7) {\n  width: 177px;\n}\n\n.operations td:last-child,\n.operations th:last-child {\n  width: 301px;\n}\n\n.operations tbody tr {\n  height: 72px;\n}\n\n.operations__row--selected {\n  background: #f5f8ff;\n}\n\n.operations__selection {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  color: #263b78;\n  white-space: nowrap;\n}\n\n.operations__selection input {\n  position: absolute;\n  opacity: 0;\n  pointer-events: none;\n}\n\n.operations__selection i {\n  display: grid;\n  width: 18px;\n  height: 18px;\n  flex: 0 0 18px;\n  place-items: center;\n  border: 1px solid #d5d7da;\n  border-radius: 6px;\n  background: #fff;\n}\n\n.operations__selection input:checked + i {\n  border-color: #97133f;\n  background: #97133f;\n}\n\n.operations__selection input:checked + i::after {\n  color: #fff;\n  content: \"\u2713\";\n  font-size: 12px;\n  line-height: 1;\n}\n\n.operations__requester {\n  display: flex;\n  align-items: center;\n  gap: 9px;\n}\n\n.operations__requester > span:last-child {\n  display: flex;\n  min-width: 0;\n  flex-direction: column;\n}\n\n.operations__requester strong {\n  color: #303b4b;\n  font-size: 11px;\n  font-weight: 500;\n}\n\n.operations__requester small {\n  overflow: hidden;\n  color: #667085;\n  font-size: 9px;\n  text-overflow: ellipsis;\n}\n\n.operations__avatar {\n  position: relative;\n  width: 34px;\n  height: 34px;\n  flex: 0 0 34px;\n  border: 1px solid #d8dce1;\n  border-radius: 50%;\n}\n\n.operations__avatar::before {\n  position: absolute;\n  top: 7px;\n  left: 12px;\n  width: 8px;\n  height: 8px;\n  border: 1.5px solid #7d8999;\n  border-radius: 50%;\n  content: \"\";\n}\n\n.operations__avatar::after {\n  position: absolute;\n  bottom: 6px;\n  left: 8px;\n  width: 16px;\n  height: 8px;\n  border: 1.5px solid #7d8999;\n  border-bottom: 0;\n  border-radius: 10px 10px 0 0;\n  content: \"\";\n}\n\n.operations__actions {\n  direction: ltr;\n  white-space: nowrap;\n}\n\n.operations__actions button {\n  width: 30px;\n  height: 30px;\n  padding: 0;\n  font-size: 14px;\n}\n\n.operations__footer {\n  display: flex;\n  height: 64px;\n  align-items: center;\n  justify-content: space-between;\n  padding: 12px 16px;\n  color: #667085;\n  font-size: 12px;\n}\n\n.operations__footer div {\n  display: flex;\n  gap: 8px;\n}\n\n.operations__footer button {\n  min-width: 57px;\n  height: 36px;\n  border: 1px solid #d5d7da;\n  border-radius: 8px;\n  background: #fff;\n  color: #344054;\n  font-size: 12px;\n}\n"] }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(OperationsTableComponent, { className: "OperationsTableComponent", filePath: "src/app/components/dashboard/operations-table/operations-table.component.ts", lineNumber: 26 }); })();
