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

  result = (expense * tariff) * 30;
  result_formtd = (Math.round(result *100) / 100).toFixed(2);
  document.getElementById("texto_teste").textContent = " R$" + result_formtd;
}

function letterPerSecond(phrase) {
  var interval
  let arr = phrase.split('')
  let i = 0
  let word = ''
  let nameId = 'phraseBanner1'
  interval = setInterval(() => {
    word = word+arr[i]
    if (arr[i] == ' '){
      nameId = 'phraseBanner2'
      word = ''
    } 
    document.getElementById(nameId).textContent = word 
    i++
    if(i >= arr.length){
      clearInterval(interval)
    }
  }, 100)
}
