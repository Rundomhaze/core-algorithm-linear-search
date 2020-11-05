describe("linearSearch()", function() {
  it("returns first index of item in array", function() {
    let item = 3;
    let arr = [1,2,3,4,5];
    expect(linearSearch(item, arr)).toEqual(2);
  });
});

describe("globalSearch()", function() {
  it("returns array indxes of item in array", function() {
    let item = 4;
    let arr = [1,1,2,3,4,4,5];
    expect(globalSearch(item, arr)).toEqual(2);
  });
});
