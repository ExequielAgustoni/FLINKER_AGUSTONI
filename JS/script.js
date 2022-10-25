
let listaDeProductos = [
    {
        id: 1,
        nombre: "Xbox X",
        precio: 1200,
        stock: 150
    },
    {
        id: 2,
        nombre: "Play 4",
        precio: 1400,
        stock: 300
    },
    {
        id: 3,
        nombre: "Laptop Asus",
        precio: 1100,
        stock: 150,
    },
    {
        id: 4,
        nombre: "Kit carga",
        precio: 15,
        stock: 2500
    },
    {
        id: 5,
        nombre: "Teclado Gamer Razer",
        precio: 120,
        stock: 487
    },
    {
        id: 6,
        nombre: "Mouse Logitech",
        precio: 80,
        stock: 300
    }   
]

let catalog = document.getElementById('items')
let cartList = document.getElementById('carrito')
let buttonEmpty = document.getElementById('boton-vaciar')
let totalValue = document.getElementById('total')
let cart = []

buttonEmpty.addEventListener('click', emptyButtonHandler)

loadCartFromStorage()
renderCart()


listaDeProductos.forEach((prod) => {
    let container = document.createElement('div')
    container.classList.add('card', 'col-sm-3')
    
    let cardBody = document.createElement("div")
    cardBody.classList.add('card-body')
    
    let cardTitle = document.createElement("h5")
    cardTitle.classList.add('card-title')
    cardTitle.innerText = prod.nombre
    
    let cardPrice = document.createElement("p")
    cardPrice.classList.add('card-text')
    cardPrice.innerText = `$${prod.precio}`
    
    let cardStock = document.createElement("p")
    cardStock.classList.add('card-text')
    cardStock.innerText = `Stock: ${prod.stock}`
    
    let cardButton = document.createElement("button")
    cardButton.classList.add('btn', 'btn-primary')
    cardButton.innerText = `Comprar`
    cardButton.setAttribute('mark', prod.id)
    cardButton.addEventListener('click', addProdToCart)

    cardBody.append(cardTitle)
    cardBody.append(cardPrice)
    cardBody.append(cardStock)
    cardBody.append(cardButton)
    container.append(cardBody)
    catalog.append(container)
})

function addProdToCart(event){
    cart.push(event.target.getAttribute('mark'))
    renderCart()
}

function renderCart(){

    saveCartToStorage()

    cartList.innerHTML = ''

    let cartWithoutRepeatedElements = [...new Set(cart)]

    cartWithoutRepeatedElements.forEach((itemId) => {
        let item = listaDeProductos.filter((producto) => {
            return producto.id === parseInt(itemId)
        })
        let quantity = cart.reduce((total, id) => {
            return id === itemId ? total += 1 : total
        }, 0)
    

    let linea = document.createElement('li')
    linea.classList.add('list-group-item', 'text-right', 'mx-2')
    linea.innerText = `${quantity} x ${item[0].nombre} - $${item[0].precio}`

    let buttonDelete = document.createElement('button')
    buttonDelete.classList.add('btn', 'btn-danger', 'mx-5')
    buttonDelete.innerText = 'X'
    buttonDelete.dataset.item = itemId
    buttonDelete.addEventListener('click', deleteProduct)

    linea.append(buttonDelete)
    cartList.append(linea)
    })

    totalValue.innerText = calculateTotalPrice()
}

function deleteProduct(event){
 let id = event.target.dataset.item
 cart = cart.filter((cartId) => {
    return cartId != id
 })
 renderCart()
 
}

function emptyButtonHandler(){
    cart = []
    cartList.innerHTML = ''
    totalValue.innerText = 0
}

function calculateTotalPrice(){
    return cart.reduce((total, itemId) => {
        let item = listaDeProductos.filter((producto) => {
            return producto.id === parseInt(itemId)
        })

        return total + item[0].precio
    }, 0)
}

function saveCartToStorage(){
    localStorage.setItem('cart', JSON.stringify(cart))
}

function loadCartFromStorage(){
    if(localStorage.getItem('cart') !== null){
        cart = JSON.parse(localStorage.getItem('cart'))
    }
}