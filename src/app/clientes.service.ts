import { environment } from '../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cliente } from './clientes/cliente';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  apiUrl: string = environment.apiURLBase + "/api/clientes";

  constructor( private httpClient: HttpClient ) { }

  getClientes(): Observable<Cliente[]> {
    return this.httpClient.get<Cliente[]>(this.apiUrl);
  }

  salvar(cliente: Cliente): Observable<Cliente> {
    return this.httpClient.post(this.apiUrl, cliente);
  }

  atualizar(cliente: Cliente): Observable<any> {
    return this.httpClient.put(`${this.apiUrl}/${cliente.id}`, cliente);
  }

  getClientesById(id: number): Observable<Cliente> {
    return this.httpClient.get<any>(`${this.apiUrl}/${id}`);
  }

  deletar(cliente: Cliente): Observable<any> {
    return this.httpClient.delete<any>(`${this.apiUrl}/${cliente.id}`);
  }

}
