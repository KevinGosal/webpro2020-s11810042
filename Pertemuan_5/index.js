/*
 1.Array
 */
 //Deklarasi Array

 let angka = [1, 2, 3, 4, 5, 6, 7, 8];
 console.log(angka);
 let buah = ["Mangga", "Apel", "Jeruk"];
 console.log(buah);

 let arr = ["text",1,true];
 console.log(arr);

 let myFunc = function () {
     return "Hello Array";
 }

 let arr2 = ["text",1,true,myFunc(),[1,2,3,4,5]];
 //Mengakses element dalam Array
 console.log(arr2[2]);
 console.log(arr2[3]);
 console.log(arr2[4][2]);

 console.log(typeof arr2);
 console.log(arr2.length);

 //Deklarasi array menggunakan kata kunci new

 let buah2 = new array("Salak","Jambu","Melon");
 console.log(buah2);

 //Manipulasi Array
 1.Menambah isi Array

 let mhs = [];
 mhs[0] = "John";
 mhs[1] = "Bob";
 mhs[2] = "Jane";
 mhs[3] = "Peter";

 console.log(mhs);

 //
 2. mengubah isi array
 mhs[1] = "Donny";
 console.log(mhs);

 //
 3.Menghapus isi array 
 mhs[2] = undefined;
 console.log(mhs);

 //
 4.Menampilkan isi array 
 let mhs = ["John", "Bob", "Jane", "Peter"];

 5.Looping
 for (let 1 = 0 ; i < mhs.length ; i++){
     console.log("Mahasiswa ke-" + (i + 1) + "adalah")
 }


 //Method dalam array
 //1.length
 //2.toString
  let mhs = ["John", "Bob", "Jane", "Peter"];
  //console.log(mhs.toString());

 //3.Join
 //console.log(mhs.join(" - "));

 //4.push , pop, unshift, shift
 //mhs.push("Mayrra");
 //mhs.push("Stenly");
 //console.log(mhs.join(" - "));
 //mhs.pop();
 //mhs.pop();
 //console.log(mhs,join(" - ")) 