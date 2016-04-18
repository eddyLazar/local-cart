export default  {
  init: function() {
    let callback = this.opts.callback;
    if (callback) {
      callback(this);
    }
  },
}