describe("Todo.Loader", function() {
  var loading, page, loader;

  beforeEach(function() {
    loading = $("<span/>");
    page = $("<span/>");
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