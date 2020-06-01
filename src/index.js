import Header from "./modules/header";
import Home from "./modules/home"
import Menu from "./modules/menu"
import Contact from "./modules/contact";


const clearContent = () =>{
    const content = document.getElementById("content");
    const itemlist = document.querySelectorAll(".active");
    content.removeChild(content.lastChild);
    itemlist.forEach(item => item.classList.remove('active'));


}

const displayHome = () => {
    clearContent();
    Home.setHome();
    Home.setActive();

    const menuBtn = document.getElementById("menuBtn");
    menuBtn.addEventListener("click", displayMenu);
}

const displayMenu = () => {
    clearContent();
    Menu.setMenu();
    Menu.setActive();
}
const displayContact = () => {
    clearContent();
    Contact.setContact();
    Contact.setActive();
}

document.addEventListener("DOMContentLoaded", () =>{
    Header.setHeader();
    Home.setHome();
    Home.setActive();

    const logo = document.getElementById("logo");
    const home = document.getElementById("Home");
    const menu = document.getElementById("Menu");
    const contact = document.getElementById("Contact");
    const menuBtn = document.getElementById('menuBtn');

    logo.addEventListener("click", displayHome);
    home.addEventListener("click", displayHome);
    menu.addEventListener("click", displayMenu);
    contact.addEventListener("click", displayContact);
    menuBtn.addEventListener("click", displayHome);
});