// Va a permitir controlar las rutas de usuario
// Solo se quiere un arreglo de rutas
import { Routes } from '@angular/router';

// Se importan los componentes
import { UsuarioNuevoComponent } from './usuario-nuevo.component';
import { UsuarioEditarComponent } from './usuario-editar.component';
import { UsuarioDetalleComponent } from './usuario-detalle.component';

export const USUARIO_ROUTES: Routes = [
    { path: 'nuevo', component: UsuarioNuevoComponent },
    { path: 'editar', component: UsuarioEditarComponent},
    { path: 'detalle', component: UsuarioDetalleComponent},
    { path: '**', pathMatch: 'full', redirectTo: 'nuevo' }
];

// No se tiene que exportar, porque no se quiere navegar al root.
