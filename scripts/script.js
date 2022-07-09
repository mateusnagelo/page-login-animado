function logar() {

    var usuario = document.getElementById('usuario').value;
    var password = document.getElementById('password').value;


    if (usuario == "Mateus" && password == "1") {
        alert('Sucesso');

        location.href = "";

    } else {
        alert('Dados incorretos')
    }

}

document.addEventListener("keypress", function(e) {

    if (e.key === "Enter") {


        const btn = document.querySelector("#send");

        btn.click();


    }

});
// var password = document.querySelector('#password input');
// var img = document.querySelector('#password img');
// img.addEventListener('click', function() {
//     input.type = input.type == 'text' ? 'password' : 'text';
// });