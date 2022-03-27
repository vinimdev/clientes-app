import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cliente } from './clientes/cliente';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  constructor( private httpClient: HttpClient ) { }

  getCliente(): Cliente {
    let cliente: Cliente = new Cliente();
    cliente.nome = 'Fulano de tal';
    cliente.cpf = '88888888888';
    return cliente;
  }

  salvar(cliente: Cliente): Observable<Cliente> {
    return this.httpClient.post('http://localhost:8080/api/clientes', cliente);
  }
}
