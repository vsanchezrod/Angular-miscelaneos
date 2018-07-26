import { Component, OnInit } from '@angular/core';

// Se importa para recibir el parámetro q viene por la URL
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html'
})
export class UsuarioComponent implements OnInit {

  constructor(private router: ActivatedRoute) {

    this.router.params.subscribe( parametros => {

      console.log('Ruta Padre');
      console.log(parametros);
    });

  }

  ngOnInit() {
  }

}
