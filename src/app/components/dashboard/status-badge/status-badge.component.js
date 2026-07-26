import { Component, input } from '@angular/core';
import * as i0 from "@angular/core";
export class StatusBadgeComponent {
    label = input.required(/* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "label" }] : /* istanbul ignore next */ []));
    tone = input.required(/* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "tone" }] : /* istanbul ignore next */ []));
    static ɵfac = function StatusBadgeComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || StatusBadgeComponent)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: StatusBadgeComponent, selectors: [["app-status-badge"]], inputs: { label: [1, "label"], tone: [1, "tone"] }, decls: 2, vars: 3, consts: [[1, "status-badge"]], template: function StatusBadgeComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵdomElementStart(0, "span", 0);
            i0.ɵɵtext(1);
            i0.ɵɵdomElementEnd();
        } if (rf & 2) {
            i0.ɵɵclassMap("status-badge status-badge--" + ctx.tone());
            i0.ɵɵadvance();
            i0.ɵɵtextInterpolate1(" ", ctx.label(), "\n");
        } }, styles: [".status-badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  height: 22px;\n  align-items: center;\n  gap: 2px;\n  padding: 2px 8px;\n  border: 1px solid;\n  border-radius: 999px;\n  font-family: \"Lusail\", \"Tahoma\", sans-serif;\n  font-size: 11px;\n  font-weight: 500;\n  line-height: 16px;\n  white-space: nowrap;\n}\n\n.status-badge--success[_ngcontent-%COMP%] {\n  border-color: #abefc6;\n  background: #ecfdf3;\n  color: #099250;\n}\n\n.status-badge--warning[_ngcontent-%COMP%] {\n  border-width: 1.5px;\n  border-color: #dc6803;\n  background: #fffaeb;\n  color: #dc6803;\n}\n\n.status-badge--info[_ngcontent-%COMP%] {\n  border-color: #b9e6fe;\n  background: #f0f9ff;\n  color: #0086c9;\n}\n\n.status-badge--neutral[_ngcontent-%COMP%] {\n  border-color: #e9eaeb;\n  background: #fafafa;\n  color: #535862;\n}\n\n.status-badge--purple[_ngcontent-%COMP%] {\n  border-color: #d9d6fe;\n  background: #f4f3ff;\n  color: #6938ef;\n}"] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(StatusBadgeComponent, [{
        type: Component,
        args: [{ selector: 'app-status-badge', template: "<span class=\"status-badge\" [class]=\"'status-badge status-badge--' + tone()\">\n  {{ label() }}\n</span>\n", styles: [".status-badge {\n  display: inline-flex;\n  height: 22px;\n  align-items: center;\n  gap: 2px;\n  padding: 2px 8px;\n  border: 1px solid;\n  border-radius: 999px;\n  font-family: \"Lusail\", \"Tahoma\", sans-serif;\n  font-size: 11px;\n  font-weight: 500;\n  line-height: 16px;\n  white-space: nowrap;\n}\n\n.status-badge--success {\n  border-color: #abefc6;\n  background: #ecfdf3;\n  color: #099250;\n}\n\n.status-badge--warning {\n  border-width: 1.5px;\n  border-color: #dc6803;\n  background: #fffaeb;\n  color: #dc6803;\n}\n\n.status-badge--info {\n  border-color: #b9e6fe;\n  background: #f0f9ff;\n  color: #0086c9;\n}\n\n.status-badge--neutral {\n  border-color: #e9eaeb;\n  background: #fafafa;\n  color: #535862;\n}\n\n.status-badge--purple {\n  border-color: #d9d6fe;\n  background: #f4f3ff;\n  color: #6938ef;\n}\n"] }]
    }], null, { label: [{ type: i0.Input, args: [{ isSignal: true, alias: "label", required: true }] }], tone: [{ type: i0.Input, args: [{ isSignal: true, alias: "tone", required: true }] }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(StatusBadgeComponent, { className: "StatusBadgeComponent", filePath: "src/app/components/dashboard/status-badge/status-badge.component.ts", lineNumber: 10 }); })();
