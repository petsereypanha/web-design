const client = contentful.createClient({
    // This is the space ID. A space is like a project folder in Contentful terms
    space: '4ubts16ifg85',
    // This is the access token for this space. Normally you get both ID and the token in the Contentful web app
    accessToken: 'ry7AklunnOxAItHmE38WFpqani3OgYJB04D4mrfh94I',
  })
console.log(client)

const cartBtn = document.querySelector('.cart-btn');
const closeCartBtn = document.querySelector('.close-cart');
const clearCartBtn = document.querySelector('.clear-cart');
const cartDom = document.querySelector('.cart');
const cartOverlay = document.querySelector('.cart-overlay');
const cartItem = document.querySelector('.cart-items');
const cartTotal = document.querySelector('.cart-total');
const cartContent = document.querySelector('.cart-content');
const productDOM = document.querySelector('.products-center');
// Carts
let cart = [];
// Buttons
let buttonsDom = [];
// Getting The Product
class Product {
    async getProduct(){
        try {

            // let contentful = await client.getEntries({
            //     content_type: 'house'

            // });

            // console.log(contentful)
            // let content =  await client.getEntries({
            //     content_type: 'sell'
            // })
            // console.log(content)

            let content = await client.getEntries({
                content_type: 'controll'
            })
            console.log(content)

            let result = await fetch("products.json");
            let data = await result.json();
            let products = content.items;
            products = products.map((items) => {
                const {id} = items.sys;
                const {title,price} = items.fields;
                const image = items.fields.image[0].fields.file.url;
                return {id, title, price, image};
            })
            return products;
        } catch(error){
            console.log(error);
        }
    }
}
class UI {
    displayProduct(products){
        let result = "";
        products.forEach(product => {
            result += `<article class="product">
                            <div class="img-container">
                                <img src=${product.image} class="product-img">
                                <button class="bag-btn" data-id=${product.id}>
                                    <i class="fas fa-shopping-cart"></i>
                                    Add To Bag
                                </button>
                            </div>
                            <h3>${product.title}</h3>
                            <h4>$${product.price}</h4>
                        </article>
                    `;
        });
        productDOM.innerHTML = result;
    }
    getButtonCart(){
        const buttons = [...document.querySelectorAll(".bag-btn")];
        buttonsDom = buttons;
        // console.log(buttons);
        buttons.forEach(button => {
            let id = button.dataset.id;
            let inCart = cart.find(item=> item.id = id);
            if(inCart){
                buttons.innerText = "In Cart";
                buttons.disable = true;
            }
            button.addEventListener("click", event => {
                event.target.innerText = "In Cart";
                event.target.disable = true;
                let cartItem = {...Storage.getProduct(id),amount:1};
                // console.log(cartItem);
                cart = [...cart,cartItem];
                console.log(cart)
                Storage.saveCart(cart);
                this.setCartValue(cart);
                this.addCartItem(cartItem);
                this.showCart();
            })
        })
    }
    setCartValue(cart){
        let temTotal = 0;
        let itemTotal = 0;
        cart.map(item => {
            temTotal += item.price * item.amount;
            itemTotal += item.amount;
        })
        cartTotal.innerText = parseFloat(temTotal.toFixed(2))
        cartItem.innerText = itemTotal;
    }
    addCartItem(item){
        const div = document.createElement('div');
        div.classList.add('cart-item');
        div.innerHTML = `
                <img src=${item.image} alt="product">
                <div>
                    <h4>${item.title}</h4>
                    <h5>$${item.price}</h5>
                    <span class="remove" data-id=${item.id}>remove</span>
                </div>
                <div>
                    <i class="fas fa-chevron-up" data-id=${item.id}></i>
                    <p class="item-amount">${item.amount}</p>
                    <i class="fas fa-chevron-down" data-id=${item.id}></i>
                </div>
        `;
        cartContent.appendChild(div);
    }
    showCart(){
        cartOverlay.classList.add("transparentBcg");
        cartDom.classList.add("showCart");
    }
    hideCart(){
        cartOverlay.classList.remove("transparentBcg");
        cartDom.classList.remove("showCart");
    }
    setUpCart(){
        cart = Storage.getCart();
        this.setCartValue(cart);
        this.populateCart(cart);
        cartBtn.addEventListener("click", this.showCart);
        closeCartBtn.addEventListener("click", this.hideCart);
    }
    populateCart(){
        cart.forEach(item => this.addCartItem(item));
    }
    cartLogin(){
        clearCartBtn.addEventListener("click", () => {
            this.clearCart();
        })
        cartContent.addEventListener("click", (event) => {
            if(event.target.classList.contains("remove")){
                let removeItem = event.target;
                cartContent.removeChild(removeItem.parentElement.parentElement);
                let id = removeItem.dataset.id;
                this.removeItem(id);
            }
            else if (event.target.classList.contains("fa-chevron-up")){
                let addAmout = event.target;
                let id = addAmout.dataset.id;
                // console.log(id)
                let tempItem = cart.find(item => item.id === id);
                tempItem.amount = tempItem.amount + 1;
                Storage.saveCart(cart);
                this.setCartValue(cart);
                addAmout.nextElementSibling.innerText = tempItem.amount;
            }
            else if(event.target.classList.contains("fa-chevron-down")){
                let lowerAmout = event.target;
                let id = lowerAmout.dataset.id;
                // console.log(id);
                let tempItem = cart.find( item => item.id === id);
                tempItem.amount = tempItem.amount - 1;
                // console.log(tempItem)
                if(tempItem.amount > 0){
                    Storage.saveCart(cart);
                    this.setCartValue(cart);
                    lowerAmout.previousElementSibling.innerText = tempItem.amount;
                }else{
                    cartContent.removeChild(lowerAmout.parentElement.parentElement)
                    this.removeItem(id);
                }
            }
        })
    }
    clearCart(){
        let cartItems = cart.map(item => item.id);
        cartItems.forEach(id => this.removeItem(id));
        console.log(cartContent.children)
        while(cartContent.children.length > 0){
            cartContent.removeChild(cartContent.children[0])
        }
        this.hideCart();
    }
    removeItem(id){
        cart = cart.filter(item => item.id !== id);
        this.setCartValue(cart);
        Storage.saveCart(cart);
        let button = this.getSingleButton(id);
        button.disable = false;
        button.innerHTML = ` <i class="fas fa-shopping-cart"></i> add to cart`;
    }
    getSingleButton(id){
        return buttonsDom.find(button => button.dataset.id === id)
    }
}
class Storage {
    static saveProduct(products){
        localStorage.setItem('product', JSON.stringify(products));
    }
    static getProduct(id){
        let products = JSON.parse(localStorage.getItem('product'));
        return products.find(product => product.id === id);
    }
    static saveCart(){
        localStorage.setItem('cart',JSON.stringify(cart));
    }
    static getCart(){
        return localStorage.getItem('cart')? JSON.parse(localStorage.getItem('cart')) : [];
    }
}
document.addEventListener('DOMContentLoaded',() => {
    const product = new Product();
    const ui = new UI();
    ui.setUpCart();
    product.getProduct().then((products) =>{
        // console.log(products);
        ui.displayProduct(products);
        Storage.saveProduct(products);
    }).then(() => {
        ui.getButtonCart()
        ui.cartLogin();
    })

})