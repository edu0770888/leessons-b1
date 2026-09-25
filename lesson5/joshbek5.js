// циклдар
// console.log(hello world);
// console.log(hello world);
// console.log(hello world);
// console.log(hello world);
// console.log(hello world);
// console.log(hello world);
// console.log(hello world);
// console.log(hello world);
// console.log(hello world);

//for - цикл
//white - цикл

//for (i = 0; i < 10; i++){
// console.log ("hello world" + i
//)}

//let i = true;
//white (i){
//console.lo("hello world" +i);
//i++;
//}
//console.log (5 == "5"); //true
//console.log (5 === "5"); //false


// for (i = 0; i < 10; i++){
// if(i == 5){
//     //break;
//     continue
// }

//     console.log(i)
// }

// for (i = 0; i < 100; i++){
//     if (i % 2 == 0){
//         console.log(i);
//     }

// }


// for (i = 0; i < 10; i++){
//     for(j = 0; j < 5; j++){
//         console.log(i+'*'+j+'='+i*j);
//     }
// }


//пароль 
// let password = "1234";
// let userPassword = prompt ('Ведите пароль');
// while(userPassword !== password){
//     userPassword = prompt('попробуйте еще раз');
// }
// alert('Вы вошли в систему')


let num = Number(prompt("Выберите таблицу от 1 до 10:"));
let num1 = Number(prompt("выберите до скольки умножить это число"));


for (let i = 1; i <= num ; i++) {
    console.log('Таблица ' + i);
    for (let j = 1; j <= num1; j++); 
        console.log (i + '*' + j + '=' + i * j);
    }

