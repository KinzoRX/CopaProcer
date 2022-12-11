import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EquipesPage } from './equipes.page';

const routes: Routes = [
  {
    path: '',
    component: EquipesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EquipesPageRoutingModule {}
