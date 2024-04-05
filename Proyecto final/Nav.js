
    const enlacesMenu = document.querySelectorAll('nav ul li a');

    
    enlacesMenu.forEach(enlace => {
        
        enlace.addEventListener('click', function(evento) {
            evento.preventDefault();
           
            document.querySelectorAll('section').forEach(seccion => {
                seccion.classList.remove('inicio'); 
            });

            
            const seccionID = this.getAttribute('href').substring(1);

           
            document.getElementById(seccionID).classList.add('inicio'); 
        });
    });

    $(document).ready(function(){
            $(".informes li").css("color", "blue");
        });