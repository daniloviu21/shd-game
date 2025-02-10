import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { IonicModule } from '@ionic/angular';
import { ItemArchivementComponent } from './item-archivement/item-archivement.component';
import { LogrosChartComponent } from './logros-chart/logros-chart.component';



@NgModule({
  declarations: [
    HeaderComponent,
    ItemArchivementComponent,
    LogrosChartComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [
    HeaderComponent,
    ItemArchivementComponent,
    LogrosChartComponent
  ]
})
export class ComponentsModule { }
