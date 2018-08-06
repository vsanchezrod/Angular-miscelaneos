import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Persona } from '../../interfaces//persona.interface';
import { Subject } from 'rxjs';


@Component({
  selector: 'app-observables',
  templateUrl: './observables.component.html',
})
export class ObservablesComponent implements OnInit {

  personaSubject: Subject<Persona>;

  constructor() { }

  ngOnInit() {
    this.personaSubject = new Subject();
    this.subscribirseAPersonaGuardada();
  }

  guardar(formulario: NgForm): void {
    console.log('Guardando...', formulario);

    // Los valores del formulario los guardo en un objeto de tipo persona
    const persona: Persona = formulario.value;

    if (persona.edad >= 18) {
      this.personaSubject.next(persona);
    }
    else {
      this.personaSubject.error(Error);
    }

  }

  private subscribirseAPersonaGuardada(): void {
    this.personaSubject.subscribe(
      (persona) => {
        console.log(persona.nombre);
        console.log(persona.edad);
      },
      (error) => {
        console.error(error);
      },
      () => {
        console.info('Observable completado');
      }
    );
  }
}
