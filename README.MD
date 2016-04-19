# Local cart

* **v0.0.1, unstable,**
Simple api to store data for shopping carts, wishlists in browser localstorage 

## Features
* Local storage with [basil.js](https://github.com/Wisembly/basil.js?files=1)
* Cart object is mixed with node native [event emmiter](https://github.com/Gozala/events)

## Install
```shell
npm install stampit
```

## Instantiate
```shell
require('local-cart'); //add cart factory to window object
const myCart = window.cartFactory({
  name: 'myAwesomeShopCart'
})
```

##### options
* `name` name is used to store data in local storage, to restore cart with previuosly saved data 

## Methods

### addItem(opts)
##### params
* `id` - item identificator in cart
* `count` - number of items in cart, if not specified is `1` 
* `unit_price` - price of 1 item in cart
* `data` - this is place to store your product model data, api doesn't use it, 
```shell
var myProductModel = {
    id: 1,
    price:1000,
    title: 'Interesting Book',
    author: 'Jogn Doe'
}

var newCartItemOptions = {
    id: myProductModel.id,
    unit_price: myProductModel.price,
    data: myProductModel
}

myCart.addItem(newCartItemOptions);
```
Adding product with `id` that already exists in cart only updates `count` of an item 
```shell
myCart.addItem(newCartItemOptions);
console.log(myCart.items); // [Object]
console.log(myCart.getTotalCount); // 1

// add same item again
myCart.addItem(newCartItemOptions);
console.log(myCart.items); // [Object]
console.log(myCart.getTotalCount); // 2

// let's change count property
newCartItemOptions.count = 8;
myCart.addItem(newCartItemOptions);
console.log(myCart.items); // [Object]
console.log(myCart.getTotalCount); // 10
```
### getItem(id)
Returns item with given `id`
### updateItemCount(id, count)
Update `count` of existing item in cart

### deleteItem(id)
Delete item from cart

### getTotalPrice()
Total price of all items.

### getTotalCount()
Total count of all items.

## Events
Cart object is also an event emmiter. By now it `emits` only one event. See node event emmiter [api](https://nodejs.org/api/events.html#events_events)
* `change` - fires when anything in cart is changed, after `addItem`, `deleteItem`, `updateItemCount` methods

```shell
myCart.on('change', functon () {
    console.log('items changed');
});
```




