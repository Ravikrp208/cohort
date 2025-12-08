function getUsr (username ,cd){
    setTimeout 
}
async function getData() {
  let result = await fetch("https://example.com");
  console.log(result);
}

function fetchUser() {
  return new Promise((resolve) => {
    setTimeout(() => resolve("User loaded"), 1000);
  });
}

fetchUser().then((result) => console.log(result));
