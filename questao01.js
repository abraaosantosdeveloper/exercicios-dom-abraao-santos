function inserirTitulo(){
    let titulo = document.getElementById("titulo");
    let titulo_a_inserir = document.getElementById("txt-titulo").value;

    titulo.innerText = titulo_a_inserir;
    titulo.style.color = "blue";
}