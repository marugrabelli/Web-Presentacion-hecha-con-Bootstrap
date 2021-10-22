
/*let botonEnviar = function() {
  
    alert("Recibimos tus datos, en breve nos comunicaremos con vos");
};
document.getElementById("botoncontacto").onclick=botonEnviar;*/

/*validacion formulario*/ 
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("formulario").addEventListener('submit', validarFormulario); 
  });
  function validarFormulario(evento) {
    evento.preventDefault();
    var usuario = document.getElementById('consulta').value;
    if(usuario.length == 0) {
      alert('No has escrito nada en el usuario');
      return;
    }
    else{
        let botonEnviar = function() {
  
            alert("Recibimos tus datos, en breve nos comunicaremos con vos");
        };
        document.getElementById("botoncontacto").onclick=botonEnviar;
    };

