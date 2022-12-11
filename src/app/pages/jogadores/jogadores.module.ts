import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { JogadoresPageRoutingModule } from './jogadores-routing.module';

import { JogadoresPage } from './jogadores.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    JogadoresPageRoutingModule
  ],
  declarations: [JogadoresPage]
})
export class JogadoresPageModule {}
