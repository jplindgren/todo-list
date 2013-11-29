;(function(){
	var Todo;
	window.Todo = Todo = {};

	Todo.init = function(html){
		console.log(this);
		this.html = $(html);
		this.loader = new Todo.Loader(
				this.html.find('.loading'),
				this.html.find('.page')
		);
		this.loader.init();
	};
})();