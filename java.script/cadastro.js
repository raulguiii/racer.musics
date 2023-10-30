// armazenamento das respostas do form no array
let usuarios = [];

document.getElementById("form").addEventListener("submit", function(event) {
    event.preventDefault();

    
    // respostas do form 
    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var idade = parseInt(document.getElementById("idade").value);
    var password = document.getElementById("password").value;

    
    // evitar receber respostas vazias
    if (username === "" || email === "" || idade === "" || password === "") {
        alert("Por favor, preencha todos os campos corretamente.");
    } else {
        
        // objeto com a resposta do form 
        var usuario = {
            username: username,
            email: email,
            idade: idade,
            password: password
        };

        
        // adicionar respostas do form ao array
        usuarios.push(usuario);

        
        // remoção das respostas do form
        document.getElementById("form").reset();
        alert("Usuário cadastrado com sucesso!");
        console.log(usuarios);

        
        // ver se foi feito 5 cadastros 
        if (usuarios.length === 5) {
            removerUsuariosMenorDeIdade();
        }
    }
});

function removerUsuariosMenorDeIdade() {
    usuarios = usuarios.filter(usuario => usuario.idade >= 18);
    alert("Usuários com idade menor que 18 removidos do array.");
    console.log(usuarios);
}

      





//VERSÃO ANTIGA


//----- document.getElementById("form").addEventListener("submit", function(event) {
//------ Impedir o envio do formulário em branco
//------    event.preventDefault();
//------
//------ Obter os valores dos campos de entrada
//------    var username = document.getElementById("username").value;
//------    var email = document.getElementById("email").value;
//------    var password = document.getElementById("password").value;
//------
//------    // Realizar a validação (verificar se os campos estão preenchidos)
//------    if (username === "" || email === "" || password === "") {
//------        alert("Por favor, preencha todos os campos.");
//------    } else {
//------        // Se a validação for bem-sucedida, você pode enviar o formulário ou executar outra ação aqui
//------        
//------    window.location = "file:///C:/Users/rauln/OneDrive/%C3%81rea%20de%20Trabalho/projeto%20desen/racermenu.html";
//------        // Você pode adicionar código para enviar o formulário para o servidor aqui
//------   }
//------})
