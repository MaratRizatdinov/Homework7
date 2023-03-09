// Функция startGame1() - кнопка первой игры. 


function startGame1(){
    
    let monthNum =getMonth();
    let objMonth={
        1  : "Зима", 2  : "Зима", 3  : "Весна",
        4  : "Весна", 5  : "Весна", 6  : "Лето",
        7  : "Лето", 8  : "Лето", 9  : "Осень",
        10 : "Осень", 11 : "Осень", 12 : "Зима",
    };


    
    if(!isEmpty(monthNum)){
        comeBack();
    } else if(isNaN(monthNum)){
        alert("Введено не число-повторите попытку");
        startGame1();
    } else if(monthNum < 0 || monthNum > 12) {
        alert("Такого месяца не бывает! Повторите попытку");
        startGame1();
    } else {
        alert (objMonth[monthNum]);
        comeBack();
    }
}    

// Функция startGame2() - кнопка первой игры. 

function startGame2(){
    
    let fruits = ['Яблоко', 'Груша', 'Дыня', 'Виноград', 'Персик', 'Апельсин', 'Мандарин'];
    let counter = 0;    

    fruits = fruits.sort(() => Math.random() - 0.5);
    
    alert(fruits);
    
    let firstItem = prompt('Чему равнялся первый элемент массива');
    let lastItem = prompt('Чему равнялся последний элемент массива');
        
    if(firstItem.toLowerCase()===fruits[0].toLowerCase()){
        counter++;
    }
    if(lastItem.toLowerCase()===(fruits[fruits.length-1]).toLowerCase()){ 
       counter++;
    }

    switch(counter){
    case 0: alert('Вы ответили неверно');
    break;
    case 1: alert('Вы были близки к победе!');
    break;
    case 2: alert('Поздравляем! Вы угадали оба раза!');
    break;
    }
    
 }


















// Функция getMonth() - запрос числа у пользователя. Возвращает значение числа 

function getMonth(){  
    let monthNumber = prompt('Введите порядковый номер месяца');
    return monthNumber;
}

// Функция isEmpty проверяет на пустое значение и значение null
//(случай когда нажат ESC, "Отмена" или "ОК без ввода" )

function isEmpty(num){
    if(num) return true;
    return false;
}

//Функция ComeBack предлагает остаться в игре

function comeBack() {
    let question = confirm('Хoтите выйти из игры? Тогда нажмите "ОК"');

    if(question) alert("До свидания!!!");
    else startGame1();
}




        





