import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { cpfValidator } from '../_validators/custom.validators';
import { FuncionariosService } from '../services/funcionarios.service';

@Component({
  selector: 'app-cadastro-funcionarios',
  templateUrl: './cadastro-funcionarios.component.html',
  styleUrls: ['./cadastro-funcionarios.component.css']
})
export class CadastroFuncionariosComponent implements OnInit {

  //inicializando por injeção de dependencia
  constructor(private funcionarioService: FuncionariosService) { }

  ngOnInit(): void {
    console.log(this.formCadastro);
  }

  //objeto para capturar os elementos do formulário
  formCadastro = new FormGroup({

    //declarando os campos do formulário

    nome: new FormControl('', [
      Validators.required, //campo obrigatório
      Validators.pattern('^[A-Za-zÀ-Üà-ü\\s]{6,150}$') //REGEX
    ]),

    cpf: new FormControl('', [cpfValidator]),

    matricula: new FormControl('', [
      Validators.required, //campo obrigatório
      Validators.pattern('^[A-Z0-9]{8}$') //REGEX
    ]),

    dataAdmissao: new FormControl('', [
      Validators.required //campo obrigatório
    ]),

    salario: new FormControl('', [
      Validators.required //campo obrigatório
    ]),

    foto: new FormControl('', [
      Validators.required //campo obrigatório
    ]),

    observacoes: new FormControl('', [
      Validators.required //campo obrigatório
    ])
  });

  //objeto utilizado para acessar as validações dos campos
  //na página HTML (exibir as mensagens de validação)
  get form(): any {
    return this.formCadastro.controls;
  }

  //função para capturar o evento submit do formulário
  onSubmit(): void {

    this.funcionarioService.create(this.formCadastro.value);
    alert('Funcionário cadastrado com sucesso');

    this.formCadastro.reset();
  }

  //função para limpar os campos do formulário
  reset(): void {
    this.formCadastro.reset();
  }

}
