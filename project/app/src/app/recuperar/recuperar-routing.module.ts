import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecuperarPage } from './recuperar.page';  // Asegúrate de que RecuperarPage esté correctamente importado

const routes: Routes = [
  {
    path: '',
    component: RecuperarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecuperarPageRoutingModule {}
