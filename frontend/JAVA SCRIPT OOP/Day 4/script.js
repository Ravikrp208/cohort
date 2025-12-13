// 1 Question
async function first() {
  return "Hello";
}

async function second() {
  let msg = await first();
  console.log(msg); // Hello
}

second();

// 2nd Question

function instagram(username, cd) {
  setTimeout(function () {
    cd({ id: 1, username: "Ravi kumar pandit", age: 24 });
  }, 2000);
}
instagram("Ravi", function (data) {
  console.log(data);
});

// 3 third Question

function loginUser(username, cd) {
  console.log("logging in user......");
  setTimeout(() => {
    cd({ id: 1, username: "Ravi kuamr" });
  }, 1000);
}
function fetPermissions(id, cd) {
  console.log("fetching permissions.....");
  setTimeout(() => {
    cd(["read", "write", "delete"]);
  }, 2000);
}
function loadDashboard(permissions, cd) {
  console.log("loading dashboard......");
  setTimeout(() => {
    cd({});
  });
}

loginUser("Ravi krp", function (userdata) {
  fetPermissions(userdata.id, function (permissions) {
    loadDashboard(permissions, function () {
      console.log(" dashboard loaded ");
    });
  });
});
