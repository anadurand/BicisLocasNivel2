function validateForm(){
	/* Escribe tú código aquí */
  var name = document.getElementById("name");
 var apell = document.getElementById("lastname").value;
 var password = document.getElementById("input-password").value;
 var mail = document.getElementById("input-email").value;
 var bici = document.getElementById("opciones").value;

//if((name != "" && apell  != "") && (password != "" && bici != "")){

  if(!name.value.match(/[A-Z]{1,}[a-z]+/)){
    var span = document.createElement("span");
    span.innerHTML = "Ingresar primera letra máyuscula";
    name.parentNode.appendChild(span);
    //alert("Error al ingresar Nombre: \n Ingresar primera letra máyuscula");
  }
  if(!apell.match(/[A-Z]{1,}[a-z]+/)){
    alert("Error al ingresar Apellido: \n Ingresar primera letra máyuscula");
  }
  if(!mail.match(/[a-z0-9._%+-]+@[a-z0-9.-]+\.com$/)){
    alert("Error al ingresar Email: \n Ingresar email@domain.com");
  }

  if(password.length <= 6 || password == "password" || password == "123456" || password == "098754"){
    alert("Valor de password invalido, \n Ingresar password de 6 caracteres");
  }
  if(bici == "0"){
    alert("Por favor Ingresar valor de bici");
  }


//}else{
//  alert("Falta Ingresar Valores");
//}

}
