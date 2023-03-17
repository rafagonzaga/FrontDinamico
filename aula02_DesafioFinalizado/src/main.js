let form = document.getElementsByTagName("form")[0];

form.addEventListener("submit", createTask);

let ul = document.getElementsByTagName("ul")[0];

function createTask(event) {
    event.preventDefault();

    // console.log(event);
    let title = document.getElementById("title").value;
    let description = document.getElementById("description").value;

    let li = document.createElement("li");
    li.innerHTML = `
        <div>
            <h3>${title}</h3>
            <p>${description}</p>
        </div>
        <input type="checkbox" onclick="removeTask(event)" />
        `;

    ul.appendChild(li);
    
    form.reset();
}

function removeTask(event) {
    console.log(event);
    // Desabilitando o botão
    event.srcElement.setAttribute("disabled", true);
    //ul.removeChild(event.srcElement.parentElement);

    event.srcElement.parentElement.classList = "task-finished";
    
}