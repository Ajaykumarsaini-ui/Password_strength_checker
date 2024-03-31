const indicator = document.querySelector(".indicator");
const input = document.querySelector("input");
const weak = document.querySelector(".weak");
const medium = document.querySelector(".medium");
const strong = document.querySelector(".strong");
const text = document.querySelector(".text");
const showBtn = document.querySelector(".showBtn");
let regExpWeak = /[a-z]/;
let regExpMedium = /\d+/;
let regExpStrong = /.[!,@,#,$,%,^,&,*,(,)]/;

function trigger() {
  if (input.value != "") {
    indicator.style.display = "block";
    indicator.style.display = "flex";
    if (
      input.value.length <= 3 &&
      (input.value.match(regExpWeak) ||
        input.value.match(regExpMedium) ||
        input.value.match(regExpStrong))
    )
      no = 1;

    if (
      input.value.length >= 6 &&
      ((input.value.match(regExpWeak) && input.value.match(regExpMedium)) ||
        (input.value.match(regExpMedium) && input.value.match(regExpStrong)) ||
        (input.value.match(regExpStrong) && input.value.match(regExpWeak)))
    )
      no = 2;

    if (
      input.value.length >= 6 &&
      input.value.match(regExpWeak) &&
      input.value.match(regExpMedium) &&
      input.value.match(regExpStrong)
    )
      no = 3;

    if (no == 1) {
      weak.classList.add("active");
      text.style.display = "block";
      text.textContent = "Your password is too Weak";
      text.classList.add("weaker");
      text.style.color = "red";
    } else {
      text.classList.remove("weaker");
      medium.classList.remove("active");
    }

    if (no == 2) {
    //   weak.classList.add("active")/;
      medium.classList.add("active");
      // text.style.display = "block";
      text.classList.add("mediumer");
      text.textContent = "Your password is Medium";
      text.style.color = "orange";
    } else {
    medium.classList.remove("active");
      text.classList.remove("mediumer");
    }

    if (no == 3) {
      medium.classList.add("active");
      strong.classList.add("active");
      // text.style.display = "block";
      text.textContent = "Your password is Strong";
      text.classList.add("stronger");
      text.style.color = "green";
    } else {
      strong.classList.remove("active");
      text.classList.remove("stronger");
    }

    ShowButton();
  } else {
    text.style.display = "none";
    indicator.style.display = "none";
    showBtn.style.display = "block";
  }
}

function ShowButton() {
  showBtn.style.display = "block";
  showBtn.onclick = function () {
    if (input.type == "password") {
      input.type = "text";
      showBtn.textContent = "HIDE";
    } else {
      input.type = "password";
      showBtn.textContent = "SHOW";
    }
  };
}
