xdescribe("Demos de las pruebas", function () {
  describe("Calculos", function () {
      it('suma 2 + 2', function(){
          let a = 2, b = 2;
          let rslt;

          rslt = suma(a, b)
          
          expect(rslt).toBe(4)
      })
  })

  it("Este funciona siempre", function () {
    expect(true).toBeTruthy();
  })

  it("Este falla siempre", function () {
    expect(true).not.toBeTruthy();
  })

})

describe("otra suite", function () {})
