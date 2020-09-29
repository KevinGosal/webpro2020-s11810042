//Arrow function
//Untuk mempersingkat penulisan code

const calAge = (year) =>{
    return 2020 - year;
}

//kata kunci "function" di dihapus dan didepan parameter dipakai ekspresion "=>"

const calAge = (birthYear, curentYear) => {
    return currentYear - currentYear;
}
//Lebih dari 1 parameter

const calAge =() => 2020 -2021;

console.log(calAge());
//No argument with implicit return value


const years = [1990,2001,2005,2011];

const calAge5 = year.map(function(el)){
    return 2020 - el;
});
//Tanpa penggunaan arrow function

const calAge6 = years.map((el)=> 2020 - el);
console.log(calAge6);
//Menggunakan Arrow function


//Default parameter

const calAge = (birthYear, curentYear = 2020) =>  currentYear - birthYear;
console.log(calAge(2000,2001));





