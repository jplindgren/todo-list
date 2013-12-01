describe("Todo.TaskInput", function(){
	var taskInput, input, callback, event;

	beforeEach(function(){
		callback = jasmine.createSpy();
		input = $("<input/>").val("some task");
		taskInput = new Todo.TaskInput(input);
	});

	it("tiggers enter event", function(){
		event = $.Event("keydown");
		event.which = 13;
		input.on("keydown", callback);
		input.trigger(event); //simulates <enter> key

		expect(callback).wasCalledWith("some task");
	});
});