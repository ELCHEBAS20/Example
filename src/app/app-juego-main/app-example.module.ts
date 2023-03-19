import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { AppExamplePageRoutingModule } from './app-example-routing.module';
import { AppExamplePage } from './app-example.page';
import { ComponentsModule } from '../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AppExamplePageRoutingModule,
    ComponentsModule
  ],
  declarations: [AppExamplePage]
})
export class AppExamplePageModule { }
