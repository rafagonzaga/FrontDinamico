console.log("teste");
// let resultado = document.getElementById()
let botao = document.getElementById("botao");
let mensagem = document.getElementById("resultado");


botao.addEventListener("click", function() {
    mensagem.textContent = "mudou...";
})

setTimeout(() => {
    botao.disabled = false;
    p.innerHTML = "";
}, 3000)
