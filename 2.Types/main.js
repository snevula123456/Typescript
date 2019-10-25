"use strict";
function multiply(value1, value2) {
    return value1 * value2;
}
var some;
var fun;
var mymultiply;
// mymultiply = "SayHello";
// console.log(mymultiply);
mymultiply = multiply;
// console.log(mymultiply(10,2));
console.log(mymultiply(100, 200));
function shyam(name, designation) {
    return "Name is " + name + " and Designation is " + designation;
}
var t;
t = "Testing 2";
t = shyam;
console.log(t('Shyam Singh', 'Developer'));
// Objects
var userDate = {
    Name: "Max",
    Age: 20,
    Designation: "Developer"
};
console.log(userDate);
// Complext Object
var Complex = {
    data: [100, 200, 300],
    output: function (all) {
        return this.data;
    }
};
