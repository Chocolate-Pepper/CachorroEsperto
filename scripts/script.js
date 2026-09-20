let pagina = document.querySelector("#pagina1");

pagina.addEventListener("mouseover", trocaCor);
pagina.addEventListener("mouseout", trocaFora);

function trocaCor ()
{  
    pagina.style.background = "lightblue";
}
function trocaFora ()
{  
    pagina.style.background = "none";
}


