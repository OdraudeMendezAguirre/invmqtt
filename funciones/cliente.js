import {client} from './opcciones';

class Cliente{

    constructor(nombreInvernadero){
        let nombreInvernadero = nombreInvernadero;
        let lista_valores = [];
        let ultimosValoresTemperatura = [];
        let ultimosValoresHumedad = [];
        let ultimosValoresLuminosidad = [];
    }

    establecerConexion(){
        client.on("connect", () => {
            console.log("CLIENTE CONECTADO A BROKER 👌");
            topic = "SIS/" + nombreInvernadero + "/#";
            client.subscribe(topic, function (err) {            
        });
    })}
    
    recibirMensajes(){
        client.on('message', function (topic, message) {
            let datos = message.toJSON;           
            console.log(message.toString());           
        });
    };

    setTemperatura(temperatura){
        this.lista_valores[0] = temperatura;
    }

    setHumedad(humedad){
        this.lista_valores[1] = humedad;
    }

    setLuminosidad(luminosidad){
        this.lista_valores[2] = luminosidad;
    }

    controlarUltimosValores(valor, lista){
        if (lista.length > 4){
            lista.shift();
            lista.push(valor);
        }
        else{
            lista.push(valor);
        }
    }

    addUltimoValorTemperatura(valor){
        this.controlarUltimosValores(valor, ultimosValoresTemperatura)
    }

    addUltimoValorHumedad(valor){
        this.controlarUltimosValores(valor, ultimosValoresHumedad)
    }

    addUltimoValorLuminosidad(valor){
        this.controlarUltimosValores(valor, ultimosValoresLuminosidad)
    }
}