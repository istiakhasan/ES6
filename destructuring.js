const fish={id:58, name:'king hilsha',price:9000,phone:'01885585',address:'Chadpur',dress:'sllver'}



// const {price,name,id,address}=fish
const {price,name,id,address}={id:58, name:'king hilsha',price:9000,phone:'01885585',address:'Chadpur',dress:'sllver'}
console.log(price)


const company={name:'Gp',ceo:{id:1,name:'ajmol',food:'fuchka'},
web:{work:'Website development',employee:22,framework:'react'}}


// const work=company.web.work
// const framework=company.web.framework
const {work,framework}=company.web;
const {food}=company.ceo;
console.log(work,framework,food)
