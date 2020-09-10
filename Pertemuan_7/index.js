/*
Conditional
*/

//Syntax dalam menggunakan Conditional adalah kata kunci if,else if dan else
//Contoh 1:
//Jika kondisi nya hanya 1
let NilaiKevin = 90;

if(NilaiKevin > 90){
    console.log("Kevin mendapat nilai A");
}
else{
    console.log("Kevin mendapat nilai dibawah A");
}

//Jika kondisi nya lebih dari 1 maka kita menggunakan "else if"
contoh 2:
let NilaiKevin = 90;

if(NilaiKevin > 91 ){
    console.log("Kevin lulus mata kuliah dengan mendapat nilai A");
}
else if(NilaiKevin >=68 && NilaiKevin <=90){
    console.log("Kevin lulus mata kuliah dengan mendapat nilai dibawah A")
}
else{
    console.log("Nilai kevin tidak cukup untuk tembus mata kuliah")
}

//Jika kondisi telah terpenuhi seperti nilai kevin diatas 91 maka akan di laksanakan kondisi 1(if) jika tidak terpenuhi maka akan mengeksekusi selain
kata kunci (if) maka (else if) yang akan dieksekusi jika kondisi nya mendapat nilai 68-90.Jika tidak ada kondisi yang diatas tidak ada yang
terpenuhi maka kata kunci (else) yang akan dieksekusi.

//kondisional dengan menggunakan kata kunci "switch dan case"
//contoh 1:

let Kevin;
let Hari = SeninRabu;

Switch(Hari){
case "SeninRabu":
  Kevin = "Hari senin dan rabu tidak ada kelas webpro";
  break;
case "SelasaKamis:
  Kevin = "Hari Selasa dan kamis ada kelas webpro";
break;

console.log(Kevin);

}

// kata kunci "Default" dipakai untuk kondisi pada "switch" tidak sesuai kondisi masing-masing
//contoh 2:
let Kevin;
let Hari = SeninRabu;

Switch(Hari){
case "SeninRabu":
  Kevin = "Hari senin dan rabu tidak ada kelas webpro";
  break;
case "SelasaKamis:
  Kevin = "Hari Selasa dan kamis ada kelas webpro";
break;
Default:
Kevin = "Kevin libur";

console.log(Kevin);
}


//Looping(perulangan)
//Syntax yang digunakan dalam looping adalah kata kunci For,For in,For of,While,Do While

//contoh "for"
variabel i sudah terdeklarasi dibawah
for(let i = 1 ; i<=10 ; i++){
    console.log(i);
}
// i <=10 "10" maka perulangan akan sampai 10 kali jika diganti dengan number yang lain maka akan perulangan akan diulang
sebanyak number yang diganti

//contoh "for in"

for(Wtools in PencilCase){
    const PencilCase ={
        Pencil : "Blue pencil",
        Eraser : "White eraser",
        Ruler : "Short ruler"

    };
    for (Wtools in PencilCase){
        console.log("Wtools, ':', PencilCase[Wtools]);
    }
}

//for (Wtools in PencilCase) menyatakan untuk setiap properti "Wtools" yang ada dalam variabel PencilCase maka
jalankanlah perintah "console.log(Wtools, ',' ,PencilCase[Wtools]);

//contoh "for/of loop"
// digunakan untuk mengulang setiap element dari objek yang bisa diulang 
//contoh:

for(a of oflop){
    console.log(a);
}


//contoh While loop
 let a = 1

 While(a <= 10){
     console.log(a);
     a++;
 }

 //while(contohkondisi) berarti ketika kondisi yang ditentukan benar maka akan mengeksekusi semua kode dalam "{}"


 //contoh "Do While" loop

 let a = 1;
 do{
     console.log(a);
     a++;
 }while(a <= 10);