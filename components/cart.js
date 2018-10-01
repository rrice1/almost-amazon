import {printToDom} from '../helpers/util.js';
import{getPrice} from './store.js'

// let myObject = GetObject('./store.js')

const printCart = () => {
    let newString = '';

newString+= `<div class="col-1 offset-md-9">`;
newString+= `<div class="col offset-md-9 imgContainer">`
newString+= `<img class="col" src="https://m.media-amazon.com/images/M/MV5BMjIyZGU4YzUtNDkzYi00ZDRhLTljYzctYTMxMDQ4M2E0Y2YxXkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_.jpg" alt="">`;
newString+= `<p class="price d-flex justify-content-center" id="price">$${getPrice()}</p>`;
newString+= `</div>`
newString+= `<img class="cart" src="https://cdn.pixabay.com/photo/2014/04/02/10/53/shopping-cart-304843__340.png"></img>`;
newString+= `</div>`;
    printToDom(newString,'myDiv');
}


export{printCart}

