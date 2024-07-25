let a=5;
let b=4;
console.log("Before swapping a= 5");
console.log("Before swap b= 4");
//By addition and subtraction
a=a+b;
b=a-b;
a=a-b;
console.log("After swapping a=", a);
console.log("After swapping b=", b);

console.log("After one more swap: ");
//By using XOR operator
a=a^b;
b=a^b;
a=a^b;
console.log("After swapping a second time=", a);
console.log("After swapping b second time=", b);
