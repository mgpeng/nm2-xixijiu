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
var XxjSwipeCountDirective = (function () {
    function XxjSwipeCountDirective(_el) {
        this._el = _el;
        this.swipeNumber = 0;
        this.text = "";
    }
    XxjSwipeCountDirective.prototype.onSwipe = function (el) {
        this.swipeNumber++;
        var str = this._el.nativeElement.textContent;
        str = str + '<br> you swipe ' + this.swipeNumber;
        this._el.nativeElement.textContent = str;
    };
    __decorate([
        core_1.HostListener('swipe', ['$event.target']), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', [Element]), 
        __metadata('design:returntype', void 0)
    ], XxjSwipeCountDirective.prototype, "onSwipe", null);
    XxjSwipeCountDirective = __decorate([
        core_1.Directive({
            selector: "[swipe-count]"
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef])
    ], XxjSwipeCountDirective);
    return XxjSwipeCountDirective;
}());
exports.XxjSwipeCountDirective = XxjSwipeCountDirective;
//# sourceMappingURL=xxj-swipe-count.directive.js.map