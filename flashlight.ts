class flashlight {
    color: string;
    _length: number;
    _lightPwr :number;
    _btr: number;
    get length(){
        return this._length;
    }
    set length(x){
        if (x<0){
            console.log('volume error'); 
        }
        this._length = x;
    }

    constructor(pcolor:string,_length: number, _lightPwr :number, _btr: number) {
        
    }
}