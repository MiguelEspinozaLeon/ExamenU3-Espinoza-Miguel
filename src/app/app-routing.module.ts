import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearcontactoComponent } from './components/crearcontacto/crearcontacto.component';
import { ListacontactosComponent } from './components/listacontactos/listacontactos.component';


const routes: Routes = [
  {path: 'crearcontacto', component: CrearcontactoComponent},
  {path: 'listacontactos', component: ListacontactosComponent},
 
  {path:'**', pathMatch: 'full', redirectTo: 'crearcontacto'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
