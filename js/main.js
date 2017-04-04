window.addEventListener("load",function(){
  var divBox = document.getElementsByClassName("input-box");
  divBox[0].appendChild(createTooltip("Falta ingresar su nombre"));
  divBox[1].appendChild(createTooltip("Falta ingresar su Apellido"));
  divBox[2].appendChild(createTooltip("Falta ingresar su correo"));
  divBox[3].appendChild(createTooltip("La contrseña debe tener al menos 6 caracteres"));
  divBox[4].appendChild(createTooltip("Debe seleccionar al menos una Bici"));
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

   if(name.value == "" || !name.value.match(testName)){
     mens = "La primera letra debe ser mayúscula";
     change(name,mens);
     name.focus();
 	}else{
    quit(name);

    if(apell.value == "" || !apell.value.match(testName)){
      mens = "La primera letra debe ser mayúscula";
      change(apell,mens);
      apell.focus();
    }else{
      quit(apell);

      if(mail.value == "" || !mail.value.match(testEmail)){
        mens = "El Email debe ser válido Ejm. name@domain.com \n ";
        change(mail,mens);
        mail.focus();
      }else{
        quit(mail);

        if(password.value == "" || password.value.length < 6 || password.value == '123456' || password.value == '098754' || password.value == 'password'){
          mens = "El Password debe tener al menos 6 caracteres o diferente\n";
          change(password,mens);
          password.focus();
        }else{
          quit(password);

          if(bici.value == 0){
            mens = "Debe seleccionar una Bici\n";
            change(bici,mens);
            bici.focus();
          }else{
            removeTooltip();
          }

        }

      }

    }
  }



}

//Remueve los tooltip
function quit(nodo) {
  if(nodo.nextSibling != null){
    nodo.parentNode.removeChild(nodo.nextSibling);
  }
}
function removeTooltip(){
  var array = document.getElementsByClassName("tool");
  console.log(array);
  for (i = 0; i < array.length; i++){
    array[i].parentNode.removeChild(array[i]);
  }
}
function change(nodo,text){
  nodo.nextElementSibling.innerHTML = text;
}
