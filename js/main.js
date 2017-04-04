function validateForm(){
  var name = document.getElementById("name");
 var apell = document.getElementById("lastname");
 var password = document.getElementById("input-password");
 var mail = document.getElementById("input-email");
 var bici = document.getElementById("opciones");

//if((name != "" && apell  != "") && (password != "" && bici != "")){

  if(!name.value.match(/[A-Z]{1,}[a-z]+/)){
    tooltip(name,"Ingresar primera letra máyuscula");
  }

  if(!apell.value.match(/[A-Z]{1,}[a-z]+/)){
    tooltip(apell,"Ingresar primera letra máyuscula");
  }
  if(!mail.value.match(/[a-z0-9._%+-]+@[a-z0-9.-]+\.com$/)){
    tooltip(mail,"Error al ingresar Email: \n Ingresar email@domain.com");
  }

  if(password.value.length <= 6 || password == "password" || password == "123456" || password == "098754"){
    tooltip(password,"Valor de password invalido, \n Ingresar password de 6 caracteres");
  }
  if(bici.value == "0"){
    tooltip(bici,"Por favor Ingresar valor de bici");
  }


//}else{
//  alert("Falta Ingresar Valores");
//}

}

function tooltip(nodo,texto){
  var span = document.createElement("span");
  span.innerHTML = texto;
  nodo.parentNode.appendChild(span);


}
