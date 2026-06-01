// Seleciona os elementos do HTML
htmlNumero = document.getElementById('numero');
const btnAumentar = document.getElementById('btn-aumentar');
const btnDiminuir = document.getElementById('btn-diminuir');

// Cria a variável que guarda o valor do contador
let contador = 0;

// Adiciona o evento de clique para aumentar
btnAumentar.addEventListener('click', () => {
    contador++;
    htmlNumero.textContent = contador;
});

// Adiciona o evento de clique para diminuir
btnDiminuir.addEventListener('click', () => {
    contador--;
    htmlNumero.textContent = contador;
});
