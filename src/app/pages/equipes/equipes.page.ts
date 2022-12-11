import { Component, OnInit } from '@angular/core';
import { SistemaProviderService } from 'src/app/provider/sistema-provider.service';

@Component({
  selector: 'app-equipes',
  templateUrl: './equipes.page.html',
  styleUrls: ['./equipes.page.scss'],
})
export class EquipesPage implements OnInit {

  constructor(public sistemaProvider: SistemaProviderService) { 
    
  }

  ngOnInit() {
    console.log("equipe="+this.sistemaProvider.usuario)
  }

}
