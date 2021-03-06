"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var XxjHighlightDirective = (function () {
    function XxjHighlightDirective(_el) {
        this._el = _el;
        this.el = this._el.nativeElement;
    }
    XxjHighlightDirective.prototype.onMouseEnter = function () { this.highlight(this.xxjHighlight); };
    XxjHighlightDirective.prototype.onMouseLeave = function () { this.highlight(null); };
    XxjHighlightDirective.prototype.highlight = function (color) {
        this.el.style.backgroundColor = color;
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], XxjHighlightDirective.prototype, "xxjHighlight", void 0);
    XxjHighlightDirective = __decorate([
        core_1.Directive({
            selector: '[xxjHighlight]',
            host: {
                '(mouseenter)': 'onMouseEnter()',
                '(mouseleave)': 'onMouseLeave()'
            }
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef])
    ], XxjHighlightDirective);
    return XxjHighlightDirective;
}());
exports.XxjHighlightDirective = XxjHighlightDirective;
//# sourceMappingURL=highlight.directive.js.map