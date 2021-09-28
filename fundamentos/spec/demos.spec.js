xdescribe("Demos de las pruebas", function () {
  describe("Calculos", function () {
      it('suma 2 + 2', function(){
          let a = 2, b = 2;
          let rslt;

          rslt = suma(a, b)

          expect(rslt).toBe(4)
      })

      it('suma negativo', function(){
        let a = 2, b = -2;
        let rslt;

        rslt = suma(a, b)
        
        // expect(rslt).toBe(0)
        // if(a!=2 || b!=2 || rslt ==0){
        //     fail('No pasa...')
        // }
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
