const numbers=[5,13,7,41,29,79,30,5,2,19];

const bigNumbers=numbers.filter(number=>number>20)
const smallNumbers=numbers.filter(number=>number<10)
console.log(bigNumbers)
console.log(smallNumbers)
const products=[
    {name:'water bottle',price:50,color:'yellow'},
    {name:'mobile phone',price:510,color:'white'},
    {name:'smart watch',price:60,color:'black'},
    {name:'sticky note',price:250,color:'pink'}
]
//filter full element k dibe array hisebe
//filter sob gulo element k dibe jodi sorto sotti hoi 
const expensive=products.filter(product=>product.price>100)
console.log(expensive)
const blacks=products.filter(product=>product.color=='black')
console.log(blacks)
//find shodhu element ta k dibe , kono array dibe na
//find shodhu 1 ta emement k dibe 
const whiteItem=products.find(product=>product.color=='white')
console.log(whiteItem)