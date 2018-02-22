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
const http_1 = require("@angular/http");
require("rxjs/add/operator/toPromise");
let PessoaService = class PessoaService {
    constructor(http) {
        this.http = http;
        this.headers = new http_1.Headers({ 'Content-Type': 'application/json' });
    }
    findAll() {
        return this.http.get('http://localhost:8000/api/pessoas')
            .toPromise()
            .then(response => response.json().data)
            .catch(this.handleError);
    }
    find(id) {
        return this.findAll()
            .then((pessoas) => pessoas.find(pessoa => pessoa.id === id));
    }
    create(pessoa) {
        return this.http.post('http://localhost:8000/api/pessoas', JSON.stringify(pessoa), { headers: this.headers })
            .toPromise()
            .then((response) => {
            return response.json().data;
        })
            .catch(this.handleError);
    }
    update(pessoa) {
        const url = `${'http://localhost:8000/api/pessoas'}/${pessoa.id}`;
        return this.http
            .put(url, JSON.stringify(pessoa), { headers: this.headers })
            .toPromise()
            .then(() => pessoa)
            .catch(this.handleError);
    }
    delete(pessoa) {
        const url = `${'http://localhost:8000/api/pessoas'}/${pessoa.id}`;
        return this.http
            .delete(url, { headers: this.headers })
            .toPromise()
            .then(() => pessoa)
            .catch(this.handleError);
    }
    handleError(err) {
        return Promise.reject(err.message || err);
    }
};
PessoaService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], PessoaService);
exports.PessoaService = PessoaService;
//# sourceMappingURL=pessoa.service.js.map