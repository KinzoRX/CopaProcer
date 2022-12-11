import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JogadoresPage } from './jogadores.page';

const routes: Routes = [
  {
    path: '',
    component: JogadoresPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JogadoresPageRoutingModule {}
