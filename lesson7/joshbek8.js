// мутоды масивов
// что такой массив?!
// lendht-массивтин ичиндеги элементердин саны
// pop-массивтин аягынын элемменти алып салат

let rr = [];
for (let i = 1; i <= 50; i++) {
    rr.push(i);}
let result = rr
    .filter((number) => number % 2 === 0)
    .map((number) => number * 2);
console.log(result);

