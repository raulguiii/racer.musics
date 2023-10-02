function setupAudioPlayer(playerId, buttonId) {
    const audioPlayer = document.getElementById(playerId);
    const playButton = document.getElementById(buttonId);

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

// a função setupAudioPlayer serve para cada par de players e botões de reprodução


setupAudioPlayer('audio-player1', 'play-button1');
setupAudioPlayer('audio-player2', 'play-button2');
setupAudioPlayer('audio-player3', 'play-button3');
setupAudioPlayer('audio-player4', 'play-button4');
setupAudioPlayer('audio-player5', 'play-button5');
setupAudioPlayer('audio-player6', 'play-button6');
setupAudioPlayer('audio-player7', 'play-button7');
setupAudioPlayer('audio-player8', 'play-button8');
setupAudioPlayer('audio-player9', 'play-button9');
setupAudioPlayer('audio-player10', 'play-button10');
setupAudioPlayer('audio-player11', 'play-button11');
setupAudioPlayer('audio-player12', 'play-button12');
setupAudioPlayer('audio-player13', 'play-button13');
setupAudioPlayer('audio-player14', 'play-button14');
setupAudioPlayer('audio-player15', 'play-button15');
setupAudioPlayer('audio-player16', 'play-button16');
setupAudioPlayer('audio-player17', 'play-button17');
setupAudioPlayer('audio-player18', 'play-button18');
setupAudioPlayer('audio-player19', 'play-button19');
setupAudioPlayer('audio-player20', 'play-button20');
setupAudioPlayer('audio-player21', 'play-button21');
setupAudioPlayer('audio-player22', 'play-button22');
setupAudioPlayer('audio-player23', 'play-button23');
setupAudioPlayer('audio-player24', 'play-button24');

