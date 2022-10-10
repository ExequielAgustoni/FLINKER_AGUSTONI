
function Producto(nombre,precio,stock){
    this.nombre = nombre;
    this.precio = precio;
    this.stock = stock;
}

let productoA = new Producto("Xbox X", 1200, 150)
let productoB = new Producto("Play 4", 1400, 300)
let productoC = new Producto("Laptop Asus", 1100, 150)

let precioTotal = 0

let listaProductos = [productoA, productoB, productoC]

let nombresAlerta = []

for(const nombres of listaProductos){
    nombresAlerta.push(nombres.nombre)
}

function saludo(ingresoPagina, cierreCompra){

    alert(ingresoPagina + "Flinker" + cierreCompra)
}

let precioMenor = listaProductos.filter ((precioProductos) => precioProductos.precio <1300)

console.log (precioMenor)

saludo("Bienvenido a ","")


alert("Estos son nuestros productos: \n - " + nombresAlerta.join("\n - "))


let opcion = alert ("Ingrese que es lo que quiere comprar o escriba ESC para salir")

while(opcion != "ESC"){

    opcion = prompt ("Ingrese que producto quiere comprar: \n - Xbox X\n - Play 4\n - Laptop Asus\n - ESC ")
    
    if(opcion.toUpperCase() == 'XBOX X'){
        let cantidadProductoXbox = parseInt(prompt("ingrese que cantidad de " + productoA.nombre + " desea comprar:"))
        if(cantidadProductoXbox <= productoA.stock){
            precioTotal = precioTotal + (cantidadProductoXbox * productoA.precio)
        }
        else{
            alert("Actualmente tenemos " + productoA.stock + " unidades de este producto")
        }
    }
    else if(opcion.toUpperCase() == 'PLAY 4'){
        let cantidadProductoPlay = parseInt(prompt("ingrese que cantidad de " + productoB.nombre + " desea comprar:"))
        if(cantidadProductoPlay <= productoB.stock){
        precioTotal = precioTotal + (cantidadProductoPlay * productoB.precio)
        }
        else{
            alert("Actualmente tenemos " + productoB.stock + " unidades de este producto")
        }
    } 
      
    else if(opcion.toUpperCase() == 'LAPTOP ASUS'){
        let cantidadProductoLaptop = parseInt(prompt("ingrese que cantidad de " + productoC.nombre + " desea comprar:"))
        if(cantidadProductoLaptop <= productoC.stock){
        precioTotal = precioTotal + (cantidadProductoLaptop * productoC.precio)
        }
        else{
            alert("Actualmente tenemos " + productoC.stock + " unidades de este producto")
        }
    }        
}

if(precioTotal != 0){
    alert("El precio total es: " + precioTotal)
     }

saludo("Fin del pedido en "," ,gracias por su compra")