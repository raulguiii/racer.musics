document.getElementById("form").addEventListener("submit", function(event) {
    
    
    // garantir que o form não seja respondido vazio 
    event.preventDefault();

    // receber os valores do form 
    var usuario = document.getElementById("usuario").value;
    var senha = document.getElementById("senha").value;

    // ver se a conta é valida e existe
        if (usuario === "raulguiii" && senha === "senha123") {
          window.location = "file:///C:/Users/rauln/OneDrive/%C3%81rea%20de%20Trabalho/projeto%20desen/racermenu.html";
        } else {
            alert("Essa conta não existe!");
        }

    })








    // Versão antiga, entrada sem acesso 
//    if (usuario === "" || senha === "") {
//        alert("Por favor, preencha todos os campos.");
//    } else {
//    window.location = "http://127.0.0.1:5500/racermenu.html";
//    }
// });
