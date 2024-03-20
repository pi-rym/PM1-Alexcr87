// describe("demo", function () {
//   it("Este test debe pasar siempre", function () {
//     expect(4 + 2).toBe(6);
//   });
// });

const{ Repository, Activity } = require("../scripts/models");

describe("La clase Repository", () =>{
  it ("Debe ser una clase", () =>{
    expect(typeof Activity.prototype.constructor).toBe("function")
  });
  it ("Debe tener el método createActivity", () => {
    const repositorio2 = new Repository();
    expect(repositorio2.createActivity).toBeDefined()
  });
  it ("El metodo getAllActivities debe retornar un array", ()=>{
    const repositorio2 = new Repository();
    expect(Array.isArray(repositorio2.getAllActivities())).toBe(true);
  })
})