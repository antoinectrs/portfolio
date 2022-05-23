//PLAYER 1
const player = document.querySelector('.player_audio');
const playerDisplay = document.querySelector('.player_display');

//PLAYER 2
const player2 = document.querySelector('.player_audio2');
const playerDisplay2 = document.querySelector('.player2_display');

const changeTempo = function (tempoInput) {
  player.playbackRate = tempoInput;
  tempoDisplay.textContent = tempoInput;

};
const changeTempo2 = function () {
  player2.playbackRate = tempoInput2.value;
  tempoDisplay2.textContent = tempoInput2.value;
};

// Playback tempo 
const tempoInput = document.getElementById('tempo_input');
const tempoInput2 = document.getElementById('tempo_input2');

tempoInput.addEventListener("change", changeTempo, false);
const tempoDisplay = document.querySelector('.tempo_display');
tempoDisplay.textContent = tempoInput.value;

tempoInput2.addEventListener("change", changeTempo2, false);
const tempoDisplay2 = document.querySelector('.tempo_display2');
tempoDisplay2.textContent = tempoInput2.value;

player.src = "./../music/tempo1/field.mp3";
player2.src = "./../music/tempo1/few.mp3";
// changeSongURL();
// changeTempo(tempoInput.value);
// changeTempo();
