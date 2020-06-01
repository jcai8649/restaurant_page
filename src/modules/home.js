const Home = (() =>{
    const setHome = () =>{
        const content = document.getElementById("content");
        const section = document.createElement("section");
        section.setAttribute("id", "home-sec");
        const mainDiv = document.createElement("div");
        mainDiv.setAttribute("class","main");
        section.appendChild(mainDiv);
        const h3 = document.createElement("h3");
        h3.setAttribute("class","headline");
        h3.innerText = "Traditionally Crafted."
        mainDiv.appendChild(h3);
        const div = document.createElement("div");
        const menuButton = document.createElement("button");
        menuButton.setAttribute("class","menuBtn");
        menuButton.innerText = "View our menu";
        div.appendChild(menuButton);
        mainDiv.appendChild(div);
        content.appendChild(section);
    }

    const setActive = () =>{
        let homeli = document.getElementById("Home");
        homeli.classList.add("active");
    }
    return {setHome, setActive};
})();

export default Home;