import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Cliente } from '../cliente';
import { ClientesService } from 'src/app/clientes.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-clientes-form',
  templateUrl: './clientes-form.component.html',
  styleUrls: ['./clientes-form.component.css']
})
export class ClientesFormComponent implements OnInit {

  cliente: Cliente;
  success: boolean = false;
  errors: String[] = [];
  id: number = 0;

  constructor(
    private clientesService: ClientesService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    this.cliente = new Cliente();
   }

  ngOnInit(): void {
    let params: Observable<Params> = this.activatedRoute.params;
    params.subscribe(urlParams => {
      this.id = urlParams['id'];
      if (this.id) {
        this.clientesService
        .getClientesById(this.id)
        .subscribe(
          response => this.cliente = response,
          errorResponse => this.cliente = new Cliente()
          );
      }
    });
  }

  onSubmit() {
    if (this.id) {
      this.clientesService
      .atualizar(this.cliente)
      .subscribe(response => {
        this.success = true;
        this.errors = [];
      },
        errorResponse => {
          this.errors = ['Erro ao atualizar o cliente.'];
          this.success = false;
        })
    } else {
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
  }

  voltarParaListagem() {
    this.router.navigate(['clientes/lista']);
  }

}
