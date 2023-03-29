//Code your solutions in this file
const fiveToOneHundred = () => {
    for (let i=5; i<=100; i++){
        console.log(i)
    }
}
//fiveToOneHundred()

const multiplesOfThree = () => {
    for (let i=3; i<=100; i=i+3){
        console.log(i);
    }
}
//multiplesOfThree()

const multiplesOfThreeOrFive = () => {
   for (let i=1; i<=100; i++){
       if (i % 3 === 0 || i % 5 === 0){
           console.log(i)
       }
   }
}
//multiplesOfThreeOrFive()

const untilNum = int => {
    for (let i=1; i <= int; i++){
        console.log(i)
    }

}
//untilNum(5)

const multiply = (a,b) => a*b;
//console.log(multiply(3,4))

const add = (a,b) => {
    if (a === b){
    return (a+b)*3
 } else {
     return a + b
}
}
console.log(add(2,4))