import {NgModule} from '@angular/core'
import {BrowserModule} from '@angular/platform-browser'
import {RouterModule} from '@angular/router'
import {FormsModule, ReactiveFormsModule} from '@angular/forms'

// Resuable Components
import {EventsAppComponent} from './events-app.component'
import {NavBarComponent} from './nav/navbar.component'
import {Error404Component} from './errors/404.component'

// Services
import {
    TOSTR_TOKEN, 
    Toastr,
    JQ_TOKEN,
    CollapsibleWellComponent, // is Component
    SearchModelComponent, // is Component
    ModalTriggerDirective // is Directive
} from './common/index'
import {AuthService} from './user/auth.service'

//Routes
import {appRoutes} from './routes'

//  events imports
import {
    EventsListComponent, 
    EventThumbnailComponent, 
    EventService, 
    EventDetailsComponent,
    CreateEventComponent,
    EventRouteActivator,
    EventListResolver,
    CreateSessionComponent,
    SessionListComponent,
    DurationPipe
} from './events/index'

declare let toastr:Toastr;
declare let jQuery: Object;

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forRoot(appRoutes)
    ],
    declarations: [
        EventsAppComponent,
        NavBarComponent,
        EventsListComponent,
        EventThumbnailComponent,
        EventDetailsComponent,
        CreateEventComponent,
        Error404Component,
        CreateSessionComponent,
        SessionListComponent,
        CollapsibleWellComponent,
        DurationPipe,
        SearchModelComponent,
        ModalTriggerDirective
    ],
    providers: [
        EventService, 
        {
            provide: TOSTR_TOKEN,
            useValue: toastr
        }, 
        {
            provide: JQ_TOKEN,
            useValue: jQuery
        },
        EventRouteActivator,
        EventListResolver,
        AuthService,
        {provide: 'canDeactivateCreateEvent', useValue: checkDirtyState}
    ],
    bootstrap: [EventsAppComponent]
})
export class AppModule{}

function checkDirtyState(component:CreateEventComponent){
    if(component.isDirty)
        return window.confirm('You have not saved this event, do you want to cancel?')
    return true;
}