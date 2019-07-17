"use strict";
var Speaker = /** @class */ (function () {
    function Speaker(color, _volume) {
        this.color = color;
        this.volume = _volume;
    }
    Object.defineProperty(Speaker.prototype, "volume", {
        get: function () {
            return this._volume;
        },
        set: function (x) {
            if (x > 10 || x < 0) {
                console.log('volume error');
            }
            this._volume = x;
        },
        enumerable: true,
        configurable: true
    });
    Speaker.prototype.speakerOn = function () {
        console.log('on');
    };
    Speaker.prototype.speakerOff = function () {
        console.log('off');
    };
    Speaker.prototype.voiceOn = function () {
        console.log('voice on');
    };
    return Speaker;
}());
var Speaker1 = new Speaker('blue', 12);
var Speaker2 = new Speaker('red', 7);
