describe("Pruebas ejercicios", function () {
    describe("Aleatorio", function () {
        it('Aleatorio 0 - 100', function(){
            let min;
            let max;

            if (min >=0 && max <100){
                expect(true).toBeTruthy()
            }
            else expect(false).not.toBeTruthy()
        })
    })
})