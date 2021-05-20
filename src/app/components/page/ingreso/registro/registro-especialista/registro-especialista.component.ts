import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-registro-especialista',
  templateUrl: './registro-especialista.component.html',
  styleUrls: ['./registro-especialista.component.scss']
})
export class RegistroEspecialistaComponent implements OnInit {
  @Output() Formulario = new EventEmitter();
  checkEspecialidades: any = [
    { especialidad: "Dentista", selected: true },
    { especialidad: "Pediatría", selected: false },
    { especialidad: "Psiquiatría", selected: false },
    { especialidad: "Neurocirugía", selected: false }
  ];
  especialidadesSeleccionadas: Array<any> = [];
  otrasEspecialidades: Array<any> = [];
  constructor() { }

  ngOnInit(): void {
  }
  
}
