describe('Pruebas calculadora', function() {
    describe('Calculos', function() {
        it('suma', function() {
            let a = 1, b = 1;
            let rslt = a + b;
  
            expect(rslt).toBe(2)
        })
  
        it('resta', function() {
            let a = 2, b = 2;
            let rslt = a - b;
  
            expect(rslt).toBe(0)
        })

        it('multiplicacion', function() {
            let a = 2, b = 2;
            let rslt = a * b;
  
            expect(rslt).toBe(4)
        })

        it('division', function() {
            let a = 2, b = 2;
            let rslt = a / b;
  
            expect(rslt).toBe(1)
        })
    })
})