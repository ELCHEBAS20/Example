import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(public alertController: AlertController, private router: Router) { }

  ngOnInit(): void {
    localStorage.removeItem('AppRol');
    localStorage.removeItem('Player1');
    localStorage.removeItem('Player2');
  }

  public async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Informacion importante:',
      message: 'Bienvenid@ el siguiente juego es interactivo para diferentes edades, el juego consta de dos roles el de JUGADOR VS JUGADOR y JUGADOR VS COMPUTADORA. Teniendo en cuenta lo dicho anteriormente cuando se juega dos jugadores diferentes tendrá la opción de elegir su opción ya sea [X O Y] y cuando sea Computador con jugador. La computadora tendrá el valor de O y el jugador de X.',
      buttons: ['Cerrar'],
    });

    await alert.present();
  }

  public AppComputer() {
    localStorage.setItem('AppRol', 'Computer');
    location.href = '/app-juego';
  }

}
