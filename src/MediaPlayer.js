class MediaPlayer{
    #media
    constructor(media){
        this.#media=media;
    }

    play(){
        this.#media.play();
    }

    pause(){
        this.#media.pause();
    }
}

export default MediaPlayer;

