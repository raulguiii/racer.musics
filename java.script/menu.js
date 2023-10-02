// Event listener para esperar que o DOM seja carregado
document.addEventListener("DOMContentLoaded", function () {
    const notificationModal = document.getElementById("notification-modal");
    const closeNotificationButton = document.querySelector(".close-button");

    // Função para exibir notificação
    function showNotificationModal() {
        notificationModal.style.display = "block";
    }

    // Função para fechar a notificação
    function closeNotificationModal() {
        notificationModal.style.display = "none";
    }

    // Event listener para o botão de notificação
    const notificationButton = document.querySelector('.notification-button');
    notificationButton.addEventListener('click', showNotificationModal);

    // Event listener para o botão de fechar o modal
    closeNotificationButton.addEventListener('click', closeNotificationModal);
});

// Função para preencher a caixa de pesquisa quando o botão da barra lateral for clicado
document.getElementById("botaoDeBuscaSidebar").addEventListener("click", function () {
    var termoDePesquisaSidebar = "O que deseja?"; // Defina o valor que deseja preencher aqui
    document.getElementById("barraDePesquisa").value = termoDePesquisaSidebar;
});

// função para reutilizar esse código em vez de duplicá-lo

function criarPlayerDeMusica(audioPlayer, playButton) {
    playButton.addEventListener('click', () => {
        if (audioPlayer.paused) {
            audioPlayer.play();
            playButton.innerHTML = '<span class="fa fa-pause"></span>';
        } else {
            audioPlayer.pause();
            playButton.innerHTML = '<span class="fa fa-play"></span>';
        }
    });
}

// Player de música usando a função
for (let i = 1; i <= 24; i++) {
    const audioPlayer = document.getElementById(`audio-player${i}`);
    const playButton = document.getElementById(`play-button${i}`);
    criarPlayerDeMusica(audioPlayer, playButton);
}
