const students = ['Peter', 'Andrew', 'Ann', 'Mark', 'Josh', 'Sandra', 'Cris', 'Bernard', 'Takesi', 'Sam', " Arnold" , "Maxim"];

function sortStudentsByGroups(arr) {
const array = [... arr.sort()];
const group1=array.slice(0,3);
const group2=array.slice(3,6);
const group3=array.slice(6,9);
console.log(array);
console.log(group1);
console.log(group2);
console.log(group3);
str="";
if(array.length>9){
for (let i=9; i<=array.length-1; i++){
    str+=array[i] + " ";
}

}
let rest= "Оставшиеся студенты: " + str;
console.log(rest);

let result=[group1,group2,group3,rest ];

console.log(result);
return result;
}

sortStudentsByGroups(students);