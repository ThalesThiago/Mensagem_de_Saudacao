function carregar (){
    let msg = document.getElementById('Msg_hora')
    let img = document.getElementById('photo1')
    //let body = document.getElementById('body_corpo')
    let data = new Date()
    let horas = data.getHours()
    let minutos = data.getMinutes()
    let msg2 = document.getElementById("mensagem_bom")
    msg.innerHTML = (`Agora são ${horas} horas e ${minutos} minutos`)
    
    if (horas>=0 && horas<12) {
        
        img.src = "https://images.pexels.com/photos/910411/pexels-photo-910411.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        document.body.style.backgroundColor = "lightblue";
        
    } else if (horas>=12 && horas<=18){
        
        img.src = "https://images.pexels.com/photos/69224/pexels-photo-69224.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        document.body.style.backgroundColor = "orange";
    } else {
        
        img.src= "https://images.pexels.com/photos/355465/pexels-photo-355465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        document.body.style.backgroundColor = "darkblue";
    }
}