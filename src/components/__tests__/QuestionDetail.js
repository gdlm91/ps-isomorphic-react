describe("The Question Detail Component", () => {
  beforeEach(() => {
    console.log("Before each");
  });

  beforeAll(() => {
    console.log("Before all");
  });

  afterEach(() => {
    console.log("After each");
  });

  afterAll(() => {
    console.log("After all");
  });

  it("Should work", () => {
    expect(30 + 2).toEqual(32);
  });

  it.skip("Should work", () => {
    expect(40 + 2).toEqual(43);
  });
});
