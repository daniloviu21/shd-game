import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VideojuegoDetallesPageRoutingModule } from './videojuego-detalles-routing.module';

import { VideojuegoDetallesPage } from './videojuego-detalles.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VideojuegoDetallesPageRoutingModule
  ],
  declarations: [VideojuegoDetallesPage]
})
export class VideojuegoDetallesPageModule {}
