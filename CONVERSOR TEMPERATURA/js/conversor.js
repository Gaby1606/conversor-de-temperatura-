function converterTemperatura(event){
    event.preventDefault();
    var valorTemperatura = document.getElementById("temperatura").value;
    var valorOrigem = document.getElementById("origem").value;
    var valorDestino = document.getElementById("destino").value;
    var valorResultado = valorTemperatura;

    var Fahrenheit = 32;


    if(valorOrigem == 'fahrenheit' && valorDestino == 'celsius'){
        valorResultado = (valorTemperatura - 32)/1.8
        document.getElementById("resultado").value=valorResultado;
        console.log(valorResultado)
    }
    if(valorOrigem == 'celsius' && valorDestino == 'fahrenheit'){
        valorResultado = (valorTemperatura * 1.8) + 32
        document.getElementById("resultado").value=valorResultado;
        console.log(valorResultado)
    }
    if(valorOrigem == 'celsius' && valorDestino == 'kelvin'){
        valorResultado = valorTemperatura + 273.5;
        document.getElementById("resultado").value=valorResultado;
        console.log(valorResultado)
    }
    if(valorOrigem == 'kelvin' && valorDestino == 'celsius'){
        valorResultado == valorTemperatura - 273.15;
        document.getElementById("resultado").value=valorResultado;
        console.log(valorResultado)
    }
    if(valorOrigem == 'kevin' && valorDestino == 'fahrenheit'){
        valorResultado = (valorTemperatura - 273.15)*9/5+32;
        document.getElementById("resultado").value=valorResultado;
        console.log(valorResultado)
    }
    if(valorOrigem == 'fahrenheit' && valorDestino == 'kelvin'){
        valorResultado = (valorTemperatura - 32)*5/9+273.15;
        document.getElementById("resultado").value=valorResultado;
        console.log(valorResultado)
    }
    if(valorOrigem == 'celsius' && valorDestino == 'rankine'){
        valorResultado = (valorTemperatura + 273.15)*9/5;
        document.getElementById("resultado").value=valorResultado;
        console.log(valorResultado)
    }
    if(valorOrigem == 'rankine' && valorDestino == 'celsius'){
        valorResultado = (valorTemperatura)*5/9-273.15;
        document.getElementById("resultado").value=valorResultado;
        console.log(valorResultado)
    }
    if(valorOrigem == 'rankine' && valorDestino == 'kelvin'){
        valorResultado = valorTemperatura / 1.8;
        document.getElementById("resultado").value=valorResultado;
        console.log(valorResultado)
    }
    if(valorOrigem == 'kelvin' && valorDestino == 'rankine'){
        valorResultado = valorTemperatura * 1.8;
        document.getElementById("resultado").value=valorResultado;
        console.log(valorResultado)
    }
    if(valorOrigem == 'rankine' && valorDestino == 'fahrenheit'){
        valorResultado = valorTemperatura + 459.67;
        document.getElementById("resultado").value=valorResultado;
        console.log(valorResultado)
    }
    if(valorOrigem == 'fahrenheit' && valorDestino == 'rankine'){
        valorResultado = valorTemperatura - 459.67;
        document.getElementById("resultado").value=valorResultado;
        console.log(valorResultado)
    }



}