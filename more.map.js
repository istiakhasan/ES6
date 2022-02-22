const friends=['Tom Hanks', 'Tom Cruise', 'Tom brandy', 'Tom Solaiman'];
const fLengths=friends.map(friend=>(

    friend.length
    )
)
console.log(fLengths)


const products=[
    {name:'water bottle',price:50,color:'yellow'},
    {name:'mobile phone',price:510,color:'white'},
    {name:'smart watch',price:60,color:'black'},
    {name:'sticky note',price:250,color:'pink'}
]

const productsName=products.map(product=>product.name);
const productsPrice=products.map(product=>product.price);
products.map(product=>console.log(product));
console.log(productsName)
console.log(productsPrice)

products.forEach(product=>console.log(product))