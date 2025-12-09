fetch("https://randomuser.me/api/")
  .then((raw) => raw.json())
  .then((data) => {
    console.log(data); 
    console.log(data.results[0].name.first); 
  })
  .catch((err) => {
    console.log(err);
  });


let h1 = document.querySelector('h1');
h1.addEventListener("click" ,function(){
  console.log(this.innerHTML)
  this.style.backgroundColor="yellow";
});

let btn = document.querySelector ('button');
btn.addEventListener("click",function (){
  console.log("button was click")
})

console.info("i am a software developer")