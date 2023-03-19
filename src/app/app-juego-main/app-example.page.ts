import { Component, OnInit, Renderer2 } from '@angular/core';
import { count } from 'console';


@Component({
  selector: 'app-app-example',
  templateUrl: './app-example.page.html',
  styleUrls: ['./app-example.page.scss'],
})
export class AppExamplePage implements OnInit {

  public Player_Valor: any[] = ['', '', '', '', '', '', '', '', ''];
  public PosValores: any = [];
  public PosValoresComputer: any = [];
  public isTurnoPlayer: boolean;
  public isTurno: boolean;


  public ValorLocalstorage: any;


  constructor(private render: Renderer2) {
    this.isTurno = true;
    this.isTurnoPlayer = true;
  }

  ngOnInit() {
    this.ValorLocalstorage = localStorage.getItem('AppRol');
  }

  public Function_RandomPosPlayer(min: number, max: number) {
    return Math.floor(Math.random() * (max - min));
  }

  public function_val() {

    // let PlayerComputer = '';

    // if (this.Player_Valor[id_div] == '') {

    //   if (this.isTurno) {
    //     RsMsg += '0';
    //     this.Player_Valor[id_div] = RsMsg;
    //     this.render.selectRootElement('.div_' + id_div).textContent = RsMsg;
    //     this.PosValores.push(id_div);
    //   }
    //   console.log('Este es:', this.PosValores);
    // } else {

    //   this.isTurno = !this.isTurno ? true : false;

    //   console.log('may muy mal');
    //   console.log(this.isTurno)

    // }



    // for (let index = 0; index < 9; ++index) {

    //   if (!array.includes(setRandom)) {
    //     count++;
    //     if (count == 1) {
    //       console.log(setRandom);
    //       break;
    //     }

    //   }
    // }
  }

  public function_click_div(id_div: number): void {

    let RsMsg = '';


    if (this.isTurnoPlayer) {
      RsMsg += '0';
      this.isTurnoPlayer = false;
    } else {
      RsMsg += 'X';
      this.isTurnoPlayer = true;
    }

    this.render.selectRootElement('#div_' + id_div).textContent = RsMsg;


    // if (this.Player_Valor[id_div] == '') {
    //   this.Player_Valor[id_div] = RsMsg;
    //   this.PosValores.push(id_div);
    //   console.log(this.Player_Valor)
    //   this.function_Computer_Player(RsMsg, this.Player_Valor);
    //   this.render.selectRootElement('.div_' + id_div).textContent = RsMsg;
    // } else {
    //   alert('Elemento ya ocupado.');
    // }

    // console.log('Esto va asi:', this.isTurno)

  }
  // public function_Computer_Player(RstMensaje: string, ArrayPos: any) {
  //   RstMensaje = '';
  //   RstMensaje += 'X';
  //   let valoresIsEmpty = [];


  //   for (let index = 0; index < 9; ++index) {
  //     if (this.Player_Valor[index] == '') {
  //       valoresIsEmpty.push(index);
  //     }
  //   }

  //   let setRandomComputer = this.Function_RandomPosPlayer(0, valoresIsEmpty.length - 1);
  //   if (valoresIsEmpty[setRandomComputer] != undefined) {
  //     this.Player_Valor[valoresIsEmpty[setRandomComputer]] = RstMensaje;
  //     this.render.selectRootElement('.div_' + valoresIsEmpty[setRandomComputer]).textContent = RstMensaje;
  //   }

  //   console.log('Esto va asi:', this.isTurno)
  // }

  public function_disabled_container() { }



}
