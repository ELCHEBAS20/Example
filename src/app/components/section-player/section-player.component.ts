import { Component, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-section-player',
  templateUrl: './section-player.component.html',
  styleUrls: ['./section-player.component.scss'],
})
export class SectionPlayerComponent implements OnInit {


  public Player_Valor: any[] = ['', '', '', '', '', '', '', '', ''];
  public IteradorValores: any[] = ['', '', '', '', '', '', '', '', '']
  public isTurno: boolean = true;
  public RstFinal: string = '';
  public notWinner = false;
  public isVisible = false;

  //Validaciones para ganar partida.
  public templatePuntaje: any[] = [

    // Linea Recta.
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],

    //En X cada extremo.
    [0, 4, 8],
    [2, 4, 6],

    //Linea Vertical.
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
  ];

  constructor(public render: Renderer2) { }

  ngOnInit() {
  }

  public function_Jugada(Classnumber: number) {

    let ValorPlayer1 = localStorage.getItem('Player1');
    let ValorPlayer2 = localStorage.getItem('Player2');
    let AuxValor = '';


    if (this.Player_Valor[Classnumber] == '') {
      if (this.isTurno) {
        this.Player_Valor[Classnumber] = ValorPlayer1;
        AuxValor = ValorPlayer1;
        this.isTurno = false;
      } else {
        this.Player_Valor[Classnumber] = ValorPlayer2;
        AuxValor = ValorPlayer2;
        this.isTurno = true;
      }

      this.render.selectRootElement('.div' + Classnumber).textContent = AuxValor;
      this.function_get_ganador(this.Player_Valor);
    } else {
      alert('Esta ocupado mijo.');
    }

  }

  public function_get_ganador(ArrayValores: any) {

    let auxValor;
    let countO = 0, countX = 0, NOTWinner = 0;
    let PosGanador;


    for (let index = 0; index < this.templatePuntaje.length; ++index) {

      auxValor = this.templatePuntaje[index];
      countO = 0, countX = 0;

      for (let iterador = 0; iterador < auxValor.length; ++iterador) {

        if (this.Player_Valor[this.templatePuntaje[index][iterador]] == 'O') {
          countO++;
        } else if (this.Player_Valor[this.templatePuntaje[index][iterador]] == 'X') {
          countX++;
        }
      }

      if (countO == 3 || countX == 3) {
        PosGanador = this.templatePuntaje[index].toString();
        this.notWinner = true;
        this.RstFinal = this.Player_Valor[parseInt(PosGanador.charAt(0))];
        let strlSplit = PosGanador.split(',');
        for (let index = 0; index < strlSplit.length; ++index) {
          let HTMLelemen = document.querySelector('.div' + parseInt(strlSplit[index])) as HTMLElement;
          HTMLelemen.style.color = '#000000';
        }
        break;
      }
    }


    for (let index = 0; index < this.Player_Valor.length; ++index) {

      if (this.Player_Valor[index] != '') {
        NOTWinner++;
      }
    }

    if (NOTWinner == 9) {
      if (!this.notWinner) {
        this.isVisible = true;
      }
    }

  }

}
