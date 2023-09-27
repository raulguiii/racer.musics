document.addEventListener("DOMContentLoaded", function () {
    const notificationModal = document.getElementById("notification-modal");
    const closeNotificationButton = document.querySelector(".close-button");

    // Função para exibir o modal de notificação
    function showNotificationModal() {
        notificationModal.style.display = "block";
    }

    // Função para fechar o modal de notificação
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

        // Player de música \\
        const audioPlayer1 = document.getElementById('audio-player1');
        const playButton1 = document.getElementById('play-button1');

        playButton1.addEventListener('click', () => {
            if (audioPlayer1.paused) {
                audioPlayer1.play();
                playButton1.innerHTML = '<span class="fa fa-pause"></span>';
            } else {
                audioPlayer1.pause();
                playButton1.innerHTML = '<span class="fa fa-play"></span>';
            }
        });

        const audioPlayer2 = document.getElementById('audio-player5');
        const playButton2 = document.getElementById('play-button5');

        playButton2.addEventListener('click', () => {
            if (audioPlayer2.paused) {
                audioPlayer2.play();
                playButton2.innerHTML = '<span class="fa fa-pause"></span>';
            } else {
                audioPlayer2.pause();
                playButton2.innerHTML = '<span class="fa fa-play"></span>';
            }
        });
