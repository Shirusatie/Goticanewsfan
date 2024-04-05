 window.addEventListener("load", function() {
        
        if (Modernizr.inputtypes.range) {
            
            document.getElementById("rango").addEventListener("change", function() {
                
                document.getElementById('salida').innerHTML = this.value;
            }, false);
        }
    }, false);