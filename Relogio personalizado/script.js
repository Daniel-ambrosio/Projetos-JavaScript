function carregar (){
var msg = document.getElementById('msg')
var img= document.getElementById('imagem')
var data= new Date()
var hora= data.getHours()
//var hora=
msg.innerHTML= `Agora são ${hora} Horas`
if(hora>=0 && hora< 12){
    //bom dia
    img.src='manhã.png'
    document.body.style.background = '#e2cd9f'
}else if(hora>=12 && hora< 18){
    //boa tarde
    img.src='tarde.png'
    document.body.style.background ='#b9846f'
}else{
    //boa noite
    img.src='noite.png'
    document.body.style.background ='#515154'
}
}