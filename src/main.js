import cartFacrory from './cart/cart';


let init = function (window) {
  if (window) {
    window.cartFacrory = cartFacrory;  
  }
}
init(window);