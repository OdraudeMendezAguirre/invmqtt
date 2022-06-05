const fecha =new Date();
const year = fecha.getFullYear();
const mont = fecha.getMonth()+1;
const day = fecha.getDate();
const today = year+'-0'+mont+'-0'+day;
let humedad = [];
let temperatura = [];
let luminosidad = [];
const h = 'https://API-Invernadero.rodrigogarcia39.repl.co/invernadero1/Humedad/'+today;
const t = 'https://API-Invernadero.rodrigogarcia39.repl.co/invernadero1/Temperatura/'+today;
const l = 'https://API-Invernadero.rodrigogarcia39.repl.co/invernadero1/Luminosidad/'+today;
axios.get(h)
    .then((datos) =>{
        humedad=datos;
        for(c=0;c<=5;c++){
            document.getElementById("humedad").innerHTML += '<li>'+datos.data[c].valor+'</li>';
        }
        console.log(datos.data)
    });

axios.get(t)
    .then((datos) =>{
        temperatura=datos;
        for(c=0;c<=5;c++){
            document.getElementById("temperatura").innerHTML += '<li>'+datos.data[c].valor+'</li>';
        }
        console.log(datos.data)
    });

axios.get(l)
    .then((datos) =>{
        luminosidad=datos;
        for(c=0;c<=5;c++){
            document.getElementById("lumino").innerHTML += '<li>'+datos.data[c].valor+'</li>';
        }
        console.log(datos.data)
    });