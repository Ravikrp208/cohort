// function abcd(A,B){

//     console.log(A+B);
// }
// abcd(1,2)
// // abcd(1,2)
// // abcd(1, 2);
// // abcd(1,2)

// let global =0;
// function inpure(a) {
//   console.log(a + global);
// }
// global++;
// inpure(2);
// inpure(4);

let user = {
  name: "ravi",
  age: 23,
  email: "ravikaarp@gmail.com",
};
// Object.freeze(user);
Object.seal(user);
user.age=25;
user.name="rani";

