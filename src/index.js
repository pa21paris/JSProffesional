import MediaPlayer from "./MediaPlayer.js";

const playPauseButton=document.querySelector("button");
const player=document.querySelector("video");
const mediaPlayer=new MediaPlayer(player);
let playing=false;

playPauseButton.onclick=()=>{
    if(playing){
        mediaPlayer.pause();
    }else{
        mediaPlayer.play();
    }
    playing=!playing;
}