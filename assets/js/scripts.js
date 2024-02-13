/* Função criptografar */
function criptografar(texto) {
    return texto.replace(/e/g, 'enter')
                .replace(/i/g, 'imes')
                .replace(/a/g, 'ai')
                .replace(/o/g, 'ober')
                .replace(/u/g, 'ufat');
}

/* Função descriptografar */
function descriptografar(texto) {
    return texto.replace(/enter/g, 'e')
                .replace(/imes/g, 'i')
                .replace(/ai/g, 'a')
                .replace(/ober/g, 'o')
                .replace(/ufat/g, 'u');
}

/* Função processar */
function processar(acao) {
    let textoElemento = document.getElementById('texto');
    let resultadoElemento = document.getElementById('resultado');
    let btnCopiar = document.getElementById('btn-copiar');
    let imagemElemento = document.querySelector('.terceira-caixa-conteudo img');
    let textoEncontrarMensagemElemento = document.querySelector('.terceira-caixa-conteudo .texto-encontrar-mensagem');
    let digitarTextoElemento = document.querySelector('.terceira-caixa-conteudo .digitar-texto');

    let texto = textoElemento.value;
    let resultado;

    if (acao === 'criptografar') {
        resultado = criptografar(texto);
        textoElemento.value = '';
    } else if (acao === 'descriptografar') {
        resultado = descriptografar(texto);
        textoElemento.value = '';
    } else {
        resultado = 'Ação inválida';
    }

    resultadoElemento.textContent = resultado;

    imagemElemento.style.display = 'none';
    textoEncontrarMensagemElemento.style.display = 'none';
    digitarTextoElemento.style.display = 'none';

    btnCopiar.style.display = resultado.trim() !== '' ? 'block' : 'none';
}

/* Função copiar resultado */
function copiarResultado() {
    let resultadoElemento = document.getElementById('resultado');
    let mensagemCopiadoElemento = document.getElementById('mensagem-copiado');
    let range = document.createRange();

    range.selectNode(resultadoElemento);
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);

    try {
        document.execCommand('copy');
        mensagemCopiadoElemento.style.display = 'block';
        resultadoElemento.textContent = '';
        setTimeout(() => {
            mensagemCopiadoElemento.style.display = 'none';
        }, 2000);
    } catch (err) {
        console.error('Erro ao copiar texto:', err);
    } finally {
        window.getSelection().removeAllRanges();
    }
}