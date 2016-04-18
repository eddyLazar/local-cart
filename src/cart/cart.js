import stampit from 'stampit';
import basilStorage from './storages/basil';

const EventEmitter = require('events').EventEmitter;
const EventEmittable = stampit.convertConstructor(EventEmitter);

// storage decorator
function storageDecorator(fn){
  return function () {
    let result = fn.apply(this, arguments);
    // update storage after cart items change
    this.storage.updateStorage(this.name, this.items);
    this.emit('change');
    return result;
  };
}

// cart methods
let addItem = storageDecorator(function({id,unit_price,data,count}) {
  count = count || 1;
  let existingItem = this.getItem(id);
  if (existingItem) {
    existingItem.count+=count;
  } else {
    this.items.push({
      id,
      unit_price,
      data,
      count
    });
  }
  return this;
})

let deleteItem = storageDecorator(function (id) {
  let index = this.items.findIndex(this._findMethodDecorator(id));
  let deletedItem = this.items[index];
  this.items.splice(index,1);
  return deletedItem;
})

let updateItemCount = storageDecorator(function (id, count) {
  let item = this.getItem(id);
  if (count <= 0) {
    this.deleteItem(id);
  } else {
    item.count = count;
    return this.getItem(id);
  }
});

let emptyCart = storageDecorator(function () {
  this.items = [];
});

// cart class
const Cart = stampit({
    methods: {
      addItem,
      updateItemCount,
      deleteItem,
      emptyCart,
      getTotalPrice () {
        let totalPrice = 0;
        for(let item of this.items){
          totalPrice += (item.unit_price * item.count);
        }
        return totalPrice;
      },
      getTotalCount () {
        let totalCount = 0;
        for(let item of this.items){
          totalCount += item.count;
        }
        return totalCount;
      },
      getItem (id) {
        return this.items.find(this._findMethodDecorator(id));
      },
      _findMethodDecorator (id) {
        return function (item) {
          return item.id == id;
        }
      },
      // synchronize cart items in local storage with api data
      sync () {
        
      }
    },
    refs: {
      name: 'defaultCartStorageName',
    },
    props: {
      name: 'defaultCartStorageName'
    }
  })
  .init(function ({instance,stamp,args}) {
    this.storage = basilStorage();
    this.items = this.storage.getItemsFromStorage(this.name) || [];
  });
  
  
  
    
export default function cartFactory(config={}) {
  config.storage = config.storage || basilStorage;
  let cartWithEvents = stampit.compose(EventEmittable, Cart);
  let cart = cartWithEvents(config);
  return cart;
}