import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cliente } from './clientes/cliente';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  constructor( private httpClient: HttpClient ) { }

  getClientes(): Observable<Cliente[]> {
    return this.httpClient.get<Cliente[]>('http://localhost:8080/api/clientes');
  }

  salvar(cliente: Cliente): Observable<Cliente> {
    return this.httpClient.post('http://localhost:8080/api/clientes', cliente);
  }

  atualizar(cliente: Cliente): Observable<any> {
    return this.httpClient.put(`http://localhost:8080/api/clientes/${cliente.id}`, cliente);
  }

  getClientesById(id: number): Observable<Cliente> {
    return this.httpClient.get<any>(`http://localhost:8080/api/clientes/${id}`);
  }

}
