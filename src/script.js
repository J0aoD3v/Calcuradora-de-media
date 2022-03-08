//codigo pra calcular copiado de https://codepen.io/hayttle/pen/QWOPvqP
var nome = "joao"
var notaDoPrimeiroBimestre = 9
var notaDoSegundoBimestre = 7
var notaDoTerceiroBimestre = 4
var notaDoQuartoBimestre = 2

var notaFinal = (notaDoPrimeiroBimestre + notaDoSegundoBimestre + notaDoTerceiroBimestre + notaDoQuartoBimestre) / 4

var notaFixada = notaFinal.toFixed(1)

console.log("bem vindo " + nome)
console.log(notaFixada)

// isso é um comentario

//Revisão
// variaveis, strings, console.log, toFixed, opeções matemáticas, concatenação

//copiado
let btn = document.getElementById("btnMedia");

btn.addEventListener("click", () => {
  let nota1 = parseFloat(document.getElementById("nota1").value);
  let nota2 = parseFloat(document.getElementById("nota2").value);
  let nota3 = parseFloat(document.getElementById("nota3").value);
  let nota4 = parseFloat(document.getElementById("nota4").value);

  let media = (nota1 + nota2 + nota3 + nota4) / 4;
  let situacao = "";
  if (media >= 7) {
    situacao = "APROVADO";
  } else {
    situacao = "REPROVADO";
  }

  let resultado = (document.getElementById(
    "resultado"
  ).innerHTML = `a sua media eh ${media.toFixed(1)} e esta ${situacao}`);
});

//fim copia