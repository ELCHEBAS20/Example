import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm } from '@angular/forms';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modal-app',
  templateUrl: './modal-app.page.html',
  styleUrls: ['./modal-app.page.scss'],
})
export class ModalAppPage implements OnInit {

  public formGroup: FormGroup;

  constructor(public toastController: ToastController, public Router: Router) { }

  ngOnInit() {
    localStorage.removeItem('AppRol');

    this.formGroup = new FormGroup({
      player1: new FormControl(''),
      player2: new FormControl('')
    })
  }

  public async OnSubmitData() {


    let isEmpty = false;
    const ObjArray = Object.values(this.formGroup.value);


    for (let index = 0; index < ObjArray.length; ++index) {

      if (ObjArray[index] == null || ObjArray[index] == '') {
        isEmpty = true;
        break;
      }
    }

    if (isEmpty) {
      const toast = await this.toastController.create({
        message: 'Hay campos vacios,revisar por favor.',
        duration: 5000,
        cssClass: 'custom-toast',
        position: 'top',
        buttons: [
          {
            text: 'X',
            role: 'cancel'
          }
        ],
      });

      await toast.present();
      this.formGroup.reset;
    } else {
      localStorage.setItem('Player1', this.formGroup.value.player1);
      localStorage.setItem('Player2', this.formGroup.value.player2);
      localStorage.setItem('AppRol', 'Player');
      location.href = '/app-juego';
    }



  }




}
