const submitBtn = document.querySelector(".btn--form");

const nodemailer = require("nodemailer");
const transporter = nodemailer.createTransport({
  service: "hotmail",
  auth: {
    user: "caretrackerhelp@outlook.com",
    pass: "Caretracker@help",
  },
});

function fun(e) {
  e.preventDefault();
  alert("Thanks for contacting us. We will get back to you soon.");
}

submitBtn.addeventListener("click", fun);

// submitBtn.addeventListener("click", (e) => {
//   alert("Thanks for contacting us! We will get back to you shortly.");
// });

// submitBtn.addEventListener("click", function (e) {
//   alert("Thanks for contacting us. We will get back to you shortly.");
//   e.preventDefault();
//   const name = document.getElementById("full-name").value;
//   const email = document.getElementById("email").value;
//   if (name !== "" || name !== " " || name !== "undefined" || name !== null) {
//     if (
//       email !== "" ||
//       email !== " " ||
//       email !== "undefined" ||
//       email !== null
//     ) {
//       alert("hjndsk");
//       const options = {
//         from: "caretrackerhelp@outlook.com",
//         to: "pratikpendurkar10@gmail.com",
//         subject: "Care Tracker Form Submission",
//         text: `Hii my name is ${name} \n Please contact me here Email: ${email}`,
//       };
//       transporter.sendMail(options, function (error, info) {
//         if (error) {
//           console.log(error);
//         } else {
//           console.log("Email sent: " + info.response);
//         }
//       });
//     }
//   }
// });
