import { Component, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-player-computer',
  templateUrl: './player-computer.component.html',
  styleUrls: ['./player-computer.component.scss'],
})

export class PlayerComputerComponent implements OnInit {


  public isTurno: boolean;
  public Player_Valor: any[] = ['', '', '', '', '', '', '', '', ''];
  public PosValores: any = [];
  public PosValoresComputer: any = [];
  public DisabledComponent: boolean = true;
  public RstWinner: any[] = [];
  public PuntajePlayers: any = {
    PuntajePlayer: 0,
    PuntajeComputer: 0
  };

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

  constructor(private render: Renderer2) { this.isTurno = true; }

  ngOnInit() { }

  public Function_RandomPosPlayer(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min));
  }

  public function_PartidaInicial(id_div: number): void {

    let RsMsg = '';
    RsMsg += 'o'.toLocaleUpperCase();

    if (this.Player_Valor[id_div] == '') {
      this.Player_Valor[id_div] = RsMsg;
      this.function_Computer_Player(RsMsg, this.Player_Valor);
      this.render.selectRootElement('.div_' + id_div).textContent = RsMsg;
      document.querySelector('.div' + id_div)
    } else {
      alert('Elemento ya ocupado.');
    }
  }

  public function_Computer_Player(RstMensaje: string, ArrayPos: any) {

    RstMensaje = '';
    RstMensaje += 'x'.toLocaleUpperCase();
    let valoresIsEmpty = [];

    for (let index = 0; index < 9; ++index) {
      if (ArrayPos[index] == '') {
        valoresIsEmpty.push(index);
      }
    }

    let setRandomComputer = this.Function_RandomPosPlayer(0, valoresIsEmpty.length - 1);

    if (valoresIsEmpty[setRandomComputer] != undefined) {
      ArrayPos[valoresIsEmpty[setRandomComputer]] = RstMensaje;
      this.render.selectRootElement('.div_' + valoresIsEmpty[setRandomComputer]).textContent = RstMensaje;
    }

    let StrlFunction = this.Function_PartidaGanada(ArrayPos).split('-');

    if (StrlFunction[0] == 'O' || StrlFunction[0] == 'X') {

      if (StrlFunction[0] == 'O') {
        if (valoresIsEmpty[setRandomComputer] != undefined) {
          this.render.selectRootElement('.div_' + valoresIsEmpty[setRandomComputer]).textContent = '';
        }
      }
      let PosiHTML = StrlFunction[1].split(',');

      for (let iterador = 0; iterador < PosiHTML.length; ++iterador) {
        let colorText = document.querySelector('.div_' + parseInt(PosiHTML[iterador])) as HTMLElement;
        colorText.style.color = 'black';
        colorText.style.fontWeight = 'bold';
      }
      this.DisabledComponent = false;

      if (StrlFunction[0] == 'X') {
        this.PuntajePlayers.PuntajeComputer++;
      } else {
        this.PuntajePlayers.PuntajePlayer++;
      }

    }

  }

  public Function_PartidaGanada(PlayersValores: any): string {

    let countPlayer = 0, countComputer = 0;
    let lenAux, TempPos = '';
    let ArrayRst = [];

    for (let index = 0; index < this.templatePuntaje.length; ++index) {
      lenAux = this.templatePuntaje[index];
      countComputer = 0, countPlayer = 0;

      for (let iterador = 0; iterador < lenAux.length; ++iterador) {
        if (PlayersValores[this.templatePuntaje[index][iterador]] == "O") {
          countPlayer++;
        } else if (PlayersValores[this.templatePuntaje[index][iterador]] == "X") {
          countComputer++;
        }
      }

      if (countComputer == 3) {
        ArrayRst.push(index);
      } else if (countPlayer == 3) {
        ArrayRst.push(index);
      }
    }

    if (ArrayRst.length != 0) {
      this.RstWinner.push(ArrayRst[0]);
      TempPos = this.templatePuntaje[this.RstWinner[0]];
    }
    return this.Player_Valor[parseInt(TempPos[0])] + '-' + this.templatePuntaje[this.RstWinner[0]];
  }


}



