describe("Todo.Loader", function() {
  var loading, page, loader;

  beforeEach(function() {
    loading = $("<span/>");
    page = $("<span/>");
    console.log(page);
    console.log(loading);
    loader = new Todo.Loader(loading, page);

    loader.init();
  });

  it("displays page", function() {
    expect(page.is(".hidden")).toBeFalsy();
  });

  it("hides loading", function() {
    expect(loading.is(".hidden")).toBeTruthy();
  });
});