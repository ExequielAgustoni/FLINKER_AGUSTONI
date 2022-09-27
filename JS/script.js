let nombreProductoA = 'Xbox X'
let precioProductoA = 1200
let stockProductoA = 150

let nombreProductoB = 'Play 4'
let precioProductoB = 1400
let stockProductoB = 300

let nombreProductoC = 'Laptop Asus'
let precioProductoC = 1100
let stockProductoC = 150

let precioTotal = 0

function saludo(ingresoPagina, cierreCompra){

    alert(ingresoPagina + "Flinker" + cierreCompra)
}

saludo("Bienvenido a ","")


alert("Estos son nuestros productos: \n - Xbox X\n - Play 4\n - Laptop Asus")


let opcion = alert ("Ingrese que es lo que quiere comprar o escriba ESC para salir")

while(opcion != "ESC"){

    opcion = prompt ("Ingrese que producto quiere comprar: \n - Xbox X\n - Play 4\n - Laptop Asus\n - ESC ")
    
    if(opcion == 'Xbox X'){
        let cantidadProductoXbox = parseInt(prompt("ingrese que cantidad de " + nombreProductoA + " desea comprar:"))
        if(cantidadProductoXbox <= stockProductoA){
            precioTotal = precioTotal + (cantidadProductoXbox * precioProductoA)
        }
        else{
            alert("Actualmente tenemos " + stockProductoA + " unidades de este producto")
        }
    }
    else if(opcion == 'Play 4'){
        let cantidadProductoPlay = parseInt(prompt("ingrese que cantidad de " + nombreProductoB + " desea comprar:"))
        precioTotal = precioTotal + (cantidadProductoPlay * precioProductoB)
    }
    else if(opcion == 'Laptop Asus'){
        let cantidadProductoLaptop = parseInt(prompt("ingrese que cantidad de " + nombreProductoC + " desea comprar:"))
        precioTotal = precioTotal + (cantidadProductoLaptop * precioProductoC)
    }        
}

if(precioTotal != 0){
    alert("El precio total es: " + precioTotal)
     }

saludo("Fin del pedido en "," ,gracias por su compra")