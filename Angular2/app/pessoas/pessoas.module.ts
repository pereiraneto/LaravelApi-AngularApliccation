import {NgModule} from '@angular/core';
import {PessoasListaComponent} from './pessoas-lista.component';
import {PessoaDetalheComponent} from './pessoa-detalhe.component';
import {CommonModule} from '@angular/common';
import {PessoaRoutingModule} from './pessoa-routing.module'; 
import {PessoaService} from './pessoa.service';
import {FormsModule} from '@angular/forms'; 

@NgModule({
    imports:[
        CommonModule,
        PessoaRoutingModule,
        FormsModule
    ],
    declarations: [
        PessoasListaComponent,
        PessoaDetalheComponent,
    ],
    exports: [
        PessoasListaComponent
    ],
    providers:[
        PessoaService
    ]
})
export class PessoasModule{

}