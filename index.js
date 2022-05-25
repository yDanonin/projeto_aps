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

function calcExpense() {
    var expense = document.getElementById("expense_calc").value;
    var tariff = document.getElementById("tariff_calc").value;

    result = expense * tariff;
    document.getElementById("texto_teste").textContent = "result: " + result + ".";
}
