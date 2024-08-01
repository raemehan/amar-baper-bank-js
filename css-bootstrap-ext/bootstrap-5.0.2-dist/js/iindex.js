function fiboCyle(number){
let fibonum = [0, 1];
for(let i = 2; i <= number; i++){
    fibonum[i] = fibonum[i - 1] + fibonum[i - 2];
}
return fibonum;
}
console.log(fiboCyle(10));

function factorial(number){
    let fact = 1;
    for(let i = 1; i < number; i++){
       fact = fact * i;
    } 
    return fact;
}
console.log(factorial(10));