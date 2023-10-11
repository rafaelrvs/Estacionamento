export class Usuario {
  constructor(placa, modelo, hora) {
    this.placa = placa;
    this.modelo = modelo;
    this.hora = hora;
    this.valueTotal = [placa, modelo, hora];
  }

  getPlaca() {
    return this.placa;
  }

  getModelo() {
    return this.modelo;
  }

  getHora() {
    return this.hora;
  }

  getValueTotal() {
    return this.valueTotal;
  }
  
    
}

