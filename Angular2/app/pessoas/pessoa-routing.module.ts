import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PessoasListaComponent} from './pessoas-lista.component';
import {PessoaDetalheComponent} from './pessoa-detalhe.component';

const pessoasRoutes: Routes = [
    {
        path: 'pessoa',
        component: PessoasListaComponent

    }, 
    {
        path: 'pessoa/save',
        component: PessoaDetalheComponent
    },
    {
        path: 'pessoa/save/:id',
        component: PessoaDetalheComponent
    }

];

@NgModule({
    imports: [
        RouterModule.forChild(pessoasRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class PessoaRoutingModule{

}