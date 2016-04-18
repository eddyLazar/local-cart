require('./catalog-item.tag');

<catalog-list>
  <div class="mdl-grid bionicle-grid">
    <div each={ product in opts.products } class={itemClassName}>
      <!-- {product.title} -->
      <catalog-item/>
    </div>
  </div>
  
  <script type="text/javascript">
    let cart = opts.cart;
    this.cart = opts.cart;
    this.wishlist = opts.wishlist;
    this.itemClassName = 'mdl-card mdl-shadow--3dp BionicleProduct mdl-cell mdl-cell--4-col-desktop';
    
    //callback
    // opts.callback(this);
    
  </script>
  
</catalog-list>