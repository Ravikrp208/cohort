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




//Promises how to return data? //


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




