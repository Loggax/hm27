//Minimum//

//First task//

let age = +prompt('Введіть свій вік');

switch(true) {
    case(age > 0 && age <= 11) : alert('Ви дитина');
    break;
    case(age > 12 && age <= 17) : alert('Ви підліток');
    break;
    case(age > 18 && age <= 59) : alert('Ви дорослий');
    break;
    case(age > 60 ) : alert('Ви пенсіонер');
    break;
    case(age <= 0) : alert('Ви вказали неправильний вік');
    break;
}

//Second task//

let symbol = +prompt('Введіть число від 0 до 9');

switch(true) {
    case (symbol == 1) : alert('!');
    break;
    case (symbol == 2) : alert('@');
    break;
    case (symbol == 3) : alert('#');
    break;
    case (symbol == 4) : alert('$');
    break;
    case (symbol == 5) : alert('%');
    break;
    case (symbol == 6) : alert('^');
    break;
    case (symbol == 7) : alert('&');
    break;
    case (symbol == 8) : alert('*');
    break;
    case (symbol == 9) : alert('(');
    break;
    case (symbol == 0) : alert(')');
    break;
    case (symbol < 0 || symbol > 9) : alert('Ви ввели неправильне значення!');
    break;
}

//Third task//

let firstNumber = +prompt('Введи перше число');
let secondNumber = +prompt('Введи друге число');
let suma = 0;

for(i = firstNumber; i <= secondNumber; i++) {
    suma = suma + i; 
}

alert(suma);

//Fourth task//

let firstNum = +prompt('Введіть перше число');
let secondtNum = +prompt('Введіть друге число');
let dilnuk;

while(firstNum != secondtNum) { // 35 != 25
    if(firstNum > secondtNum) { // 35 > 25
        firstNum = firstNum - secondtNum; // 35 - 25 = 10
    } else {
        secondtNum = secondtNum - firstNum; // 25 - 35 = -10
    }
}
 
dilnuk = firstNum;
alert('Найбільший спільний дільник' + ' ' + dilnuk);

//Fifth task//

let num = +prompt('Введи своє число');

for(i = 1; i <= num; i++) {
    if(num % i == 0) {
        alert('Спільні дільники' + ' ' + i);
    }
}

//Norma//

//First task//

let chuslo = +prompt('Введи своє число');

//12321//

let a = chuslo % 10; // 1
let b = Math.trunc(chuslo / 10) % 10;  // 2
let c = Math.trunc(chuslo / 100) % 10; // 3
let d = Math.trunc(chuslo / 1000) % 10; // 2
let e = Math.trunc(chuslo / 10000) % 10; // 1
let f = a + '' + b + '' + c + '' + d + '' + e;
 if(chuslo == f) {
     console.log('polindrom');
 } else {
     console.log('ne palindrom');
 }
alert(f);

//Second task//

let sumaPokupok = +prompt('Введіть суму покупок');
let sumaZnuzhku1 = sumaPokupok * 0.03;
let sumaZiZnuzhkoyu1 = sumaPokupok - sumaZnuzhku1;
let sumaZnuzhku2 = sumaPokupok * 0.05;
let sumaZiZnuzhkoyu2 = sumaPokupok - sumaZnuzhku2;
let sumaZnuzhku3 = sumaPokupok * 0.07;
let sumaZiZnuzhkoyu3 = sumaPokupok - sumaZnuzhku3;

switch(true) {
    case(sumaPokupok >= 200 && sumaPokupok <= 300) : alert('Сума покупок зі знижкою становить' + ' ' + sumaZiZnuzhkoyu1);
    break;
    case(sumaPokupok > 300 && sumaPokupok <= 500) : alert('Сума покупок зі знижкою становить' + ' ' + sumaZiZnuzhkoyu2);
    break;
    case(sumaPokupok > 500) : alert('Сума покупок зі знижкою становить' + ' ' + sumaZiZnuzhkoyu3);
    break;
    case(sumaPokupok > 0 && sumaPokupok < 200) : alert('Сума покупок становить' + ' ' + sumaPokupok);
    break;

}

// Third task//

let dodatni = 0;
let vidyemni = 0;
let nuli = 0;
let parni = 0;
let neParni = 0;

for(i = 0; i < 5; i++) {
    let chusla = +prompt('Введи число');
    // switch(true) {
    //     case (chusla > 0) : dodatni = dodatni + 1;
    //     break; 
    //     case (chusla < 0) : vidyemni = vidyemni + 1;
    //     break; 
    //     case (chusla == 0) : nuli = nuli + 1;
    //     break; 
    //     case (chusla % 2 == 0) : parni = parni + 1;
    //     break; 
    //     case (chusla % 2 != 0) : neParni = neParni + 1;
    //     break; 
    // }

    if(chusla > 0) {
        dodatni = dodatni + 1;
    } else if (chusla < 0) {
        vidyemni = vidyemni + 1;
    } else if (chusla == 0) {
        nuli = nuli + 1;
    } else {
        console.log('Схоже щось пішло не так!');
    }
    
    
    if(chusla % 2 == 0) {
        parni = parni + 1;
    } else if (chusla % 2 != 0) {
        neParni = neParni + 1;
    } else {
        console.log('Схоже щось пішло не так!');
    }
}
alert('Додатні числа' + ' ' + dodatni + ', ' + "від'ємні числа" + ' ' + vidyemni + ', ' + 'нулі' + ' ' + nuli + ', ' + 'парні' + ' ' + parni + ', ' + 'непарні' + ' ' + neParni);



//Fourth task//

for(i = 0; i < 1; i++) {
    alert('Понеділок');
    alert('Вівторок');
    alert('Середа');
    alert('Четвер');
    alert("П'ятниця");
    alert('Субота');
    alert('Неділя');
}

//Maximum//

//First task//

//Second task//

let num;

for(i = 2; i <= 9; i++) {
    for(j = 1; j <= 10; j++) {
        num = i * j;
        console.log(num);
    }
}

//Third task//

let day = +prompt('Введи день');
let mounth = +prompt('Введи місяць');
let year = +prompt('Введи рік');

day = day + 1;

switch(true) {
    case(day >= 31) : day = 1; 
    break;
    case(mounth >= 12) : mounth = 1;
    break;
    case(mounth >= 12) : year = year + 1;
    break;
}

console.log(day + ' ' + mounth + ' ' + year);