;(function(Todo){
	Todo.Task = function(attributes){
		this.assignAttributes(attributes);
	};

	Todo.Task.prototype.assignAttributes = function(attributes){
		for (var name in attributes){
			if (!attributes.hasOwnProperty(name)){
				continue;
			}
			this[name] = attributes[name];
		}
	}

	Todo.Task.prototype.on = function(event,callback){
		//this.on("save",callback);
		this.addEventListener("save", Todo.Task.prototype.save, false);
	}

	Todo.Task.prototype.save = function() {
		
	};
})(Todo);