// Funções para calcular o próximo número de cada sequência

// a) Sequência: 1, 3, 5, 7, ___ (incrementando de 2)
function proximoDaSequenciaA() {
    let sequencia = [1, 3, 5, 7];
    let proximo = sequencia[sequencia.length - 1] + 2;
    console.log("O próximo número da sequência A é:", proximo);
}

// b) Sequência: 2, 4, 8, 16, 32, 64, ____ (multiplicando por 2)
function proximoDaSequenciaB() {
    let sequencia = [2, 4, 8, 16, 32, 64];
    let proximo = sequencia[sequencia.length - 1] * 2;
    console.log("O próximo número da sequência B é:", proximo);
}

// c) Sequência: 0, 1, 4, 9, 16, 25, 36, ____ (quadrados perfeitos)
function proximoDaSequenciaC() {
    let sequencia = [0, 1, 4, 9, 16, 25, 36];
    let proximo = Math.pow(sequencia.length, 2); // O próximo quadrado perfeito
    console.log("O próximo número da sequência C é:", proximo);
}

// d) Sequência: 4, 16, 36, 64, ____ (quadrados de números pares)
function proximoDaSequenciaD() {
    let sequencia = [4, 16, 36, 64];
    let proximo = Math.pow((sequencia.length + 1) * 2, 2);
    console.log("O próximo número da sequência D é:", proximo);
}

// e) Sequência: 1, 1, 2, 3, 5, 8, ____ (Fibonacci)
function proximoDaSequenciaE() {
    let sequencia = [1, 1, 2, 3, 5, 8];
    let proximo = sequencia[sequencia.length - 1] + sequencia[sequencia.length - 2];
    console.log("O próximo número da sequência E é:", proximo);
}

// f) Sequência: 2, 10, 12, 16, 17, 18, 19, ____ (múltiplos de 2 e números consecutivos)
function proximoDaSequenciaF() {
    let sequencia = [2, 10, 12, 16, 17, 18, 19];
    let proximo = 20; // O próximo número é 20, pois segue a sequência
    console.log("O próximo número da sequência F é:", proximo);
}

// Chama todas as funções para exibir os resultados
proximoDaSequenciaA();
proximoDaSequenciaB();
proximoDaSequenciaC();
proximoDaSequenciaD();
proximoDaSequenciaE();
proximoDaSequenciaF();
