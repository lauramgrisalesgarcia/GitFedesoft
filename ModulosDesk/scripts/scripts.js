var a = 12;
var $a;
var _a;

a = "Hola Mundo";


//console.log(elemento);
var contenedor = document.getElementsByClassName('contenedor');
var arrayText = ["elem 1","mesa 2", "mesa 3", "tabla 4", "hola 5"];

for (var i = 0; i<arrayText.length;i++){
    var elemento = document.createElement('h2'); //Elemento de HTML
    elemento.innerHTML = arrayText[i];
    if (arrayText[i] != "elem 1"){
        contenedor[0].appendChild(elemento);
    }        
}


arrayText.forEach(function(interno){
    var elemento = document.createElement('h2');
    elemento.innerHTML = interno;
    if (interno.includes('mesa')){
        contenedor[0].appendChild(elemento);
    }    
});

for (index in arrayText){
    var elemento = document.createElement('h2');
    elemento.innerHTML = arrayText[index];
    contenedor[0].appendChild(elemento);
}

var miFuncion = function(arg1,arg2, arg3){
    var respuesta = 0;
    respuesta = arg1 + arg2 + arg3;
    return console.log(respuesta);
};

miFuncion(1,3,2);

var Callback = function (numero, llamado){
    var respuesta = numero * 1000;
    llamado(respuesta);
};

Callback (123456, function(respuestaInt){
    console.log(respuestaInt);
});

