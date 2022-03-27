import { Component, OnInit } from '@angular/core';
import { Cliente } from '../cliente';
import { ClientesService } from 'src/app/clientes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-clientes-form',
  templateUrl: './clientes-form.component.html',
  styleUrls: ['./clientes-form.component.css']
})
export class ClientesFormComponent implements OnInit {

  cliente: Cliente;
  success: boolean = false;
  errors: String[] = [];

  constructor(
    private clientesService: ClientesService,
    private router: Router
  ) {
    this.cliente = new Cliente();
   }

  ngOnInit(): void {
  }

  onSubmit() {
    this.clientesService
    .salvar(this.cliente)
    .subscribe(response => {
      this.errors = [];
      this.success = true;
    },
    errorResponse => {
      this.success = false;
      this.errors = errorResponse.error.erros;
    });
  }

  voltarParaListagem() {
    this.router.navigate(['clientes-lista']);
  }

}
