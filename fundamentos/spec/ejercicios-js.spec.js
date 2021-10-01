xdescribe("Pruebas ejercicios", function () {
    xdescribe("Aleatorio", function () {
        it('Aleatorio 0 - 100', function(){
            let min = prompt("Escribe un numero");
            let max = prompt("Escribe un numero");

            expect(min).toBeGreaterThanOrEqual(0);
            expect(max).toBeLessThanOrEqual(100);
        })
    })

    xdescribe("Juego", function () {
        it('Generado', function(){
            let generado = Math.floor(Math.random() * 100) + 1;

            expect(generado).toBeGreaterThanOrEqual(0);
            expect(generado).toBeLessThanOrEqual(100);

            let numAdivinar = prompt("Escribe un numero: " + generado, '');

            expect(generado).toMatch(numAdivinar);
        })
    })
})