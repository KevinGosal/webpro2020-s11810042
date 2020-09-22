//Var, Let, Const
var nama = "kevin";
var nama = "Gosal";

console.log(nama);
// output tidak ada eror walaupun variabel nama sudah 
//dideklarasikan lebih dari 1kali

let nama = "kevin";
let nama = "Gosal";

console.log(nama);
//akan terjadi eror dalam variabel nama karena sudah dideklarasi lebih dari satu kali


//Scope dalam javascript
//1. Function scope(var)
//2. Block scope

//IIFE
(Function tes(){
    for (var 1 = 0 ; i < 10 ; i++ ){
        console.log(i);
    }
})();

console.log(i);


//Template Literal

const person = {
    firstName: "Kevin",
    LastName: "Gosal",
    Age : 33,
};

console.log(
    `Hallo nama saya ${person.FirstName} ${person.LastName}. Umur saya adalah ${person.Age}`);