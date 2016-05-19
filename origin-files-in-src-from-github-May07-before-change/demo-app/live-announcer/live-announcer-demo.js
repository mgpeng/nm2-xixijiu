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
var live_announcer_1 = require('../../core/live-announcer/live-announcer');
var LiveAnnouncerDemo = (function () {
    function LiveAnnouncerDemo(live) {
        this.live = live;
    }
    LiveAnnouncerDemo.prototype.announceText = function (message) {
        this.live.announce(message);
    };
    LiveAnnouncerDemo = __decorate([
        core_1.Component({
            selector: 'toolbar-demo',
            templateUrl: 'demo-app/live-announcer/live-announcer-demo.html',
        }), 
        __metadata('design:paramtypes', [live_announcer_1.MdLiveAnnouncer])
    ], LiveAnnouncerDemo);
    return LiveAnnouncerDemo;
}());
exports.LiveAnnouncerDemo = LiveAnnouncerDemo;
//# sourceMappingURL=live-announcer-demo.js.map