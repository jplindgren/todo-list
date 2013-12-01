;(function(Todo){	
	Todo.TaskInput = function(html){
		this.html = html;
		this.addEventListeners();
	};

	Todo.TaskInput.prototype.on = function(event, callback){
		this.html.on("enter", callback);
	}

	Todo.TaskInput.prototype.addEventListeners = function(){
		this.html.on("keydown",$.proxy(this,"onKeyDown"));
	};

	Todo.TaskInput.prototype.onKeyDown = function (event) {
		if (event.which !== 13){
			return true;
		}
		event.preventDefault();
		this.html.trigger("enter",this.html.value);
	};
})(Todo);