import {Component, OnInit} from '@angular/core';
import {Pessoa} from './pessoa.model';
import {PessoaService} from './pessoa.service';
import {DialogService} from './../dialog.service';
import { setTimeout, clearTimeout } from 'timers';

@Component({
    moduleId: module.id,
    selector: 'pessoas-lista',
    templateUrl: 'pessoas-lista.component.html',
})
export class PessoasListaComponent implements OnInit{
    pessoas: Pessoa[] = [];
    mensagem: {};
    classesCss: {}; 
    private currentTimeout: any;

    constructor(
        private pessoaService: PessoaService,
        private dialogService: DialogService
    ){}

    ngOnInit(): void{
        this.pessoaService.findAll()
            .then((pessoas: Pessoa[]) => {
                this.pessoas = pessoas;
            }).catch(err => {
                console.log(err);
                this.mostrarMensagem({
                    tipo: 'danger',
                    texto: 'Ocorreu um erro ao buscar a lista de contatos !' 
                });
            })
    }

    onDelete(pessoa: Pessoa): void{
        this.dialogService.confirm('Deseja deletar o contato ' + pessoa.nome + ' ?')
            .then((canDelete: boolean) => {
                if(canDelete){
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
                    })
                }
            });
    }

    private mostrarMensagem(mensagem: {tipo:string, texto:string}): void{
        this.mensagem = mensagem;
        this.montarClasses(mensagem.tipo);
        if(mensagem.tipo != 'danger'){
            if(this.currentTimeout){
                window.clearTimeout(this.currentTimeout);
            }
            window.setTimeout(() => {
                this.mensagem = undefined;
            }, 3000);
        }
    }

    private montarClasses(tipo: string): void{
        this.classesCss = {
            'alert': true
        };
        this.classesCss['alert-' + tipo] = true;
    }
}