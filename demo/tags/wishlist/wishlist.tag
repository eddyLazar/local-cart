<wishlist>
  <ul class="mdl-list">
    <li each={ items } class="mdl-list__item">
      <span class="mdl-list__item-primary-content">
        <i class="material-icons mdl-list__item-avatar">star</i>
        <span>{this.data.title}</span>
      </span>
      <a onclick={deleteItem} class="mdl-list__item-secondary-action" href="#"><i class="material-icons">delete</i></a>
    </li>
  </ul>
  
  <button class="mdl-button mdl-js-button mdl-button--raised" onclick={deleteAll}>
    clear wishlist
  </button>
  
  <script type="text/javascript">
    
    this.mixin('cartMixin');
        
  </script>
  
</wishlist>