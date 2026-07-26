import { Component, input } from '@angular/core';
import * as i0 from "@angular/core";
export class SummaryCardComponent {
    label = input.required(/* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "label" }] : /* istanbul ignore next */ []));
    value = input.required(/* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "value" }] : /* istanbul ignore next */ []));
    trend = input.required(/* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "trend" }] : /* istanbul ignore next */ []));
    positive = input(false, /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "positive" }] : /* istanbul ignore next */ []));
    static ɵfac = function SummaryCardComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || SummaryCardComponent)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: SummaryCardComponent, selectors: [["app-summary-card"]], inputs: { label: [1, "label"], value: [1, "value"], trend: [1, "trend"], positive: [1, "positive"] }, decls: 14, vars: 5, consts: [["dir", "rtl", 1, "summary-card"], [1, "summary-card__body"], ["aria-hidden", "true", 1, "summary-card__icon"], [1, "summary-card__copy"]], template: function SummaryCardComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵdomElementStart(0, "article", 0)(1, "div", 1)(2, "span", 2);
            i0.ɵɵtext(3, "\u25AE");
            i0.ɵɵdomElementEnd();
            i0.ɵɵdomElementStart(4, "div", 3)(5, "p");
            i0.ɵɵtext(6);
            i0.ɵɵdomElementEnd();
            i0.ɵɵdomElementStart(7, "strong");
            i0.ɵɵtext(8);
            i0.ɵɵdomElementEnd()()();
            i0.ɵɵdomElementStart(9, "footer")(10, "span");
            i0.ɵɵtext(11, "\u0645\u0646 \u0627\u0644\u0634\u0647\u0631 \u0627\u0644\u0645\u0627\u0636\u064A");
            i0.ɵɵdomElementEnd();
            i0.ɵɵdomElementStart(12, "strong");
            i0.ɵɵtext(13);
            i0.ɵɵdomElementEnd()()();
        } if (rf & 2) {
            i0.ɵɵadvance(6);
            i0.ɵɵtextInterpolate(ctx.label());
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate(ctx.value());
            i0.ɵɵadvance(4);
            i0.ɵɵclassProp("summary-card__trend--positive", ctx.positive());
            i0.ɵɵadvance();
            i0.ɵɵtextInterpolate1("\u2197 ", ctx.trend());
        } }, styles: ["[_nghost-%COMP%] {\n  display: block;\n  width: 100%;\n  height: 138px;\n  min-width: 0;\n}\n\n.summary-card[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 138px;\n  overflow: hidden;\n  border: 1px solid rgb(14 37 60 / 10%);\n  border-radius: 16px;\n  background: #f6f8f9;\n  box-shadow: 0 3px 6px rgb(0 0 0 / 6%);\n  font-family: \"Lusail\", \"Tahoma\", sans-serif;\n}\n\n.summary-card__body[_ngcontent-%COMP%] {\n  display: flex;\n  height: 95px;\n  align-items: center;\n  gap: 16px;\n  padding: 20px;\n  background: #f6f8f9;\n}\n\n.summary-card__copy[_ngcontent-%COMP%] {\n  display: flex;\n  min-width: 0;\n  flex: 1 1 auto;\n  flex-direction: column;\n  align-items: flex-start;\n  gap: 4px;\n  text-align: start;\n}\n\n@media (max-width: 1600px) {\n  .summary-card__body[_ngcontent-%COMP%] {\n    gap: 12px;\n    padding-inline: 14px;\n  }\n\n  .summary-card[_ngcontent-%COMP%]   footer[_ngcontent-%COMP%] {\n    padding-inline: 14px;\n  }\n}\n\n.summary-card__body[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #52677b;\n  font-size: 12px;\n  font-weight: 500;\n  line-height: 18px;\n}\n\n.summary-card__body[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  width: 100%;\n  color: #202020;\n  font-size: 16px;\n  font-weight: 600;\n  line-height: 25px;\n}\n\n.summary-card__icon[_ngcontent-%COMP%] {\n  display: grid;\n  width: 56px;\n  height: 56px;\n  flex: 0 0 56px;\n  place-items: center;\n  border: 1px solid #eaeaea;\n  border-radius: 50%;\n  background: #f4f7fe;\n  color: #97133f;\n  font-size: 22px;\n}\n\n.summary-card[_ngcontent-%COMP%]   footer[_ngcontent-%COMP%] {\n  display: flex;\n  height: 42px;\n  align-items: center;\n  justify-content: space-between;\n  padding: 12px 20px;\n  border-top: 1px solid rgb(14 37 60 / 10%);\n  background: #fff;\n  color: #66758a;\n  font-size: 12px;\n  font-weight: 500;\n  line-height: 18px;\n}\n\n.summary-card[_ngcontent-%COMP%]   footer[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  color: #dc3545;\n  font-family: \"Inter\", Arial, sans-serif;\n  font-size: 12px;\n  font-weight: 500;\n  line-height: 18px;\n}\n\n.summary-card[_ngcontent-%COMP%]   footer[_ngcontent-%COMP%]   .summary-card__trend--positive[_ngcontent-%COMP%] {\n  color: #22c55e;\n}"] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SummaryCardComponent, [{
        type: Component,
        args: [{ selector: 'app-summary-card', template: "<article class=\"summary-card\" dir=\"rtl\">\n  <div class=\"summary-card__body\">\n    <span class=\"summary-card__icon\" aria-hidden=\"true\">\u25AE</span>\n    <div class=\"summary-card__copy\">\n      <p>{{ label() }}</p>\n      <strong>{{ value() }}</strong>\n    </div>\n  </div>\n  <footer>\n    <span>\u0645\u0646 \u0627\u0644\u0634\u0647\u0631 \u0627\u0644\u0645\u0627\u0636\u064A</span>\n    <strong [class.summary-card__trend--positive]=\"positive()\">\u2197 {{ trend() }}</strong>\n  </footer>\n</article>\n", styles: [":host {\n  display: block;\n  width: 100%;\n  height: 138px;\n  min-width: 0;\n}\n\n.summary-card {\n  width: 100%;\n  height: 138px;\n  overflow: hidden;\n  border: 1px solid rgb(14 37 60 / 10%);\n  border-radius: 16px;\n  background: #f6f8f9;\n  box-shadow: 0 3px 6px rgb(0 0 0 / 6%);\n  font-family: \"Lusail\", \"Tahoma\", sans-serif;\n}\n\n.summary-card__body {\n  display: flex;\n  height: 95px;\n  align-items: center;\n  gap: 16px;\n  padding: 20px;\n  background: #f6f8f9;\n}\n\n.summary-card__copy {\n  display: flex;\n  min-width: 0;\n  flex: 1 1 auto;\n  flex-direction: column;\n  align-items: flex-start;\n  gap: 4px;\n  text-align: start;\n}\n\n@media (max-width: 1600px) {\n  .summary-card__body {\n    gap: 12px;\n    padding-inline: 14px;\n  }\n\n  .summary-card footer {\n    padding-inline: 14px;\n  }\n}\n\n.summary-card__body p {\n  margin: 0;\n  color: #52677b;\n  font-size: 12px;\n  font-weight: 500;\n  line-height: 18px;\n}\n\n.summary-card__body strong {\n  width: 100%;\n  color: #202020;\n  font-size: 16px;\n  font-weight: 600;\n  line-height: 25px;\n}\n\n.summary-card__icon {\n  display: grid;\n  width: 56px;\n  height: 56px;\n  flex: 0 0 56px;\n  place-items: center;\n  border: 1px solid #eaeaea;\n  border-radius: 50%;\n  background: #f4f7fe;\n  color: #97133f;\n  font-size: 22px;\n}\n\n.summary-card footer {\n  display: flex;\n  height: 42px;\n  align-items: center;\n  justify-content: space-between;\n  padding: 12px 20px;\n  border-top: 1px solid rgb(14 37 60 / 10%);\n  background: #fff;\n  color: #66758a;\n  font-size: 12px;\n  font-weight: 500;\n  line-height: 18px;\n}\n\n.summary-card footer strong {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  color: #dc3545;\n  font-family: \"Inter\", Arial, sans-serif;\n  font-size: 12px;\n  font-weight: 500;\n  line-height: 18px;\n}\n\n.summary-card footer .summary-card__trend--positive {\n  color: #22c55e;\n}\n"] }]
    }], null, { label: [{ type: i0.Input, args: [{ isSignal: true, alias: "label", required: true }] }], value: [{ type: i0.Input, args: [{ isSignal: true, alias: "value", required: true }] }], trend: [{ type: i0.Input, args: [{ isSignal: true, alias: "trend", required: true }] }], positive: [{ type: i0.Input, args: [{ isSignal: true, alias: "positive", required: false }] }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(SummaryCardComponent, { className: "SummaryCardComponent", filePath: "src/app/components/dashboard/summary-card/summary-card.component.ts", lineNumber: 8 }); })();
