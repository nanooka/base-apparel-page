const email = document.getElementById("email-input");
const error = document.getElementById("email-validation");
const submitButton = document.getElementById("submit-button");

let mailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

function testMail(input) {
  if (mailRegex.test(input.value)) {
    console.log("this is true");
    input.classList.add("correct");
    input.classList.remove("error");
    error.firstElementChild.style.display = "none";
    error.lastElementChild.style.display = "block";
  } else if (!mailRegex.test(input.value)) {
    console.log("this is false");
    input.classList.add("error");
    input.classList.remove("correct");
    error.firstElementChild.style.display = "block";
    error.lastElementChild.style.display = "none";
  }
}
submitButton.addEventListener("click", (event) => {
  event.preventDefault();
  testMail(email);
  console.log("clicked");
});

// function ValidateEmail(mail) {
//   if (
//     /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(myForm.emailAddr.value)
//   ) {
//     return true;
//   }
//   alert("You have entered an invalid email address!");
//   return false;
// }
