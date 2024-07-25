let a=5;
let b=4;
console.log("Before swapping a= 5");
console.log("Before swap b= 4");
a=a+b;
b=a-b;
a=a-b;
console.log("After swapping a=", a);
console.log("After swapping b=", b);

console.log("After one more swap: ");
a=a^b;
b=a^b;
a=a^b;
console.log("After swapping a second time=", a);
console.log("After swapping b second time=", b);