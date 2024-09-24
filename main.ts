function person(){
    console.log("Zakir ali");

}
person();

 function subtract(num1:number,num2:number){
     let z = num1-num2
    console.log(z);
}
subtract(10,10);

// Making biodata of person
function bioData(Name:string,Age:number,profession:string){
    console.log(`my name is ${Name}`);
    console.log(`my age is ${Age}`);
    console.log(`i am a ${profession}`);

}
bioData("Ali",19,"student");

// return function
function sum1(num1:number,num2:number){
let x = num1+num2
return x
}
console.log(sum1(10,10));


// Arrow Function
let sum2=(num3:number,num4:number)=>{
    let c = num3 + num4;
    return c;
}
let u =sum2(9,9);
console.log(u)



