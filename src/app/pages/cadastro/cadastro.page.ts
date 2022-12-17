import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Jogador } from 'src/app/model/jogador.model';
import { ServidorProviderService } from 'src/app/provider/servidor-provider.service';
import { SistemaProviderService } from 'src/app/provider/sistema-provider.service';


@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage implements OnInit {

  public jogador: Jogador = new Jogador();

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    public sistemaProvider: SistemaProviderService,
    public servidorProvider: ServidorProviderService) 
  {
    this.jogador.id = 0;
    const id: number = Number(this.activatedRoute.snapshot.paramMap.get('id'));

    if (id != 0) {
      this.servidorProvider.chamarBackendGet("/jogador/" + id).subscribe(
        (responseJson) => {
          console.log("Retorno: " + JSON.stringify(responseJson));
          this.jogador = <Jogador> responseJson;
        },
        (err) => {
          console.log("Erro: " + err);
          this.sistemaProvider.alertaBasicoInformativo("Jogador não cadastrado, iniciar cadastro!");
        }
      );
    }
  }

  ngOnInit() {
    
  }

  gravar() {
    if (this.jogador.id == 0) {
      this.servidorProvider.chamarBackendPost("/jogador", this.jogador).subscribe(
        (responseJson) => {
          console.log("Retorno: " + JSON.stringify(responseJson));
          this.sistemaProvider.alertaBasicoInformativo("Inclusão efetuada com sucesso!");
        },
        (err) => {
          console.log("Erro: " + err);
          this.sistemaProvider.alertaBasicoInformativo("Erro: " + err);
        }
      );
    } else {
      this.servidorProvider.chamarBackendPut("/jogador/" + this.jogador.id, this.jogador).subscribe(
        (responseJson) => {
          console.log("Retorno: " + JSON.stringify(responseJson));
          this.sistemaProvider.alertaBasicoInformativo("Alteração efetuada com sucesso!");
        },
        (err) => {
          this.sistemaProvider.alertaBasicoInformativo("Erro: " + err);
        }
      );
    }

  }
  
  exercerAtividadeFisica(isOpcao: boolean) {
    this.jogador.exerceAtividadeFisica = isOpcao;
  }
  
  praticarEsporte(isOpcao: boolean) {
    this.jogador.praticaEsporte = isOpcao;
  }

}

