let con = document.querySelector("#container");
let love = document.querySelector("i");

con.addEventListener("click", function () {
  console.log("button click");

  // Show the heart
  love.style.transform = "translate(-50%, -50%) scale(1)";
  love.style.opacity = 1;
    love.style.color = "red";


  // Hide the heart after 3 sec
  setTimeout(function () {
    love.style.transform = "translate(-50%, -50%) scale(0)";
    love.style.opacity = 0;
 
  }, 3000);
});
