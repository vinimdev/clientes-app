import { AuthService } from './../auth.service';
import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { Usuario } from './usuario';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  username?: string;
  password?: string;
  errors?: String[];
  cadastrando?: boolean;
  mensagemSucesso?: string;

  constructor(
    private router: Router,
    private authService: AuthService
  ) { }

  onSubmit() {
    this.router.navigate(['/home']);
  }

  preparaCadastrar(event: any) {
    event.preventDefault();
    this.cadastrando = true;
  }

  cancelaCadastro() {
    this.cadastrando = false;
  }

  cadastrar() {
    const usuario: Usuario = new Usuario();
    usuario.username = this.username;
    usuario.password = this.password;
    this.authService
                    .salvar(usuario)
								    .subscribe(response => {
                      this.mensagemSucesso = "Cadastro realizado com sucesso! Efetue o login.";
                      this.errors = [];
								    }, errorResponse => {
                      this.mensagemSucesso = undefined;
											this.errors = errorResponse.error.erros;
								    });
  }

}
