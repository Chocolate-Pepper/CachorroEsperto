const formulari = document.getElementById("formulario").addEventListener("submit", function(event){
    event.preventDefault();


const gostarSim = document.querySelector('input[name = "gostar"]:checked');
const nomeDigitado = document.getElementById("nome").value;
const imagem = document.getElementById("imagemResultado");

const valores = document.querySelectorAll('input[name = "acessorio"]:checked');
const acessoriosArray = Array.from(valores).map(checkbox => checkbox.value);



localStorage.setItem("usuarioNome", nomeDigitado);
localStorage.setItem("valorSim", gostarSim.value);
localStorage.setItem("acess", acessoriosArray);

window.location.href = "paginaagradecimento.html";
});