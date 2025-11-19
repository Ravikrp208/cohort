setTimeout(function(){
    console.log("hello java script !")
},2000)//2nd

setTimeout(function () {
  console.log("hello java with dsa !");
}, 5000); //3rd

setTimeout(function () {
  console.log("hello java programming !");
}, 1000);//1st

let btn =document.querySelector('button');
let h1=document.querySelector('h1');

btn.addEventListener('click',function(){
    h1.innerHTML='chinging user.....';
    setTimeout(function(){
        h1.innerHTML ='hello i am Shivam'
    },200)
})