const numbers=[23, 65, 99, 21, 34]
console.log(numbers)
//array thekey upadan gulo k extract kortey pari 
// console.log(...numbers)
const max=Math.max(23,99,65)
// console.log(max)
console.log(Math.max(...numbers))


const numbers2=[[23, 65, 99, 21, 34]]
console.log(Math.max(...numbers2))//NaN ashbe 


const numbers3=[...numbers,88];//notun array hbe r puraton array k change korbe na 
numbers.push(55);
console.log(numbers3)