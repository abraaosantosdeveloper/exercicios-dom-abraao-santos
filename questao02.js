const botao = document.getElementById('btn-forma');

botao.addEventListener('click', () => {
    let forma = document.getElementById('forma');
    if (forma.style.borderRadius == "50%"){
        forma.style.borderRadius = "0"
    }
    else{
        forma.style.borderRadius = "50%"
    }
    
})