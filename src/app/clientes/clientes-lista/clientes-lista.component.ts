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
    this.router.navigate(['clientes-form']);
  }

}
