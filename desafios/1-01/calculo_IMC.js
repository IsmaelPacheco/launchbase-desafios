// Crie um programa para calcular o IMC e nível de obesidade de uma pessoa.

const nome = "Ismael";
const peso = 55;
const altura = 1.65;

const imc = peso / (altura * altura);

if (imc >= 30) {
  console.log(`${nome} você está acima do peso`);
}
if (imc < 29.9) {
  console.log(`${nome} você não está acima do peso`);
}
