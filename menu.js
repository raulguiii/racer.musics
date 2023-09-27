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

        // Player da música 1\\
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



        // Player da música 2\\
        const audioPlayer2 = document.getElementById('audio-player2');
        const playButton2 = document.getElementById('play-button2');

        playButton2.addEventListener('click', () => {
            if (audioPlayer2.paused) {
                audioPlayer2.play();
                playButton2.innerHTML = '<span class="fa fa-pause"></span>';
            } else {
                audioPlayer2.pause();
                playButton2.innerHTML = '<span class="fa fa-play"></span>';
            }
        });



        //Player da música 3\\
        const audioPlayer3 = document.getElementById('audio-player3');
        const playButton3 = document.getElementById('play-button3');

        playButton3.addEventListener('click', () => {
            if (audioPlayer3.paused) {
                audioPlayer3.play();
                playButton3.innerHTML = '<span class="fa fa-pause"></span>';
            } else {
                audioPlayer3.pause();
                playButton3.innerHTML = '<span class="fa fa-play"></span>';
            }
        });



        //Player da música 4\\
        const audioPlayer4 = document.getElementById('audio-player4');
        const playButton4 = document.getElementById('play-button4');

        playButton4.addEventListener('click', () => {
            if (audioPlayer4.paused) {
                audioPlayer4.play();
                playButton4.innerHTML = '<span class="fa fa-pause"></span>';
            } else {
                audioPlayer4.pause();
                playButton4.innerHTML = '<span class="fa fa-play"></span>';
            }
        });



        //Player da música 5\\
        const audioPlayer5 = document.getElementById('audio-player5');
        const playButton5 = document.getElementById('play-button5');

        playButton5.addEventListener('click', () => {
            if (audioPlayer5.paused) {
                audioPlayer5.play();
                playButton5.innerHTML = '<span class="fa fa-pause"></span>';
            } else {
                audioPlayer5.pause();
                playButton5.innerHTML = '<span class="fa fa-play"></span>';
            }
        });



        //Player da música 6\\
        const audioPlayer6 = document.getElementById('audio-player6');
        const playButton6 = document.getElementById('play-button6');

        playButton6.addEventListener('click', () => {
            if (audioPlayer6.paused) {
                audioPlayer6.play();
                playButton6.innerHTML = '<span class="fa fa-pause"></span>';
            } else {
                audioPlayer6.pause();
                playButton6.innerHTML = '<span class="fa fa-play"></span>';
            }
        });



        //Player da música 7\\
        const audioPlayer7 = document.getElementById('audio-player7');
        const playButton7 = document.getElementById('play-button7');

        playButton7.addEventListener('click', () => {
            if (audioPlayer7.paused) {
                audioPlayer7.play();
                playButton7.innerHTML = '<span class="fa fa-pause"></span>';
            } else {
                audioPlayer7.pause();
                playButton7.innerHTML = '<span class="fa fa-play"></span>';
            }
        });



        //Player da música 8\\
        const audioPlayer8 = document.getElementById('audio-player8');
        const playButton8 = document.getElementById('play-button8');

        playButton8.addEventListener('click', () => {
            if (audioPlayer8.paused) {
                audioPlayer8.play();
                playButton8.innerHTML = '<span class="fa fa-pause"></span>';
            } else {
                audioPlayer8.pause();
                playButton8.innerHTML = '<span class="fa fa-play"></span>';
            }
        });



        //Player da música 9\\
        const audioPlayer9 = document.getElementById('audio-player9');
        const playButton9 = document.getElementById('play-button9');

        playButton9.addEventListener('click', () => {
            if (audioPlayer9.paused) {
                audioPlayer9.play();
                playButton9.innerHTML = '<span class="fa fa-pause"></span>';
            } else {
                audioPlayer9.pause();
                playButton9.innerHTML = '<span class="fa fa-play"></span>';
            }
        });



        //Player da música 10\\
        const audioPlayer10 = document.getElementById('audio-player10');
        const playButton10 = document.getElementById('play-button10');

        playButton10.addEventListener('click', () => {
            if (audioPlayer10.paused) {
                audioPlayer10.play();
                playButton10.innerHTML = '<span class="fa fa-pause"></span>';
            } else {
                audioPlayer10.pause();
                playButton10.innerHTML = '<span class="fa fa-play"></span>';
            }
        });
