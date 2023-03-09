console.log("Задание 1");
// Задание 1

// Преобразуйте строку js в верхний регистр JS.

let str = 'js'; 
str = str.toUpperCase(); 
console.log(str);

//-----------------------------------------------------------------------------------------------
console.log("");
console.log("Задание 2");

// Задание 2

// Создайте функцию, которая в качестве параметров принимает массив строк и строку.
// Возвращать данная функция должна новый массив, содержащий только те элементы переданного массива,
// которые начинаются с переданной строки. Регистр символов не должен влиять.

let arrayOfWords = ['Кошка', 'Лошадь', 'Змея', 'Конь', 'Ложка', 'Рожь', 'Волк', 'Кожа', 'Крыса'];
let filter = 'ко';

let ArrayAfterFilter = getSortArray(arrayOfWords, filter);

function getSortArray(arr, str){
    let newArr = [];
    
    for(let key of arr){
        if(key.toUpperCase().startsWith(str.toUpperCase())) {
            newArr.push(key);
        }
    }

   return newArr;
}

console.log(`Исходный массив : ${arrayOfWords}`);
console.log(`Строка-фильтр : ${filter}`);
console.log(`Отфильтрованный массив : ${ArrayAfterFilter}`);

//-----------------------------------------------------------------------------------------------

console.log("");
console.log("Задание 3");

// Задание 3

// Округлите число 32.58884:
// 1. До меньшего целого
// 2. До большего целого
// 3. До ближайшего целого

let num = 32.58884;

console.log(`Исходное число : ${num}`);
console.log(`Округленное до меньшего целого : ${Math.floor(num)}`);
console.log(`Округленное до большего целого : ${Math.ceil(num)}`);
console.log(`Округленное до ближайшего целого : ${Math.round(num)}`);

//-----------------------------------------------------------------------------------------------

console.log("");
console.log("Задание 4");

// Задание 4
// Даны числа 52, 53, 49, 77, 21, 32. 
// Необходимо найти среди этих чисел наименьшее и наибольшее числа и вывести их в консоль.

console.log(`Даны числа 52, 53, 49, 77, 21, 32`);
console.log(`Наибольшее число : ${Math.max(52, 53, 49, 77, 21, 32)}`);
console.log(`Наименьшее число : ${Math.min(52, 53, 49, 77, 21, 32)}`);

//-----------------------------------------------------------------------------------------------

console.log("");
console.log("Задание 5");

// Задание 5
// Создайте функцию, которая будет выводить в консоль рандомное число от 1 до 10.

getRandomNum = (min, max) => {
    return Math.round((Math.random() * (max - min) + min));
}
console.log(`Случайное число в диапазоне 1-10 : ${getRandomNum(1, 10)}`);

//-----------------------------------------------------------------------------------------------

console.log("");
console.log("Задание 6");

// Задание 6
// Напишите функцию, которая будет принимать на вход целое число,
// а возвращать массив случайных целых чисел от 0 до переданного числа.
// Длина массива должна быть в 2 раза меньше переданного числа.

function getRandomArray(max){
    let arr = [];

        for (let i = 0; i < (Math.floor(max) - 1) / 2; i++){
            arr.push(getRandomNum(min = 0, max));
        }

    return arr;
}

console.log(getRandomArray(17));

//-----------------------------------------------------------------------------------------------

console.log("");
console.log("Задание 7");

// Задание 7
// Напишите функцию, которая на вход принимает 2 целых числа,
// а в качестве результата возвращает случайное целое число в этом диапазоне.

let numberInRange = (a, b) => {
    let min=Math.min(a, b);
    let max=Math.max(a, b);

     return getRandomNum(min, max);
}

console.log(numberInRange(50, 150)); 
console.log(numberInRange(50, 10)); 

//-----------------------------------------------------------------------------------------------

console.log("");
console.log("Задание 8");

// Задание 8
// Выведите в консоль текущую дату в стандартном режиме. 
// Используйте один из трех рассмотренных в уроке способов.

let date = new Date();
console.log(date);

//-----------------------------------------------------------------------------------------------

console.log("");
console.log("Задание 9");

// Задание 9
// Создайте переменную currentDate и сохраните в нее текущую дату.
// Выведите дату, которая наступит через 73 дня после текущей.

let currentDate = new Date(); 
let newDate = new Date();
let daysToForward = 73;

newDate =new Date(newDate.setDate(newDate.getDate() + daysToForward));

console.log(`${currentDate} - текущее время`);
console.log(`${newDate} - время через ${daysToForward} дней`);

//-----------------------------------------------------------------------------------------------

console.log("");
console.log("Задание 10");

// Задание 10
// Написать функцию, которая на вход принимает дату,
// а возвращает ее отображение в виде:

// Дата: <число> <месяц на русском> <год> -  это <день недели на русском>.
// Время: <часы>:<минуты>:<секунды>

// Время, которое будет выведено, также хранится в объекте Date.

function printDate(myDate){

    const month=["Января", "Февраля", "Марта", "Апреля", "Мая", "Июня",
                "Июля", "Августа", "Сентября", "Октября", "Ноября", "Декабря"];

    const weekdays=["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];

    let myDay = (String(myDate.getDate()).length) > 1 ? myDate.getDate() : '0' + String(myDate.getDate());
    let myHour = (String(myDate.getHours()).length) > 1 ? myDate.getHours() : '0' + String(myDate.getHours());
    let myMinute = (String(myDate.getMinutes()).length) > 1 ? myDate.getMinutes() : '0' + String(myDate.getMinutes());
    let mySekond = (String(myDate.getSeconds()).length) > 1 ? myDate.getSeconds(): '0' + String(myDate.getSeconds());

    console.log(`Дата: ${myDay} ${month[myDate.getMonth()]} ${myDate.getFullYear()} года - это ${weekdays[myDate.getDay()]}.
Время: ${myHour}:${myMinute}:${mySekond}`);
}

let inputDate = new Date(2023,4,1,8,5,5); //вводим дату в полном формате. В задании не указан способ ввода
console.log(inputDate); 
printDate(inputDate);

//---------------------------------------------------------------------------------------------------------------------
 