export class Usuario{

  Usuario(modelo, placa){
    this.modelo = modelo;
    this.placa = placa;
  }
  getModelo(){
    return this.modelo
  }
  setModelo(modelo){
     this.modelo = modelo;
  }
  getPlaca(){
    return this.placa;
  }
  setPlaca(placa){
    this.placa = placa;
  }
}
