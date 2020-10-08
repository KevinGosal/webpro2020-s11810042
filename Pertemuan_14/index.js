// Destructuring Array

// let buah = ["berry", "banana", "orange"];

// let buah1 = buah[0];
// let buah2 = buah[1];
// let buah3 = buah[2];

// console.log(buah1); // Output: berry
// console.log(buah2); // Output: banana
// console.log(buah3); // Output: orange
// console.log(hitung(1, 2, 3, 4, 5, 6, 7));

// let buah = ["berry", "banana", "orange"];

// lakukan destrukturisasi array
// let [buah1, buah2, buah3] = buah;

// console.log(buah1); // Output: berry
// console.log(buah2); // Output: banana
// console.log(buah3); // Output: orange

//Contoh Destructuring Array ES6
// let[firstName, , lastName, , Hobby] = ["Kevin","AR","Gosal","Sleeping","Gaming"]
// console.log(firstName);
// console.log(lastName);
// console.log(Hobby);

// Cara menukar 2 variable atau lebih
// Cara lama
// let a = 20;
// let b = 15;

// variabel tambahan sementara
// let temp = a;
// a = b; // nilai a sekarang adalah 20
// b = temp; // nilai b sekarang adalah 15

// Cara new
// let a = 20;
// let b = 15;

// [a,b] = [b,a];
// nilai a sekarang adalah 15, dan nilai b adalah 20

// Destructuring Objek
// Cara lama

// let Person = {
//   nama: "Kevin",
//   umur: 20,
//   masihKuliah: true
// };

// let nama = Person.nama;
// let umur = Person.umur;
// let masihKuliah = Person.masihKuliah;

// console.log(nama); 
// console.log(umur); 
// console.log(masihKuliah); 

// Cara baru
// let orang = {
//   nama: "Kevin",
//   umur: 20,
//   masihKuliah: true
// };

// Destructuring Objek
// let { nama, umur, masihKuliah } = Person;

// console.log(nama); // Output: Kevin
// console.log(umur); // Output: 20
// console.log(masihKuliah); // Output: undefined karena nama variabel dan properti berbeda

//Jika nama variablenya berbeda dengan nama properti :
// let {
//   namaProperti1: namaVariabelBaru1,
//   namaProperti2: namaVariabelBaru2
// } = namaObjek;

// Contoh

// let Person = {
//   name: "Kevin",
//   age: 20,
// };

// buat variabel nama berisi nilai dari properti name pada orang
// buat variabel age berisi nilai dari properti umur pada orang
// let { name: nama, age: umur } = Person;

// console.log(nama); // Output: Kevin
// console.log(umur); // Output: 20

// Destructuring Objek bertingkat

// Contoh


  // let Asus = {
  //    Merk: "Rog",
  //    name : ["Strix", "Zephyrus", "Motherboard"],
  //    Prosesor : {
  //        Intel: "Intel i7",
  //        Amd: "Ryzen 7"
  //    }
 // };
  
//  let {
//    Prosesor: { Amd }
//  } = Asus;
  
//  console.log(Amd); // Output: Ryzen 7