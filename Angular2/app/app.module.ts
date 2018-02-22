import { NgModule } from "@angular/core"; 
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {PessoasModule} from './pessoas/pessoas.module';
import {AppRoutingModule} from './app-routing.module';
import {HttpModule} from '@angular/http';
import {DialogService} from './dialog.service';
import {FormsModule} from '@angular/forms';

@NgModule({
    imports: [
        AppRoutingModule,
        BrowserModule,
        PessoasModule,
        FormsModule,
        HttpModule,
    ],
    declarations: [AppComponent],
    providers: [
        DialogService
    ],
    bootstrap: [AppComponent]
})
export class AppModule{

}