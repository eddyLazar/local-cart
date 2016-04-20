import $ from 'jquery';
import stampit from 'stampit';
import products from './store_data';

// riot mixins
import cartMixin from './mixins/cart_mixin';
import callbackMixin from './mixins/callbak_mixin';

// riot tags
require('./tags/cart/cart.tag');
require('./tags/catalog/catalog-list.tag');
require('./tags/wishlist/wishlist.tag');


// instantiate cart
const cart = window.cartFacrory({
  name: 'bionicle_cart'
});

// instantiate wishlist
const wishlist = window.cartFacrory({
  name: 'bionicle_wishlist'
});

function showSnackBar(message) {
  var notification = document.querySelector('.mdl-js-snackbar');
  var data = {
    message: message,
    timeout: 800
  };
  notification.MaterialSnackbar.showSnackbar(data);
};

// register mixins
riot.mixin('cartMixin', cartMixin);
riot.mixin(callbackMixin)

// mount tags
riot.mount('cart', {
  'cart': cart,
});

riot.mount('wishlist', {'cart': wishlist});

riot.mount('catalog-list', {
  'cart': cart,
  'wishlist': wishlist,
  'products': products,
  'callback': function (tag) {
    
    cart.on('change',function () {
      tag.update();
    });
    
    wishlist.on('change',function () {
      tag.update();
    });
    
    tag.on('item:add',function (product) {
      cart.addItem({
        id: product.id,
        unit_price: product.unit_price,
        data: product
      });
      showSnackBar('item added to cart');
    });
    
    tag.on('item:wishlist',function (product) {
      wishlist.addItem({
        id: product.id,
        unit_price: product.unit_price,
        data: product
      });
      showSnackBar('item added to wishlist');
    });
  }
});