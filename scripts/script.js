function logar() {

    var usuario = document.getElementById('usuario').value;
    var password = document.getElementById('password').value;


    if (usuario == "Mateus" && password == "1") {
        alert('Sucesso');

        location.href = "";

    } else {
        alert('Usuario ou senha incorretos')
    }

}

document.addEventListener("keypress", function(e) {

    if (e.key === "Enter") {


        const btn = document.querySelector("#send");

        btn.click();


    }

});