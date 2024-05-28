function getData() {
    return new Promise((resolve , reject) =>{
        setTimeout(() =>{
            resolve(455)
        }, 3000)
    })
};

console.log("load data");

let data =  await getData();
console.log(data);
console.log("process data");
console.log("task 2");