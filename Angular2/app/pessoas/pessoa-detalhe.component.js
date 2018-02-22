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
const core_1 = require("@angular/core");
const router_1 = require("@angular/router");
const common_1 = require("@angular/common");
const pessoa_service_1 = require("./pessoa.service");
const pessoa_model_1 = require("./pessoa.model");
let PessoaDetalheComponent = class PessoaDetalheComponent {
    constructor(pessoaService, route, location) {
        this.pessoaService = pessoaService;
        this.route = route;
        this.location = location;
        this.isNew = true;
    }
    ngOnInit() {
        this.pessoa = new pessoa_model_1.Pessoa('', '', '', '', '');
        this.route.params.forEach((params) => {
            let id = +params['id'];
            if (id) {
                this.isNew = false;
                this.pessoaService.find(id)
                    .then((pessoa) => {
                    this.pessoa = pessoa;
                });
            }
        });
    }
    getFormGroupClass(isValid, isPristine) {
        return {
            'form-group': true,
            'has-danger': !isValid && !isPristine,
            'has-success': isValid && !isPristine
        };
    }
    getFormControlClass(isValid, isPristine) {
        return {
            'form-control': true,
            'form-control-danger': !isValid && !isPristine,
            'form-control-success': isValid && !isPristine
        };
    }
    onSubmit() {
        let promise;
        if (this.isNew) {
            promise = this.pessoaService.create(this.pessoa);
        }
        else {
            promise = this.pessoaService.update(this.pessoa);
        }
        promise.then(contato => this.goBack());
    }
    goBack() {
        this.location.back();
    }
};
PessoaDetalheComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'pessoa-detalhe',
        templateUrl: 'pessoa-detalhe.component.html',
    }),
    __metadata("design:paramtypes", [pessoa_service_1.PessoaService,
        router_1.ActivatedRoute,
        common_1.Location])
], PessoaDetalheComponent);
exports.PessoaDetalheComponent = PessoaDetalheComponent;
//# sourceMappingURL=pessoa-detalhe.component.js.map