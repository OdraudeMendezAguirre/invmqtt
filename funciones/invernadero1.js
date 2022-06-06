//Variables de DOM
const labelTemperatura = document.getElementById("label-temperatura");
const labelHumedad = document.getElementById("label-humedad");
const labelLuminosidad = document.getElementById("label-luminosidad");

//Control de actores
const btnVentilador = document.getElementById("btn-ventilador");
const btnLampara = document.getElementById("btn-lampara");
const btnRociador = document.getElementById("btn-rociador");
const estadoVentilador = document.getElementById("estado-ventilador");
const estadoLampara = document.getElementById("estado-lampara");
const estadoRociador = document.getElementById("estado-rociador");

//Opciones para conexion del publicador
const options = {
    connectTimeout: 4000,
    clientId: 1234,
    keepalive: 60,
    clean: true,
};
  
//Constante para url API ubidots CAMBIE LOS DATOS POR SU TOKEN PERSONAL
const brokerURL = "ws://34.125.103.25:8083/mqtt";

//Eventos WS de MQTT
const client = mqtt.connect(brokerURL, options);

client.on("connect", () => {
  console.log("CLIENTE CONECTADO A BROKER 👌");

  client.subscribe("SIS/Inv1/#", function (err) {
    if (!err) {
      console.log("SUBSCRIBE - SUCCESS");
    } else {
      console.log("SUBSCRIBE - ERROR");
    }
  });
});

client.on("message", function (toipc, message) {
  console.log("The message is " + message);
  message_json = JSON.parse(message);
  let dato = message_json['dato'];
  let valor = message_json['valor'];

  if(dato === 'Temperatura'){
    labelTemperatura.innerHTML = valor;
  }else if(dato === 'Luminosidad'){
    labelLuminosidad.innerHTML = valor;
  }else if(dato === 'Humedad'){
    labelHumedad.innerHTML = valor;
  };
});

//funciones invernadero
let payload = {
    'actor': "",
    'orden': 0
}

btnLampara.onclick = () => {
    payload['actor'] = "lampara";
    if(btnLampara.checked){
        payload['orden'] = 1;
        client.publish("SIS/Act", JSON.stringify(payload),{
            qos: 0,
            retain: false
        });
        estadoLampara.innerHTML = "Prendido";
    }else{
        payload['orden'] = 0;
        client.publish("SIS/Act", JSON.stringify(payload),{
            qos: 0,
            retain: false
        });
        estadoLampara.innerHTML = "Apagado";   
    }
  }
  
  btnRociador.onclick = () => {
    payload['actor'] = "rociador";
    if(btnRociador.checked){
        payload['orden'] = 1;
        client.publish("SIS/Act", JSON.stringify(payload),{
            qos: 0,
            retain: false
        });
        estadoRociador.innerHTML = "Prendido";
    }else{
        payload['orden'] = 0;
        client.publish("SIS/Act", JSON.stringify(payload),{
            qos: 0,
            retain: false
        });
        estadoRociador.innerHTML = "Apagado";
    }
  }
  
  btnVentilador.onclick = () => {
      payload['actor'] = "ventilador";
      if(btnVentilador.checked){
        payload['orden'] = 1;  
        client.publish("SIS/Act", JSON.stringify(payload),{
            qos: 0,
            retain: false
        });
        estadoVentilador.innerHTML = "Prendido";
      }else{
        payload['orden'] = 0;
        client.publish("SIS/Act", JSON.stringify(payload),{
            qos: 0,
            retain: false
        });
        estadoVentilador.innerHTML = "Apagado";
     }
  }