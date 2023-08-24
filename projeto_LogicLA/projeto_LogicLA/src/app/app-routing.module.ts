import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroComponent } from './cadastro/cadastro.component';
import { ClientesComponent } from './clientes/clientes.component';
import { FotoEditorComponent } from './foto-editor/foto-editor.component';
import { FotoListComponent } from './foto-list/foto-list.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'fotolist', component: FotoListComponent},
  { path: 'fotoeditor', component: FotoEditorComponent},
  { path: 'cadastro', component: CadastroComponent},
  { path: 'clientes', component: ClientesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
