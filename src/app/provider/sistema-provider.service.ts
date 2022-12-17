import { Injectable } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class SistemaProviderService {

  public usuario: string = "Rafa";
  constructor(
    private alertCtrl: AlertController) {
  }

  alertaBasicoInformativo(mensagem: string) {
    this.alertCtrl.create({
      cssClass: 'alertaInformativo',
      header: 'Informativo',
      message: mensagem,
      buttons: ['OK']
    }).then(alert => alert.present());
  }
}
