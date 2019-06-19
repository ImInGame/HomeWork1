'use strict'

let money = prompt("Какой ваш бюджет на месяц?"),
    time = prompt("Ведите дату в формате YYYY-MM-DD");

let appData = {
    budget: money,
    timeData: time,
    expenses: b1,//не выдаёт ошибки только с числом
    optionalExpenses: b3,//не выдаёт ошибки только с чисолом
    income: [],
    savings: 'false'
};

let b1 = prompt("Введите обязательную статью расходов  вэтом месяце","1" ),
    b2 = prompt("Во сколько обойдется?","2"),   
    b3 = prompt("Введите обязательную статью расходов  вэтом месяце","3" ),     
    b4 = prompt("Во сколько обойдется?","4");

appData.expenses.b1 = b2,
appData.expenses.b3 = b4;

alert(appData.expenses / 30);
   
/* Вопросы к 1-му заданию:
1)6(number,string,symbol,boolean,null,undefined)
2)console.log()
3)&&(and) ||(or)