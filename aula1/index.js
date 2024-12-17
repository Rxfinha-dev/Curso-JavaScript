function calc(n1, n2, operator){
    return eval(`${n1} ${operator} ${n2}`);
}


let resultado = calc(1 ,  4, "+");

console.log(resultado) 


let soma = (x1, x2,) => {
    
return 1 + 2;
}

let result = soma(1 ,  4);

console.log(result) 

window.addEventListener("focus", event => {
    console.log("focus")
})

window.addEventListener("click", event => {
    console.log("click")
})

let agora = new Date();

console.log(agora.toLocaleDateString("pt-BR"));

let carros = ["palio 98", "toro", "uno", 10, true, new Date(), function(){}];

carros.forEach(function(value, index){
    console.log(index, value);
});


let celular = function(){
    this.cor="verde";
}

let objeto = new celular();

console.log(objeto.cor);

class moto{
        constructor(){
            this.cilindrada="125cc"
        }
        acelerar(){
            console.log("acelerando")
            return "25km/h"
        }
    }

    let motos = new moto();
    console.log(motos.acelerar());