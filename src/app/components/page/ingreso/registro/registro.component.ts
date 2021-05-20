import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/models/usuario';
import { AuthService } from 'src/app/services/auth.service';
import { UsuariosService } from 'src/app/services/usuarios.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent implements OnInit {
  esEspecialista: boolean = true;
  passwordConfir: string = "";
  public usuario: Usuario;
  constructor(
    private authSvc: AuthService,
    private router: Router,
    private usuariosService: UsuariosService
  ) {
    this.usuario = new Usuario();

  }

  ngOnInit(): void {
  }
  selecionarFormulario(esEspecialista: boolean) {
    this.esEspecialista = esEspecialista;
  }
  /* onRegister() {
    if (this.usuario.validarDatos(this.usuario, true)) {
      this.usuario.register(this.usuario, this.router, this.authSvc, this.usuariosService);
    }
  } */
}
