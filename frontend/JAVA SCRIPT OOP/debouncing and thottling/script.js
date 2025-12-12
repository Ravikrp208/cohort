function debounce(fun, delay) {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fun.apply(this, args);
    }, delay);
  };
}

document.querySelector("#search").addEventListener(
  "input",
  debounce(function () {
    console.log("User stopped typing...");
  }, 500)
); 

//what is json parse
/*let jsonString = '{"name":"Ravi","age":25}';
 let obj = JSON.parse(jsonString);

console.log(obj.name);*/ 
// Ravi

//what is stringify
let obj = { name: "Ravi", age: 25 };
let jsonString = JSON.stringify(obj);

console.log(jsonString);

// {"name":"Ravi","age":25}


