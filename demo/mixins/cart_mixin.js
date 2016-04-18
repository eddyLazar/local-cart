export default  {
  init: function() {
    this.cart = this.opts.cart;
    
    this.opts.cart.on('change',()=>{
      this.update();
    });
    
    this.items = this.opts.cart.items;
  },
  deleteAll () {
    let itemIds = this.cart.items.map(item=>item.id)
    for (let itemId of itemIds){
      this.cart.deleteItem(itemId);
    }
    // this.trigger('cart:clear');
  },
  deleteItem (e) {
    let item = e.item;
    this.cart.deleteItem(item.id);
  }
}