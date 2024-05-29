// function getData() {
//     return new Promise((resolve , reject) =>{
//         setTimeout(() =>{
//             resolve(455)
//         }, 3000)
//     })
// };


//ASYNC AWAIT 
// async function getData() {
//     let x =  await fetch('https://jsonplaceholder.typicode.com/todos/1')
//    let data = await x.json();
//    console.log(data);
// };


// async function main() {
//     console.log("load data");

//     let data = await getData();
//     console.log(data);
//     console.log("process data");
//     console.log("task 2");
// }

// main()

//TRY CATCH

// setTimeout(() =>{
//     console.log("loading your wifi .. please wait ...!");
// } , 1000)


// try{

//     console.log(kaif);
// }catch(error){
//     console.log(error);
// }

// setTimeout(() =>{
//     console.log("detect your virus in wifi .. please wait ...!");
// } , 2000)

// setTimeout(() =>{
//     console.log("confirmed connect in  your wifi .. you are login");
// } , 5000)


try {
    throw new ReferenceError("kaif is not good is coding")
    console.log();
}

catch(error){
   console.log( error.name);
   console.log( error.message);
}