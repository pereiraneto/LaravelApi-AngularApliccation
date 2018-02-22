import {Injectable} from '@angular/core';
import {Pessoa} from './pessoa.model';
import {Http, Headers, Response} from '@angular/http';
import 'rxjs/add/operator/toPromise';
import {Observable} from 'rxjs';
import {ServiceInterface} from './../interfaces/service.interface';

@Injectable()
export class PessoaService implements ServiceInterface<Pessoa>{

    private headers: Headers = new Headers({'Content-Type': 'application/json'});

    constructor(
        private http: Http
    ){}

    findAll(): Promise<Pessoa[]>{
        return this.http.get('http://localhost:8000/api/pessoas')
            .toPromise() 
            .then(response => response.json().data as Pessoa[])
            .catch(this.handleError);
    }

    find(id: number): Promise<Pessoa>{
        return this.findAll()
            .then((pessoas: Pessoa[]) => pessoas.find(pessoa => pessoa.id === id));
    }  

    create(pessoa: Pessoa): Promise<Pessoa>{
        return this.http.post('http://localhost:8000/api/pessoas', JSON.stringify(pessoa), {headers: this.headers})
        .toPromise()
        .then((response: Response) => {
            return response.json().data as Pessoa;
        })
        .catch(this.handleError);
    }

    update(pessoa: Pessoa): Promise<Pessoa>{
        const url = `${'http://localhost:8000/api/pessoas'}/${pessoa.id}`;
        return this.http
        .put(url, JSON.stringify(pessoa), {headers: this.headers})
        .toPromise()
        .then(() => pessoa as Pessoa)
        .catch(this.handleError);
    }

    delete(pessoa: Pessoa): Promise<Pessoa>{
        const url = `${'http://localhost:8000/api/pessoas'}/${pessoa.id}`;
        return this.http
        .delete(url, {headers: this.headers})
        .toPromise()
        .then(() => pessoa as Pessoa)
        .catch(this.handleError);
    }
    
    private handleError(err: any): Promise<any>{
        return Promise.reject(err.message || err);
    } 
}