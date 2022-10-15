function fibonacci(number: number): number {
    if (number < 2) return number;
    return fibonacci(number - 1) + fibonacci(number - 2);

}

let size: number = 10;
let sum: number = 0;
let arr: Array<number> = [];
for (let i = 0; i < 10; i++) {
    arr.push(fibonacci(i));
    sum += fibonacci(i);
}
console.log(arr);
console.log(sum);



// function strFibonaccy(count: number): string {
//     let firstNumber: number = 0;
//     let secondNumber: number = 1;
//     let nextNumber: number;
//     let sum: number = firstNumber + secondNumber;
//     let fibos:Array<number> =[0,1];
//     for (let i = 2; i < count; i++) {
//         nextNumber = firstNumber + secondNumber;
//         fibos.push(nextNumber);
//         sum += nextNumber;
//         firstNumber = secondNumber;
//         secondNumber = nextNumber;
//     }
//     return "Tong so fibo:"+ sum
//         + " Day fibo: " + fibos;
// }
// console.log(strFibonaccy(6));

