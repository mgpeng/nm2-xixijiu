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
var router_1 = require('@angular/router');
//import {Renderer} from '@angular/core';   //--no know who use is until now
var core_2 = require('@angular/core'); //----for make provider overlay and hammer
//---- MdIcon need HTTP and viewProviders --if use external img file  mdIconRegistry
// .addSvgIcon('thumb-up', '/demo-app/icon/assets/thumbup-icon.svg')
// .addSvgIconSetInNamespace('core', '/demo-app/icon/assets/core-icon-set.svg')
// .registerFontClassAlias('fontawesome', 'fa');
var http_1 = require('@angular/http');
var icon_registry_1 = require('@angular2-material/icon/icon-registry');
var live_announcer_1 = require('@angular2-material/core/live-announcer/live-announcer'); //--use in provider
var overlay_1 = require('@angular2-material/core/overlay/overlay');
var overlay_container_1 = require('@angular2-material/core/overlay/overlay-container');
var MdGestureConfig_1 = require('@angular2-material/core/gestures/MdGestureConfig');
var platform_browser_1 = require('@angular/platform-browser');
var card_demo_1 = require('./card/card-demo');
var button_demo_1 = require('./button/button-demo');
var icon_demo_1 = require('./icon/icon-demo');
var radio_demo_1 = require('./radio/radio-demo');
var sidenav_demo_1 = require('./sidenav/sidenav-demo');
var progress_bar_demo_1 = require('./progress-bar/progress-bar-demo');
var progress_circle_demo_1 = require('./progress-circle/progress-circle-demo');
var checkbox_demo_1 = require('./checkbox/checkbox-demo');
var dir_1 = require('@angular2-material/core/rtl/dir');
var button_1 = require('@angular2-material/button');
var sidenav_1 = require('@angular2-material/sidenav');
var list_1 = require('@angular2-material/list');
var icon_1 = require('@angular2-material/icon');
var toolbar_1 = require('@angular2-material/toolbar');
var portal_demo_1 = require('./portal/portal-demo');
var toolbar_demo_1 = require('./toolbar/toolbar-demo');
var overlay_demo_1 = require('./overlay/overlay-demo');
var list_demo_1 = require('./list/list-demo');
var input_demo_1 = require('./input/input-demo');
var live_announcer_demo_1 = require('./live-announcer/live-announcer-demo');
var gestures_demo_1 = require('./gestures/gestures-demo');
var grid_list_demo_1 = require('./grid-list/grid-list-demo');
var Home = (function () {
    function Home() {
    }
    Home = __decorate([
        core_1.Component({
            selector: 'home',
            template: "\n    <p>Welcome to the development demos for Angular Material 2!</p>\n    <p>Open the sidenav to select a demo. </p>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], Home);
    return Home;
}());
exports.Home = Home;
var DemoApp = (function () {
    function DemoApp() {
    }
    DemoApp = __decorate([
        core_1.Component({
            selector: 'demo-app',
            templateUrl: 'demo-app/demo-app.html',
            styleUrls: ['demo-app/demo-app.css'],
            directives: [
                router_1.ROUTER_DIRECTIVES,
                dir_1.Dir,
                button_1.MdButton,
                icon_1.MdIcon,
                sidenav_1.MD_SIDENAV_DIRECTIVES,
                list_1.MD_LIST_DIRECTIVES,
                toolbar_1.MdToolbar,
            ],
            providers: [
                core_2.provide(overlay_1.OVERLAY_CONTAINER_TOKEN, { useValue: overlay_container_1.createOverlayContainer() }),
                core_2.provide(platform_browser_1.HAMMER_GESTURE_CONFIG, { useClass: MdGestureConfig_1.MdGestureConfig }),
                http_1.HTTP_PROVIDERS, icon_registry_1.MdIconRegistry, live_announcer_1.MdLiveAnnouncer
            ]
        }),
        router_1.Routes([
            new router_1.Route({ path: '/', component: Home }),
            new router_1.Route({ path: '/button', component: button_demo_1.ButtonDemo }),
            new router_1.Route({ path: '/card', component: card_demo_1.CardDemo }),
            new router_1.Route({ path: '/radio', component: radio_demo_1.RadioDemo }),
            new router_1.Route({ path: '/sidenav', component: sidenav_demo_1.SidenavDemo }),
            new router_1.Route({ path: '/progress-circle', component: progress_circle_demo_1.ProgressCircleDemo }),
            new router_1.Route({ path: '/progress-bar', component: progress_bar_demo_1.ProgressBarDemo }),
            new router_1.Route({ path: '/portal', component: portal_demo_1.PortalDemo }),
            new router_1.Route({ path: '/overlay', component: overlay_demo_1.OverlayDemo }),
            new router_1.Route({ path: '/checkbox', component: checkbox_demo_1.CheckboxDemo }),
            new router_1.Route({ path: '/input', component: input_demo_1.InputDemo }),
            new router_1.Route({ path: '/toolbar', component: toolbar_demo_1.ToolbarDemo }),
            new router_1.Route({ path: '/icon', component: icon_demo_1.IconDemo }),
            new router_1.Route({ path: '/list', component: list_demo_1.ListDemo }),
            new router_1.Route({ path: '/live-announcer', component: live_announcer_demo_1.LiveAnnouncerDemo }),
            new router_1.Route({ path: '/gestures', component: gestures_demo_1.GesturesDemo }),
            new router_1.Route({ path: '/grid-list', component: grid_list_demo_1.GridListDemo })
        ]), 
        __metadata('design:paramtypes', [])
    ], DemoApp);
    return DemoApp;
}());
exports.DemoApp = DemoApp;
//# sourceMappingURL=demo-app.js.map