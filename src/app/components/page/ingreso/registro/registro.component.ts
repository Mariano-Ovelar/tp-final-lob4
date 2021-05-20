import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent implements OnInit {
  esEspecialista: boolean = true;
  constructor() { }

  ngOnInit(): void {
  }
  selecionarFormulario(esEspecialista: boolean) {
    this.esEspecialista = esEspecialista;
  }
}
