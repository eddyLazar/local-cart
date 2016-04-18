<cart>
  <ul class="mdl-list">
    <li each={ items } class="mdl-list__item mdl-list__item--three-line">
      <!-- <cart-item></cart-item> -->
      <span class="mdl-list__item-primary-content">
        <span class="mdl-badge mdl-badge--overlap" data-badge={this.count}>{this.data.title}</span>
        <span class="mdl-list__item-text-body">{this.unit_price} $</span>
      </span>
      
      <span class="mdl-list__item-secondary-content">
        <button onclick={decrCount} class="mdl-button mdl-button--fab mdl-button--mini-fab">
          <i class="material-icons">remove</i>
        </button>
      </span>
      
      <span class="mdl-list__item-secondary-content">
        <button onclick={incrCount} class="mdl-button mdl-button--fab mdl-button--mini-fab">
          <i class="material-icons">add</i>
        </button>
      </span>
      
      <span class="mdl-list__item-secondary-content">
        <button onclick={deleteItem} class="mdl-button mdl-js-button mdl-button--fab mdl-button--mini-fab mdl-button--colored">
          <i class="material-icons">delete</i>
        </button>
      </span>
    </li>
    
    <li class="mdl-list__item">
      <span class="mdl-list__item-primary-content">
        <strong>Total count</strong>
      </span>
      <span class="mdl-list__item-secondary-content">{this.cart.getTotalCount()}</span>
    </li>
    <li class="mdl-list__item">
      <span class="mdl-list__item-primary-content">
        <strong>Total price</strong>
      </span>
      <span class="mdl-list__item-secondary-content">{this.cart.getTotalPrice()} $</span>
    </li>
  </ul>
  
  <button class="mdl-button mdl-js-button mdl-button--raised" onclick={deleteAll}>
    clear cart
  </button>
  
  <script type="text/javascript">

    this.incrCount = (e) => {
      this.cart.updateItemCount(e.item.id, e.item.count+1);
    }
    this.decrCount = (e) => {
      this.cart.updateItemCount(e.item.id, e.item.count-1);
    }

    this.mixin('cartMixin');
        
  </script>
  
</cart>