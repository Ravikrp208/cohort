// there are many type of error handling in java Script

try {
    let a=12;
    console.log(a);

}
catch (error){
    console.log(error);
}
finally
{
  console.log("Ravi kumar pandit")

}




// 1. Promises how to return data? //


const userlist = [
  "ravikrp208@gmail.com",
  "ranikr403@gmail.com",
  "shiavam203@gmailcom",
];

// Fake email sender (returns a Promise)
function sendEmail(email) 
{
  return new Promise((resolve, reject) => 
    {
    let time = Math.floor(Math.random() * 5); 

    setTimeout(() =>
       {
      let probability = Math.floor(Math.random() * 10);

      if (probability <= 5)
         resolve(`Email successfully sent to ${email}`);
      else
         reject(`Email NOT sent to ${email}`);
    }, time * 1000);
  });
}

// Function to send email to list

function sendEmails(userlist) {
  let allResponses = userlist.map((email) => {
    return sendEmail(email)
      .then((data) => {
        console.log(data);
        return data;
      })
      .catch((err) => {
        console.log(err);
        return err;
      });
  });

  // Wait for all Promises
  
  Promise.allSettled(allResponses).then((res) => {
    console.log("\nFinal Results:");
    console.log(res);
  });
}

sendEmails(userlist);

// Question 2. how to cheak weather //


// async function getWeather(city) {
//   try {
//     const apikey = "b92e57938eaebc6ded1fcf3a2f5b4bc3";

//     const raw = await fetch(
//       `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=metric`
//     );

//     if (!raw.ok) {
//       throw new Error("City not found or something went wrong.");
//     }

//     const real = await raw.json();
//     const temp = real.main.temp;

//     if (temp < 0) {
//       console.warn(`Too Cold out there... ${temp}°C`);
//     } else if (temp > 32) {
//       console.warn(`Too Hot out there... ${temp}°C`);
//     } else {
//       console.log(real);
//     }
//   } catch (err) {
//     console.log(err.message);
//   }
// }

// getWeather("Mumbai");
// getWeather("Delhi");
// getWeather("London");
// getWeather("New York");
// getWeather("Tokyo");
// getWeather("Dubai");
// getWeather("Patna");


// 2nd method

const apikey = "b92e57938eaebc6ded1fcf3a2f5b4bc3";

async function getWeather(city) {
  try {
    const raw = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=metric`
    );

    if (!raw.ok) {
      throw new Error("City not found or something went wrong.");
    }

    const data = await raw.json();
    return data;
  } catch (err) {
    throw err;
  }
}

const tableBody = document.querySelector("#weatherTable tbody");
const searchBtn = document.getElementById("searchBtn");
const cityInput = document.getElementById("cityInput");
const errorDiv = document.getElementById("error");

searchBtn.addEventListener("click", async () => {
  const city = cityInput.value.trim();
  errorDiv.textContent = "";
  if (!city) return;

  try {
    const data = await getWeather(city);

    const row = document.createElement("tr");

    row.innerHTML = `
      <td>${data.name}</td>
      <td>${data.main.temp}°C</td>
      <td>${data.weather[0].description}</td>
      <td><img src="http://openweathermap.org/img/wn/${data.weather[0].icon}.png" alt="icon"></td>
    `;

    tableBody.appendChild(row);
    cityInput.value = "";
  } catch (err) {
    errorDiv.textContent = err.message;
  }
});
