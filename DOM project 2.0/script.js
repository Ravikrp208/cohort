var allELems = document.querySelectorAll(".elem");
var allFullElemPage = document.querySelectorAll(".fullElem");
var allFullElemPageBackBtn = document.querySelectorAll(".fullElem .back");

allELems.forEach(function (elem) {
    elem.addEventListener("click", function () {
    allFullElemPage[elem.id].style.display = "block";
  });
});

allFullElemPageBackBtn.forEach(function (back) {
  //   console.log(bback);
    back.addEventListener("click", function () {
    allFullElemPage[back.id].style.display = "none";
  });
});
