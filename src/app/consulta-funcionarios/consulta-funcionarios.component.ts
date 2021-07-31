import { Component, OnInit } from '@angular/core';
import { Funcionario } from '../services/funcionario.model';
import { FuncionariosService } from '../services/funcionarios.service';

@Component({
  selector: 'app-consulta-funcionarios',
  templateUrl: './consulta-funcionarios.component.html',
  styleUrls: ['./consulta-funcionarios.component.css']
})
export class ConsultaFuncionariosComponent implements OnInit {

  //atributos
  funcionarios: Funcionario[];
  funcionario: Funcionario;

  //inicializando por injeção de dependencia
  constructor(private funcionariosService: FuncionariosService) {
    this.funcionarios = [];
    this.funcionario = {
      idFuncionario: 0,
      nome: '',
      cpf: '',
      matricula: '',
      salario: 0,
      dataAdmissao: '',
      foto: '',
      observacoes: ''
    };
  }

  ngOnInit(): void {
    this.funcionarios = this.funcionariosService.getAll();
  }

  excluirFuncionario(idFuncionario: number): void {

    if (window.confirm('Deseja realmente excluir o funcionario?')) {
      var funcionario = this.funcionariosService.getById(idFuncionario);
      this.funcionariosService.delete(funcionario);

      alert(`Funcionário ${funcionario.nome}, excluído com sucesso.`);
    }
  }

  obterFuncionario(idFuncionario: number): void {
    this.funcionario = this.funcionariosService.getById(idFuncionario);
  }

  atualizarFuncionario(formEdicao: any) : void {
    this.funcionariosService.update(formEdicao.form.value);
    alert('Funcionário atualizado com sucesso.');
  }

}
