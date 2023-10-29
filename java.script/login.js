let loginAttempts = 0;
const maxAttempts = 3;

document.getElementById("form").addEventListener("submit", function (event) {
    event.preventDefault();

    const usuario = document.getElementById("usuario").value;
    const senha = document.getElementById("senha").value;

    if (usuario === "raulguiii" && senha === "senha123") {
        window.location = "file:///C:/Users/rauln/OneDrive/%C3%81rea%20de%20Trabalho/projeto%20desen/racermenu.html";
    } else {
        loginAttempts++;

        if (loginAttempts >= maxAttempts) {
            $("button.btn-login").hide();
            alert("Você provavelmente não tem uma conta, vá para página de cadastro");
        } else {
            alert("Tente novamente! Você já gastou " + loginAttempts + " chance(s) de " + maxAttempts);
        }
    }
});




// Versão antiga, entrada sem acesso 
//    if (usuario === "" || senha === "") {
//        alert("Por favor, preencha todos os campos.");
//    } else {
//    window.location = "http://127.0.0.1:5500/racermenu.html";
//    }
// });
