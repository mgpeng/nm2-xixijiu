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
var button_1 = require('../components/button/button');
//import {MdIcon} from '../components/icon/icon';
//import {MD_LIST_DIRECTIVES} from '../components/list/list';
var hero_portal_component_1 = require('./hero-portal/hero-portal.component');
var todo_portal_component_1 = require('./todo-portal/todo-portal.component');
var downup_animation_component_1 = require('./xxj-animation/downup-animation.component');
var demo_app_1 = require('../demo-app/demo-app');
var Element = (function () {
    function Element(nodeName, parent) {
        this.nodeName = nodeName;
        this.parent = parent;
    }
    Element.prototype.toString = function () {
        return '<' + this.nodeName + '>';
    };
    return Element;
}());
exports.Element = Element;
;
var AppComponent = (function () {
    function AppComponent() {
        this.title = 'This is Home';
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "\n             <h1>{{title}}</h1>\n             <md-nav-list>\n                <md-list-item>\n                    <a [routerLink]=\"['hero-portal']\"  md-raised-button color=\"primary\">Hero-Portal</a> \n                </md-list-item>\n                <md-list-item>\n                    <a [routerLink]=\"['todo-portal']\"  md-raised-button color=\"primary\">Todo-Portal</a> \n                </md-list-item>\n                <md-list-item>\n                    <a [routerLink]=\"['xxj-animation']\"  md-raised-button color=\"primary\">DownupAnimation</a> \n                </md-list-item>\n                <md-list-item>\n                    <a [routerLink]=\"['demo-app']\"  md-raised-button color=\"primary\">M2 Demo</a> \n                </md-list-item>\n             </md-nav-list>\n             <router-outlet></router-outlet>\n    ",
            styleUrls: ["app/app.component.css"],
            directives: [router_1.ROUTER_DIRECTIVES, button_1.MdButton, button_1.MdAnchor]
        }),
        router_1.Routes([
            new router_1.Route({ path: '/hero-portal', component: hero_portal_component_1.HeroPortalComponent }),
            new router_1.Route({ path: '/todo-portal', component: todo_portal_component_1.TodoPortalComponent }),
            new router_1.Route({ path: '/xxj-animation', component: downup_animation_component_1.DownupAnimationComponent }),
            new router_1.Route({ path: '/demo-app', component: demo_app_1.DemoApp })
        ]), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//---add comment for testing
//# sourceMappingURL=app.component.js.map