console.log("JS Loaded!");

const name = "Marc";

console.log(name);

const hiddenMenu = document.getElementById("blank");
hiddenMenu.addEventListener("mouseover", showMenu);

function showMenu() {
  document.getElementById("nav-container-area").classList.add("show");
}

const shownMenu = document.getElementById("nav-container-area");
shownMenu.addEventListener("mouseleave", hideMenu);

function hideMenu() {
  document.getElementById("nav-container-area").classList.remove("show");
}

let w =
  window.innerWidth ||
  document.documentElement.clientWidth ||
  document.body.clientWidth;

// let h =
//   window.innerHeight ||
//   document.documentElement.clientHeight ||
//   document.body.clientHeight;

// if (w < 960) {
//   const cont = document.getElementById("grid");
//   for (let i = 0; i < 1000; i++) {
//     const div = document.createElement("div");
//     div.setAttribute("class", "square");
//     div.setAttribute("id", "div" + i);
//     div.style.opacity = "1";
//     div.addEventListener("touchstart", showSquare);
//     function showSquare() {
//       div.style.opacity = "1";
//     }
//     cont.appendChild(div);
//   }
// } else {}

const cont = document.getElementById("grid");

for (let i = 0; i < 1550; i++) {
  const div = document.createElement("div");
  div.setAttribute("class", "square");
  div.setAttribute("id", "div" + i);
  div.style.opacity = "0";
  div.addEventListener("mouseover", showSquare);
  function showSquare() {
    div.style.opacity = "1";
  }
  cont.appendChild(div);
}

let goBack = document.querySelector("#go-back");

window.onscroll = function () {
  scrollFunction();
};
function scrollFunction() {
  if (document.body.scrollTop > 1 || document.documentElement.scrollTop > 1) {
    goBack.style.display = "flex";
  } else {
    goBack.style.display = "none";
  }
}
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
  location.reload();
}

// const x = window.matchMedia("(min-width: 960px)");

// if (x) {
//   for (let i = 0; i < h; i++) {
//     const div = document.createElement("div");
//     div.setAttribute("class", "square");
//     div.setAttribute("id", "div" + i);
//     div.style.opacity = "0";
//     // div.style.zIndex = "10";
//     div.addEventListener("mouseover", showSquare);
//     function showSquare() {
//       div.style.opacity = "1";
//     }
//     cont.appendChild(div);
//   }
// } else {
//   for (let i = 0; i < h; i++) {
//     const div = document.createElement("div");
//     div.setAttribute("class", "square");
//     div.setAttribute("id", "div" + i);
//     div.style.opacity = "0";
//     // div.style.zIndex = "10";
//     div.addEventListener("click", showSquare);
//     function showSquare() {
//       div.style.opacity = "1";
//     }
//     cont.appendChild(div);
//   }
// }
