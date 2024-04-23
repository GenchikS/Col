const a = 4;
const b = 5;
console.log(a+b);

const userName = "Gennadii";
const userWork = userName.length-4;
console.log(userName[3] + userName[7] + userName[5], userName[userWork], userName[userName.length-4]);

// const age = 16;
// const isAdult = age >= 18;
// console.log(isAdult);

console.log((Math.random() * 10).toFixed(3));


// function numberSum(a, b, c){
//    const Abc = a +b +c;
//     return Abc;
// }
// const userSum = numberSum(20, 20 ,30);
// console.log(userSum);    

// function numberSum2(a, b, c){
//     return a * b * c;
//     }
//     const userSum2 = numberSum2(20, 20 ,30);
//     console.log(userSum2); 


    // function makeMessage (name1, price) {
    //      console.log(`You picked ${name1}, price per item is ${price} credits`);
    //      return
    // };
    
    
    function makeMessage (name, price) {
        // name = name;
        // price = price;
        console.log(`You picked ${name}, price per item is ${price} credits`);
        return  
      };
      
      

      makeMessage('Radar', 6150);
    makeMessage('Scanner', 3500);
    makeMessage('Reactor', 8000);
    makeMessage('Engine', 4070)