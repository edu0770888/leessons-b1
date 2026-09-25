// let email = prompt("Ведите ваш email");
// let password = prompt("Ведите ваш пароль")
// let userEmail = "admin"
// let userPassword = "admin123"

// if(email === userEmail && password === userPassword){
//     alert("Вы успешно вошли в систему")
// }else {
//     alert("неверный пароль или логин!")
// }


// let numer = prompt("Проверьте отрицательное оно или нет? ")

// if("numer "){
//     alert("НЕ ОТРИЦВАТЕЛЬНОЕ")



// let month = prompt ("ведите любой месяц");
// switch(month){
//     case "январь":
//     case "февраль":
//     case "март":
//         alert ("зима");


//     case "апрель":
//     case "май":
//     case "март":
//         alert ("весна");


//     case "июнь":
//     case "июль":
//     case "август":
//         alert ("Лето");

//     case "сентябрь":
//     case "октябрь":
//     case "ноябрь":
//         alert ("осень");






// }

let month = prompt("Напиши любой район");
switch (month) {
  case "алай":
  case "араван":
  case "кара-кулджа":
  case "кара-суу":
  case "ноокат":
  case "узген":
  case "чон-алай":
    alert("Ош");
    break;
  case "баткен":
  case "кадамжай":
  case "лейлек":
    alert("Баткен");
    break;
  case "Ак-Талин":
  case "Ат-Башы":
  case "Жумгал":
  case "Кочкор":
  case "Нарын":
    alert("Нарын");
    break;
  case "аламудун":
  case "жайыл":
  case "кемин":
  case "московский":
  case "панфилов":
  case "сокулук":
  case "чуй":
  case "ысык-ата":
    alert("Чуй");
    break;
  case "аксы":
  case "ала-бука":
  case "базар-коргон":
  case "ноокен":
  case "сузак":
  case "тогуз-торой":
  case "токтогул":
  case "чаткал":
    alert("Манас");
    break;
  case "ак-суу":
  case "жети-огуз":
  case "иссык-коль":
  case "тон":
  case "тюп":
    alert("Ысык кол");
    break;
  case "бакай-ата":
  case "кара-буура":
  case "манас":
  case "кировка":
    alert("Талас");
    break;
  default:
    alert("Такой области нету в спсиске");
}