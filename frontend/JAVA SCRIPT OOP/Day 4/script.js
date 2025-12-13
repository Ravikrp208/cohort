async function first() {
  return "Hello";
}

async function second() {
  let msg = await first();
  console.log(msg); // Hello
}

second();

function instagram(username , cd){

  setTimeout (function (){
    cd({ id: 1, username: "Ravi kumar pandit", age: 24 });
  },2000)
  
}
instagram("Ravi",function (data){
  console.log(data)
})