import { Observable } from 'rxjs';
import { Usuario } from './login/usuario';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  apiURL: string = environment.apiURLBase + "/api/usuarios";

  constructor(
    private httpClient: HttpClient
  ) { }

  salvar(usuario: Usuario) : Observable<any> {
    return this.httpClient.post<any>(this.apiURL, usuario);
  }

}
