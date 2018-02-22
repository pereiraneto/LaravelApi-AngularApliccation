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
const pessoa_service_1 = require("./pessoa.service");
const dialog_service_1 = require("./../dialog.service");
let PessoasListaComponent = class PessoasListaComponent {
    constructor(pessoaService, dialogService) {
        this.pessoaService = pessoaService;
        this.dialogService = dialogService;
        this.pessoas = [];
    }
    ngOnInit() {
        this.pessoaService.findAll()
            .then((pessoas) => {
            this.pessoas = pessoas;
        }).catch(err => {
            console.log(err);
            this.mostrarMensagem({
                tipo: 'danger',
                texto: 'Ocorreu um erro ao buscar a lista de contatos !'
            });
        });
    }
    onDelete(pessoa) {
        this.dialogService.confirm('Deseja deletar o contato ' + pessoa.nome + ' ?')
            .then((canDelete) => {
            if (canDelete) {
                this.pessoaService.delete(pessoa)
                    .then(() => {
                    this.pessoas = this.pessoas.filter(c => c.id != pessoa.id);
                    this.mostrarMensagem({
                        tipo: 'success',
                        texto: 'Contato deletado !'
                    });
                }).catch(err => {
                    console.log(err);
                    this.mostrarMensagem({
                        tipo: 'danger',
                        texto: 'Ocorreu um erro ao deletar o contato !'
                    });
                });
            }
        });
    }
    mostrarMensagem(mensagem) {
        this.mensagem = mensagem;
        this.montarClasses(mensagem.tipo);
        if (mensagem.tipo != 'danger') {
            if (this.currentTimeout) {
                window.clearTimeout(this.currentTimeout);
            }
            window.setTimeout(() => {
                this.mensagem = undefined;
            }, 3000);
        }
    }
    montarClasses(tipo) {
        this.classesCss = {
            'alert': true
        };
        this.classesCss['alert-' + tipo] = true;
    }
};
PessoasListaComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'pessoas-lista',
        templateUrl: 'pessoas-lista.component.html',
    }),
    __metadata("design:paramtypes", [pessoa_service_1.PessoaService,
        dialog_service_1.DialogService])
], PessoasListaComponent);
exports.PessoasListaComponent = PessoasListaComponent;
//# sourceMappingURL=pessoas-lista.component.js.map