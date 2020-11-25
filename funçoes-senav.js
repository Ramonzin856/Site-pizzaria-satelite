function mudaFoto(foto)
    {
        document.getElementById("icone").src= foto;
    }       
    let quebrada = false;
    function mudaPizza(tipo) {
        if (!quebrada) {
    document.getElementById("pizza"). src="_imagens/"+ tipo+ ".png";
    if(tipo == 'lampada-quebrada') {
        quebrada=true;
    }
     } 
    } 
     