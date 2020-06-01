const Header = (() =>{
    const setHeader = () => {
        const content = document.getElementById("content");
        const header = document.createElement("header");
        const nav = document.createElement("nav");
        const logo = document.createElement("span");
        logo.setAttribute("id","logo");
        logo.innerText = "Matcha Café";

        const ulist = document.createElement("ul");
        ulist.setAttribute("class", "navlist");

        const navSubject = ["Home", "Menu", "Contact"];

        for(let subject of navSubject){
            const sub = document.createElement("li");
            sub.setAttribute("id", `${subject}`);
            const a = document.createElement("a");
            a.innerText = `${subject}`;
            sub.appendChild(a);
            ulist.appendChild(sub);
        }
        nav.appendChild(logo);
        nav.appendChild(ulist);
        header.appendChild(nav);
        content.appendChild(header);
    }
    return {setHeader};
})();

export default Header;