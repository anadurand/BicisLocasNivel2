window.addEventListener("load",function(){
  var divBox = document.getElementsByClassName("input-box");
  //divBox[0].appendChild(createTooltip("Falta ingresar su nombre"));
  //divBox[1].appendChild(createTooltip("Falta ingresar su Apellido"));
  //divBox[2].appendChild(createTooltip("Falta ingresar su correo"));
  //divBox[3].appendChild(createTooltip("La contrseña debe tener al menos 6 caracteres"));
  //divBox[4].appendChild(createTooltip("Debe seleccionar al menos una Bici"));
});

function createTooltip(mensaje){
  var span = document.createElement("span");
  span.setAttribute("class","tool");
  span.innerHTML = mensaje;
  return span;
}


function validateForm(){
   var divBox = document.getElementsByClassName("input-box");
   var name = document.getElementById("name");
   var apell = document.getElementById("lastname");
   var mail = document.getElementById("input-email");
   var password = document.getElementById("input-password");
   var bici = document.getElementById("opciones");
   var testName = /[A-Z]{1,}[a-z]+/;
   var testEmail = /[a-z0-9._%+-]+@[a-z0-9.-]+\.com$/;
   var mens = "";
    if(name.value == ""){

      if(name.nextElementSibling == null){
        divBox[0].appendChild(createTooltip("Falta ingresar su nombre"));
      }

    }else{
      if(!name.value.match(testName)){
        mens = "La primera letra debe ser mayúscula";
        change(name,mens);
        name.focus();
      }else{
        quit(name);

      }
    }

    if(apell.value == ""){
      if(apell.nextElementSibling == null){
        divBox[1].appendChild(createTooltip("Falta ingresar su apellido"));
      }

    }else{
      if(!apell.value.match(testName)){
        mens = "La primera letra debe ser mayúscula";
        change(apell,mens);
        apell.focus();
      }else{
        quit(apell);

      }
    }
    if(mail.value == ""){
      if(mail.nextElementSibling == null){
        divBox[2].appendChild(createTooltip("Falta ingresar su email"));
      }

    }else{
      if(!mail.value.match(testEmail)){
        mens = "El Email debe ser válido Ejm. name@domain.com \n ";
        change(mail,mens);
        mail.focus();
      }else{
        quit(mail);

      }
    }

    if(password.value == ""){
      if(password.nextElementSibling == null){
        divBox[3].appendChild(createTooltip("Falta ingresar su password"));
      }

    }else{
      if((password.value.length < 6 || password.value == '123456') || (password.value == '098754' || password.value == 'password')){
        mens = "El Password debe tener al menos 6 caracteres o diferente\n";
        change(password,mens);
        password.focus();
      }else{
        quit(password);

      }
    }

    if(bici.value == 0){
      if(bici.nextElementSibling == null){
        divBox[4].appendChild(createTooltip("Debe seleccionar al menos una Bici"));
      }
      bici.focus();
    }else{
      quit(bici);

    }

}

//Remueve los tooltip
function quit(nodo) {
  if(nodo.nextElementSibling != null){
    nodo.parentNode.removeChild(nodo.nextSibling);
  }
}
//cambia el texto del tooltip
function change(nodo,text){
  if(nodo.nextElementSibling == null){
    nodo.parentNode.appendChild(createTooltip(text));
  }else{
    nodo.nextElementSibling.textContent = text;

  }
}
