class Suppor{
    name;
    designation='Support Web Dev';
    address='BD';
    constructor(name,address){
     this.name=name;
     this.address=address;
    }
    startSession(){
        console.log(this.name,'Start a support session');
    }
}



const amir=new Suppor('Amir','BD');
const solaiman=new Suppor('Solaiman','Dubai');
amir.startSession('Amir');
solaiman.startSession('Solaiman');
console.log(amir)
console.log(solaiman)