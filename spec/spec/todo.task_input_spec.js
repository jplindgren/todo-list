describe("Todo.TaskInput", function(){
	var taskInput, input, callback, event;

	beforeEach(function(){
		callback = jasmine.createSpy();
		input = $("<input/>").val("some task");
		taskInput = new Todo.TaskInput(input);
	});

	it("triggers enter event", function(){
		event = $.Event("keydown");
		event.which = 13;
		taskInput.on("enter", callback);
		input.trigger(event); //simulates <enter> key

		expect(callback.mostRecentCall.args[1]).toEqual("some task");
	});

	it("skip enter event when does not press enter", function(){
		event = $.Event("keydown");
		event.which = 27;

		taskInput.on("enter",callback); //sets event listerner to the spy
		input.trigger(event);

		expect(callback).wasNotCalled();
	});

});