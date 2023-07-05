import { Component, inject } from '@angular/core';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  public env= environment;
  

  public appPages = [
    { title: 'Página inicial', url: '/home', icon: 'home' },
    { title: 'Sobre', url: '/sobre', icon: 'information-circle' },
    { title: 'Contate-nos', url: '/contato', icon: 'chatbubbles' }
    
  ];
}
