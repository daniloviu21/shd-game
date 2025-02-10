import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { ProfileComponent } from './profile/profile.component';
import { HeaderComponent } from './header/header.component';
import { ItemArchivementComponent } from './item-archivement/item-archivement.component';
import { LogrosChartComponent } from './logros-chart/logros-chart.component';

@NgModule({
  declarations: [
    ProfileComponent,
    HeaderComponent,
    ItemArchivementComponent,
    LogrosChartComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [
    ProfileComponent,
    HeaderComponent,
    ItemArchivementComponent,
    LogrosChartComponent
  ]
})
export class ComponentsModule {}
