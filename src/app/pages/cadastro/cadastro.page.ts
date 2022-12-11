import { Component, OnInit } from '@angular/core';
import { SistemaProviderService } from 'src/app/provider/sistema-provider.service';


@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage implements OnInit {

  public nome: string;

  constructor(public sistemaProvider: SistemaProviderService) { }

  ngOnInit() {
    console.log(this.sistemaProvider.usuario);
    this.sistemaProvider.usuario="Raphael";
    this.nome="Andre";
    console.log(this.sistemaProvider.usuario);
  }

}

