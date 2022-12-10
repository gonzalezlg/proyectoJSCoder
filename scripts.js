//La idea del proyecto final, es realizar un Ecommerce de venta de ropa deportiva

// ******** BASE DE DATOS ********
//Clase
class Producto {
    constructor (id, nombre, precio, stock, img){
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.stock= stock;
        this.img = img;
    }
}

const producto1 = new Producto (101, "Short At. Tucuman", 1500, 75, "style/img/h0.png");
const producto2 = new Producto (102, "Zapatillas Ascis", 12000, 50, "style/img/H1.png");
const producto3 = new Producto (103, "Remera Nike negra", 6000, 15, "style/img/H2.png");
const producto4 = new Producto (104, "Zapatillas Nike", 15000, 24, "style/img/H3.png");
const producto5 = new Producto (105, "Short Nike", 800, 103, "style/img/H4.png");
const producto6 = new Producto (106, "Camiseta Barcelona", 1200, 24, "style/img/H5.png");
const producto7 = new Producto (107, "Zapatillas Nike", 23000, 12, "style/img/H6.png");
const producto8 = new Producto (108, "Remera Puma", 8030, 18, "style/img/H7.png");
const producto9 = new Producto (109, "Medias Puma", 15000, 24, "style/img/H8.png");
const producto10 = new Producto (110, "Botella Nike", 1500, 34, "style/img/H9.png");

const BBDD = [producto1, producto2, producto3, producto4, producto5, producto6, producto7, producto8, producto9, producto10];
//console.log(BBDD);

BBDD.forEach(el => {
    console.log(`ID: ${el.id} - Stock: ${el.nombre} - Stock: ${el.stock}`); // Recorre la base de datos, mostrando el ID del producto, nombre y su stock
});

//  ******** FUNCIONES ********

// Funcion en la cual el usuario ingresa cantidad de productos y el precio individual, y va a acumulando hasta que ingrese le numero 0
/* const calcsubtotal = function (){

    let acum = 0;
    let precio;
    let cant = parseInt(prompt("Ingresar Cantidad"));
    let salida= true
    let decision;

        while(salida === true){

            if(cantidad=0 && cant > stock){
                alert('ingrese una cantidad valida')
            }else{
                precio =  parseFloat(prompt("Ingresar precio unitario"));
                acum = acum + (cant * precio);
                console.log( "acum " + acum);
                decision = parseInt(prompt('Desea seguir comprando 1.si 2.no'))
                if(decision === 2){
                    salida= false
                }else{
                    cant = parseInt(prompt("Ingresar Cantidad"));
                }
            } 
            }
    return acum;
} */

// Funcion para calcular el interes dependiendo de las cantiudad de cuotas en la que se paga el total
/* const calcularPagoCuotas = (a, b) =>  {
    
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
    } */
//Funcion que valida que se ingrese correctamente las cantiudad de cuotas
/* const validateCuotas = function (){
    let cuotas = parseInt(prompt("Ingresar cantidad de cuotas"));
        while ((cuotas !== 1) && (cuotas !== 3) && (cuotas !== 6) && (cuotas !== 9) && (cuotas !== 12)){

        cuotas = parseInt(prompt("Recuerde que puede pagar en 1, 3, 6, 9 y 12 cuotas... en cuantas va a abonar?"));

        }
        return cuotas;
} */


//LLAMADO A FUNCIONES
/* let stock = 1000;
let subTotal = calcsubtotal();
let cantCuotas = validateCuotas();
let totalPagar = calcularPagoCuotas(subTotal, cantCuotas);
console.log("El total a pagar es de " + totalPagar); */


// Ordenar la base de datos por los precios de menor a mayor
//let precioMenoraMayor = BBDD.sort((a, b) => a.precio - b.precio);
//console.log(precioMenoraMayor);

// Ordenar la base de datos por los precios de mayor a menor
//let precioMayoraMenor = BBDD.sort((a, b) => b.precio - a.precio);

//console.log(precioMayoraMenor);


//Funcion donde el usario ingresa el ID del producto, se valida que sea el correcto y se informa si hay stock

/* let consultaStock = () => {
    let prodId = parseInt(prompt("Ingresar codigo del producto (Entre 101 y 110"));
    while((prodId < 101) || (prodId > 110) ){
        prodId = parseInt(prompt("Por favor, ingresar codigo del producto (Entre 101 y 110"));
    }

    let buscado = BBDD.find(producto => producto.id === prodId);
    if(buscado.stock > 0){
        return "Hay stock";
    } else {
        return "No hay stock";
    }
} */

//Funcion para agregar productos al carrito de compra, para finalizar el usuario debe ingresar fin, para agregar se debe ingresar el ID del producto
/* let carrito = [];
let agregarProductos = () => {

    let continua = "si";
    while (continua !== "fin") {
        
        let prodId = parseInt(prompt("Ingresar codigo del producto (Entre 101 y 110"));
        while((prodId < 101) || (prodId > 110) ){
            prodId = parseInt(prompt("Por favor, ingresar codigo del producto (Entre 101 y 110"));
        }

        let buscado = BBDD.find(producto => producto.id === prodId);
        if(buscado.stock > 0){
            carrito.push(buscado);
            //Se descuenta stock
            BBDD.forEach(el => {
                if(el.id === buscado.id){
                    el.stock --;
                }
            });

        } else {
            alert("No hay stock del producto seleccionado");
        }

        continua = prompt("Continua agregando productos al carrito").toLowerCase();
    }

    //Se calcula precio de los productos del carrito
    precioCarrito = carrito.reduce((acumulador, el) => acumulador + el.precio, 0);
    console.log(precioCarrito);
    return precioCarrito;
} */


/* ******************************

     MANIPULACION DEL DOM

********************************* */


/* SE CARGAN TODAS LAS CARDS DE LOS PRODUCTOS */
let cards = document.getElementById("cards");

let carrito = [];

BBDD.forEach((product) => {
    
    let content = document.createElement("div")
    content.className="tarjeta rounded-4"
    content.innerHTML = `
          <div class="img">
            <img src=${product.img} alt="img1">
          </div>
          <h4>${product.nombre}</h4>
          <p>${product.precio}</p>
    `;

    cards.append(content);

    /* Se agrega el boton de agregar al carrito a cada card, con su clase, generada en el archivo de style.css */
    let botonAdd = document.createElement("button");
    botonAdd.innerText = "Agregar";
    botonAdd.classList = "btn-add";
    content.append(botonAdd);

    botonAdd.addEventListener("click", () => { // Funcion que se le asgina a los botones para que agregue al carrito los elementos seleccionados
        carrito.push(
            {
                img: product.img,
                id: product.id,
                nombre: product.nombre,
                precio: product.precio
            }
        )

        console.log(carrito);


        
        setTimeout(()=>{
        Swal.fire({
            title: 'Gracias!',
            text: 'Se agrego el producto seleccionado',    // Se agrega popup con la libreria sweet cada vez que se desea agregar un producto al carrito
            icon: 'success',
            confirmButtonText: 'ok',
            timer: 3000
          })

        },1000)

    })


    
});

 /* Se genera la visualizacion del carrito cuando presiona en el navbar la opcion " Ver Carrito" */

// Se crea boton de ver carrito
let btnVerCarrito = document.getElementById("verCarrito");
let contentCarrito = document.getElementById("carrito");


btnVerCarrito.addEventListener ("click", () => {
    let valorTotal = 0;
    contentCarrito.innerText = "";
    contentCarrito.classList = "bg-light";
    
    const modelHeader = document.createElement("div");
    modelHeader.classList = "tituloCarrito";
    modelHeader.innerHTML = `
        <h1> Resumen de su compra </h1>
    `;

    contentCarrito.append(modelHeader);

    carrito.forEach(( product) => {
        
        let carritoContent = document.createElement("div");
        carritoContent.className="tarjeta rounded-4"
        carritoContent.innerHTML = `
        <div class="img">
            <img src=${product.img} alt="img1">
          </div>
        <h4> ${product.nombre} </h4>
        <p> $ ${product.precio} </p>
    `
    valorTotal = valorTotal + product.precio;
    ;

    contentCarrito.append(carritoContent);

    });
    console.log(valorTotal);

    const modelFooter = document.createElement("div");
    modelFooter.classList = "tituloCarrito";
    modelFooter.innerHTML = `
        <h1 class= "mt-5"> Total a pagar: $ ${valorTotal}</h1>
    `;

    contentCarrito.append(modelFooter);



    //Una vez que se presiona el boton de ver carrito se almacena dicho array en el Local Storage
  
    const guardarLocal = (clave, valor) => {
        localStorage.setItem(clave, valor)
     }
    
    
     for(const producto of carrito) {
        
        guardarLocal(producto.id, JSON.stringify(producto))
    
        const productosJson = JSON.parse(localStorage.getItem("Prod"))

    
    }
    
    const productosJson = JSON.parse(localStorage.getItem("Prod"));
    console.log(productosJson.id);
    
     for(const producto of productos) {
         guardarLocal("productos" ,JSON.stringify(productos));
     }
     
     guardarLocal("Listado Productos", JSON.stringify());

})


//Promesas, utilziando un archivo de formato JSon con las sucursales que se imprimen en pantalla cuando se presiona el boton "Sucursales"

let divSucursales = document.getElementById("sucursales");
let btnSucursales = document.getElementById("btnSucursales");


btnSucursales.addEventListener ("click", () => {
    
    divSucursales.innerText = "";
    divSucursales.classList = "bg-success p-2 text-dark bg-opacity-25";


    const modelHeaderSuc = document.createElement("div");
    modelHeaderSuc.classList = "tituloCarrito";
    modelHeaderSuc.innerHTML = `
        <h1 class="mb-5"> Sucursales</h1>
    `;
    divSucursales.append(modelHeaderSuc);

    fetch("sucursales.json")
    .then( (res)=> res.json() )
    .then(( data )=>{
        data.forEach( sucursal => {
            let suc = document.createElement("div");

            suc.innerHTML = `
                <p class="fw-bold text-center">  ${sucursal.barrio} </p>
                <p class="text-center">  ${sucursal.direccion} </p>
                <p class="text-center">  ${sucursal.telefono} </p>
            `
            divSucursales.append(suc)
        });
    })

    });













