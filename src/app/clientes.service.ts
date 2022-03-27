import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cliente } from './clientes/cliente';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  constructor( private httpClient: HttpClient ) { }

  // getClientes(): Observable<Cliente[]> {
  //   return null;
  // }

  getClientes(): Cliente[] {
    let cliente: Cliente = new Cliente();
    cliente.id = 1;
    cliente.nome = 'Fulano de tal';
    cliente.cpf = '88888888888';
    cliente.dataCadastro = '14/08/1998'
    return [cliente];
  }

  salvar(cliente: Cliente): Observable<Cliente> {
    return this.httpClient.post('http://localhost:8080/api/clientes', cliente);
  }
}
