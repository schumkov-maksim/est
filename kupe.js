// Место для второй задачи
// function getCoupeNumber(number) {
// if(typeof(number)!="number"){
//     console.log("Ошибка. Проверьте правильность введенного номера места");
// }
// else if (0<number>37){
//     console.log("Таких мест в вагоне не существует");
// }

// if(typeof(number)!="number" || number <0 || number>37 || !Number.isInteger(number)){
//         console.log("Ошибка. Проверьте правильность введенного номера места");
//     }
//  else{
//     let coupe=Math.ceil(number/4);
// console.log(coupe);
//  }
// return coupe;
// }

// getCoupeNumber(9.4);  //=> 9





const shoppingMallData = {
    shops: [
        {
            width: 10,
            length: 5
        },
        {
            width: 15,
            length: 7
        },
        {
            width: 20,
            length: 5
        },
        {
            width: 8,
            length: 10
        }
    ],
    height: 5,
    moneyPer1m3: 30,
    budget: 50000
}

function isBudgetEnough(data) {
    let square = 0;
    let volume = 0;

    data.shops.forEach(shop => {
        square += shop.width * shop.length;
    });

    volume = data.height * square;
console.log("square" + square);
console.log(volume);
    if (data.budget - (volume * data.moneyPer1m3) >= 0) {
       console.log(data.budget - (volume * data.moneyPer1m3));
        return 'Бюджета достаточно';
    } else {
        console.log(data.budget - (volume * data.moneyPer1m3));
        return 'Бюджета недостаточно';
    }
}

isBudgetEnough(shoppingMallData);