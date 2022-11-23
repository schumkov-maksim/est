// "use strict"

// const personalPlanPeter = {
//     name: "Peter",
//     age: "29",
//     skills: {
//         languages: ['ru', 'eng'],
//         programmingLangs: {
//             js: '20%',
//             php: '10%'
//         },
//         exp: '1 month'
//     }
// };

// function showExperience(plan) {
// // console.log(plan.skills.exp);
// }
// showExperience(personalPlanPeter);


// function showProgrammingLangs(plan) {
//     let {programmingLangs}= personalPlanPeter.skills;
//     let text =" ";
//     for (const key in programmingLangs) {
    
//     text+= `Язык ${key} изучен на ${programmingLangs[key]} `;
       
//     }
//     console.log(text);
//  }

// showProgrammingLangs(personalPlanPeter);
// // // "Язык js изучен на 20% Язык php изучен на 10%"
// // console.log(a);


// function showProgrammingLangs(plan){
// let [ru , eng]= plan.skills.languages;
// let text=`Мне ${plan.age} и я владею языками: ${ru.toUpperCase()} ${eng.toUpperCase()} `;
// return text;
// }

// // 'Мне 29 и я владею языками: RU ENG'
// showProgrammingLangs(personalPlanPeter);



// let num =4;
//  function zahl (){
//    let num = 123;
//     console.log(num);
//  }

//  zahl();

//  num=7;


//  for (let i =0; i<10; i++){
//     let sum= 3+ (i+2);
//     console.log(sum);
//  }


const restorantData = {
    menu: [
        {
            name: 'Salad Caesar',
            price: '14$'
        },
        {
            name: 'Pizza Diavola',
            price: '9$'
        },
        {
            name: 'Beefsteak',
            price: '17$'
        },
        {
            name: 'Napoleon',
            price: '7$'
        }
    ],
    waitors: [
        {name: 'Alice', age: 22}, {name: 'John', age: 24}
    ],
    averageLunchPrice: '20$',
    openNow: true
};

 function isOpen(prop) {
    let answer = '';
    prop ? answer = 'Открыто' : answer = 'Закрыто';

    return answer;
}

console.log(isOpen(restorantData.openNow));

function isAverageLunchPriceTrue(fDish, sDish, average) {
    if (+fDish.price.slice(0, -1) + (sDish.price.slice(0, -1)) < +average.slice(0, -1)) {
        return 'Цена ниже средней';
    } else {
        return 'Цена выше средней';
    }
}

console.log(isAverageLunchPriceTrue(restorantData.menu[0], restorantData.menu[1], restorantData.averageLunchPrice));


function transferWaitors(data) {
    const copy = Object.assign({}, data);

    copy.waitors = {name: 'Mike', age: 32};
    console.log( copy.waitors[0]);
    return copy;
}

transferWaitors(restorantData);
