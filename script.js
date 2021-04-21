var form = document.getElementById('form')
var nome = document.getElementById('nome')
var peso = document.getElementById("peso")
var altura = document.getElementById("altura") 
var imctext = ''

form.addEventListener('submit', function(e) {
    if(Math.round(parseInt(peso.value)     /  (parseFloat(altura.value) * parseFloat(altura.value))) <= 18.5){
        imctext = 'Abaixo do peso'
    }else if(Math.round(parseInt(peso.value)     /  (parseFloat(altura.value) * parseFloat(altura.value))) > 18.5 && Math.round(parseInt(peso.value)     /  (parseFloat(altura.value) * parseFloat(altura.value))) <= 24.9){
        imctext = 'Com peso normal'
    }else if(Math.round(parseInt(peso.value)     /  (parseFloat(altura.value) * parseFloat(altura.value))) >= 25 && Math.round(parseInt(peso.value)     /  (parseFloat(altura.value) * parseFloat(altura.value))) <= 29.9){          
        imctext = 'Acima do peso'
    }else if(Math.round(parseInt(peso.value)     /  (parseFloat(altura.value) * parseFloat(altura.value))) >= 30 && Math.round(parseInt(peso.value)     /  (parseFloat(altura.value) * parseFloat(altura.value))) <=34.9){
        imctext = 'Obesidade grau 1'
    }else if(Math.round(parseInt(peso.value)     /  (parseFloat(altura.value) * parseFloat(altura.value))) >= 35 && Math.round(parseInt(peso.value)     /  (parseFloat(altura.value) * parseFloat(altura.value))) <=39.9){
        imctext = 'Obesidade grau 2'
    }else if(Math.round(parseInt(peso.value)     /  (parseFloat(altura.value) * parseFloat(altura.value))) > 40){
            imctext = 'Obesidade grau 3'
    }else imctext = 'Bosta'
    // alerta o valor do campo
    document.getElementById('msgusu').innerHTML = 'O numero de IMC é: ' + Math.round(parseInt(peso.value)     /  (parseFloat(altura.value) * parseFloat(altura.value))) +' Você está '+ imctext

    // impede o envio do form
    e.preventDefault();
});
