document.getElementById("form").addEventListener("submit", function(event) {
    // Impedir o envio do formulário em branco
    event.preventDefault();

    // Obter os valores dos campos de entrada
    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    // Realizar a validação (verificar se os campos estão preenchidos)
    if (username === "" || email === "" || password === "") {
        alert("Por favor, preencha todos os campos.");
    } else {
        // Se a validação for bem-sucedida, você pode enviar o formulário ou executar outra ação aqui
        
    window.location = "http://127.0.0.1:5500/racermenu.html";
        // Você pode adicionar código para enviar o formulário para o servidor aqui
    }
});
