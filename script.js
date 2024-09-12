
function calcIMC(){
    const altura = document.querySelector("#altura").value
    const peso = document.querySelector("#peso").value
    const resultado = document.querySelector("#resultado")
   

    let imc = (peso / (altura * altura)).toFixed(2)
    
    let classification = ''

    if(imc < 18.5){
      classification = "Cuidado você está abaixo do peso"
    }else if(imc >= 18.5 && imc <= 25){
        classification = "Você está no peso adequado"
    }else if(imc > 25 && imc <= 30){
        classification = "Cuidado você está com sobrepeso!"
    }else if(imc < 35){
        classification = "Obesidade grau I"
    }else if(imc < 41){
        classification = "Obesidade grau II"
    }else{
        classification = "Obesidade grau III"
    }

    resultado.innerHTML = `IMC: ${imc} (${classification}) `
    
        
}