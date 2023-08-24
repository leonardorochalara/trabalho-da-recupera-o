import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HeaderComponent } from './header/header.component';
import { FotoEditorComponent } from './foto-editor/foto-editor.component';

import { FotoListComponent } from './foto-list/foto-list.component';
import { HomeComponent } from './home/home.component';
import { CadastroComponent } from './cadastro/cadastro.component';

import { ClientesComponent } from './clientes/clientes.component';
import { NegritoComponent } from './negrito/negrito.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FotoEditorComponent,
    FotoListComponent,
    HomeComponent,
    CadastroComponent,
    ClientesComponent,
    NegritoComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
