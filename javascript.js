
const nombre=document.getElementById("name");
const correo=document.getElementById("correo");
const telefono=document.getElementById("telefono");
const formulario=document.getElementById("formulario");
const consulta=document.getElementById("consulta");
const alerta=document.getElementById("warnings");

        
         formulario.addEventListener("submit", e=>{
          e.preventDefault()
          let warnings="";
          let errores=false;
          let telefonovalidation = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
          let emailvalidation=/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
          alerta.innerHTML="";
          
     
          if(nombre.value.length <3){
               warnings+="Nombre demasiado corto <br>";
               errores=true;               
          }

          if(telefono.value.length<8){
               warnings+="El teléfono debe contener 8 numeros <br>";
               errores=true;               
          }          

          if(!telefonovalidation.test(telefono.value)){
               warnings+="El teléfono debe contener numeros <br>";
               errores=true;               
          }

          if(!emailvalidation.test(correo.value)){
               warnings+="El correo no es valido <br>";
               errores=true;
          }               
          
          if(consulta.value.length<10){
               warnings+="Su consulta debe tener mas de 10 caracteres <br>";
               errores=true;               
          }

          if(errores){
               alerta.innerHTML = warnings;  
          }
          else
          {
               warnings+="Recibimos tus datos";
               alert(warnings);
          }
     
});

