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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var core_1 = require("@angular/core");
var index_1 = require("./index");
var SearchModelComponent = (function () {
    function SearchModelComponent($) {
        this.$ = $;
    }
    SearchModelComponent.prototype.closeModal = function () {
        this.$(this.modelContainer.nativeElement).modal('hide');
    };
    return SearchModelComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], SearchModelComponent.prototype, "title", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], SearchModelComponent.prototype, "searchModelId", void 0);
__decorate([
    core_1.ViewChild('modalcontainer'),
    __metadata("design:type", core_1.ElementRef)
], SearchModelComponent.prototype, "modelContainer", void 0);
SearchModelComponent = __decorate([
    core_1.Component({
        selector: 'search-modal',
        templateUrl: '/app/common/searchModal.component.html',
        styleUrls: ['/app/common/searchModel.component.css']
    }),
    __param(0, core_1.Inject(index_1.JQ_TOKEN)),
    __metadata("design:paramtypes", [Object])
], SearchModelComponent);
exports.SearchModelComponent = SearchModelComponent;
//# sourceMappingURL=searchModal.component.js.map