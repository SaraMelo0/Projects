function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txt-ano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radio-sex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
                //Criança
                img.setAttribute('src', 'src/assets/images/foto-bebe-m.png')
            } else if (idade < 22) {
                //Adolescente
                img.setAttribute('src', 'src/assets/images/foto-jovem-m.png')
            } else if (idade < 59) {
                //Adulto
                img.setAttribute('src', 'src/assets/images/foto-adulto-m.png')
            } else {
                //Idoso
                img.setAttribute('src', 'src/assets/images/foto-idoso-m.png')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                //Criança
                img.setAttribute('src', 'src/assets/images/foto-bebe-f.png')
            } else if (idade < 22) {
                //Adolescente
                img.setAttribute('src', 'src/assets/images/foto-jovem-f.png')
            } else if (idade < 59) {
                //Adulto
                img.setAttribute('src', 'src/assets/images/foto-adulto-f.png')
            } else {
                //Idoso
                img.setAttribute('src', 'src/assets/images/foto-idoso-f.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    } 
}