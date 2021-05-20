import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/models/usuario';
import { AuthService } from 'src/app/services/auth.service';
import { UsuariosService } from 'src/app/services/usuarios.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  email: string = "";
  password: string = "";
  usuario: Usuario;

  constructor(
    private authSvc: AuthService,
    private router: Router,
    private usuariosService: UsuariosService
  ) {
    this.usuario = new Usuario();
  }

  ngOnInit(): void {
  }

  onLogin() {
    if (this.usuario.validarDatos(this.usuario, false)) {
      this.usuario.login(this.usuario, this.router, this.authSvc, this.usuariosService);
    }
  }
  completarCampos() {
    this.usuario.email = "marianoovelar@gmail.com";
    this.usuario.password = "123456789"
  }
}
