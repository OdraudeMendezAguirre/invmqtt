class Invernadero{
    venti="Apagado";
    lamp="Apagado";
    roci="Apagado";
    datosLuminosidad= [];
    datosTemperatura = [];
    datosHumedad = [];
    estadoR=false;
    estadoV=false;
    estadoL=false;
//funciones invernadero
  rociador(){
    if(this.estadoR){
      this.roci="Encendido";
    }else{
      this.roci="Apagado";
    }
  }

  lampara(){
    if(this.estadoL){
      this.lamp="Encendido";
    }else{
      this.lamp="Apagado";
    }
  }

  ventilador(){
    if(this.estadoV){
      this.venti="Encendido";
    }else{
      this.venti="Apagado";
    }
  }
}