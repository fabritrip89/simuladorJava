
let ingreseSuEdad = parseInt (prompt("Enter your age") );

if (ingreseSuEdad >=18) {
    swal.fire ({ title:  '<span class= "tituloToThemoon"/> Welcome!', footer: '<span> Sincerely paddle to the moon', })
        
}else {swal.fire ({ title: "You can't buy on this site", text: "You will be redirected to google",icon: 'error', footer: '<a href="..."> Terms and Conditions</a>'})
    setTimeout(function() {
        window.location.href = 'https://www.google.com/'; 
    },5000  )

}