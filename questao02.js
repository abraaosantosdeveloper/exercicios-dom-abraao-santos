const botao = document.getElementById('btn-forma');

botao.addEventListener('click', function mudarForma(){
    let forma = document.getElementById('forma');
    if (forma.style.borderRadius == "50%"){
        forma.style.borderRadius = "0"
        botao.innerText = "Mudar a forma"
    }
    else{
        forma.style.borderRadius = "50%"
        botao.innerText = "Retornar à forma original"
    }
    
})