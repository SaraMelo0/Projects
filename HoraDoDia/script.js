function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        //BOM DIA
        img.src = 'src/assets/images/dia.png'
        document.body.style.background = '#F2D680'
    } else if (hora >= 12 && hora < 18) {
        //BOA TARDE
        img.src = 'src/assets/images/tarde.png'
        img.style.width = '400px'
        document.body.style.background = '#F2B872'
    } else {
        //BOA NOITE
        img.src = 'src/assets/images/noite.png'
        document.body.style.background = '#1D0908'
    }
}