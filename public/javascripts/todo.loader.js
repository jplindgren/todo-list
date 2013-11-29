//passando o Todo como parametro definimos ele como o this da função.
//Caso não passemos, podemos usá-lo mesmo assim, pois ele está como global. (nesse caso podemos usar require.js)
;(function(Todo){
  Todo.Loader = function(loading, page) {
    this.loading = loading;
    this.page = page;
  };

  Todo.Loader.prototype.init = function() {
    this.loading.addClass("hidden");
    this.page.removeClass("hidden");
  };
})(Todo);
