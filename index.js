function lampada(novaImagem) {
  document.getElementById('lampada').src = novaImagem
  document.getElementById('textoLampada').textContent = 'Estamos aqui para conscientizar sobre o uso da enérgica elétrica! Você sabe o que são fontes renovaveis e fontes não renovaveis de energia?'
  document.getElementById('aviso').textContent = ''
}

function openForm() {
  document.getElementById("myForm").style.display = "block";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}