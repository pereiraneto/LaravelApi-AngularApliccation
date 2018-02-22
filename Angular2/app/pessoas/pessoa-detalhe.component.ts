import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {Location} from '@angular/common';
import {PessoaService} from './pessoa.service';
import {Pessoa} from './pessoa.model';
import { isPrimitive } from 'util';

@Component({
    moduleId: module.id,
    selector: 'pessoa-detalhe',
    templateUrl: 'pessoa-detalhe.component.html',
})
export class PessoaDetalheComponent implements OnInit{

    pessoa: Pessoa;
    private isNew: boolean = true;  

    constructor(
        private pessoaService: PessoaService,
        private route: ActivatedRoute,
        private location: Location
    ){}

    ngOnInit(): void {
        this.pessoa = new Pessoa('', '', '', '', '');
        this.route.params.forEach((params: Params) => {
            let id: number = +params['id'];
            if(id){
                this.isNew = false;
                this.pessoaService.find(id)
                .then((pessoa: Pessoa) => {
                    this.pessoa = pessoa;
                });
            }
        });
    }

    getFormGroupClass(isValid: boolean, isPristine: boolean): {} {
        return {
            'form-group': true,
            'has-danger': !isValid && !isPristine,
            'has-success': isValid && !isPristine
        };
    }

    getFormControlClass(isValid: boolean, isPristine: boolean): {} {
        return {
            'form-control': true,
            'form-control-danger': !isValid && !isPristine,
            'form-control-success': isValid && !isPristine
        };
    }

    onSubmit(): void{
        let promise;
        if(this.isNew){
            promise = this.pessoaService.create(this.pessoa);
        }else{
            promise = this.pessoaService.update(this.pessoa);
        }

        promise.then(contato => this.goBack());
    }

    goBack(): void{
        this.location.back();
    }
}