// "use strict";
const numberOfFilms = +prompt("Wei viel Filmen haben Sie schon gesehen");
console.log(numberOfFilms + typeof(numberOfFilms));

let personalMovieDB={
    count: numberOfFilms,
    movies:{},
    actors:{},
    genres:[],
    private: false    
};

let film1=prompt("Letzte Film");
let bewertung1=prompt("Ihre bewertung");
let film2=prompt("Letzte Film");
let bewertung2=prompt("Ihre bewertung");

personalMovieDB.count=numberOfFilms;
personalMovieDB.movies[film1]=bewertung1;
personalMovieDB.movies[film2]=bewertung2;
console.log(personalMovieDB);

