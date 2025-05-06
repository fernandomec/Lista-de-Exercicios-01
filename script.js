//1. Se listarmos todos os números naturais abaixo de 10 que são múltiplos de 3 ou 5, obtemos 3, 5, 6 e 9. A soma desses múltiplos é 23. Faça um programa JavaScript que encontre a soma de todos os múltiplos de 3 ou 5 abaixo de 1000.
let soma = 0;
for (let i = 0; i < 1000; i++) {
    if (i % 3 == 0 || i % 5 == 0) {
        console.log(i);
        soma += i;
    }
}
console.log("Soma:", soma);


//2. Crie o seguinte array: let numbers = [5, 7, 1, 8, 9]. E exiba de forma decrescente.
let numbers = [5, 7, 1, 8, 9];
console.log("Antes de organizar:", numbers);

numbers.sort(function(a, b) {
    return b - a;
});
console.log("Forma decrescente:", numbers);


//3. Listando os seis primeiros números primos: 2, 3, 5, 7, 11 e 13, podemos ver que o sexto primo é 13. Qual é o 1001 o número primo? Faça um programa JavaScript que apresente esse número para o usuário.
let contador = 0;
let n = 1001;

function checarPrimo(num) {
    if (num <= 1){
        return false;
    } else if (num == 2){
        return true;
    };
    
    for (let i = 2; i <= num / 2; i++) {
        if (num % i == 0) {
            return false;
        }
    }
    return true;
}

for (let num = 2; contador <= n; num++) {
    if (checarPrimo(num)) {
        contador++;
        
        if (contador == n) {
            resultado = num;
            break;
        }
    }
}
console.log("O 1001 número primo é:", resultado);
  


//4. Crie um programa que exiba todos os números primos que estão entre 0 e 200.
let primos = [];
let index = 0;

function checarPrimo(num) {
    if (num <= 1){
        return false;
    } else if (num == 2){
        return true;
    };
    
    for (let i = 2; i <= num / 2; i++) {
        if (num % i == 0) {
            return false;
        }
    }
    return true;
}

for (let num = 2; num <= 200; num++) {
    if (checarPrimo(num)) {
        primos[index] = num;
        index++;
    }
}

console.log("Primos entre 0 e 200:",primos);


//5. Calculo do Delta (Δ) de uma função de segundo grau. Sabendo que: a = 2, b = 8 e c = – 24. O valor de delta é dado pela seguinte expressão: Δ = b2 – 4ac, em que a, b e c são coeficientes da equação e Δ é delta. Crie um programa JavaScript que faça esse cálculo, mostrando o cálculo passo a passo e resultado final.
let a = 2, b = 8, c = -24;
let delta = b ** 2 - 4 * a * c;
console.log("Δ = " + b +"^2 - 4 * " + a + " * " + c);
console.log("delta:", delta);


//6. Uma loja de tecnologia vende um computador por R$1850,00. Na época da Black Friday, o dono da loja autorizou um desconto de 20% no preço do PC para aumentar as vendas e liberar estoque. Qual será o valor do PC na Black Friday?
let preco = 1850;
let desconto = preco * 0.2;
let precoFinal = preco - desconto;
console.log("Valor do PC na Black Friday:", precoFinal);


//7. José é um ótimo funcionário. Chega sempre na hora certa e quase não falta ao trabalho. Seu salário é de R$3480,00 há 2 anos. No próximo mês, o chefe do José resolveu dar um aumento a ele e disse que seu salário vai subir 13%. Qual será o valor do novo salário do José?
let salarioAtual = 3480;
let aumento = salarioAtual * 0.13;
let novoSalario = salarioAtual + aumento;
console.log("Novo salário:", novoSalario);


//8. Dado uma variável que recebe um número inteiro. Calcule o fatorial de um número.

let num = 5;
let fatorial = 1;
for (let i = 1; i <= num; i++) {
    fatorial *= i;
}
console.log("Fatorial de", num + ":", fatorial);