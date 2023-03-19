import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule, ToastController } from '@ionic/angular';
import { ModalAppPageRoutingModule } from './modal-app-routing.module';
import { ModalAppPage } from './modal-app.page';
import { ComponentsModule } from '../components/components.module';


//ComponentsModule

@NgModule({
  imports: [
    CommonModule,
    FormsModule, ReactiveFormsModule,
    IonicModule,
    ModalAppPageRoutingModule, ComponentsModule
  ],
  declarations: [ModalAppPage]
})
export class ModalAppPageModule { }
