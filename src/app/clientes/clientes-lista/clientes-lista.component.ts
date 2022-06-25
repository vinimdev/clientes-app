import { ClientesService } from 'src/app/clientes.service';
import { Cliente } from './../cliente';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clientes-lista',
  templateUrl: './clientes-lista.component.html',
  styleUrls: ['./clientes-lista.component.css']
})
export class ClientesListaComponent implements OnInit {

  clientes: Cliente[] = [];
  clienteSelecionado: Cliente = new Cliente();
  mensagemSucesso?: String;
  mensagemErro?: String;

  constructor(
    private clientesService: ClientesService,
    private router: Router
  ) { }

  ngOnInit(): void {

    this.clientesService
    .getClientes()
    .subscribe(
      resposta => this.clientes = resposta
    );
  }

  novoCadastro() {
    this.router.navigate(['clientes/form']);
  }

  preparaDelecao(cliente: Cliente) {
    this.clienteSelecionado = cliente;
  }

  deletarCliente() {
    this.clientesService
    .deletar(this.clienteSelecionado)
    .subscribe(response => {
      this.mensagemSucesso = 'Cliente deletado com sucesso!';
      this.ngOnInit();
    },
      erro => this.mensagemErro = 'Ocorreu um erro ao deletar o cliente.'
    );
  }

}
