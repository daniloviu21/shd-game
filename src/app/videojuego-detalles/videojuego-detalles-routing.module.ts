import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VideojuegoDetallesPage } from './videojuego-detalles.page';

const routes: Routes = [
  {
    path: '',
    component: VideojuegoDetallesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VideojuegoDetallesPageRoutingModule {}
