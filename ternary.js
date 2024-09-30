/**
 * Ternary --> three parts
 * 
 * ?   :
 * 
 * condition ? do something when true : do something when false
*/
const age = 20;
// if(age >= 18){
//     console.log('You can vote')
// } 
// else{
//     console.log('You cannot vote')
// }

// age >= 18 ? console.log('You can vote') : console.log('You cannot vote')


let price = 500;
const isLeader = false;

if(isLeader === true){
    price = 0;
}
else{
    price = price + 100;
}
// console.log(price);


price = isLeader === true ? 0 : price + 100;

// Semi Advanced Ternary
if( isLeader === true){
    if(price > 1000){
        price = price / 2;

    }
    else{
        price= 0;
    }
}
else{
    price = price + 1000;
}

// Ternary structure of the above code:

price = isLeader === true ? 
     price > 1000 ? 
        price = price / 2 : 0
         : price + 1000;
