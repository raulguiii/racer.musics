// Array para armazenar os objetos de usuário
let usuarios = [];

document.getElementById("form").addEventListener("submit", function(event) {
    event.preventDefault();

    // Receber os valores correspondentes do formulário
    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var idade = parseInt(document.getElementById("idade").value);
    var password = document.getElementById("password").value;

    // Verificar se todos os campos do formulário estão preenchidos
    if (username === "" || email === "" || isNaN(idade) || password === "") {
        alert("Por favor, preencha todos os campos corretamente.");
    } else {
        // Criar um objeto de usuário com os dados do formulário
        var usuario = {
            username: username,
            email: email,
            idade: idade,
            password: password
        };

        // Adicionar o objeto de usuário ao array
        usuarios.push(usuario);

        // Limpar o formulário
        document.getElementById("form").reset();
        alert("Usuário cadastrado com sucesso!");
        console.log(usuarios);

        // Verificar se o usuário fez 5 cadastros
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
