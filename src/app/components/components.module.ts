import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { ProfileComponent } from './profile/profile.component';
import { HeaderComponent } from './header/header.component';
import { ItemArchivementComponent } from './item-archivement/item-archivement.component';

@NgModule({
  declarations: [
    ProfileComponent,
    HeaderComponent,
    ItemArchivementComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ]
})
export class ComponentsModule {}
