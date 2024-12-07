const entradaTexto = document.getElementById('entradaTexto');
const btnAdicionar = document.getElementById('btnAdicionar');
const btnContar = document.getElementById('btnContar');
const saida = document.getElementById('saida');
const dialogo = document.getElementById('dialogo');
const msgDialogo = document.getElementById('msgDialogo');
const btnFechar = document.getElementById('btnFechar');

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
    if (saida.innerHTML.trim() === '') {
        msgDialogo.textContent = "Nenhuma linha foi adicionada.";
    } else {
        const alturaLinha = parseFloat(getComputedStyle(saida).lineHeight);
        const alturaTotal = saida.scrollHeight;
        const linhas = Math.ceil(alturaTotal / alturaLinha);
        msgDialogo.textContent = `${linhas} linha(s) foram adicionadas.`;
    }
    dialogo.showModal();
});

btnFechar.addEventListener('click', () => {
    dialogo.close();
});
