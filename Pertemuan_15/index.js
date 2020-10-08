// Destructuring
// Fungsi nya mengekstrak/memecah element2 pada array dalam variabel yang berbeda//

// 1. Array

const colors = ["Merah","Kuning","Hijau"];

// let satu = colors[0];
// let dua = colors[1];
// let tiga = colors[2];

// let [satu ,dua ,tiga] = colors;
// console.log(satu , dua, tiga);

// let [satu ,tiga] = colors;
// console.log(satu , tiga);

//2. Object

const user = {
name: "John",
gender: "male",
age:23,
};

// let name = user.name;
// let gender = user.gender;
// let age = user.age;

// let {name , gender, age} = user;
// console.log(name, gender, age);

// let { name, gender, age, born ="Manado"} = user;
// console.log(name, gender, age, born);

// let {name, age} = user;
// console.log(name, age);

// let {name: nama, age: umur} = user;
// console.log('Nama saya adalah ${name}.Umur saya adalah ${age}');
// };

// Display(user);

// 3.Array Object

//const user = {
//    {id: 1, name: "John"},
//    {id: 2, name: "Kevin"},
//    {id: 3, name: "Bob"},
// };

// let [user1, user2, user3] = user;
// console.log(user1, user2, user3);

//let[
//    {id: idUser1, name: nameUser1},
//    {id: idUser2, name: nameUser2},
//    {id: idUser3, name: nameUser3},
//  ] = user;
//console.log(idUser1, nameUser1);

// 4.Kombinasi dengan Rest operator

const colors = ["merah", "kuning", "hijau", "biru"];

let [satu, ...lainnya] = colors;

console.log(satu);
console.log(lainnya);