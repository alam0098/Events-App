import { Directive, OnInit, Inject, ElementRef, Input } from "@angular/core";
import { JQ_TOKEN } from "./index";

@Directive({
    selector: '[modal-trigger]'
})
export class ModalTriggerDirective{

    buttonElement:HTMLElement;
    @Input('modal-trigger') modelId:string;

    constructor(@Inject(JQ_TOKEN) private $:any, elementRef:ElementRef){
        this.buttonElement = elementRef.nativeElement;
    }

    ngOnInit(){
        this.buttonElement.addEventListener('click', e => {
            this.$(`#${this.modelId}`).modal({});
        });
    }
}