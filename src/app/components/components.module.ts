import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { IonicModule } from '@ionic/angular';
import { ItemArchivementComponent } from './item-archivement/item-archivement.component';



@NgModule({
  declarations: [
    HeaderComponent,
    ItemArchivementComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [
    HeaderComponent,
    ItemArchivementComponent
  ]
})
export class ComponentsModule { }
