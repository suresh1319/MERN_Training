const products = [
    {id:1,name:"product 1",price:25},
    {id:2,name:"product 2",price:50},
    {id:3,name:"product 3",price:30}
]

cart = []

function display_products(){
    products.forEach(p=>console.log(p))
}

function addProduct(products,name,price){
    const newProduct = {
        id:products.length+1,
        name,
        price,

    }
    products.push(newProduct)
}

function filterProducts(filterprice){
    const filteredPro = products.filter(p=>p.price>=filterprice)
    console.log(filteredPro)
}

function deleteFromCart(id){
    p1 = cart.find(p=>p.id===id)
    if(p1.quantity>1){
        p1.quantity--
        return 
    }
    cart = cart.filter(p=>p.id!==id)
}

function addToCart(id){
    let product = products.find(p=>p.id===id)
    let productExists = cart.find(p=>p.id===product.id)
    if(productExists){
        productExists.quantity++
        return 
    }
    product = {...product,quantity:1}
    cart = [...cart,product]
}

function showCart(){
    console.log(cart)
}


addToCart(2)
addToCart(2)
addToCart(2)
addToCart(1)
addToCart(1)
showCart()
addProduct(products,"Product 4",100)
display_products()
deleteFromCart(1)
showCart()