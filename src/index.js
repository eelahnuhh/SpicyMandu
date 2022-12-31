function darkMode() {
  let body = document.querySelector("body");

  if (body.classList.contains("dark")) {
    body.classList.remove("dark");
  } else {
    body.classList.add("dark");
  }
}

let button = document.querySelector(".changeTheme");
button.addEventListener("click", darkMode);

function travelWithMe() {
  let firstName = prompt("What is your first name?");
  let lastName = prompt("What is your last name?");
  let answer = prompt("Do you like taking pictures 📸?");
  answer = answer.toLowerCase().trim();
  if (
    answer === "yes" ||
    answer === "maybe" ||
    answer === "yeah" ||
    answer === "sure"
  ) {
    let email = prompt("What is your email address?");
    let emoji = prompt("What is your favorite emoji?");
    alert(
      "Thank you, " +
        firstName +
        " " +
        lastName +
        "! You have been added to the email list! " +
        emoji
    );
  } else {
    alert("Thank you, " + firstName + " " + lastName + "!");
  }
}

let travelButton = document.querySelector(".travelButton");
travelButton.addEventListener("click", travelWithMe);
