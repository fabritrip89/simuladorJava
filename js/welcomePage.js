let ingreseSuEdad = parseInt(prompt("Ingrese su edad") );

if (ingreseSuEdad >=18) {
    alert ("Welcome");
    
    
} else if (ingreseSuEdad<=18){
    alert ("No puede comprar en este sitio")
    setTimeout(function() {
        window.location.href = 'https://www.google.com/'; 
    },200  )
    
    
}

