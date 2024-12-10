const entradaTexto = document.getElementById('textInput');
const btnAdicionar = document.getElementById('addButton');
const btnContar = document.getElementById('countButton');
const saida = document.getElementById('output');
const dialogo = document.getElementById('lineDialog');
const msgDialogo = document.getElementById('dialogMessage');
const btnFechar = document.getElementById('closeDialog');

btnAdicionar.addEventListener('click', () => {
    const texto = entradaTexto.value.trim();
    if (texto) {
        const paragrafo = document.createElement('p');
        paragrafo.textContent = texto;
        saida.appendChild(paragrafo);
        entradaTexto.value = '';
    } else {
        alert("Por favor, digite algo antes de adicionar.");
    }
});

btnContar.addEventListener('click', () => {
    const linhas = saida.getElementsByTagName('p').length;
    msgDialogo.textContent = `${linhas} linha(s) foram adicionadas.`;
    dialogo.showModal();
});

btnFechar.addEventListener('click', () => {
    dialogo.close();
});
