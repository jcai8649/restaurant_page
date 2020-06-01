import Header from "./modules/header";
import Home from "./modules/home"
import Menu from "./modules/menu"
import Contact from "./modules/contact";


const clearContent = () =>{
    const content = document.getElementById("content");
    content.innerHTML = "";
}



Header.setHeader();
Home.setHome();
Home.setActive();
Menu.setMenu();
Contact.setContact();