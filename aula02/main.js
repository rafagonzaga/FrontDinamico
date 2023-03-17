function sayHi() {
    let label = document.createElement("label");
    let input = document.createElement("input");

    input.id = "idade";
    input.name = "idade";
    input.type = "text";
    label.textContent = "Idade";
    label.setAttribute("for", "idade");

    document.body.appendChild(label);
    document.body.appendChild(input);

}

function sayHi2() {
    let nome = "Jonas";
    let aux = document.createElement("div");
    aux.innerHTML = createList("Rafael", "Pedro");

    document.body.appendChild(aux);

}

function createList(item1, item2) {
    return `
    <ul>
        <li>${item1}</li>
        <li>${item2}</li>
    </ul>
    `;
}