const Menu  = (() => {
    const setMenu = () =>{
        const content = document.getElementById("content");
        const section = document.createElement("section");
        section.setAttribute("id", "menu-sec");
        const divMenuCard = document.createElement("div");
        divMenuCard.setAttribute("class", "main");
        divMenuCard.classList.add("menu-card");
        section.appendChild(divMenuCard);
        const h2 = document.createElement("h2");
        h2.innerText = "Menu";
        const divGrid = document.createElement("grid");
        divGrid.setAttribute("class", "grid");
        divMenuCard.appendChild(h2);
        divMenuCard.appendChild(divGrid);
        const menuObj = {
            "Drinks": ["Matcha Milk Tea", "Oolong Milk Tea" , "Jasmine Milk Tea", "Strawberry Smoothie"],
            "Snacks": ["Matcha Egg Puff", "Popcorn Chicken", "Fried Tofu", "Cream Toast"],
            "Ice Cream": ["Matcha", "Chocolate", "Vanilla", "StrawBerry"]
        };

        for (let menuSubject in menuObj){
            const h4 = document.createElement("h4");
            h4.innerText = menuSubject;
            const uList = document.createElement("ul");
            for(let subList of menuObj[menuSubject]){
                const item = document.createElement("li");
                item.innerText = subList;
                uList.appendChild(item);
            }
            divGrid.appendChild(h4);
            divGrid.appendChild(uList);
        }
        content.appendChild(section);
    }

    return {setMenu};
})();

export default Menu;