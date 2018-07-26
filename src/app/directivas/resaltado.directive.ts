import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appResaltado]'
})
export class ResaltadoDirective {
  
  // Se crea una nueva variable cuyo valor va a venir de fuera, por lo que se usa el INPUT
  @Input('appResaltado') nuevoColor: string;

  constructor(private el: ElementRef) {

    console.log('Directiva llamada');
    // el.nativeElement.style.backgroundColor = 'yellow';
  }

  @HostListener('mouseenter') mouseEntro() {

    // Se le manda el nuevo color  o sino existe por defecto será yellow
    this.resaltar(this.nuevoColor || 'yellow');
  }

  @HostListener('mouseleave') mouseSalio() {

    this.resaltar(null);
  }

  // Método privado de la directiva
  private resaltar (color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }

}
