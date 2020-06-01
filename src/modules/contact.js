const Contact = (() => {
    const setContact = () => {
        const content = document.getElementById("content");
        const section = document.createElement("section");
        section.setAttribute("id", "contact-sec");
        const divContactCard = document.createElement("div");
        divContactCard.setAttribute("class", "main");
        divContactCard.classList.add("contact-card");
        section.appendChild(divContactCard);
        const h3 = document.createElement("h3");
        h3.innerText = "Give us feedback";
        const form = document.createElement("form");
        divContactCard.appendChild(h3);
        divContactCard.appendChild(form);
        const inputText = document.createElement("input");
        inputText.setAttribute("type", "text");
        inputText.setAttribute("id", "name");
        inputText.setAttribute("placeholder", "name");
        inputText.setAttribute("name", "name");
        inputText.setAttribute("required", "");
        const br1 = document.createElement("br");
        form.appendChild(inputText);
        form.appendChild(br1);
        const inputEmail = document.createElement("input");
        inputEmail.setAttribute("type", "email");
        inputEmail.setAttribute("id", "email");
        inputEmail.setAttribute("placeholder", "email");
        inputEmail.setAttribute("name", "email");
        inputEmail.setAttribute("required", "");
        const br2 = document.createElement("br");
        form.appendChild(inputEmail);
        form.appendChild(br2);
        const textArea = document.createElement("textarea");
        textArea.setAttribute("id", "message");
        textArea.setAttribute("name", "message");
        textArea.setAttribute("placeholder", "message");
        textArea.setAttribute("cols", "17");
        textArea.setAttribute("rows", "13");
        textArea.setAttribute("required", "");
        const br3 = document.createElement("br");
        form.appendChild(textArea);
        form.appendChild(br3);
        const divBtn = document.createElement("div");
        divBtn.setAttribute("class", "btnDiv");
        const sendBtn = document.createElement("button");
        sendBtn.setAttribute("class", "sendBtn");
        sendBtn.innerText = "Send";
        divBtn.appendChild(sendBtn);
        form.appendChild(divBtn);
        content.appendChild(section);
    }

    const setActive = () => {
        const contactli = document.getElementById("Contact");
        contactli.classList.add("active");
    }

    return {setContact, setActive};
})();

export default Contact;