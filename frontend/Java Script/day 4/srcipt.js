function greeting (guest ="guest"){
    console.log(`hii ${guest}`);
}
greeting("ravi");

let obj ={
    name:"Ravi",
    email:"ravikumar@gmail.com"

};
for(let id in obj){
    console.log(obj.id)
};

 function add(a,b){
    return a+b;

}
let ans = (15+6);
console.log(ans);

// part 1
function addUnlimited(...nums){
let sum = 0;
nums.forEach(function (val){
    sum = sum + val;
});
console.log(sum);
}
addUnlimited(1,3,4,5)

//  part 2
// function addUnlimited(...nums) {
//   let ans = nums.reduce(function (acc, val){
//     return acc +val ;
//   },0);
//   console.log(ans);
// }
// addUnlimited(1, 5, 4, 5);


// part 3
// function addUnlimited(...nums) {
//   let ans = nums.reduce(function (acc, val) {
//     return acc * val;
//   }, 0);
//   console.log(ans);
// }
// addUnlimited(1,4, 5);