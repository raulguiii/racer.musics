document.getElementById("form").addEventListener("submit", function(event) {
    
    // garantir que o form não tem dados vazios 
    event.preventDefault();

    // receber os valores correspondentes do form
    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var idade = document.getElementById("idade").value;
    var password = document.getElementById("password").value;

    
    // ver se todos campos do form estão preenchidos 
    if (username === "" || email === "" || idade=== "" || password === "") {
        alert("Por favor, preencha todos os campos.");
    } else {
        
    
        // se tudo estiver certo, você já vai pro menu 
    window.location = "file:///C:/Users/rauln/OneDrive/%C3%81rea%20de%20Trabalho/projeto%20desen/racermenu.html";
    }

}) 
