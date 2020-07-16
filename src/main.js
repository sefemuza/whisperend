"use strict";
/**
 * Whisper End
 * @sefemuza
 */
function loadImageAsset(path) {
    var img = new Image();
    img.addEventListener('load', function () {
    }, false);
    img.src = path;
    return img;
}
var TimeManager = /** @class */ (function () {
    function TimeManager() {
        this.delta = 0.0;
        this.elapsed = 0.0;
        this.start = 0.0;
        this.before = 0.0;
        this.initalized = false;
    }
    TimeManager.prototype.init = function () {
        this.before = this.start = (performance || Date).now();
    };
    TimeManager.prototype.update = function () {
        this.start = (performance || Date).now(); //milliseconds
        this.delta = (this.start - this.before) / 1000; //to seconds
        this.elapsed += this.delta;
        this.before = this.start;
    };
    TimeManager.prototype.getDelta = function () {
        return this.delta;
    };
    TimeManager.prototype.getDeltaMS = function () {
        return this.delta * 1000;
    };
    TimeManager.prototype.getElapsed = function () {
        return this.elapsed;
    };
    TimeManager.prototype.reset = function () {
        this.init();
        this.elapsed = 0;
    };
    return TimeManager;
}());
var WhisperEnd = /** @class */ (function () {
    function WhisperEnd() {
        var _this = this;
        this.width = 400;
        this.height = 240;
        this.assets = {
            splashScreenBasic: loadImageAsset("assets/splash-art-basic.png")
        };
        this.loop = function () {
            _this.timeManager.update();
            _this.update();
            _this.draw();
            requestAnimationFrame(_this.loop);
        };
        // notes
        console.log("Whisper End @Sefemuza 2020");
        console.log("Early demo build, note design choices. for sake of wanting to focus only on making a complete demo as soon as I can, I've set some limitations. Everything will be written in using Typescript to run in Electron desktop. Gamepad support only. Everything will run within resolution of 400x240 pixels. Only the canvas element will be used. Limited font will be used. Demo will be expanded upon later (i.e. touch screen support, mouse/keyboard, multiplatform) and probably rewritten in the Unity Engine but for now. I just want to have a working game to make it as easy for me to play around with and to keep motivation going. Similar to how barebone and straight to the point the pico8 is. I hope to focus as much on the actual game rather than technical details to keep the feeling of 'soul' alive and motivation high. Thank you!");
        // start
        this.timeManager = new TimeManager();
        var supportedCharacters = "@abcdefghijklmnopqrstuvwxyz0123456789,.\"'-?!{}> @".toLowerCase();
        for (var i = 0; i < supportedCharacters.length; i++) {
            console.log(supportedCharacters.charAt(i) + " : " + supportedCharacters.charCodeAt(i));
        }
        this.canvas = document.getElementById("whisperend");
        this.ctx = this.canvas.getContext("2d");
        this.ctx.imageSmoothingEnabled = false;
        window.onresize = function () {
            _this.resize();
        };
        this.resize();
        this.timeManager.init();
        this.loop();
    }
    WhisperEnd.prototype.resize = function () {
        var sx = (window.innerWidth / this.width) | 0;
        var sy = (window.innerHeight / this.height) | 0;
        var scale = sx <= sy ? sx : sy;
        if (scale < 1) {
            scale = 1;
        }
        this.canvas.style.width = this.width * scale + "px";
        this.canvas.style.height = this.height * scale + "px";
    };
    WhisperEnd.prototype.drawImg = function (img, x, y) {
        // everything is pixel perfect
        if (img) {
            this.ctx.drawImage(img, Math.round(x), Math.round(y));
        }
    };
    WhisperEnd.prototype.drawText = function (text, x, y) {
        // Pixel only font 
        // Everything is 1 single case
        var txt = text.toLowerCase();
        //Characters supported are
        /**
         * A-Z
         * 0-9
         *
        */
    };
    WhisperEnd.prototype.update = function () {
    };
    WhisperEnd.prototype.draw = function () {
        this.ctx.clearRect(0, 0, this.width, this.height);
        this.ctx.fillStyle = "#130e1a";
        this.ctx.fillRect(0, 0, this.width, this.height);
        var delayer = 1;
        var distance = 3;
        var xOffset = Math.sin(this.timeManager.getElapsed() / delayer) * distance;
        this.drawImg(this.assets.splashScreenBasic, xOffset, 0);
    };
    return WhisperEnd;
}());
// start of everything
window.onload = function () {
    new WhisperEnd();
};
