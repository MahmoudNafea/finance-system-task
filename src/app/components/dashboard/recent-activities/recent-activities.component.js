import { Component } from '@angular/core';
import * as i0 from "@angular/core";
export class RecentActivitiesComponent {
    today = [
        {
            text: 'إبراهيم خليل عبد الرحمن تم إرسال الرسالة إلى',
            link: 'المقدم: عبد العزيز الرويلي',
            tone: 'orange',
        },
        {
            text: 'إبراهيم خليل عبد الرحمن تم الإجابة عن طلبك',
            link: 'المقدم: عبد العزيز الرويلي',
            tone: 'gray',
        },
    ];
    older = [
        {
            text: '12:30 ظهراً • إبراهيم خليل عبد الرحمن تم قبول الطلب من',
            link: 'قسم المالية',
            tone: 'purple',
        },
        {
            text: '11:20 صباحاً • إبراهيم خليل عبد الرحمن تم الإجابة عن طلبك',
            link: 'قسم المالية',
            tone: 'blue',
        },
        {
            text: '01:30 مساءً • إبراهيم خليل عبد الرحمن تم قبول الطلب من',
            link: 'قسم المالية',
            tone: 'green',
        },
    ];
    static ɵfac = function RecentActivitiesComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || RecentActivitiesComponent)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: RecentActivitiesComponent, selectors: [["app-recent-activities"]], decls: 93, vars: 0, consts: [["dir", "rtl", 1, "activities"], [1, "activities__header"], [1, "activities__title"], ["aria-hidden", "true", 1, "activities__icon"], ["viewBox", "0 0 24 24"], ["d", "M5 3h14v18H5zM9 3v4M15 3v4M8 11h8M8 15h5"], ["cx", "17", "cy", "17", "r", "4"], ["d", "M17 15v2l1.5 1"], ["aria-hidden", "true", 1, "activities__separator"], ["type", "button", "aria-label", "\u062A\u0643\u0628\u064A\u0631", 1, "activities__expand"], ["d", "M14 5h5v5M19 5l-6 6M10 19H5v-5M5 19l6-6"], ["role", "group", "aria-label", "\u0627\u0644\u0641\u062A\u0631\u0629 \u0627\u0644\u0632\u0645\u0646\u064A\u0629", 1, "activities__period"], ["type", "button", 1, "active"], ["type", "button"], [1, "activities__content"], [1, "activities__group", "activities__group--today"], [1, "activities__messages"], [1, "activities__item"], ["aria-hidden", "true", 1, "activities__dot", "activities__dot--orange"], ["d", "M5 5h14v11H9l-4 3V5Z"], ["d", "M9 9h6M9 12h4"], ["href", "#"], [1, "activities__item", "activities__item--reply"], ["aria-hidden", "true", 1, "activities__reply"], ["d", "M9 8 4 12l5 4M5 12h9a5 5 0 0 1 5 5"], [1, "activities__group"], ["aria-hidden", "true", 1, "activities__dot", "activities__dot--purple"], ["d", "M7 10h10M7 14h7"], [1, "activities__date"], ["aria-hidden", "true", 1, "activities__dot", "activities__dot--blue"], ["aria-hidden", "true", 1, "activities__dot", "activities__dot--green"], ["type", "button", 1, "activities__show-all"], ["aria-hidden", "true"], [1, "activities__next-date"]], template: function RecentActivitiesComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵdomElementStart(0, "section", 0)(1, "header", 1)(2, "div", 2)(3, "span", 3);
            i0.ɵɵnamespaceSVG();
            i0.ɵɵdomElementStart(4, "svg", 4);
            i0.ɵɵdomElement(5, "path", 5)(6, "circle", 6)(7, "path", 7);
            i0.ɵɵdomElementEnd()();
            i0.ɵɵnamespaceHTML();
            i0.ɵɵdomElementStart(8, "h2");
            i0.ɵɵtext(9, "\u0627\u0644\u0623\u0646\u0634\u0637\u0629 \u0627\u0644\u0623\u062E\u064A\u0631\u0629");
            i0.ɵɵdomElementEnd();
            i0.ɵɵdomElement(10, "span", 8);
            i0.ɵɵdomElementStart(11, "button", 9);
            i0.ɵɵnamespaceSVG();
            i0.ɵɵdomElementStart(12, "svg", 4);
            i0.ɵɵdomElement(13, "path", 10);
            i0.ɵɵdomElementEnd()()();
            i0.ɵɵnamespaceHTML();
            i0.ɵɵdomElementStart(14, "div", 11)(15, "button", 12);
            i0.ɵɵtext(16, "\u0627\u0644\u064A\u0648\u0645");
            i0.ɵɵdomElementEnd();
            i0.ɵɵdomElementStart(17, "button", 13);
            i0.ɵɵtext(18, "\u0623\u0633\u0628\u0648\u0639");
            i0.ɵɵdomElementEnd();
            i0.ɵɵdomElementStart(19, "button", 13);
            i0.ɵɵtext(20, "\u0634\u0647\u0631");
            i0.ɵɵdomElementEnd()()();
            i0.ɵɵdomElementStart(21, "div", 14)(22, "section", 15)(23, "h3");
            i0.ɵɵtext(24, "\u0627\u0644\u064A\u0648\u0645");
            i0.ɵɵdomElementEnd();
            i0.ɵɵdomElementStart(25, "div", 16)(26, "div", 17)(27, "i", 18);
            i0.ɵɵnamespaceSVG();
            i0.ɵɵdomElementStart(28, "svg", 4);
            i0.ɵɵdomElement(29, "path", 19)(30, "path", 20);
            i0.ɵɵdomElementEnd()();
            i0.ɵɵnamespaceHTML();
            i0.ɵɵdomElementStart(31, "p");
            i0.ɵɵtext(32, " \u0645\u0646\u0630 \u062F\u0642\u064A\u0642\u0629 \u0648\u0627\u062D\u062F\u0629\u00A0 \u2022 \u00A0");
            i0.ɵɵdomElementStart(33, "a", 21);
            i0.ɵɵtext(34, "\u0625\u0628\u0631\u0627\u0647\u064A\u0645 \u062E\u0644\u064A\u0644 \u0639\u0628\u062F \u0627\u0644\u0631\u062D\u0645\u0646");
            i0.ɵɵdomElementEnd();
            i0.ɵɵtext(35, " \u00A0\u062A\u0645 \u0625\u0631\u0633\u0627\u0644 \u0627\u0644\u0631\u0633\u0627\u0644\u0629 \u0625\u0644\u0649\u00A0 ");
            i0.ɵɵdomElementStart(36, "a", 21);
            i0.ɵɵtext(37, "\u0627\u0644\u0645\u0642\u062F\u0645 : \u0639\u0628\u062F \u0627\u0644\u0639\u0632\u064A\u0632 \u0627\u0644\u0631\u0648\u064A\u0644\u064A");
            i0.ɵɵdomElementEnd()()();
            i0.ɵɵdomElementStart(38, "div", 22)(39, "p");
            i0.ɵɵtext(40, " \u0645\u0646\u0630 \u062F\u0642\u064A\u0642\u0629 \u0648\u0627\u062D\u062F\u0629\u00A0 \u2022 \u00A0");
            i0.ɵɵdomElementStart(41, "a", 21);
            i0.ɵɵtext(42, "\u0625\u0628\u0631\u0627\u0647\u064A\u0645 \u062E\u0644\u064A\u0644 \u0639\u0628\u062F \u0627\u0644\u0631\u062D\u0645\u0646");
            i0.ɵɵdomElementEnd();
            i0.ɵɵtext(43, " \u00A0\u062A\u0645 \u0627\u0644\u0625\u062C\u0627\u0628\u0629 \u0639\u0646 \u0637\u0644\u0628\u0643\u00A0 ");
            i0.ɵɵdomElementStart(44, "a", 21);
            i0.ɵɵtext(45, "\u0627\u0644\u0645\u0642\u062F\u0645 : \u0639\u0628\u062F \u0627\u0644\u0639\u0632\u064A\u0632 \u0627\u0644\u0631\u0648\u064A\u0644\u064A");
            i0.ɵɵdomElementEnd()();
            i0.ɵɵdomElementStart(46, "i", 23);
            i0.ɵɵnamespaceSVG();
            i0.ɵɵdomElementStart(47, "svg", 4);
            i0.ɵɵdomElement(48, "path", 24);
            i0.ɵɵdomElementEnd()()()()();
            i0.ɵɵnamespaceHTML();
            i0.ɵɵdomElementStart(49, "section", 25)(50, "h3");
            i0.ɵɵtext(51, "\u0623\u0645\u0633");
            i0.ɵɵdomElementEnd();
            i0.ɵɵdomElementStart(52, "div", 17)(53, "i", 26);
            i0.ɵɵnamespaceSVG();
            i0.ɵɵdomElementStart(54, "svg", 4);
            i0.ɵɵdomElement(55, "path", 27);
            i0.ɵɵdomElementEnd()();
            i0.ɵɵnamespaceHTML();
            i0.ɵɵdomElementStart(56, "p");
            i0.ɵɵtext(57, "12:30 \u0638\u0647\u0631\u0627\u064B\u00A0 \u2022 \u00A0");
            i0.ɵɵdomElementStart(58, "a", 21);
            i0.ɵɵtext(59, "\u0625\u0628\u0631\u0627\u0647\u064A\u0645 \u062E\u0644\u064A\u0644 \u0639\u0628\u062F \u0627\u0644\u0631\u062D\u0645\u0646");
            i0.ɵɵdomElementEnd();
            i0.ɵɵtext(60, " \u062A\u0645 \u0642\u0628\u0648\u0644 \u0627\u0644\u0637\u0644\u0628 \u0645\u0646 ");
            i0.ɵɵdomElementStart(61, "a", 21);
            i0.ɵɵtext(62, "\u0642\u0633\u0645 \u0627\u0644\u0645\u0627\u0644\u064A\u0629");
            i0.ɵɵdomElementEnd()()();
            i0.ɵɵdomElementStart(63, "strong", 28);
            i0.ɵɵtext(64, "25 MAY 2024");
            i0.ɵɵdomElementEnd();
            i0.ɵɵdomElementStart(65, "div", 17)(66, "i", 29);
            i0.ɵɵnamespaceSVG();
            i0.ɵɵdomElementStart(67, "svg", 4);
            i0.ɵɵdomElement(68, "path", 27);
            i0.ɵɵdomElementEnd()();
            i0.ɵɵnamespaceHTML();
            i0.ɵɵdomElementStart(69, "p");
            i0.ɵɵtext(70, "11:20 \u0635\u0628\u0627\u062D\u0627\u064B\u00A0 \u2022 \u00A0");
            i0.ɵɵdomElementStart(71, "a", 21);
            i0.ɵɵtext(72, "\u0625\u0628\u0631\u0627\u0647\u064A\u0645 \u062E\u0644\u064A\u0644 \u0639\u0628\u062F \u0627\u0644\u0631\u062D\u0645\u0646");
            i0.ɵɵdomElementEnd();
            i0.ɵɵtext(73, " \u062A\u0645 \u0627\u0644\u0625\u062C\u0627\u0628\u0629 \u0639\u0646 \u0637\u0644\u0628\u0643 ");
            i0.ɵɵdomElementStart(74, "a", 21);
            i0.ɵɵtext(75, "\u0642\u0633\u0645 \u0627\u0644\u0645\u0627\u0644\u064A\u0629");
            i0.ɵɵdomElementEnd()()();
            i0.ɵɵdomElementStart(76, "div", 17)(77, "i", 30);
            i0.ɵɵnamespaceSVG();
            i0.ɵɵdomElementStart(78, "svg", 4);
            i0.ɵɵdomElement(79, "path", 27);
            i0.ɵɵdomElementEnd()();
            i0.ɵɵnamespaceHTML();
            i0.ɵɵdomElementStart(80, "p");
            i0.ɵɵtext(81, "01:30 \u0645\u0633\u0627\u0621\u064B\u00A0 \u2022 \u00A0");
            i0.ɵɵdomElementStart(82, "a", 21);
            i0.ɵɵtext(83, "\u0625\u0628\u0631\u0627\u0647\u064A\u0645 \u062E\u0644\u064A\u0644 \u0639\u0628\u062F \u0627\u0644\u0631\u062D\u0645\u0646");
            i0.ɵɵdomElementEnd();
            i0.ɵɵtext(84, " \u062A\u0645 \u0642\u0628\u0648\u0644 \u0627\u0644\u0637\u0644\u0628 \u0645\u0646 ");
            i0.ɵɵdomElementStart(85, "a", 21);
            i0.ɵɵtext(86, "\u0642\u0633\u0645 \u0627\u0644\u0645\u0627\u0644\u064A\u0629");
            i0.ɵɵdomElementEnd()()()();
            i0.ɵɵdomElementStart(87, "button", 31)(88, "span", 32);
            i0.ɵɵtext(89, "\u2304");
            i0.ɵɵdomElementEnd();
            i0.ɵɵtext(90, " \u0625\u0638\u0647\u0627\u0631 \u0627\u0644\u0643\u0644 ");
            i0.ɵɵdomElementEnd();
            i0.ɵɵdomElementStart(91, "strong", 33);
            i0.ɵɵtext(92, "25 MAY 2024");
            i0.ɵɵdomElementEnd()()();
        } }, styles: ["[_nghost-%COMP%] {\n  display: block;\n  width: 100%;\n  min-width: 0;\n  height: 504px;\n}\n\n.activities[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n  padding-bottom: 16px;\n  border: 1px solid rgb(14 37 60 / 10%);\n  border-radius: 16px;\n  background: #fff;\n  box-shadow: 0 1px 3px rgb(0 0 0 / 5%);\n  color: #0e253c;\n  font-family: \"Lusail\", \"Tahoma\", sans-serif;\n}\n\n.activities__header[_ngcontent-%COMP%] {\n  display: flex;\n  height: 88px;\n  align-items: center;\n  justify-content: space-between;\n  padding: 16px 12px 16px 16px;\n  border-bottom: 1px solid rgb(14 37 60 / 10%);\n}\n\n.activities__title[_ngcontent-%COMP%] {\n  display: flex;\n  width: auto;\n  height: 56px;\n  align-items: center;\n  gap: 16px;\n}\n\n.activities__title[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  width: max-content;\n  flex: 0 0 auto;\n  margin: 0;\n  color: #101828;\n  font-size: 24px;\n  font-weight: 600;\n  line-height: 28px;\n  white-space: nowrap;\n}\n\n.activities__separator[_ngcontent-%COMP%] {\n  width: 1px;\n  height: 32px;\n  flex: 0 0 1px;\n  background: rgb(14 37 60 / 10%);\n}\n\n.activities__icon[_ngcontent-%COMP%] {\n  display: grid;\n  width: 32px;\n  height: 32px;\n  place-items: center;\n  border: 1px solid #e9eaeb;\n  border-radius: 6px;\n  background: #fff;\n  box-shadow: 0 1px 2px rgb(10 13 18 / 5%);\n  color: #667085;\n}\n\n.activities__icon[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%], \n.activities__expand[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%], \n.activities__dot[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%], \n.activities__reply[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  fill: none;\n  stroke: currentcolor;\n  stroke-linecap: round;\n  stroke-linejoin: round;\n  stroke-width: 1.7;\n}\n\n.activities__icon[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%], \n.activities__expand[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 18px;\n  height: 18px;\n}\n\n.activities__expand[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 20px;\n  padding: 0;\n  border: 0;\n  background: transparent;\n  color: #8090a7;\n}\n\n.activities__period[_ngcontent-%COMP%] {\n  display: flex;\n  width: 180px;\n  height: 40px;\n  direction: rtl;\n  overflow: hidden;\n  border: 1px solid #d5d7da;\n  border-radius: 8px;\n  box-shadow: 0 1px 2px rgb(10 13 18 / 5%);\n}\n\n.activities__period[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  height: 38px;\n  min-width: 0;\n  flex: 1 1 60px;\n  padding: 0;\n  border: 0;\n  border-left: 1px solid #d5d7da;\n  background: #fff;\n  color: #344054;\n  font-size: 14px;\n  line-height: 22px;\n}\n\n.activities__period[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:first-child {\n  border-radius: 0 7px 7px 0;\n}\n\n.activities__period[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:last-child {\n  border-left: 0;\n  border-radius: 7px 0 0 7px;\n}\n\n.activities__period[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%] {\n  background: #fff;\n  font-weight: 600;\n}\n\n.activities__content[_ngcontent-%COMP%] {\n  height: calc(100% - 88px);\n  overflow: hidden;\n  padding: 24px 20px 0;\n}\n\n.activities__group[_ngcontent-%COMP%] {\n  position: relative;\n  margin-bottom: 24px;\n}\n\n.activities__group[_ngcontent-%COMP%]::before {\n  position: absolute;\n  top: 36px;\n  right: 11px;\n  bottom: 4px;\n  width: 1px;\n  background: #e9eaeb;\n  content: \"\";\n}\n\n.activities__group[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  height: 18px;\n  margin: 0 0 8px;\n  color: #344054;\n  font-size: 14px;\n  font-weight: 600;\n  line-height: 18px;\n}\n\n.activities__group--today[_ngcontent-%COMP%] {\n  height: 84px;\n  margin-bottom: 28px;\n}\n\n.activities__messages[_ngcontent-%COMP%] {\n  display: flex;\n  height: 58px;\n  flex-direction: column;\n  gap: 12px;\n}\n\n.activities__date[_ngcontent-%COMP%] {\n  display: block;\n  height: 18px;\n  margin: 20px 0 8px;\n  color: #101828;\n  font-family: Arial, sans-serif;\n  font-size: 11px;\n  line-height: 18px;\n  text-align: right;\n}\n\n.activities__item[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  min-height: 22px;\n  align-items: flex-start;\n  gap: 12px;\n}\n\n.activities__item[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  color: rgb(14 37 60 / 85%);\n  font-size: 14px;\n  line-height: 22px;\n  white-space: nowrap;\n}\n\n.activities__item[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #3c7bce;\n  text-decoration: none;\n}\n\n.activities__dot[_ngcontent-%COMP%] {\n  z-index: 1;\n  display: grid;\n  width: 24px;\n  height: 24px;\n  flex: 0 0 24px;\n  place-items: center;\n  border: 0;\n  border-radius: 50%;\n  color: #fff;\n  font-style: normal;\n}\n\n.activities__dot[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 14px;\n  height: 14px;\n  stroke: #fff;\n}\n\n.activities__dot--orange[_ngcontent-%COMP%] { background: #f79009; }\n.activities__dot--purple[_ngcontent-%COMP%] { background: #8f50e9; }\n.activities__dot--blue[_ngcontent-%COMP%] { background: #2fa7db; }\n.activities__dot--green[_ngcontent-%COMP%] { background: #22c55e; }\n\n.activities__item--reply[_ngcontent-%COMP%] {\n  padding-inline-start: 36px;\n}\n\n.activities__reply[_ngcontent-%COMP%] {\n  display: grid;\n  width: 24px;\n  height: 24px;\n  margin-inline-start: auto;\n  place-items: center;\n  border-radius: 50%;\n  background: #eef1f4;\n  color: #60758a;\n  font-style: normal;\n}\n\n.activities__reply[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 16px;\n  height: 16px;\n}\n\n.activities__show-all[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  margin-inline-start: auto;\n  padding: 0;\n  border: 0;\n  background: transparent;\n  color: #6938ef;\n  font-size: 14px;\n  line-height: 22px;\n}\n\n.activities__next-date[_ngcontent-%COMP%] {\n  display: block;\n  margin-top: 34px;\n  color: #101828;\n  font-family: Arial, sans-serif;\n  font-size: 11px;\n  line-height: 18px;\n  text-align: right;\n}"] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(RecentActivitiesComponent, [{
        type: Component,
        args: [{ selector: 'app-recent-activities', template: "<section class=\"activities\" dir=\"rtl\">\n  <header class=\"activities__header\">\n    <div class=\"activities__title\">\n      <span class=\"activities__icon\" aria-hidden=\"true\">\n        <svg viewBox=\"0 0 24 24\"><path d=\"M5 3h14v18H5zM9 3v4M15 3v4M8 11h8M8 15h5\"/><circle cx=\"17\" cy=\"17\" r=\"4\"/><path d=\"M17 15v2l1.5 1\"/></svg>\n      </span>\n      <h2>\u0627\u0644\u0623\u0646\u0634\u0637\u0629 \u0627\u0644\u0623\u062E\u064A\u0631\u0629</h2>\n      <span class=\"activities__separator\" aria-hidden=\"true\"></span>\n      <button type=\"button\" class=\"activities__expand\" aria-label=\"\u062A\u0643\u0628\u064A\u0631\"><svg viewBox=\"0 0 24 24\"><path d=\"M14 5h5v5M19 5l-6 6M10 19H5v-5M5 19l6-6\"/></svg></button>\n    </div>\n\n    <div class=\"activities__period\" role=\"group\" aria-label=\"\u0627\u0644\u0641\u062A\u0631\u0629 \u0627\u0644\u0632\u0645\u0646\u064A\u0629\">\n      <button type=\"button\" class=\"active\">\u0627\u0644\u064A\u0648\u0645</button>\n      <button type=\"button\">\u0623\u0633\u0628\u0648\u0639</button>\n      <button type=\"button\">\u0634\u0647\u0631</button>\n    </div>\n  </header>\n\n  <div class=\"activities__content\">\n    <section class=\"activities__group activities__group--today\">\n      <h3>\u0627\u0644\u064A\u0648\u0645</h3>\n      <div class=\"activities__messages\">\n        <div class=\"activities__item\">\n          <i class=\"activities__dot activities__dot--orange\" aria-hidden=\"true\"><svg viewBox=\"0 0 24 24\"><path d=\"M5 5h14v11H9l-4 3V5Z\"/><path d=\"M9 9h6M9 12h4\"/></svg></i>\n          <p>\n            \u0645\u0646\u0630 \u062F\u0642\u064A\u0642\u0629 \u0648\u0627\u062D\u062F\u0629&nbsp; \u2022 &nbsp;<a href=\"#\">\u0625\u0628\u0631\u0627\u0647\u064A\u0645 \u062E\u0644\u064A\u0644 \u0639\u0628\u062F \u0627\u0644\u0631\u062D\u0645\u0646</a>\n            &nbsp;\u062A\u0645 \u0625\u0631\u0633\u0627\u0644 \u0627\u0644\u0631\u0633\u0627\u0644\u0629 \u0625\u0644\u0649&nbsp; <a href=\"#\">\u0627\u0644\u0645\u0642\u062F\u0645 : \u0639\u0628\u062F \u0627\u0644\u0639\u0632\u064A\u0632 \u0627\u0644\u0631\u0648\u064A\u0644\u064A</a>\n          </p>\n        </div>\n        <div class=\"activities__item activities__item--reply\">\n          <p>\n            \u0645\u0646\u0630 \u062F\u0642\u064A\u0642\u0629 \u0648\u0627\u062D\u062F\u0629&nbsp; \u2022 &nbsp;<a href=\"#\">\u0625\u0628\u0631\u0627\u0647\u064A\u0645 \u062E\u0644\u064A\u0644 \u0639\u0628\u062F \u0627\u0644\u0631\u062D\u0645\u0646</a>\n            &nbsp;\u062A\u0645 \u0627\u0644\u0625\u062C\u0627\u0628\u0629 \u0639\u0646 \u0637\u0644\u0628\u0643&nbsp; <a href=\"#\">\u0627\u0644\u0645\u0642\u062F\u0645 : \u0639\u0628\u062F \u0627\u0644\u0639\u0632\u064A\u0632 \u0627\u0644\u0631\u0648\u064A\u0644\u064A</a>\n          </p>\n          <i class=\"activities__reply\" aria-hidden=\"true\"><svg viewBox=\"0 0 24 24\"><path d=\"M9 8 4 12l5 4M5 12h9a5 5 0 0 1 5 5\"/></svg></i>\n        </div>\n      </div>\n    </section>\n\n    <section class=\"activities__group\">\n      <h3>\u0623\u0645\u0633</h3>\n      <div class=\"activities__item\">\n        <i class=\"activities__dot activities__dot--purple\" aria-hidden=\"true\"><svg viewBox=\"0 0 24 24\"><path d=\"M7 10h10M7 14h7\"/></svg></i>\n        <p>12:30 \u0638\u0647\u0631\u0627\u064B&nbsp; \u2022 &nbsp;<a href=\"#\">\u0625\u0628\u0631\u0627\u0647\u064A\u0645 \u062E\u0644\u064A\u0644 \u0639\u0628\u062F \u0627\u0644\u0631\u062D\u0645\u0646</a> \u062A\u0645 \u0642\u0628\u0648\u0644 \u0627\u0644\u0637\u0644\u0628 \u0645\u0646 <a href=\"#\">\u0642\u0633\u0645 \u0627\u0644\u0645\u0627\u0644\u064A\u0629</a></p>\n      </div>\n\n      <strong class=\"activities__date\">25 MAY 2024</strong>\n\n      <div class=\"activities__item\">\n        <i class=\"activities__dot activities__dot--blue\" aria-hidden=\"true\"><svg viewBox=\"0 0 24 24\"><path d=\"M7 10h10M7 14h7\"/></svg></i>\n        <p>11:20 \u0635\u0628\u0627\u062D\u0627\u064B&nbsp; \u2022 &nbsp;<a href=\"#\">\u0625\u0628\u0631\u0627\u0647\u064A\u0645 \u062E\u0644\u064A\u0644 \u0639\u0628\u062F \u0627\u0644\u0631\u062D\u0645\u0646</a> \u062A\u0645 \u0627\u0644\u0625\u062C\u0627\u0628\u0629 \u0639\u0646 \u0637\u0644\u0628\u0643 <a href=\"#\">\u0642\u0633\u0645 \u0627\u0644\u0645\u0627\u0644\u064A\u0629</a></p>\n      </div>\n\n      <div class=\"activities__item\">\n        <i class=\"activities__dot activities__dot--green\" aria-hidden=\"true\"><svg viewBox=\"0 0 24 24\"><path d=\"M7 10h10M7 14h7\"/></svg></i>\n        <p>01:30 \u0645\u0633\u0627\u0621\u064B&nbsp; \u2022 &nbsp;<a href=\"#\">\u0625\u0628\u0631\u0627\u0647\u064A\u0645 \u062E\u0644\u064A\u0644 \u0639\u0628\u062F \u0627\u0644\u0631\u062D\u0645\u0646</a> \u062A\u0645 \u0642\u0628\u0648\u0644 \u0627\u0644\u0637\u0644\u0628 \u0645\u0646 <a href=\"#\">\u0642\u0633\u0645 \u0627\u0644\u0645\u0627\u0644\u064A\u0629</a></p>\n      </div>\n    </section>\n\n    <button type=\"button\" class=\"activities__show-all\">\n      <span aria-hidden=\"true\">\u2304</span>\n      \u0625\u0638\u0647\u0627\u0631 \u0627\u0644\u0643\u0644\n    </button>\n\n    <strong class=\"activities__next-date\">25 MAY 2024</strong>\n  </div>\n</section>\n", styles: [":host {\n  display: block;\n  width: 100%;\n  min-width: 0;\n  height: 504px;\n}\n\n.activities {\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n  padding-bottom: 16px;\n  border: 1px solid rgb(14 37 60 / 10%);\n  border-radius: 16px;\n  background: #fff;\n  box-shadow: 0 1px 3px rgb(0 0 0 / 5%);\n  color: #0e253c;\n  font-family: \"Lusail\", \"Tahoma\", sans-serif;\n}\n\n.activities__header {\n  display: flex;\n  height: 88px;\n  align-items: center;\n  justify-content: space-between;\n  padding: 16px 12px 16px 16px;\n  border-bottom: 1px solid rgb(14 37 60 / 10%);\n}\n\n.activities__title {\n  display: flex;\n  width: auto;\n  height: 56px;\n  align-items: center;\n  gap: 16px;\n}\n\n.activities__title h2 {\n  width: max-content;\n  flex: 0 0 auto;\n  margin: 0;\n  color: #101828;\n  font-size: 24px;\n  font-weight: 600;\n  line-height: 28px;\n  white-space: nowrap;\n}\n\n.activities__separator {\n  width: 1px;\n  height: 32px;\n  flex: 0 0 1px;\n  background: rgb(14 37 60 / 10%);\n}\n\n.activities__icon {\n  display: grid;\n  width: 32px;\n  height: 32px;\n  place-items: center;\n  border: 1px solid #e9eaeb;\n  border-radius: 6px;\n  background: #fff;\n  box-shadow: 0 1px 2px rgb(10 13 18 / 5%);\n  color: #667085;\n}\n\n.activities__icon svg,\n.activities__expand svg,\n.activities__dot svg,\n.activities__reply svg {\n  fill: none;\n  stroke: currentcolor;\n  stroke-linecap: round;\n  stroke-linejoin: round;\n  stroke-width: 1.7;\n}\n\n.activities__icon svg,\n.activities__expand svg {\n  width: 18px;\n  height: 18px;\n}\n\n.activities__expand {\n  width: 20px;\n  height: 20px;\n  padding: 0;\n  border: 0;\n  background: transparent;\n  color: #8090a7;\n}\n\n.activities__period {\n  display: flex;\n  width: 180px;\n  height: 40px;\n  direction: rtl;\n  overflow: hidden;\n  border: 1px solid #d5d7da;\n  border-radius: 8px;\n  box-shadow: 0 1px 2px rgb(10 13 18 / 5%);\n}\n\n.activities__period button {\n  height: 38px;\n  min-width: 0;\n  flex: 1 1 60px;\n  padding: 0;\n  border: 0;\n  border-left: 1px solid #d5d7da;\n  background: #fff;\n  color: #344054;\n  font-size: 14px;\n  line-height: 22px;\n}\n\n.activities__period button:first-child {\n  border-radius: 0 7px 7px 0;\n}\n\n.activities__period button:last-child {\n  border-left: 0;\n  border-radius: 7px 0 0 7px;\n}\n\n.activities__period .active {\n  background: #fff;\n  font-weight: 600;\n}\n\n.activities__content {\n  height: calc(100% - 88px);\n  overflow: hidden;\n  padding: 24px 20px 0;\n}\n\n.activities__group {\n  position: relative;\n  margin-bottom: 24px;\n}\n\n.activities__group::before {\n  position: absolute;\n  top: 36px;\n  right: 11px;\n  bottom: 4px;\n  width: 1px;\n  background: #e9eaeb;\n  content: \"\";\n}\n\n.activities__group h3 {\n  height: 18px;\n  margin: 0 0 8px;\n  color: #344054;\n  font-size: 14px;\n  font-weight: 600;\n  line-height: 18px;\n}\n\n.activities__group--today {\n  height: 84px;\n  margin-bottom: 28px;\n}\n\n.activities__messages {\n  display: flex;\n  height: 58px;\n  flex-direction: column;\n  gap: 12px;\n}\n\n.activities__date {\n  display: block;\n  height: 18px;\n  margin: 20px 0 8px;\n  color: #101828;\n  font-family: Arial, sans-serif;\n  font-size: 11px;\n  line-height: 18px;\n  text-align: right;\n}\n\n.activities__item {\n  position: relative;\n  display: flex;\n  min-height: 22px;\n  align-items: flex-start;\n  gap: 12px;\n}\n\n.activities__item p {\n  margin: 0;\n  color: rgb(14 37 60 / 85%);\n  font-size: 14px;\n  line-height: 22px;\n  white-space: nowrap;\n}\n\n.activities__item a {\n  color: #3c7bce;\n  text-decoration: none;\n}\n\n.activities__dot {\n  z-index: 1;\n  display: grid;\n  width: 24px;\n  height: 24px;\n  flex: 0 0 24px;\n  place-items: center;\n  border: 0;\n  border-radius: 50%;\n  color: #fff;\n  font-style: normal;\n}\n\n.activities__dot svg {\n  width: 14px;\n  height: 14px;\n  stroke: #fff;\n}\n\n.activities__dot--orange { background: #f79009; }\n.activities__dot--purple { background: #8f50e9; }\n.activities__dot--blue { background: #2fa7db; }\n.activities__dot--green { background: #22c55e; }\n\n.activities__item--reply {\n  padding-inline-start: 36px;\n}\n\n.activities__reply {\n  display: grid;\n  width: 24px;\n  height: 24px;\n  margin-inline-start: auto;\n  place-items: center;\n  border-radius: 50%;\n  background: #eef1f4;\n  color: #60758a;\n  font-style: normal;\n}\n\n.activities__reply svg {\n  width: 16px;\n  height: 16px;\n}\n\n.activities__show-all {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  margin-inline-start: auto;\n  padding: 0;\n  border: 0;\n  background: transparent;\n  color: #6938ef;\n  font-size: 14px;\n  line-height: 22px;\n}\n\n.activities__next-date {\n  display: block;\n  margin-top: 34px;\n  color: #101828;\n  font-family: Arial, sans-serif;\n  font-size: 11px;\n  line-height: 18px;\n  text-align: right;\n}\n"] }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(RecentActivitiesComponent, { className: "RecentActivitiesComponent", filePath: "src/app/components/dashboard/recent-activities/recent-activities.component.ts", lineNumber: 14 }); })();
