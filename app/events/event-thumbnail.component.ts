import {Component, Input, Output, EventEmitter} from '@angular/core'
import {IEvent} from './shared/index'

@Component({
    selector: 'event-thumbnail',
    templateUrl: '/app/events/event-thumbnail.component.html',
    styles:[`
    .thumbnail{
        min-height: 210px;
    }
    .pad-left{
        margin-left: 10px;
    }
    .well div{
        color: #bbb;
    }
    .green{
        color: #003300 !important;
    }
    .bold{
        font-weight: bold;
    }
    `]

})
export class EventThumbnailComponent{
    @Input() event:IEvent;
    
    getStartTimeStyle():any{ // the return type has to be any becasue it return different object one has some properties and the other is empty
        return this.event && this.event.time === '8:00 am' ? {color: '#003300', 'font-weight' :'bold'}: {};

    }

}