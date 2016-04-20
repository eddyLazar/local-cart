import cartFactory from './cart/cart';


let init = function (window) {
  if (window) {
    window.cartFactory = cartFactory;  
  }
}
init(window);