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



        //Player da música 11\\
        const audioPlayer11 = document.getElementById('audio-player11');
        const playButton11 = document.getElementById('play-button11');

        playButton11.addEventListener('click', () => {
            if (audioPlayer11.paused) {
                audioPlayer11.play();
                playButton11.innerHTML = '<span class="fa fa-pause"></span>';
            } else {
                audioPlayer11.pause();
                playButton11.innerHTML = '<span class="fa fa-play"></span>';
            }
        });



        //Player da música 12\\
        const audioPlayer12 = document.getElementById('audio-player12');
        const playButton12 = document.getElementById('play-button12');

        playButton12.addEventListener('click', () => {
            if (audioPlayer12.paused) {
                audioPlayer12.play();
                playButton12.innerHTML = '<span class="fa fa-pause"></span>';
            } else {
                audioPlayer12.pause();
                playButton12.innerHTML = '<span class="fa fa-play"></span>';
            }
        });



        //Player da música 13\\
        const audioPlayer13 = document.getElementById('audio-player13');
        const playButton13 = document.getElementById('play-button13');

        playButton13.addEventListener('click', () => {
            if (audioPlayer13.paused) {
                audioPlayer13.play();
                playButton13.innerHTML = '<span class="fa fa-pause"></span>';
            } else {
                audioPlayer13.pause();
                playButton13.innerHTML = '<span class="fa fa-play"></span>';
            }
        });



        //Player da música 14\\
        const audioPlayer14 = document.getElementById('audio-player14');
        const playButton14 = document.getElementById('play-button14');

        playButton14.addEventListener('click', () => {
            if (audioPlayer14.paused) {
                audioPlayer14.play();
                playButton14.innerHTML = '<span class="fa fa-pause"></span>';
            } else {
                audioPlayer14.pause();
                playButton14.innerHTML = '<span class="fa fa-play"></span>';
            }
        });



        //Player da música 15\\
        const audioPlayer15 = document.getElementById('audio-player15');
        const playButton15 = document.getElementById('play-button15');

        playButton15.addEventListener('click', () => {
            if (audioPlayer15.paused) {
                audioPlayer15.play();
                playButton15.innerHTML = '<span class="fa fa-pause"></span>';
            } else {
                audioPlayer15.pause();
                playButton15.innerHTML = '<span class="fa fa-play"></span>';
            }
        });



        //Player da música 16\\
        const audioPlayer16 = document.getElementById('audio-player16');
        const playButton16 = document.getElementById('play-button16');

        playButton16.addEventListener('click', () => {
            if (audioPlayer16.paused) {
                audioPlayer16.play();
                playButton16.innerHTML = '<span class="fa fa-pause"></span>';
            } else {
                audioPlayer16.pause();
                playButton16.innerHTML = '<span class="fa fa-play"></span>';
            }
        });



        //Player da música 17\\
        const audioPlayer17 = document.getElementById('audio-player17');
        const playButton17 = document.getElementById('play-button17');

        playButton17.addEventListener('click', () => {
            if (audioPlayer17.paused) {
                audioPlayer17.play();
                playButton17.innerHTML = '<span class="fa fa-pause"></span>';
            } else {
                audioPlayer17.pause();
                playButton17.innerHTML = '<span class="fa fa-play"></span>';
            }
        });



        //Player da música 18\\
        const audioPlayer18 = document.getElementById('audio-player18');
        const playButton18 = document.getElementById('play-button18');

        playButton18.addEventListener('click', () => {
            if (audioPlayer18.paused) {
                audioPlayer18.play();
                playButton18.innerHTML = '<span class="fa fa-pause"></span>';
            } else {
                audioPlayer18.pause();
                playButton18.innerHTML = '<span class="fa fa-play"></span>';
            }
        });



        //Player da música 19\\
        const audioPlayer19 = document.getElementById('audio-player19');
        const playButton19 = document.getElementById('play-button19');

        playButton19.addEventListener('click', () => {
            if (audioPlayer19.paused) {
                audioPlayer19.play();
                playButton19.innerHTML = '<span class="fa fa-pause"></span>';
            } else {
                audioPlayer19.pause();
                playButton19.innerHTML = '<span class="fa fa-play"></span>';
            }
        });



        //Player da música 20\\
        const audioPlayer20 = document.getElementById('audio-player20');
        const playButton20 = document.getElementById('play-button20');

        playButton20.addEventListener('click', () => {
            if (audioPlayer20.paused) {
                audioPlayer20.play();
                playButton20.innerHTML = '<span class="fa fa-pause"></span>';
            } else {
                audioPlayer20.pause();
                playButton20.innerHTML = '<span class="fa fa-play"></span>';
            }
        });



        //Player da música 21\\
        const audioPlayer21 = document.getElementById('audio-player21');
        const playButton21 = document.getElementById('play-button21');

        playButton21.addEventListener('click', () => {
            if (audioPlayer21.paused) {
                audioPlayer21.play();
                playButton21.innerHTML = '<span class="fa fa-pause"></span>';
            } else {
                audioPlayer21.pause();
                playButton21.innerHTML = '<span class="fa fa-play"></span>';
            }
        });



        //Player da música 22\\
        const audioPlayer22 = document.getElementById('audio-player22');
        const playButton22 = document.getElementById('play-button22');

        playButton22.addEventListener('click', () => {
            if (audioPlayer22.paused) {
                audioPlayer22.play();
                playButton22.innerHTML = '<span class="fa fa-pause"></span>';
            } else {
                audioPlayer22.pause();
                playButton22.innerHTML = '<span class="fa fa-play"></span>';
            }
        });



        //Player da música 23\\
        const audioPlayer23 = document.getElementById('audio-player23');
        const playButton23 = document.getElementById('play-button23');

        playButton23.addEventListener('click', () => {
            if (audioPlayer23.paused) {
                audioPlayer23.play();
                playButton23.innerHTML = '<span class="fa fa-pause"></span>';
            } else {
                audioPlayer23.pause();
                playButton23.innerHTML = '<span class="fa fa-play"></span>';
            }
        });



        //Player da música 24\\
        const audioPlayer24 = document.getElementById('audio-player24');
        const playButton24 = document.getElementById('play-button24');

        playButton24.addEventListener('click', () => {
            if (audioPlayer24.paused) {
                audioPlayer24.play();
                playButton24.innerHTML = '<span class="fa fa-pause"></span>';
            } else {
                audioPlayer24.pause();
                playButton24.innerHTML = '<span class="fa fa-play"></span>';
            }
        });
