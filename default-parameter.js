function add(num1,num2=0){//default parameter
    //============================option 1
    // if(num2==undefined){
    //     num2=0;
    // }
    // =================option 2
    // num2=num2 || 0;
    const total=num1+num2;
    return total;
}


const result=add(15,17)
const result=add(15)//output 15
console.log(result)