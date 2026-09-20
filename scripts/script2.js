const nomeSalvo = localStorage.getItem("usuarioNome");
const valorSim = localStorage.getItem("valorSim");
const acess = localStorage.getItem("acess");
const foto = document.getElementById("foto");

if(nomeSalvo)
{
    document.getElementById("mensagem").innerText = `Olá, ${nomeSalvo}!`;
}
else
{
    document.getElementById("mensagem").innerText = "Nenhum nome encontrado."
}
console.log(valorSim);

if(valorSim === "s")
{
    console.log(acess)
    
    switch (acess)
    {
        case "":
            foto.src = "imagens/Cachorro Esperto.jpg";
            break;
        case "chapeu":
            foto.src = "imagens/Cachorro Esperto com chapeu.png";
            break;
        
        case "chapeu,bolsa":
            foto.src = "imagens/Cachorro Esperto com chapeu e bolsa.png"
            break;
        
        case "chapeu,bolsa,relogio":
            foto.src = "imagens/Cachorro Esperto com chapeu e bolsa e relogio.png"
            break;
        case "bolsa,relogio":
            foto.src = "imagens/Cachorro Esperto com bolsa e relogio.png"
            break;
        case "relogio":
            foto.src = "imagens/Cachorro Esperto Com relogio.png"
            break;
        case "chapeu,relogio":
            foto.src = "imagens/Cachorro esperto com chapeu e relogio.png";
            break;
        case "bolsa":
            foto.src = "imagens/Cachorro Esperto com bolsa.png";
            break;
    }
}
else
{
    foto.src = "imagens/Cachorro Esperto Bravo.png"
}
