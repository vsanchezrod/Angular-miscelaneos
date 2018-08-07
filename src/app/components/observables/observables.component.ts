import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Persona } from '../../interfaces/persona.interface';
import { Subject, Observable } from 'rxjs';

// Importar httpClient para poder hacer peticiones
import { HttpClient } from '@angular/common/http';
import 'rxjs-compat';

// Interfaz
import { Joke, JokeValue } from '../interfaces/joke.interface';



@Component({
  selector: 'app-observables',
  templateUrl: './observables.component.html',
})
export class ObservablesComponent implements OnInit {

  personaSubject: Subject<Persona>;
  broma: any;
  bromas: any;
  numeroBromas: number;

  constructor(private http: HttpClient) { }

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
    this.personaSubject.asObservable().subscribe(
      (persona) => {
        console.log(persona.nombre);
        console.log(persona.edad);
      },
      (error) => {
        console.error(error);
      },
      () => {
        console.log('Observable completado');
      }
    );
  }

  private obtenerBroma(): void {
    console.log('Obteniendo broma...');

    const url = 'http://api.icndb.com/jokes/random/';

    this.http.get(url).map(broma => {
      this.broma = broma;
    }).subscribe();

  }

  private obtenerBromas(formularioBromas: NgForm): void {
    console.log('Obteniendo bromas...', formularioBromas);

    const numeroBromas = formularioBromas.value;
    const url = `http://api.icndb.com/jokes/random/${numeroBromas}`;

    this.http.get(url).subscribe(bromas => {
      this.bromas = bromas;
      console.log(bromas);
    });


    /*this.http.get(url).map(bromas => {
      this.bromas = bromas;
      console.log('Bromas', bromas);
    }).subscribe();*/

  }
}
