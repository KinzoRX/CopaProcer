import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Home', url: 'home', icon: 'Home' },
    { title: 'Cadastro', url: 'cadastro', icon: 'person-add' },
    { title: 'Jogadores', url: 'jogadores', icon: 'accessibility' },
    { title: 'Equipes', url: 'equipes', icon: 'shirt' },
  ];
  
  constructor() {}
}
