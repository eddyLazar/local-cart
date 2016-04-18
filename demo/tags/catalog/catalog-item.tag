<catalog-item>
    <div class="mdl-card__media">
      <img src={product.img} style="max-width:100%;">
    </div>
    <div class="mdl-card__title mdl-card--expand mdl-card--border">
      <h2 class="mdl-card__title-text">{product.title}</h2>
    </div>
    <div class="mdl-card__supporting-text">
      {product.text}
    </div>
    <div class="mdl-card__actions mdl-card--border">
      <a onclick={isInCart() ? null : addToCart} disabled={isInCart()} class="mdl-button mdl-js-button mdl-button--colored mdl-button--raised mdl-js-ripple-effect" name='add_button'>
        add to cart
      </a>
      <a onclick={addToWishlist} disabled={isInWishlist()} class="mdl-button mdl-js-button mdl-button--fab mdl-button--colored mdl-button--mini-fab">
        <i class="material-icons">favorite</i>
      </a>
    </div>
    <div class="mdl-card__menu">
      <div class="mdl-button mdl-js-button mdl-button--raised mdl-button--colored mdl-button--accent">
        {product.unit_price} $
      </div>
    </div>
  
  <script type="text/javascript">
    let cart = this.parent.cart;
    let wishlist = this.parent.wishlist;
    
    this.isInCart = function () {
      return Boolean(cart.getItem(this.product.id))
    }
    
    this.isInWishlist = function () {
      return Boolean(wishlist.getItem(this.product.id))
    }
    
    this.addToCart = () => {
      if (!this.isInCart()) {
        this.parent.trigger('item:add', this.product);
      }
    }
    
    this.addToWishlist = () => {
      if (!this.isInWishlist()) {
        this.parent.trigger('item:wishlist', this.product);
      }
    }
        
  </script>
  
</catalog-item>