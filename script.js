// function getData() {
//     return new Promise((resolve , reject) =>{
//         setTimeout(() =>{
//             resolve(455)
//         }, 3000)
//     })
// };

async function getData() {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())
    .then(json => console.log(json))
};


async function main() {
    console.log("load data");

    let data = await getData();
    console.log(data);
    console.log("process data");
    console.log("task 2");
}

main()