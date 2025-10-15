// global imports
import '../toggleSidebar.js';
import '../cart/toggleCart.js';
import '../cart/setupCart.js';
import { addToCart } from '../cart/setupCart.js';
import { getElement,singleProductUrl,formatPrice } from '../utils.js';

// selections
const loading = getElement('.page-loading');
const centerDOM = getElement('.single-product-center');
const pageTitleDOM = getElement('.page-hero-title');
const imgDOM = getElement('.single-product-img');
const titleDOM = getElement('.single-product-title');
const companyDOM = getElement('.single-product-company');
const colorDOM = getElement('.single-product-colors');
const priceDOM = getElement('.single-product-price');
const descDOM = getElement('.single-product-desc');
const cartBtn = getElement('.addToCartBtn');

let productID;

window.addEventListener('DOMContentLoaded', async function() {
    const urlID = this.window.location.search;

    try{
        const respone = await fetch(`${singleProductUrl}${urlID}`);
        if(respone.status >= 200 && respone.status <= 299){
            const product = await respone.json();
            const { id, fields} = product;
            productID = id;
            const {name,price,company,colors,description} = fields;
            const image = fields.image[0].thumbnails.large.url;
            document.title = `${name.toUpperCase()} | Comfy`;
            pageTitleDOM.textContent = `Home / ${name}`;
            imgDOM.src = image;
            priceDOM.textContent = formatPrice(price);
            titleDOM.textContent = name;
            companyDOM.textContent = `by ${company}`;
            descDOM.textContent = description;
            colors.forEach((color) => {
                const span = this.document.createElement('span');
                span.classList.add('product-color');
                span.style.backgroundColor = `${color}`;
                colorDOM.appendChild(span);
            });
        }else{
            console.log(respone.status, respone.statusText);
            centerDOM.innerHTML = `
                <div>
                    <h3>sorry, it is wrong</h3>
                    <a href="index.html" class="btn">back home</a>
                </div>
            `;
        }
    }catch(error){
        console.log(error);
    }
    loading.style.display = 'none';
})

cartBtn.addEventListener('click', function() {
    addToCart(productID);
})