import { Component, OnInit } from '@angular/core';
import { Jogador } from 'src/app/model/jogador.model';
import { ServidorProviderService } from 'src/app/provider/servidor-provider.service';
import { SistemaProviderService } from 'src/app/provider/sistema-provider.service';

@Component({
  selector: 'app-jogadores',
  templateUrl: './jogadores.page.html',
  styleUrls: ['./jogadores.page.scss'],
})
export class JogadoresPage implements OnInit {
  public listaJogador: Jogador[] = new Array<Jogador>();
  public listaJogadorA: Jogador[] = new Array<Jogador>();
  public listaJogadorB: Jogador[] = new Array<Jogador>();
  public listaJogadorC: Jogador[] = new Array<Jogador>();

  constructor(
    public sistemaProvider: SistemaProviderService,
    private servidorProvider: ServidorProviderService) 
  {
    this.servidorProvider.chamarBackendGet("/jogador").subscribe(
      (responseJson) => {
        console.log("Retorno: " + JSON.stringify(responseJson));
        this.listaJogador = <Jogador[]> responseJson;

        this.listaJogador.forEach(item => {
          if (item.nome.toUpperCase().substring(0,1) == "A") {
            this.listaJogadorA.push(item);
          } else if (item.nome.toUpperCase().substring(0,1) == "B") {
            this.listaJogadorB.push(item);
          } else if (item.nome.toUpperCase().substring(0,1) == "C") {
            this.listaJogadorC.push(item);
          }
        });
      },
      (err) => {
        console.log("Erro: " + err);
        this.sistemaProvider.alertaBasicoInformativo("Erro ao chamar o Backend de Jogadores!");
      }
    );

  }

  ngOnInit() {
  }

}
