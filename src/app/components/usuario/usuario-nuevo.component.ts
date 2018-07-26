import { Component, OnInit } from '@angular/core';

// Se importa para recibir el parámetro q viene por la URL
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-usuario-nuevo',
  template: `
    <p>
      usuario-nuevo works!
    </p>
  `,
  styles: []
})
export class UsuarioNuevoComponent implements OnInit {

  constructor(private router: ActivatedRoute) {

    this.router.parent.params.subscribe( parametros => {

      console.log('Ruta hija. Usuario Nuevo');
      console.log(parametros);
    });

  }

  ngOnInit() {
  }

}
