import{printCart} from './cart.js'

const myButton = document.getElementById('addToCartButton')

const book = [{
    price: '24.99'
}];


const myAddToButton = () => {
    myButton.addEventListener('click',() => {
        printCart();
})
}

const attachEvents = () => {
    myAddToButton();
}

export{attachEvents, book}


