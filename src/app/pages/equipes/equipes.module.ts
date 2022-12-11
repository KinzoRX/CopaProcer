import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EquipesPageRoutingModule } from './equipes-routing.module';

import { EquipesPage } from './equipes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EquipesPageRoutingModule
  ],
  declarations: [EquipesPage]
})
export class EquipesPageModule {}
