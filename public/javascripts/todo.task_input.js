;(function(Todo){	
	Todo.TaskInput = function(html){
		this.html = html;
		this.addEventListeners();
	};

	Todo.TaskInput.prototype.addEventListeners = function(){
		this.html.on("keydown",$.proxy(this,"onKeyDown"));
	};

	Todo.TaskInput.prototype.onKeyDown = function (event) {
		if (event.which !== 13){
			return true;
		}
		event.preventDefault();
		console.log(event.target.value);
		this.html.trigger("enter",this.html.value);
		//this.callback(event.target.value);
		//this.callback(this.html.value);
	};
})(Todo);