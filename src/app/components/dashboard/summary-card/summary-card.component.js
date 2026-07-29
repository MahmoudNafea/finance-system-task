import { Component, input } from '@angular/core';
import * as i0 from "@angular/core";
function SummaryCardComponent_Case_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵnamespaceSVG();
    i0.ɵɵdomElementStart(0, "svg", 3);
    i0.ɵɵdomElement(1, "path", 7)(2, "path", 8)(3, "circle", 9);
    i0.ɵɵdomElementEnd();
} }
function SummaryCardComponent_Case_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵnamespaceSVG();
    i0.ɵɵdomElementStart(0, "svg", 4);
    i0.ɵɵdomElement(1, "path", 10)(2, "path", 11);
    i0.ɵɵdomElementEnd();
} }
function SummaryCardComponent_Case_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵnamespaceSVG();
    i0.ɵɵdomElementStart(0, "svg", 5);
    i0.ɵɵdomElement(1, "path", 12)(2, "path", 13)(3, "path", 14);
    i0.ɵɵdomElementEnd();
} }
export class SummaryCardComponent {
    label = input.required(/* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "label" }] : /* istanbul ignore next */ []));
    value = input.required(/* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "value" }] : /* istanbul ignore next */ []));
    trend = input.required(/* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "trend" }] : /* istanbul ignore next */ []));
    positive = input(false, /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "positive" }] : /* istanbul ignore next */ []));
    icon = input('document', /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "icon" }] : /* istanbul ignore next */ []));
    static ɵfac = function SummaryCardComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || SummaryCardComponent)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: SummaryCardComponent, selectors: [["app-summary-card"]], inputs: { label: [1, "label"], value: [1, "value"], trend: [1, "trend"], positive: [1, "positive"], icon: [1, "icon"] }, decls: 16, vars: 6, consts: [["dir", "rtl", 1, "summary-card"], [1, "summary-card__body"], ["aria-hidden", "true", 1, "summary-card__icon"], ["viewBox", "0 0 24 24", 1, "summary-card__icon-svg", "summary-card__icon-svg--wallet"], ["viewBox", "0 0 24 24", 1, "summary-card__icon-svg", "summary-card__icon-svg--approved"], ["viewBox", "0 0 24 24", 1, "summary-card__icon-svg", "summary-card__icon-svg--document"], [1, "summary-card__copy"], ["d", "M5 4h12a2 2 0 0 1 2 2v1h1a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H5a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3Z", 1, "solid"], ["d", "M14 11h8v5h-8a2.5 2.5 0 0 1 0-5Z", 1, "cutout"], ["cx", "15", "cy", "13.5", "r", "1", 1, "solid"], ["d", "M8 6V4h8v2h4a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4Zm2 0h4V5h-4v1Z", 1, "solid"], ["d", "m7.5 13 3 3 6-6", 1, "check"], ["d", "M3 7v12M6 4v15", 1, "back"], ["d", "M8 2h8l5 5v13a2 2 0 0 1-2 2H8V2Z", 1, "solid"], ["d", "M16 2v5h5", 1, "fold"]], template: function SummaryCardComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵdomElementStart(0, "article", 0)(1, "div", 1)(2, "span", 2);
            i0.ɵɵconditionalCreate(3, SummaryCardComponent_Case_3_Template, 4, 0, ":svg:svg", 3)(4, SummaryCardComponent_Case_4_Template, 3, 0, ":svg:svg", 4)(5, SummaryCardComponent_Case_5_Template, 4, 0, ":svg:svg", 5);
            i0.ɵɵdomElementEnd();
            i0.ɵɵdomElementStart(6, "div", 6)(7, "p");
            i0.ɵɵtext(8);
            i0.ɵɵdomElementEnd();
            i0.ɵɵdomElementStart(9, "strong");
            i0.ɵɵtext(10);
            i0.ɵɵdomElementEnd()()();
            i0.ɵɵdomElementStart(11, "footer")(12, "span");
            i0.ɵɵtext(13, "\u0645\u0646 \u0627\u0644\u0634\u0647\u0631 \u0627\u0644\u0645\u0627\u0636\u064A");
            i0.ɵɵdomElementEnd();
            i0.ɵɵdomElementStart(14, "strong");
            i0.ɵɵtext(15);
            i0.ɵɵdomElementEnd()()();
        } if (rf & 2) {
            let tmp_0_0;
            i0.ɵɵadvance(3);
            i0.ɵɵconditional((tmp_0_0 = ctx.icon()) === "wallet" ? 3 : tmp_0_0 === "approved" ? 4 : 5);
            i0.ɵɵadvance(5);
            i0.ɵɵtextInterpolate(ctx.label());
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate(ctx.value());
            i0.ɵɵadvance(4);
            i0.ɵɵclassProp("summary-card__trend--positive", ctx.positive());
            i0.ɵɵadvance();
            i0.ɵɵtextInterpolate1("\u2197 ", ctx.trend());
        } }, styles: ["[_nghost-%COMP%] {\n  display: block;\n  width: 100%;\n  height: 138px;\n  min-width: 0;\n}\n\n.summary-card[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 138px;\n  overflow: hidden;\n  border: 1px solid rgb(14 37 60 / 10%);\n  border-radius: 16px;\n  background: #f6f8f9;\n  box-shadow: 0 3px 6px rgb(0 0 0 / 6%);\n  font-family: \"Lusail\", \"Tahoma\", sans-serif;\n}\n\n.summary-card__body[_ngcontent-%COMP%] {\n  display: flex;\n  height: 95px;\n  align-items: center;\n  gap: 16px;\n  padding: 20px;\n  background: #f6f8f9;\n}\n\n.summary-card__copy[_ngcontent-%COMP%] {\n  display: flex;\n  min-width: 0;\n  flex: 1 1 auto;\n  flex-direction: column;\n  align-items: flex-start;\n  gap: 4px;\n  text-align: start;\n}\n\n@media (max-width: 1600px) {\n  .summary-card__body[_ngcontent-%COMP%] {\n    gap: 12px;\n    padding-inline: 14px;\n  }\n\n  .summary-card[_ngcontent-%COMP%]   footer[_ngcontent-%COMP%] {\n    padding-inline: 14px;\n  }\n}\n\n.summary-card__body[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #52677b;\n  font-size: 12px;\n  font-weight: 500;\n  line-height: 18px;\n}\n\n.summary-card__body[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  width: 100%;\n  color: #202020;\n  font-size: 16px;\n  font-weight: 600;\n  line-height: 25px;\n}\n\n.summary-card__icon[_ngcontent-%COMP%] {\n  display: grid;\n  width: 56px;\n  height: 56px;\n  flex: 0 0 56px;\n  place-items: center;\n  border: 1px solid #eaeaea;\n  border-radius: 50%;\n  background: #f4f7fe;\n  color: #97133f;\n}\n\n.summary-card__icon[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 24px;\n  height: 24px;\n  fill: none;\n  stroke: none;\n  stroke-linecap: round;\n  stroke-linejoin: round;\n  stroke-width: 1.7;\n}\n\n.summary-card__icon[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]   path[_ngcontent-%COMP%] {\n  vector-effect: non-scaling-stroke;\n}\n\n.summary-card__icon-svg[_ngcontent-%COMP%]   .solid[_ngcontent-%COMP%] {\n  fill: currentcolor;\n}\n\n.summary-card__icon-svg[_ngcontent-%COMP%]   .cutout[_ngcontent-%COMP%] {\n  fill: #f4f7fe;\n}\n\n.summary-card__icon-svg--wallet[_ngcontent-%COMP%]   circle.solid[_ngcontent-%COMP%] {\n  fill: #97133f;\n}\n\n.summary-card__icon-svg--approved[_ngcontent-%COMP%]   .check[_ngcontent-%COMP%] {\n  fill: none;\n  stroke: #fff;\n  stroke-width: 1.8;\n}\n\n.summary-card__icon-svg--document[_ngcontent-%COMP%]   .back[_ngcontent-%COMP%] {\n  fill: none;\n  stroke: currentcolor;\n  stroke-width: 1.7;\n}\n\n.summary-card__icon-svg--document[_ngcontent-%COMP%]   .fold[_ngcontent-%COMP%] {\n  fill: none;\n  stroke: #f4f7fe;\n  stroke-width: 1.7;\n}\n\n.summary-card[_ngcontent-%COMP%]   footer[_ngcontent-%COMP%] {\n  display: flex;\n  height: 42px;\n  align-items: center;\n  justify-content: space-between;\n  padding: 12px 20px;\n  border-top: 1px solid rgb(14 37 60 / 10%);\n  background: #fff;\n  color: #66758a;\n  font-size: 12px;\n  font-weight: 500;\n  line-height: 18px;\n}\n\n.summary-card[_ngcontent-%COMP%]   footer[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  color: #dc3545;\n  font-family: \"Inter\", Arial, sans-serif;\n  font-size: 12px;\n  font-weight: 500;\n  line-height: 18px;\n}\n\n.summary-card[_ngcontent-%COMP%]   footer[_ngcontent-%COMP%]   .summary-card__trend--positive[_ngcontent-%COMP%] {\n  color: #22c55e;\n}"] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SummaryCardComponent, [{
        type: Component,
        args: [{ selector: 'app-summary-card', template: "<article class=\"summary-card\" dir=\"rtl\">\n  <div class=\"summary-card__body\">\n    <span class=\"summary-card__icon\" aria-hidden=\"true\">\n      @switch (icon()) {\n        @case ('wallet') {\n          <svg class=\"summary-card__icon-svg summary-card__icon-svg--wallet\" viewBox=\"0 0 24 24\">\n            <path class=\"solid\" d=\"M5 4h12a2 2 0 0 1 2 2v1h1a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H5a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3Z\"/>\n            <path class=\"cutout\" d=\"M14 11h8v5h-8a2.5 2.5 0 0 1 0-5Z\"/>\n            <circle class=\"solid\" cx=\"15\" cy=\"13.5\" r=\"1\"/>\n          </svg>\n        }\n        @case ('approved') {\n          <svg class=\"summary-card__icon-svg summary-card__icon-svg--approved\" viewBox=\"0 0 24 24\">\n            <path class=\"solid\" d=\"M8 6V4h8v2h4a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4Zm2 0h4V5h-4v1Z\"/>\n            <path class=\"check\" d=\"m7.5 13 3 3 6-6\"/>\n          </svg>\n        }\n        @default {\n          <svg class=\"summary-card__icon-svg summary-card__icon-svg--document\" viewBox=\"0 0 24 24\">\n            <path class=\"back\" d=\"M3 7v12M6 4v15\"/>\n            <path class=\"solid\" d=\"M8 2h8l5 5v13a2 2 0 0 1-2 2H8V2Z\"/>\n            <path class=\"fold\" d=\"M16 2v5h5\"/>\n          </svg>\n        }\n      }\n    </span>\n    <div class=\"summary-card__copy\">\n      <p>{{ label() }}</p>\n      <strong>{{ value() }}</strong>\n    </div>\n  </div>\n  <footer>\n    <span>\u0645\u0646 \u0627\u0644\u0634\u0647\u0631 \u0627\u0644\u0645\u0627\u0636\u064A</span>\n    <strong [class.summary-card__trend--positive]=\"positive()\">\u2197 {{ trend() }}</strong>\n  </footer>\n</article>\n", styles: [":host {\n  display: block;\n  width: 100%;\n  height: 138px;\n  min-width: 0;\n}\n\n.summary-card {\n  width: 100%;\n  height: 138px;\n  overflow: hidden;\n  border: 1px solid rgb(14 37 60 / 10%);\n  border-radius: 16px;\n  background: #f6f8f9;\n  box-shadow: 0 3px 6px rgb(0 0 0 / 6%);\n  font-family: \"Lusail\", \"Tahoma\", sans-serif;\n}\n\n.summary-card__body {\n  display: flex;\n  height: 95px;\n  align-items: center;\n  gap: 16px;\n  padding: 20px;\n  background: #f6f8f9;\n}\n\n.summary-card__copy {\n  display: flex;\n  min-width: 0;\n  flex: 1 1 auto;\n  flex-direction: column;\n  align-items: flex-start;\n  gap: 4px;\n  text-align: start;\n}\n\n@media (max-width: 1600px) {\n  .summary-card__body {\n    gap: 12px;\n    padding-inline: 14px;\n  }\n\n  .summary-card footer {\n    padding-inline: 14px;\n  }\n}\n\n.summary-card__body p {\n  margin: 0;\n  color: #52677b;\n  font-size: 12px;\n  font-weight: 500;\n  line-height: 18px;\n}\n\n.summary-card__body strong {\n  width: 100%;\n  color: #202020;\n  font-size: 16px;\n  font-weight: 600;\n  line-height: 25px;\n}\n\n.summary-card__icon {\n  display: grid;\n  width: 56px;\n  height: 56px;\n  flex: 0 0 56px;\n  place-items: center;\n  border: 1px solid #eaeaea;\n  border-radius: 50%;\n  background: #f4f7fe;\n  color: #97133f;\n}\n\n.summary-card__icon svg {\n  width: 24px;\n  height: 24px;\n  fill: none;\n  stroke: none;\n  stroke-linecap: round;\n  stroke-linejoin: round;\n  stroke-width: 1.7;\n}\n\n.summary-card__icon svg path {\n  vector-effect: non-scaling-stroke;\n}\n\n.summary-card__icon-svg .solid {\n  fill: currentcolor;\n}\n\n.summary-card__icon-svg .cutout {\n  fill: #f4f7fe;\n}\n\n.summary-card__icon-svg--wallet circle.solid {\n  fill: #97133f;\n}\n\n.summary-card__icon-svg--approved .check {\n  fill: none;\n  stroke: #fff;\n  stroke-width: 1.8;\n}\n\n.summary-card__icon-svg--document .back {\n  fill: none;\n  stroke: currentcolor;\n  stroke-width: 1.7;\n}\n\n.summary-card__icon-svg--document .fold {\n  fill: none;\n  stroke: #f4f7fe;\n  stroke-width: 1.7;\n}\n\n.summary-card footer {\n  display: flex;\n  height: 42px;\n  align-items: center;\n  justify-content: space-between;\n  padding: 12px 20px;\n  border-top: 1px solid rgb(14 37 60 / 10%);\n  background: #fff;\n  color: #66758a;\n  font-size: 12px;\n  font-weight: 500;\n  line-height: 18px;\n}\n\n.summary-card footer strong {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  color: #dc3545;\n  font-family: \"Inter\", Arial, sans-serif;\n  font-size: 12px;\n  font-weight: 500;\n  line-height: 18px;\n}\n\n.summary-card footer .summary-card__trend--positive {\n  color: #22c55e;\n}\n"] }]
    }], null, { label: [{ type: i0.Input, args: [{ isSignal: true, alias: "label", required: true }] }], value: [{ type: i0.Input, args: [{ isSignal: true, alias: "value", required: true }] }], trend: [{ type: i0.Input, args: [{ isSignal: true, alias: "trend", required: true }] }], positive: [{ type: i0.Input, args: [{ isSignal: true, alias: "positive", required: false }] }], icon: [{ type: i0.Input, args: [{ isSignal: true, alias: "icon", required: false }] }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(SummaryCardComponent, { className: "SummaryCardComponent", filePath: "src/app/components/dashboard/summary-card/summary-card.component.ts", lineNumber: 8 }); })();
