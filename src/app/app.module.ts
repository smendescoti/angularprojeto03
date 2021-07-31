import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CadastroFuncionariosComponent } from './cadastro-funcionarios/cadastro-funcionarios.component';
import { ConsultaFuncionariosComponent } from './consulta-funcionarios/consulta-funcionarios.component';

//bibliotecas para mapeamento de rotas
import { Routes, RouterModule } from '@angular/router';

//biblioteca para construção de formulários
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//mapear as rotas do projeto
const routes:Routes = [
  { path : 'cadastro-funcionarios', component : CadastroFuncionariosComponent },
  { path : 'consulta-funcionarios', component : ConsultaFuncionariosComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    CadastroFuncionariosComponent,
    ConsultaFuncionariosComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, //registrando o modulo de formularios
    ReactiveFormsModule, //registrando o modulo de formularios
    RouterModule.forRoot(routes) //registrando as rotas
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
