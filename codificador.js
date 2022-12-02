const botaoRadius = document.getElementById('cesar')
const deslocaLetra = document.getElementById('deslocamento')
const sessentaEQuatro = document.getElementById('base64')

botaoRadius.addEventListener('click', function (event) {
    if (botaoRadius.value == 'cicesar') {
        deslocaLetra.style.display = 'flex';
    }

})

sessentaEQuatro.addEventListener('click', function (event) {
    if (sessentaEQuatro.value == 'b64') {
        deslocaLetra.style.display = 'none';
    }
})



const deslocaPosicao = document.getElementById('deslocar')
const areaDeTexto = document.getElementById('textoASerCodificado')
const retornaTexto = document.getElementById('textoASerRetornado')

const cifraDeCesar = (areaDeTexto, deslocaPosicao) => {
    let codificar = '';
    let resultado;

    for (let i = 0; i < areaDeTexto.length; i++) {
        if (areaDeTexto.charCodeAt(i) >= 65 && areaDeTexto.charCodeAt(i) <= 90) {
            resultado = (((areaDeTexto.charCodeAt(i) - 65) + deslocaPosicao) % 26) + 65;
        }
        else if (areaDeTexto.charCodeAt(i) >= 97 && areaDeTexto.charCodeAt(i) <= 122) {
            resultado = (((areaDeTexto.charCodeAt(i) - 97) + deslocaPosicao) % 26) + 97;
        }
        else if (areaDeTexto.charCodeAt(i) === 32) {
            resultado = 32;
        }
        codificar += String.fromCharCode(resultado);
    }
    return codificar.toLowerCase();
}

const decifraDeCesar = (areaDeTexto, deslocaPosicao) => {
    let decodifica = '';
    let resultado;

    for (let i = 0; i < areaDeTexto.length; i++) {
        if (areaDeTexto.charCodeAt(i) >= 65 && areaDeTexto.charCodeAt(i) <= 90) {
            resultado = (((areaDeTexto.charCodeAt(i) - 90) - deslocaPosicao) % 26) + 90;
        }
        else if (areaDeTexto.charCodeAt(i) >= 97 && areaDeTexto.charCodeAt(i) <= 122) {
            resultado = (((areaDeTexto.charCodeAt(i) - 122) - deslocaPosicao) % 26) + 122;
        }
        else if (areaDeTexto.charCodeAt(i) === 32) {
            resultado = 32;
        }
        decodifica += String.fromCharCode(resultado);
    }
    return decodifica.toLowerCase();
}

const codificar = document.getElementById('cod')
const decodificar = document.getElementById('decod')
const radius = document.getElementById('radius')

codificar.addEventListener('click', () => {

    if (botaoRadius.checked) {
        retornaTexto.value = cifraDeCesar(areaDeTexto.value, Number(deslocaPosicao.value))
    }
    else {
        retornaTexto.value = btoa(areaDeTexto.value)
    }
})

decodificar.addEventListener('click', () => {

    if (botaoRadius.checked) {
        retornaTexto.value = decifraDeCesar(areaDeTexto.value, Number(deslocaPosicao.value))
    }
    else {
        retornaTexto.value = atob(areaDeTexto.value)
    }
})