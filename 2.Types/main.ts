function multiply(value1:number, value2:number){
     return value1 * value2;
}

let some: number;
let fun:(va:number,vallll:number)=> number;


let mymultiply : (val: number, val2 : number) => number ;
// mymultiply = "SayHello";
// console.log(mymultiply);
mymultiply = multiply;
// console.log(mymultiply(10,2));
console.log(mymultiply(100,200));

function shyam(name:string, designation:string){
 return `Name is ${name} and Designation is ${designation}`;
}

let t;
t = "Testing 2";
t = shyam;
console.log(t('Shyam Singh' , 'Developer'));

// Objects
let userDate:{Name:String, Age:number, Designation:String} = {
     Name: "Max",
     Age : 20,
     Designation: "Developer"
}
console.log(userDate);

// Complext Object
let Complex: {data:number[] , output:(all:boolean)=> number[]} = {
     data : [100,200,300],
     output: function(all:boolean):number[] {
          return this.data;
     }
}


