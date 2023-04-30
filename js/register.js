

// Trayendo dle html los id

const nombre = document.getElementById("nombre");
const email = document.getElementById("email");
const password = document.getElementById("password");
const form = document.getElementById("form");
const parrafo = document.getElementById("warnings");

// Escuchamos un evento del Html
// corroboramos que el nombre no puede ser menor de 4 caracteres
form.addEventListener("submit", e => {
    e.preventDefault()
    let warnings = ""
    let entrar = false
    // corroboramos que el mail sea correcto con .com y @
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    parrafo.innerHTML = ""
    if (nombre.value.length < 4) {
        warnings += `El nombre no es correcto. <br>`
        entrar = true

    }
    if (!regexEmail.test(email.value)) {
        warnings += `El email no es correcto. <br>`
        entrar = true
    }

    if (password.value.length < 6){
    warnings += `La password no es correcto. <br>`
    entrar = true
}

if (entrar){

parrafo.innerHTML = warnings
}
else alert ("Bienvenido", window.location.href="../index.html")
;

})


