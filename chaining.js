//declare variable based on the name of an object property
const myObject = {
    x: 2,
    Y: 50,
    z: 600,
    a: 25,
    b: 68
};
const {
    x
} = myObject;
console.log(x)

//destructuring array
const [p, q] = [45, 37, 91, 86]
console.log(p, q)



const [best, faltu] = [45, 56]
console.log(best, faltu)


const {
    sky,
    color,
    money
} = {
    sky: 'blue',
    soil: 'mati',
    color: 'red',
    money: 500
}



const company = {
    name: 'Gp',
    ceo: {
        id: 1,
        name: 'ajmol',
        food: 'fuchka'
    },
    web: {
        work: 'Website development',
        employee: 22,
        framework: 'react',
        tech: {
            first: 'html',
            second: 'css',
            third: 'js'
        }
    }
}

console.log(company.web.tech.third)
console.log(myObject?.p?.q)