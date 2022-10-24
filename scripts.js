//La idea del proyecto final, es realizar un Ecommerce de venta de ropa deportiva
//Funciones

// Funcion en la cual el usuario ingresa cantidad de productos y el precio individual, y va a acumulando hasta que ingrese le numero 0
const calcsubtotal = function (){
    let acum = 0;
    let precio;
    
    let cant = parseInt(prompt("Ingresar Cantidad"));
    
        while((cant!==0) && (cant>0)){

            if (cant <= stock) {
                precio =  parseFloat(prompt("Ingresar precio unitario"));
                acum = acum + (cant * precio);
                console.log( "acum " + acum);
            } else {
                console.log("No hay stock")
            }
    
            cant = parseInt(prompt("Ingresar Cantidad"));
        }
    
    return acum;
    
    }

// Funcion para calcular el interes dependiendo de las cantiudad de cuotas en la que se paga el total
const calcularPagoCuotas = (a, b) =>  {
    
    switch (b) {
        case `3`: // 3 cuotas
            return a + (a*0.10) // 10% DE interes
    
        case `6`: // 6 cuotas
            return a + (a*0.20) // 20% DE interes
    
        case `12`: // 12 cuotas
            return a + (a*0.30) // 30% DE interes
            
        default: // en el caso que pague en una sola cuotas o en efectivo
            return a - (a*0.10) // 10% de descuento
        }
    }
//Funcion que valida que se ingrese correctamente las cantiudad de cuotas
const validateCuotas = function (){
    let cuotas = parseInt(prompt("Ingresar cantidad de cuotas"));
        while ((cuotas !== 1) && (cuotas !== 3) && (cuotas !== 6) && (cuotas !== 9) && (cuotas !== 12)){

        cuotas = parseInt(prompt("Recuerde que puede pagar en 1, 3, 6, 9 y 12 cuotas... en cuantas va a abonar?"));

        }
        return cuotas;
}

let stock = 1000;

let subTotal = calcsubtotal();
let cantCuotas = validateCuotas();
let totalPagar = calcularPagoCuotas(subTotal, cantCuotas);
console.log("El total a pagar es de " + totalPagar);






