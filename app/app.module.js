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
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var router_1 = require("@angular/router");
var forms_1 = require("@angular/forms");
// Resuable Components
var events_app_component_1 = require("./events-app.component");
var navbar_component_1 = require("./nav/navbar.component");
var _404_component_1 = require("./errors/404.component");
// Services
var index_1 = require("./common/index");
var auth_service_1 = require("./user/auth.service");
//Routes
var routes_1 = require("./routes");
//  events imports
var index_2 = require("./events/index");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            forms_1.FormsModule,
            forms_1.ReactiveFormsModule,
            router_1.RouterModule.forRoot(routes_1.appRoutes)
        ],
        declarations: [
            events_app_component_1.EventsAppComponent,
            navbar_component_1.NavBarComponent,
            index_2.EventsListComponent,
            index_2.EventThumbnailComponent,
            index_2.EventDetailsComponent,
            index_2.CreateEventComponent,
            _404_component_1.Error404Component,
            index_2.CreateSessionComponent,
            index_2.SessionListComponent,
            index_1.CollapsibleWellComponent,
            index_2.DurationPipe,
            index_1.SearchModelComponent,
            index_1.ModalTriggerDirective
        ],
        providers: [
            index_2.EventService,
            {
                provide: index_1.TOSTR_TOKEN,
                useValue: toastr
            },
            {
                provide: index_1.JQ_TOKEN,
                useValue: jQuery
            },
            index_2.EventRouteActivator,
            index_2.EventListResolver,
            auth_service_1.AuthService,
            { provide: 'canDeactivateCreateEvent', useValue: checkDirtyState }
        ],
        bootstrap: [events_app_component_1.EventsAppComponent]
    }),
    __metadata("design:paramtypes", [])
], AppModule);
exports.AppModule = AppModule;
function checkDirtyState(component) {
    if (component.isDirty)
        return window.confirm('You have not saved this event, do you want to cancel?');
    return true;
}
//# sourceMappingURL=app.module.js.map