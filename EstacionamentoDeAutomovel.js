export class EstacionamentoDeAutomovel{

  static numeroDeCarros = 0;
  _placa;
  _modelo;
  _tempo;
  
  constructor(novaPlaca, novoModelo,novoTempo){
    this._placa = novaPlaca;
    this._modelo = novoModelo;
    this._tempo = novoTempo
    EstacionamentoDeAutomovel.numeroDeCarros += 1;
  }
  get placa(){

    return this._placa;

  }
  get modelo(){
    return this._modelo;
  }
  get tempo (){
    return this._tempo;
  }
  
  set placa(novaPlaca) {
    this._placa = novaPlaca;
    
   
  }
  
  set modelo(novoModelo) {

      this._modelo = novoModelo;
  }
  
  set tempo(novoTempo) {
          this._tempo = novoTempo;
    
  }
  
  
  
  
  
  
  
}
