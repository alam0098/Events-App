import {Component, Input, ViewChild, ElementRef, Inject} from '@angular/core'
import { JQ_TOKEN } from "./index";

@Component({
    selector: 'search-modal',
    templateUrl: '/app/common/searchModal.component.html',
    styleUrls: ['/app/common/searchModel.component.css']
})
export class SearchModelComponent{
    @Input() title:string;
    @Input() searchModelId:string;
    @ViewChild('modalcontainer') modelContainer:ElementRef;

    constructor(@Inject(JQ_TOKEN) private $:any){}

    closeModal(){
        this.$(this.modelContainer.nativeElement).modal('hide');
    }
}