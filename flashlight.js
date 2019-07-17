"use strict";
var flashlight = /** @class */ (function () {
    function flashlight(pcolor, _length, _lightPwr, _btr) {
    }
    Object.defineProperty(flashlight.prototype, "length", {
        get: function () {
            return this._length;
        },
        set: function (x) {
            if (x < 0) {
                console.log('volume error');
            }
            this._length = x;
        },
        enumerable: true,
        configurable: true
    });
    return flashlight;
}());
