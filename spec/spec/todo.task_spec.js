describe("Todo.Task",function(){
	var task, callback;

	beforeEach(function(){
		callback = jasmine.createSpy();
		task = new Todo.Task();
	});

	it("assings attributtes",function(){
		task = new Todo.Task({ title: "some task", status: "pending" });
		expect(task.title).toEqual("some task");
		expect(task.status).toEqual("pending");
	});

	it("triggers save event when saving object",function(){
		task.on("save", callback);

		task.save();
		expect(callback).wasCalled();
	});

});