import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderApp } from './HeaderApp/Header.component';
import { IonicModule } from '@ionic/angular';
import { PlayerComputerComponent } from './SectionComputer/player-computer.component';
import { FooterComponent } from './Footer/footer.component';
import { SectionPlayerComponent } from './section-player/section-player.component';



@NgModule({
  declarations: [HeaderApp, PlayerComputerComponent, FooterComponent, SectionPlayerComponent],
  exports: [HeaderApp, PlayerComputerComponent, FooterComponent, SectionPlayerComponent],
  imports: [
    CommonModule,
    IonicModule
  ],

})
export class ComponentsModule { }
