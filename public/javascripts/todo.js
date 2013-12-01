;(function(){
	var Todo;
	window.Todo = Todo = {};

	Todo.init = function(html){
		//Injecting elements
		this.html = $(html);

		//Responsible for toggling loader and page
		this.loader = new Todo.Loader(
			this.html.find('.loading'),
			this.html.find('.page')
		);

		//Input task responsible for add new tasks
		this.taskInput = new Todo.TaskInput(
			this.html.find('.task-input')
		);

		this.taskInput.on("enter", function(value){
			alert('enter pressed' + value);
		});
		this.loader.init();
		//this.taskInput.init();
	};
})();