import { Injectable } from '@angular/core';
import { Funcionario } from './funcionario.model';

@Injectable({
  providedIn: 'root'
})
export class FuncionariosService {

  //declarando o storage de funcionarios
  funcionarios: Funcionario[] = [
    {
      idFuncionario: 0,
      nome: 'Sergio Mendes',
      cpf: '12345678900',
      matricula: '2021001',
      salario: 1000,
      dataAdmissao: '2021-07-24',
      foto: '',
      observacoes: 'Teste'
    },
    {
      idFuncionario: 1,
      nome: 'João Pedro',
      cpf: '098765432100',
      matricula: '2021002',
      salario: 2000,
      dataAdmissao: '2021-07-23',
      foto: '',
      observacoes: 'Teste'
    },
    {
      idFuncionario: 2,
      nome: 'Ana Maria',
      cpf: '75024598710',
      matricula: '2021003',
      salario: 3000,
      dataAdmissao: '2021-07-22',
      foto: '',
      observacoes: 'Teste'
    }
  ];

  //método para cadastrar um funcionario
  create(funcionario: Funcionario) {
    const itemIndex = this.funcionarios.length;
    funcionario.idFuncionario = this.getNextId();

    this.funcionarios[itemIndex] = funcionario;

    console.log(this.funcionarios);
  }

  //método para excluir um funcionario
  delete(funcionario: Funcionario) {
    this.funcionarios.splice(this.funcionarios.indexOf(funcionario), 1);
  }

  //método para atualizar o funcionario
  update(funcionario: Funcionario) {
    const itemIndex = this.funcionarios
      .findIndex(item => item.idFuncionario === funcionario.idFuncionario);

    this.funcionarios[itemIndex] = funcionario;
  }

  //consultar todos os funcionarios
  getAll(): Funcionario[] {
    return this.funcionarios;
  }

  //consultar por id..
  getById(idFuncionario: number) {
    const itemIndex = this.funcionarios
      .findIndex(item => item.idFuncionario === idFuncionario);

    return this.funcionarios[itemIndex];
  }

  //método para gerar o id do funcionario
  getNextId(): number {
    let maior = 0;
    this.funcionarios.forEach(function (item) {
      if (maior === 0) {
        maior = item.idFuncionario;
      }
      if (maior < item.idFuncionario) {
        maior = item.idFuncionario;
      }
    });

    return maior + 1;
  }

}
