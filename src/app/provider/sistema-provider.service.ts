import { Injectable } from '@angular/core';
import { NavController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class SistemaProviderService {

  public usuario: string = "Rafa";
  constructor() {
  }
}
