import "./style.css";
import home from "./home";
import contact from "./contact";
import menu from "./menu";
import navBar from "./navBar";

const content = document.getElementById("content");

navBar(content);
home(content);

const navs = document.querySelectorAll(".nav");

function switchPages(event) {
  let target = event.target;

  content.removeChild(content.lastElementChild);

  if (target.innerHTML === "Home") {
    home(content);
  } else if (target.innerHTML === "Contact") {
    contact(content);
  } else {
    menu(content);
  }
}

navs.forEach((nav) => {
  nav.addEventListener("click", switchPages);
});
