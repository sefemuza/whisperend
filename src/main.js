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
var is_key_down = (function () {
    var state = {};
    window.addEventListener('keyup', function (e) { return state[e.key] = false; });
    window.addEventListener('keydown', function (e) { return state[e.key] = true; });
    return function (key) { return state.hasOwnProperty(key) && state[key] || false; };
})();
var WhisperEnd = /** @class */ (function () {
    function WhisperEnd() {
        var _this = this;
        this.width = 400;
        this.height = 240;
        this.assets = {
            splashScreenBasic: loadImageAsset("assets/splash-art-basic.png"),
            //aihtwe
            //alone is how the whisper ends
            aihtweBackground: loadImageAsset("assets/aloneishowthewhisperends/background.png"),
            aihtweCeilingSplit: loadImageAsset("assets/aloneishowthewhisperends/ceilingsplit.png"),
            aihtweEve: loadImageAsset("assets/aloneishowthewhisperends/eve.png"),
            aihtweForegroundShadow: loadImageAsset("assets/aloneishowthewhisperends/foregroundshadow.png"),
            aihtweRaven: loadImageAsset("assets/aloneishowthewhisperends/raven.png"),
            icon: loadImageAsset("assets/icon.png"),
            font: {
                //chars go by ASCII values
                "invalid": loadImageAsset("assets/font/invalid.png"),
                "32": loadImageAsset("assets/font/32.png"),
                "33": loadImageAsset("assets/font/33.png"),
                "34": loadImageAsset("assets/font/34.png"),
                "39": loadImageAsset("assets/font/39.png"),
                //48-57
                "40": loadImageAsset("assets/font/40.png"),
                "41": loadImageAsset("assets/font/41.png"),
                "44": loadImageAsset("assets/font/44.png"),
                "45": loadImageAsset("assets/font/45.png"),
                "46": loadImageAsset("assets/font/46.png"),
                "48": loadImageAsset("assets/font/48.png"),
                "49": loadImageAsset("assets/font/49.png"),
                "50": loadImageAsset("assets/font/50.png"),
                "51": loadImageAsset("assets/font/51.png"),
                "52": loadImageAsset("assets/font/52.png"),
                "53": loadImageAsset("assets/font/53.png"),
                "54": loadImageAsset("assets/font/54.png"),
                "55": loadImageAsset("assets/font/55.png"),
                "56": loadImageAsset("assets/font/56.png"),
                "57": loadImageAsset("assets/font/57.png"),
                "60": loadImageAsset("assets/font/60.png"),
                "62": loadImageAsset("assets/font/62.png"),
                "63": loadImageAsset("assets/font/63.png"),
                "97": loadImageAsset("assets/font/97.png"),
                "98": loadImageAsset("assets/font/98.png"),
                "99": loadImageAsset("assets/font/99.png"),
                "100": loadImageAsset("assets/font/100.png"),
                "101": loadImageAsset("assets/font/101.png"),
                "102": loadImageAsset("assets/font/102.png"),
                "103": loadImageAsset("assets/font/103.png"),
                "104": loadImageAsset("assets/font/104.png"),
                "105": loadImageAsset("assets/font/105.png"),
                "106": loadImageAsset("assets/font/106.png"),
                "107": loadImageAsset("assets/font/107.png"),
                "108": loadImageAsset("assets/font/108.png"),
                "109": loadImageAsset("assets/font/109.png"),
                "110": loadImageAsset("assets/font/110.png"),
                "111": loadImageAsset("assets/font/111.png"),
                "112": loadImageAsset("assets/font/112.png"),
                "113": loadImageAsset("assets/font/113.png"),
                "114": loadImageAsset("assets/font/114.png"),
                "115": loadImageAsset("assets/font/115.png"),
                "116": loadImageAsset("assets/font/116.png"),
                "117": loadImageAsset("assets/font/117.png"),
                "118": loadImageAsset("assets/font/118.png"),
                "119": loadImageAsset("assets/font/119.png"),
                "120": loadImageAsset("assets/font/120.png"),
                "121": loadImageAsset("assets/font/121.png"),
                "122": loadImageAsset("assets/font/122.png"),
            }
        };
        this.loop = function () {
            _this.timeManager.update();
            _this.update();
            _this.draw();
            requestAnimationFrame(_this.loop);
        };
        this.fontEffects = new OffscreenCanvas(3, 4);
        this.fontEffectsCtx = this.fontEffects.getContext('2d');
        // notes
        console.log("Whisper End @Sefemuza 2020");
        console.log("Early demo build, note design choices. for sake of wanting to focus only on making a complete demo as soon as I can, I've set some limitations. Everything will be written in using Typescript to run in Electron desktop. Gamepad support only. Everything will run within resolution of 400x240 pixels. Only the canvas element will be used. Limited font will be used. Demo will be expanded upon later (i.e. touch screen support, mouse/keyboard, multiplatform) and probably rewritten in the Unity Engine but for now. I just want to have a working game to make it as easy for me to play around with and to keep motivation going. Similar to how barebone and straight to the point the pico8 is. I hope to focus as much on the actual game rather than technical details to keep the feeling of 'soul' alive and motivation high. Thank you!");
        // start
        this.timeManager = new TimeManager();
        // const supportedCharacters = `@abcdefghijklmnopqrstuvwxyz0123456789,."'-?!()>< @`.toLowerCase();
        // for(let i = 0; i < supportedCharacters.length; i++) {
        //     console.log(`${supportedCharacters.charAt(i)} : ${supportedCharacters.charCodeAt(i)}`);
        // }
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
    WhisperEnd.prototype.drawText = function (text, x, y, color) {
        // Pixel only font, each character is 3x4 characters, case insensitive
        //Characters supported are abcdefghijklmnopqrstuvwxyz0123456789,."'-?!{}> 
        var txt = text.toLowerCase();
        var dx = 0; //horizontal displacement
        for (var i = 0; i < txt.length; i++) {
            var asciiValue = txt.charCodeAt(i);
            var img = this.assets.font[asciiValue];
            if (!img) {
                img = this.assets.font["invalid"];
            }
            if (img && color && is_key_down('ArrowLeft')) {
                this.fontEffectsCtx.clearRect(0, 0, 3, 4);
                this.fontEffectsCtx.save();
                this.fontEffectsCtx.fillStyle = color;
                this.fontEffectsCtx.fillRect(x + dx, y, 3, 4);
                this.fontEffectsCtx.globalCompositeOperation = "destination-in";
                this.fontEffectsCtx.drawImage(img, Math.round(x), Math.round(y));
                this.fontEffectsCtx.globalCompositeOperation = "source-over";
                this.fontEffectsCtx.restore();
                this.ctx.drawImage(this.fontEffects, x + dx, y);
            }
            else {
                this.drawImg(img, x + dx, y);
            }
            dx += 4;
        }
    };
    WhisperEnd.prototype.update = function () {
    };
    WhisperEnd.prototype.drawAnimatedMainMenu = function () {
        var bgColor = "#130e1a";
        this.ctx.fillStyle = bgColor;
        this.ctx.fillRect(0, 0, this.width, this.height);
        var delayer = 20;
        var distance = 2;
        //make room for menu
        var xOffset = Math.sin(this.timeManager.getElapsed() / delayer) * distance + 30;
        // this.drawImg(this.assets.splashScreenBasic, xOffset, 0);
        this.drawImg(this.assets.aihtweBackground, xOffset, 0);
        this.drawImg(this.assets.aihtweEve, xOffset, 0);
        this.drawImg(this.assets.aihtweRaven, xOffset, 0);
        this.drawImg(this.assets.aihtweCeilingSplit, xOffset, 0);
        this.drawImg(this.assets.aihtweForegroundShadow, xOffset, 0);
        //draw menu
        var menuOptions = [
            "Play",
            "Settings",
            "About",
            "Quit"
        ];
        var titleX = 10;
        var titleY = 150;
        var menuXOffset = 6;
        var menuYOffset = 15;
        var menuX = titleX + menuXOffset;
        var menuY = titleY + menuYOffset;
        var menuYgap = 8;
        var selectorPosition = 0;
        this.drawImg(this.assets.icon, titleX, titleY - 16);
        this.drawText("Whisper End", titleX, titleY, "#ff0000");
        for (var i = 0; i < menuOptions.length; i++) {
            this.drawText(menuOptions[i], menuX, menuY + menuYgap * i);
            if (selectorPosition == i) {
                this.drawText(">", menuX - 5, menuY + menuYgap * i);
            }
        }
        this.drawText("(DEMO)", titleX, 200);
    };
    WhisperEnd.prototype.draw = function () {
        this.ctx.clearRect(0, 0, this.width, this.height);
        this.drawAnimatedMainMenu();
    };
    return WhisperEnd;
}());
// start of everything
window.onload = function () {
    new WhisperEnd();
};
