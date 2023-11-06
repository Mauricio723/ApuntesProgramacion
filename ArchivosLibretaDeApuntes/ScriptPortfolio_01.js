
 let elementoParrafo_01;
      
      function comenzar() {                
        
        let boton_01= document.getElementById("boton_quien_soy");
        let boton_02= document.getElementById("boton_datos_personales");
        let boton_03= document.getElementById("boton_contacto");
        let boton_04= document.getElementById("botonPrueba_01");
        let botonLogin= document.getElementById("boton_login");
        
        let iconoRed_01= document.getElementById("redSoc_01");
        let iconoRed_02= document.getElementById("redSoc_02");
        let iconoRed_03= document.getElementById("redSoc_03");
        
        elementoParrafo_01= document.getElementById("parrafoDatos_01");
        
        boton_01.addEventListener("click", agregarQuienSoy, false);
        boton_02.addEventListener("click", agregarDatosPersonales, false);
        boton_03.addEventListener("click", agregarContacto, false);
        
        botonLogin.addEventListener("click", mostrarFormularioLogin, false);
        
        iconoRed_01.addEventListener("click", accionIconoRedes, false);
        iconoRed_02.addEventListener("click", accionIconoRedes, false);
        iconoRed_03.addEventListener("click", accionIconoRedes, false);
                            
      }
      
      function agregarQuienSoy(evento) {
                                                   
        elementoParrafo_01.innerHTML= "<strong>Qui&eacuten Soy</strong><br>" + 
        "****** ********* ********* Texto sobre qui&eacuten soy **** ******" +
        "** ******* ******* ****** Texto sobre qui&eacuten soy ***** ****" +
        "***** ******* ******* ******* ******* ***** Texto sobre qui&eacuten" + 
        "soy ********* ******** **********" +
        "***** ****** ***** Texto sobre qui&eacuten soy ****** ******** ****" +
        "**** ********* *********** ********** ********** *******" +
        "********* ********* ********* ********** ********** **";
      }                            
      
      function agregarDatosPersonales(evento) {
        elementoParrafo_01.innerHTML= "<strong>Datos Personales</strong><ul>" + 
        "<li>DNI: ********************************************</li>" + 
        "<li>Nacionalidad: ***********************************</li>" + 
        "<li>Domicilio Actual: *******************************</li>" +
        "<li>Ciudad: *****************************************</li>" +
        "<li>Provincia: **************************************</li>" +
        "<li>Pa&iacute;s: *******************************************</li>" +
        "<li>Tel&eacute;fono: ***************************************</li>" +
        "</ul>";
        
      } 
      
      function agregarContacto(evento) {
        elementoParrafo_01.innerHTML= "<strong>Contacto</strong><br>" +
        "Correo Electronico:<br>" + 
        "salvadorvilches1972@gmail.com";
      }
      
      function mostrarFormularioLogin(evento) {
        alert("Falta crear formulario login");
      }                                       
      
      function accionIconoRedes(evento) {                
        alert("Por el momento no estoy en esta red social.\n" +
        "Contactos por Email: salvadorvilches1972@gmail.com");
      }
      
      window.addEventListener("load", comenzar, false);