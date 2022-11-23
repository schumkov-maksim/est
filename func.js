// Место для первой задачи
function getTimeFromMinutes(minuten) {
let zeit=0;
let chas=0; 
let minuta=0;
let str;
let ausgabe;

if(minuten <0 || typeof(minuten)!="number" )
console.log("Ошибка, проверьте данные");
else{  
chas = Math.floor(minuten/60);
switch (chas) {
    case 0:
        str="часoв";
        break;
    case 1:
            str="час";
            break;
    case 2:
    case 3:
    case 4:
            str="часа";
             break;
    default:
        str="часoв";
        break;
}
minuta= minuten%60;
ausgabe = "Это "+ chas + " " + str +" и " + minuta+ " " + "минут";
// console.log(`Это ${chas} ${str} и ${minuta} минут `);
console.log(ausgabe);
return ausgabe;
}  
}
getTimeFromMinutes(50); //=> "Это 2 часа и 30 минут"