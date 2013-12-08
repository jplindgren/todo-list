;(function(Todo){
	Todo.TaskManager = function(taskInput){
		this.taskInput = taskInput;
		this.addEventListeners();
	};

	Todo.TaskManager.prototype.on = function(event,callback) {
		this.taskInput.on("enter",callback);
	};

	Todo.TaskManager.prototype.addEventListeners = function(){
		this.taskInput.on("enter",$.proxy(this,"onEnter"));
	};

	Todo.TaskManager.prototype.onEnter = function(taskDescription){
		var task = new Todo.task( title: taskDescription.target.value);

		task.on("save", callback);
		task.on("create", callback);
		task.on("update", callback);
		task.on("invalid", callback);
		task.on("error", callback);

		task.save();
	};
})(Todo);