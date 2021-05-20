import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/models/usuario';
import { AuthService } from 'src/app/services/auth.service';
import { UsuariosService } from 'src/app/services/usuarios.service';

@Component({
  selector: 'app-registro-especialista',
  templateUrl: './registro-especialista.component.html',
  styleUrls: ['./registro-especialista.component.scss']
})
export class RegistroEspecialistaComponent implements OnInit {
  @Output() Formulario = new EventEmitter();
  public usuario: Usuario;

  checkEspecialidades: any = [
    { especialidad: "Dentista", selected: true },
    { especialidad: "Pediatría", selected: false },
    { especialidad: "Psiquiatría", selected: false },
    { especialidad: "Neurocirugía", selected: false }
  ];
  especialidadesSeleccionadas: Array<any> = [];
  otrasEspecialidades: Array<any> = [];
  constructor(
    private authSvc: AuthService,
    private router: Router,
    private usuariosService: UsuariosService
  ) { 
    this.usuario = new Usuario();
  }

  ngOnInit(): void {
  }
  onRegister() {
    if (this.usuario.validarDatos(this.usuario, true)) {
      this.usuario.register(this.usuario, this.router, this.authSvc, this.usuariosService);
    }
  }
}
