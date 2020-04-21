const buttonFirst = document.getElementById("btn");
const buttonSecond = document.getElementById("btn-second");

const containerFirst = document.getElementById("container");
const containerSecond = document.getElementById("container-second");

const boy = document.querySelector(".boy");
const girl = document.querySelector(".girl");

const f1 = document.forms.f1;
const f2 = document.forms.f2;
const f3 = document.forms.f3;
const f4 = document.forms.f4;
const f5 = document.forms.f5;
const f6 = document.forms.f6;
const f7 = document.forms.f7;

const womanId = document.getElementById("woman");
const manId = document.getElementById("man");
const checkBox = document.getElementById("myCheck");

const checkInput = () => {
  if (checkBox.checked == true) {
    containerSecond.style.display = "block";
    containerFirst.style.display = "none";
  } else {
    containerFirst.style.display = "block";
    containerSecond.style.display = "none";
    alert("Agree with all statements in Terms of service!")
  }
}

const getImg = () => {
  if (manId.checked == true) {
    boy.style.display = "block";
    girl.style.display = "none";
  } else if (womanId.checked == true) {
    boy.style.display = "none";
    girl.style.display = "block";
  } else if (manId.checked != true && womanId.checked != true) {
    containerFirst.style.display = "block";
    containerSecond.style.display = "none";
    alert("Choose your gender!")
  }
}

const getFirstBlock = () => {
  containerSecond.style.display = "none";
  containerFirst.style.display = "block";

  f1.reset(); 
  f2.reset();
  f3.reset();
  f4.reset();
  f5.reset();
  f6.reset();
  f7.reset();
}

f7.signUp.addEventListener("click", () => {
  let nameBefore = f1.firstName.value;
  let name = document.querySelector(".name");
  name.innerText = nameBefore;

  let surnameBefore = f2.secondName.value;
  name.innerText += ` ${surnameBefore}`;

  let emailBefore = f3.email.value;
  let email = document.querySelector(".email");
  email.innerText = emailBefore;

  let position = document.querySelector(".position");
  let select = document.getElementById("select");
  let showSelect = select.options[select.selectedIndex].text;
  position.innerText = showSelect;
});
