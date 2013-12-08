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
		this.taskInput = new Todo.TaskInput( this.html.find('.task-input') );

		//Input manager manages inputask's enter event and creates the task when it needs.
		this.taskManager = new Todo.TaskManager( this.taskInput );


		this.taskInput.on("enter", function(value){
			alert('enter pressed' + value);
		});
		this.loader.init();
		//this.taskInput.init();
	};
})();