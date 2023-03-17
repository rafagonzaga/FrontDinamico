let tarefa = document.getElementById("titulo");
let descricao = document.getElementById("descricao");




function cadastrar() {
    console.log(tarefa.value);
    console.log(descricao.value);
    
    let div = document.createElement("div");
    div.innerHTML = criaTarefa(tarefa.value, descricao.value);

    document.body.appendChild(div);
}

function criaTarefa(titulo, descricao) {
    return `
        <ul>
            <li class="nome-tarefa">${titulo}</li>
            <li>${descricao} <input type="checkbox"></li>
            
        </ul>
        `;

}

function limpar() {
    

}