class TeamMember{
    name;
    designation='Support Web Dev';
    address='BD';
    constructor(name,address){
     this.name=name;
     this.address=address;
    }

}
class Suppor extends TeamMember{
     groupSupportTime;
     constructor(name,address,time){
         super(name,address);
         this.groupSupportTime=time;
     }
    startSession(){
        console.log(this.name,'Start a support session');
    }
}

//javascript a  akta object thekey r akta object ar property gulo j share hocche seita akta chain dia kaj hoi , takei protopypical inheritance bole

class StudentCare extends TeamMember{
   

    buildARoutine(student){
        console.log(this.name,'Build a routine for ',student)
    }
}

class NeptuneDev extends TeamMember{
    codeEditor;
    constructor(name,address,editor){
        super(name,address)
       this.codeEditor=editor;
    }


    releaseApp(version){
        console.log(this.name,'Build a routine for ',version)
    }
}



// const amir=new Suppor('Amir','BD');
// const solaiman=new Suppor('Solaiman','Dubai');
// amir.startSession('Amir');
// solaiman.startSession('Solaiman');
// console.log(amir)
// console.log(solaiman)

// const alia=new StudentCare('Alia Bhatt', 'Mumbai')
// console.log(alia)
// alia.buildARoutine('Karim')
const ash=new NeptuneDev('Ash','Mumbai', 'Android studio');
ash.releaseApp('1.4.5')
console.log(ash)