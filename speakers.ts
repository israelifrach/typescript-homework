class Speaker {
     color: string;
    _volume: number;
    get volume(){
        return this._volume;
    }
    set volume(x){
        if (x>10 || x<0){
            console.log('volume error'); 
        }
        this._volume = x;
    }

    constructor(color: string , _volume: number) {
        this.color = color;
        this.volume = _volume;
    }

    speakerOn(){
        console.log('on');
    }
    speakerOff(){
        console.log('off');
    }

    voiceOn(){
        console.log('voice on');
    }
}
let Speaker1 = new Speaker('blue' , 12);

let Speaker2 = new Speaker('red' , 7);