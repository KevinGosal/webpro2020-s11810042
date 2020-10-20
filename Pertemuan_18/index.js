//Javascript Asynchronous

//Contoh callback hell
// Operasi nya berurut dengan kata lain Async 2 menunggu 1 untuk beroperasi dan seterusnya 
//const second =() =>{
//    const num = 10;
//    setTimeout{() =>{
//        console.log(`Async 1`);
//        console.log(num);
//        setTimeout(() => {
//            console.log(`Async 2`);
//            setTimeout(() =>{
//                console.log(`Async 3`);
//            }, 2000)
//        }, 2000)
//    }, 2000, num)
//}

//const first =() => {
//    console.log(`First`);
//    second();
//    console.log(`The end`);
//}

//first();

//Dalam ES6"Promise" merupakan proxy untuk nilai masa depan(future) yang belum diketahui saat pembuatan Promise tersebut
//Cara membuat Promise

//const getData = new Promise((resolve, reject) =>{
//    setTimeout(() => {
//        const error = true;
//        if(error){
//            reject(`Success`);
        }
//        else{
//        resolve(`Erorr`);
        }
//    }, 2000);
    
// })
//Chain Promise

//const getName = id => {
//    return new Promise((resolve, reject) => {
//        setTimeout(() => {
//            resolve(`ID: ${id} Success`)
 //       }, 2000)
//    })
// }

//getData()
//.then(success => console.log(success))
//.catch(error => console.log(error))

//getData()
//.then(id => getName(id).then(success => console.log(success)))
//.catch(error => console.log(error))

//Await
//const getNameById = async () => {
 //   try{
 //   const id = await getData();
 //   const success = await getName(id);
 //   console.log(id);
 //   }
 //   catch(error) {
 //       console.log(error)
 //   }
// }
//const getNameById = async () => {
    //   try{
    //   id = await getData();
    //   success = await getName(id);
    //   console.log(success);
    //   }
    //   catch(error) {
    //       console.log(error)
    //   }
    // return success;
   // }

// getNameById().then() => console.log(result));