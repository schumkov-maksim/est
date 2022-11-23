// "use strict";


const arr = [3, 5, 8, 16, 20, 23, 50];
const result = [];
for (let i=0; i<arr.length; i++){
    result[i]=arr[i];
}
console.log(result.toString());


const data = [5, 10, 'Shopping', 20, 'Homework'];

for (let i=0; i<data.length;i++){
    if(typeof(data[i])=="number"){
        data[i]= data[i]*2;
    }
    if(typeof(data[i])=="string"){
        data[i]= data[i]+ " - done";
    }
}
console.log(data);


const data2 = [5, 10, 'Shopping', 20, 'Homework'];
let result2 = [];
result2 = data2.reverse();
console.log(result2);