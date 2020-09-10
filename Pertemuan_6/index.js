/*
   object
*/

//const mahasiswa1 = ["John", "Doe", 31, true];

/*
cara  mendeklarasikan object 1
*/
const mhs1 = {
    namaDepan: 'John',
    namaBelakang: 'Doe',
    umur: 31,
    sudahLulus: true,
    alamat : {
        jalan: "jalan sby",
        kecamatan: "Airmadidi",
        kabupaten: "Minut",
    },
    IPsemester : [3.1, 4.0, 3.5, 3.8 ],
    hitungIPK: function(){
        let total = 0;
        this.IPsemester.forEach(function (th)){
            total = total + th;
        }
        this.IPKumulatif = total / 4;
    }
};
object dalam object "nested"


/*
cara 2  pake kata kunci 'new'
*/
const mhs2 = new Object();
mhs2.namaDepan = "Jane";
mhs2.namaBelakang = "Smith"

//Mengakses properti object
//1. Dot notation
console.log(mhs1.umur);
//2. Bracket notation
console.log(mhs1["namaBelakang"]);


//fungsi dalam sebuah array disebut "method"
//menghapus properti dari object pakai "Delete"

//Array Object (JSON)

const mahasiswa = [
    {
        nim "001",
        namaDepan: "John",
        namaBelakang: "Doe",
    },
    {
        nim "002",
        namaDepan: "Jane",
        namaBelakang: "Smith",
    },
    {
        nim "003",
        namaDepan: "kevin",
        namaBelakang: "Gosal",
    },
];
