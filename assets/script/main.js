const navElement = document.querySelector(".nav__menu");
const closeBtn = document.querySelector(".close");
const toggleBtn = document.querySelector(".toggle__btn");
const navLinks = document.querySelectorAll(".nav__link");

const openMenu = () => {
  navElement.style.left = "0";
};

const closeMenu = (e) => {
  e.preventDefault;
  navElement.style.left = "-100%";
};

navLinks.forEach((link) => {
  link.addEventListener("click", closeMenu);
});
toggleBtn.addEventListener("click", openMenu);
closeBtn.addEventListener("click", closeMenu);

// @@@@@@@@@@@@ Form Submission @@@@@@@@@@@@@

const form = document.getElementById("form");
const result = document.getElementById("result");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const formData = new FormData(form);
  const object = Object.fromEntries(formData);
  const json = JSON.stringify(object);
  result.innerHTML = "Please wait...";

  fetch("https://api.web3forms.com/submit", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: json,
  })
    .then(async (response) => {
      let json = await response.json();
      if (response.status == 200) {
        result.innerHTML = json.message;
        result.style.color = "#19f019";
      } else {
        console.log(response);
        result.innerHTML = json.message;
      }
    })
    .catch((error) => {
      console.log(error);
      result.innerHTML = "Something went wrong!";
      result.style.color = "red";
    })
    .then(function () {
      form.reset();
      setTimeout(() => {
        result.style.display = "none";
      }, 3000);
    });
});
