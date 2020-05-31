const Header = (() =>{
    const setHeader = () => {
        const content = document.getElementById("content");
        let header = document.createElement("header");
        let nav = document.createElement("nav");
        let logo = document.createElement("span");
        logo.setAttribute("id","logo");
        logo.innerText = "Matcha Café";

        let ulist = document.createElement("ul");
        ulist.setAttribute("class", "navlist");

        let navSubject = ["Home", "Menu", "Contact"];

        for(let subject of navSubject){
            let sub = document.createElement("li");
            sub.setAttribute("id", `${subject}`);
            let a = document.createElement("a");
            a.setAttribute("onclick", "");
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