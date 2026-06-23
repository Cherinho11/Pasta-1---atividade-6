let diasDeAluguel // entrada - input
let valorPorDia // entrada - input
let valorTotal // saída - output

diasDeAluguel = prompt("Informe a quantidade de dias de aluguel");
valorPorDia = prompt("Informe o valor por dia de aluguel");

diasDeAluguel = parseFloat(diasDeAluguel);
valorPorDia = parseFloat(valorPorDia);

valorTotal = parseFloat(diasDeAluguel) * parseFloat(valorPorDia);

alert("O valor total do aluguel é de R$ " + valorTotal);