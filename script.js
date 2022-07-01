const inputTexto = document.querySelector(".input-texto");
const mensagem = document.querySelector(".mensagem");

function btnCriptografar() {
	const textoEncriptado = encriptar(inputTexto.value)
	mensagem.value = textoEncriptado
	document.getElementById("desaparece-div").style.display = "none"
	document.getElementById("aparece-div").style.display = "block"
}

function encriptar(stringEncriptada) {
	let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
	stringEncriptada = stringEncriptada.toLowerCase();

	for(let i=0; i < matrizCodigo.length; i++) {
		if(stringEncriptada.includes(matrizCodigo[i][0])) {
			stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
		}
	}
	return stringEncriptada
}

function btnDescriptografar() {
	const textoDescriptografado = descriptografar(inputTexto.value)
	mensagem.value = textoDescriptografado
}

function descriptografar(stringDescriptogafada) {
	let matrizCodigo = [["a", "ai"], ["e", "enter"], ["i", "imes"], ["o", "ober"], ["u", "ufat"]];
	stringDescriptogafada = stringDescriptogafada.toLowerCase();

	for(let i=0; i < matrizCodigo.length; i++) {
		if(stringDescriptogafada.includes(matrizCodigo[i][0])) {
			stringDescriptogafada = stringDescriptogafada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0])
		}
	}
	return stringDescriptogafada
}

document.getElementById('botao-copia').onclick = (e) => {
  e.preventDefault();
  const mensagem = document.querySelector("#mensagem");
  mensagem.select();
  navigator.clipboard.writeText(mensagem.value)
  mensagem.value = "";
}


