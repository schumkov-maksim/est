const family = ['Peter', 'Ann', 'Alex', 'Linda'];
// const fam =[];

function showFamily(arr) {
    let str = "Семья состоит из:";
    let name;
    if (arr.length==0){
        console.log( 'Семья пуста')
    }
    else{
    //  for (let i=0; i<arr.length; i++){
    //     name = arr[i];
    //     str+= " " + name;
    //  }

    arr.forEach(element => {
        str+=element+" ";
    });
    }
   

    console.log(str);
}


// showFamily(family); // => 'Семья состоит из: Peter Ann Alex Linda'



const favoriteCities = ['liSBon', 'ROME', 'miLan', 'Dublin'];

function standardizeStrings(array) {
array.forEach(element =>{
    // console.log(element.toLocaleLowerCase());
});
}

// standardizeStrings(favoriteCities);



const someString = 'This is some strange string';
someString.split
function reverse(str) {

// console.log(str.split(""));
}



reverse(someString);



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
let squre=0;
let volume=0;
let zatrat=0;
let genug;
let {shops}= shoppingMallData;
console.log(shops);
shops.forEach(key=>{
     squre+=key.width * key.length;
});
console.log("Squre=  " +squre);

volume=squre*data.height;
console.log("volume= " + volume);

zatrat= volume*data.moneyPer1m3;
console.log("Money " + zatrat);
if (zatrat>data.budget){
    genug=false;
    console.log("Бюджета недостаточно");
}
else
console.log("Бюджета достаточно");
}

isBudgetEnough(shoppingMallData); //53+27 =80


