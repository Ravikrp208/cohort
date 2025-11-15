let istatus = document.querySelector("h5");
let addFriend = document.querySelector("#add");
// let removeFriend = document.querySelector("#remove");

let check = 0;
addFriend.addEventListener("click", function () {
  if (check == 0) {
    istatus.innerHTML = "Friends";
    istatus.style.color = "green";
    addFriend.innerHTML = "Remove Friend";
    console.log("friends");
    check = 1;
  } else {
    istatus.innerHTML = "stranger";
    istatus.style.color = "red";
    addFriend.innerHTML = "Add Friend";
    console.log("unfriends");
    check = 0;
  }
});
