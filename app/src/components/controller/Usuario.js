export class Usuario{
  Usuario(modelo,placa,hora){
    this.modelo = modelo;
    this.placa = placa;
    this.hora = hora;
  }
  getModelo(){
    return this.modelo;
  }
  getPlaca(){
    return this.placa;
  }
  getHora(){
    return this.hora;
  }
  setModelo(modelo){
    this.modelo = modelo;
  }
  setPlaca(placa){
    this.Placa = placa;
  }
  setModelo(hora){
    this.hora = hora;
  }




}