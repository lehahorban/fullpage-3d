const contaiter = document.querySelector(".container");
const burger = document.querySelector(".burger");
const screens = document.querySelectorAll(".screen");

burger.addEventListener("click", () => contaiter.classList.toggle("active"));

function replaceBg(id) {
  const bg = document.getElementById(id);
  screens.forEach((screen) => {
    screen.style.display = "none";
  });
  bg.style.display = "block";
}

function changeBg() {
  const links = document.querySelectorAll(".link");
  links.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      replaceBg(e.target.dataset.link);
    });

    link.addEventListener("dblclick", (e) => {
      e.preventDefault();
      contaiter.classList.toggle("active");
    });
  });
  screens.forEach((screen) => {
    screen.addEventListener("click", (e) => {
      e.preventDefault();
      contaiter.classList.remove("active");
    });
  });

  screens.forEach((screen) => {
    screen.style.display = "none";
    screens[0].style.display = "block";
  });
}

changeBg();
