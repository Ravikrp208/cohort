let btn = document.querySelector("button");
let main = document.querySelector("main");

btn.addEventListener("click", function () {


  let div = document.createElement("div");

  div.style.height = "50px";
  div.style.width = "50px";
  div.style.backgroundColor = "red";

  console.log(div);

  main.append(div);
});
