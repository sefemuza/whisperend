"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
/**
 * Whisper End
 * @sefemuza
 */
var LoreManager = /** @class */ (function () {
    function LoreManager() {
        /**
         * List of quotes to appear when hitting planning just before the game starts
         * to set the mood?
         * Sources: Old Testament, New Testament, Book of Enoch, Marcus Aurelius, Thomas Hobbe, Friedrich Nietzsche, proverbs
         * George Orwell, Kurt Vonnegut, Napoleon Bonaparte
         * "whispers" are random? idk gotta think lore for them
         */
        this.quotes = [
            [
                "whispers:",
                "\"mors certa vita incerta\""
            ],
            [
                "\"If a man die, shall he live again?",
                "All the days of my service I would wait,",
                "till my release should come.\"",
                "(Job 14:14)"
            ],
            [
                "\"For if God spared not the angels that sinned,",
                "but cast them down to hell,",
                "and delivered them into chains of darkness,",
                "to be reserved unto judgment;",
                "(2 Peter 2:4)"
            ],
            [
                "\"Above it stood the seraphims:",
                "each one had six wings;",
                "with twain he covered his face,",
                "and with twain he covered his feet,",
                "and with twain he did fly.\"",
                "(Isaiah 6:2)"
            ],
            [
                "\"Then I heard",
                "the voices of those upon the four sides magnifying the Lord of glory.",
                "The first voice blessed the Lord of spirits for ever and for ever.",
                "The second voice I heard blessing the Elect One,",
                "and the elect who suffer on account of the Lord of spirits.",
                "The third voice I heard petitioning and praying for those who dwell upon earth,",
                "and supplicate the name of the Lord of spirits.",
                "The fourth voice I heard expelling the impious angels,",
                "and prohibiting them from entering into the presence of the Lord of spirits,",
                "to prefer accusations against the inhabitants of the earth",
                "It would have been better for them, had they never been born.\"",
                "(Enoch 40:3)"
            ],
            [
                "\"Then Uriel,",
                "one of the holy angels who were with me,",
                "replied,",
                "This valley is the accursed of the accursed for ever.",
                "Here shall be collected all who utter with their mouths",
                "unbecoming language against God,",
                "and speak harsh things of His glory.",
                "Here shall they be collected. Here shall be their territory.\"",
                "(Enoch 24:2)"
            ],
            [
                "\"Among these there was a tree of an unceasing smell;",
                "nor of those which were in Eden",
                "was there one of all the fragrant trees which smelt like this.",
                "Its leaf, its flower, and its bark never withered,",
                "and its fruit was beautiful...",
                "The fruit of the tree shall be given to the elect\"",
                "(Enoch 24:3)"
            ],
            [
                "\"And understand with the heart.",
                "As he has created and given to men",
                "the power of comprehending the word of understanding,",
                "so has he created and given to me",
                "the power of reproving the Watchers, the offspring of heaven\"",
                "(Enoch 14:2)"
            ],
            [
                "\"Thus has the whole earth been filled with blood and with iniquity.",
                "And now behold the souls of those who are dead, cry out.",
                "And complain even to the gate of heaven.",
                "Their groaning ascends;",
                "nor can they escape from the unrighteousness which is committed on earth.",
                "You know all things, before they exist.\"",
                "(Enoch 9:9-12)"
            ],
            [
                "\"These shall make war with the Lamb,",
                "and the Lamb shall overcome them:",
                "for he is Lord of lords, and King of kings:",
                "and they that are with him are called, and chosen, and faithful.\"",
                "(Revelation 17:14)"
            ],
            [
                "\"And when he had opened the fifth seal,",
                "I saw under the altar",
                "the souls of them that were slain for the word of God,",
                "and for the testimony which they held:",
                "And they cried with a loud voice, saying,",
                "How long, O Lord, holy and true,",
                "dost thou not judge",
                "and avenge our blood on them that dwell on the earth?\"",
                "(Revelation 6:9-10)"
            ],
            [
                "\"There I saw another vision;",
                "I saw the habitations and",
                "resting places of the saints.",
                "There my eyes beheld their habitations with the angels,",
                "and their resting places with the holy ones.",
                "They were entreating, supplicating,",
                "and praying for the sons of men;",
                "while righteousness like water flowed before them,",
                "and mercy like dew was scattered over the earth.",
                "And thus shall it be with them for ever and for ever.\"",
                "(Enoch 39:4)"
            ],
            [
                "\"But ungodly men by their words and deeds summoned death;",
                "considering him a friend,",
                "they pined away,",
                "and they made a covenant with him,",
                "because they are fit to belong to his party.\"",
                "(Wisdom 1:16)",
            ],
            [
                "\"And the sea gave up the dead which were in it;",
                "and death and hell delivered up the dead which were in them:",
                "and they were judged every man according to their works.\"",
                "(Revelation 20:13)"
            ],
            [
                "\"Whoever fights monsters should see to it that",
                "in the process he does not become a monster.",
                "And if you gaze long enough into an abyss,",
                "the abyss will gaze back into you.\"",
                "-Friedrich Nietzsche"
            ],
            [
                "\"Every tree that does not bear good fruit is cut down",
                "and thrown into the fire.\"",
                "(Matthew 7:1)"
            ],
            [
                "\"When the axe came into the Forest,",
                "the trees said ",
                "'The handle is one of us'\"",
                "-proverb"
            ],
            [
                "\"I am about to take my last voyage,",
                "a great leap in the dark\"",
                "-Thomas Hobbes"
            ],
            [
                "\"The condition of man...",
                "is a condition of war of everyone against everyone.\"",
                "-Thomas Hobbes"
            ],
            [
                "\"And I looked, and behold, a pale horse!",
                "And its rider's name was Death, and Hades followed him.\"",
                "(Revelation 6:8)"
            ],
            [
                "\"And in those days shall men seek death and shall not find it;",
                "and shall desire to die, and death shall flee from them.\"",
                "(Revelation 9:6)"
            ],
            [
                "\"Do not act as if you were going to live ten thousand years.",
                "Death hangs over you.",
                "While you live, while it is in your power, be good.\"",
                "-Marcus Aurelius"
            ],
            [
                "\"Now I am become Death, the destroyer of worlds\"",
                "-Robert Oppenheimer"
            ],
            [
                "\"Reality exists in the human mind, and nowhere else.\"",
                "-George Orwell"
            ],
            [
                "\"We are what we pretend to be,",
                "so we must be careful about what we pretend to be.\"",
                "-Kurt Vonnegut"
            ],
            [
                "\"We must laugh at man to avoid crying for him.\"",
                "-Napoleon Bonaparte"
            ],
            [
                "\"I saw in the visions of my head upon my bed,",
                "and, behold, a watcher",
                "and an holy one came down from heaven;\"",
                "(Daniel 4:13)"
            ],
            [
                "whispers:",
                "\"I wonder what they think when they see me\""
            ],
            [
                "whispers:",
                "\"and now I am forgotten...\""
            ],
            [
                "whispers:",
                "\"I have no one...",
                "but I have company in my dreams,",
                "I just want to dream...",
                "I just want to dream...\"",
            ],
            [
                "whispers:",
                "\"What do you want out of life?",
                "Are you sure?\""
            ],
            [
                "whispers:",
                "\"our memories hollow..."
            ],
            [
                "whispers:",
                "\"to reanimate someone...",
                "you must offer someone...",
            ],
            [
                "whispers:",
                "\"the shadows call...",
                "alone...\""
            ],
            [
                "whispers:",
                "\"a key...",
                "a note...",
                "the altar...",
                "beyond the cave of despair...\""
            ],
            [
                "whispers:",
                "\"as above...",
                "as below...\""
            ],
            [
                "whispers:",
                "\"Five of pentacles...",
                "Ten of swords...",
                "The tower...",
                "Eight of cups...",
                "The Devil...\""
            ],
            [
                "whispers:",
                "\"For ever...",
                "and for ever...\""
            ]
        ];
    }
    LoreManager.prototype.getSpecificQuote = function (index) {
        return this.quotes[index];
    };
    LoreManager.prototype.getRandomQuote = function () {
        return this.quotes[Math.floor(Math.random() * this.quotes.length)];
    };
    return LoreManager;
}());
var TimeManager = /** @class */ (function () {
    function TimeManager() {
        this.delta = 0.0;
        this.elapsed = 0.0;
        this.start = 0.0;
        this.before = 0.0;
        this.initalized = false;
        this.before = this.start = (performance || Date).now();
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
    //returns time in seconds
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
var AssetManager = /** @class */ (function () {
    function AssetManager() {
    }
    AssetManager.loadImageAsset = function (path) {
        var img = new Image();
        img.addEventListener('load', function () {
        }, false);
        img.src = path;
        return img;
    };
    return AssetManager;
}());
var Input = /** @class */ (function () {
    function Input() {
        var _this = this;
        this.usingGamepad = false;
        this.activeGamepadIndex = -1;
        this.gamepad = null;
        this.dx = 0;
        this.dy = 0;
        window.addEventListener("gamepadconnected", function (event) {
            _this.usingGamepad = true;
            _this.activeGamepadIndex = event.gamepad.index;
            _this.gamepad = navigator.getGamepads()[_this.activeGamepadIndex];
        });
        window.addEventListener("gamepaddisconnected", function (event) {
            _this.usingGamepad = false;
            _this.activeGamepadIndex = -1;
            _this.gamepad = null;
        });
    }
    Input.prototype.isGamepadConnected = function () {
        return this.usingGamepad && navigator.getGamepads()[0] != null;
    };
    Input.prototype.getGamepad = function (gamepadIndex) {
        if (gamepadIndex === void 0) { gamepadIndex = 0; }
        return navigator.getGamepads()[gamepadIndex];
    };
    Input.prototype.update = function () {
        var gamepad = this.getGamepad();
        if (gamepad) {
            var leftStickX = gamepad.axes[0];
            var leftStickY = gamepad.axes[1];
            var minDistance = 0.2;
            this.dx = (Math.abs(leftStickX) > minDistance) ? leftStickX : 0;
            this.dy = (Math.abs(leftStickY) > minDistance) ? leftStickY : 0;
            if (gamepad) {
                for (var i = 0; i < gamepad.buttons.length; i++) {
                    // console.log(`Pressed ${gamepad.buttons[ButtonXBox.A].pressed}`);
                }
            }
            console.log(this.dx + "|" + this.dy);
        }
    };
    // quick and dirty key down
    // key support is not planned
    // only for quick debug
    // game is gamepad only
    Input.is_key_down = (function () {
        var state = {};
        window.addEventListener('keyup', function (e) { return state[e.key] = false; });
        window.addEventListener('keydown', function (e) { return state[e.key] = true; });
        return function (key) { return state.hasOwnProperty(key) && state[key] || false; };
    })();
    return Input;
}());
// Basic
var Animator = /** @class */ (function () {
    /**
     * Assumed to be horizontal sprite sheet with constant width and height
     * Manually need to input the width and height for now as the img is not guaranteed to be loaded in
     */
    function Animator(img, frameWidth, frameHeight, frameCount, frameDuration) {
        this.currentFrame = 0;
        this.timer = 0;
        this.src = img;
        this.frameWidth = frameWidth;
        this.frameHeight = frameHeight;
        this.frameCount = frameCount;
        this.frameDuration = frameDuration;
    }
    Animator.prototype.update = function (dt) {
        this.timer += dt;
        if (this.timer > this.frameDuration) {
            this.currentFrame++;
            this.timer = 0;
        }
        if (this.currentFrame >= this.frameCount) {
            this.currentFrame = 0;
        }
    };
    Animator.prototype.draw = function (ctx, x, y) {
        if (this.src) {
            ctx.drawImage(this.src, this.currentFrame * this.frameWidth, 0, this.frameWidth, this.frameHeight, Math.round(x), Math.round(y), this.frameWidth, this.frameHeight);
        }
    };
    return Animator;
}());
var Renderer = /** @class */ (function () {
    function Renderer(id, width, height) {
        var _this = this;
        this.font = {
            //chars go by ASCII values
            "invalid": AssetManager.loadImageAsset("assets/font/invalid.png"),
            "32": AssetManager.loadImageAsset("assets/font/32.png"),
            "33": AssetManager.loadImageAsset("assets/font/33.png"),
            "34": AssetManager.loadImageAsset("assets/font/34.png"),
            "39": AssetManager.loadImageAsset("assets/font/39.png"),
            //48-57
            "40": AssetManager.loadImageAsset("assets/font/40.png"),
            "41": AssetManager.loadImageAsset("assets/font/41.png"),
            "44": AssetManager.loadImageAsset("assets/font/44.png"),
            "45": AssetManager.loadImageAsset("assets/font/45.png"),
            "46": AssetManager.loadImageAsset("assets/font/46.png"),
            "48": AssetManager.loadImageAsset("assets/font/48.png"),
            "49": AssetManager.loadImageAsset("assets/font/49.png"),
            "50": AssetManager.loadImageAsset("assets/font/50.png"),
            "51": AssetManager.loadImageAsset("assets/font/51.png"),
            "52": AssetManager.loadImageAsset("assets/font/52.png"),
            "53": AssetManager.loadImageAsset("assets/font/53.png"),
            "54": AssetManager.loadImageAsset("assets/font/54.png"),
            "55": AssetManager.loadImageAsset("assets/font/55.png"),
            "56": AssetManager.loadImageAsset("assets/font/56.png"),
            "57": AssetManager.loadImageAsset("assets/font/57.png"),
            "58": AssetManager.loadImageAsset("assets/font/58.png"),
            "59": AssetManager.loadImageAsset("assets/font/59.png"),
            "60": AssetManager.loadImageAsset("assets/font/60.png"),
            "62": AssetManager.loadImageAsset("assets/font/62.png"),
            "63": AssetManager.loadImageAsset("assets/font/63.png"),
            "64": AssetManager.loadImageAsset("assets/font/64.png"),
            "97": AssetManager.loadImageAsset("assets/font/97.png"),
            "98": AssetManager.loadImageAsset("assets/font/98.png"),
            "99": AssetManager.loadImageAsset("assets/font/99.png"),
            "100": AssetManager.loadImageAsset("assets/font/100.png"),
            "101": AssetManager.loadImageAsset("assets/font/101.png"),
            "102": AssetManager.loadImageAsset("assets/font/102.png"),
            "103": AssetManager.loadImageAsset("assets/font/103.png"),
            "104": AssetManager.loadImageAsset("assets/font/104.png"),
            "105": AssetManager.loadImageAsset("assets/font/105.png"),
            "106": AssetManager.loadImageAsset("assets/font/106.png"),
            "107": AssetManager.loadImageAsset("assets/font/107.png"),
            "108": AssetManager.loadImageAsset("assets/font/108.png"),
            "109": AssetManager.loadImageAsset("assets/font/109.png"),
            "110": AssetManager.loadImageAsset("assets/font/110.png"),
            "111": AssetManager.loadImageAsset("assets/font/111.png"),
            "112": AssetManager.loadImageAsset("assets/font/112.png"),
            "113": AssetManager.loadImageAsset("assets/font/113.png"),
            "114": AssetManager.loadImageAsset("assets/font/114.png"),
            "115": AssetManager.loadImageAsset("assets/font/115.png"),
            "116": AssetManager.loadImageAsset("assets/font/116.png"),
            "117": AssetManager.loadImageAsset("assets/font/117.png"),
            "118": AssetManager.loadImageAsset("assets/font/118.png"),
            "119": AssetManager.loadImageAsset("assets/font/119.png"),
            "120": AssetManager.loadImageAsset("assets/font/120.png"),
            "121": AssetManager.loadImageAsset("assets/font/121.png"),
            "122": AssetManager.loadImageAsset("assets/font/122.png"),
        };
        this.width = width;
        this.height = height;
        this.canvas = document.getElementById(id);
        this.ctx = this.canvas.getContext("2d");
        this.ctx.imageSmoothingEnabled = false;
        window.onresize = function () {
            _this.resize();
        };
        this.resize();
    }
    Renderer.prototype.resize = function () {
        var sx = (window.innerWidth / this.width) | 0;
        var sy = (window.innerHeight / this.height) | 0;
        var scale = sx <= sy ? sx : sy;
        if (scale < 1) {
            scale = 1;
        }
        this.canvas.style.width = this.width * scale + "px";
        this.canvas.style.height = this.height * scale + "px";
    };
    Renderer.prototype.clear = function () {
        this.ctx.clearRect(0, 0, this.width, this.height);
    };
    /**
     * Pixel perfect drawImage
     * @param img may be null, ignore draw call if it is
     * @param x rounded to nearest int
     * @param y rounded to nearest int
     */
    Renderer.prototype.drawImg = function (img, x, y) {
        if (img) {
            this.ctx.drawImage(img, Math.round(x), Math.round(y));
        }
    };
    /**
     * Pixel perfect draw text
     * Pixel only font, each character is 3x4 characters, case insensitive
     * Characters supported are abcdefghijklmnopqrstuvwxyz0123456789,."'-?!()><;@
     * Invalid characters will be drawn as a high contrast square of the same char size to stand out to fix
     * @param text
     * @param x
     * @param y
     */
    Renderer.prototype.drawText = function (text, x, y) {
        var txt = text.toLowerCase();
        x = Math.round(x);
        y = Math.round(y);
        var spaceBetweenChars = 4; // size of char plus one
        for (var i = 0, dx = 0; i < txt.length; i++) {
            var img = this.font[txt.charCodeAt(i)];
            if (!img) {
                img = this.font["invalid"];
            }
            this.drawImg(img, x + dx, y);
            dx += spaceBetweenChars;
        }
    };
    Renderer.prototype.fillBackground = function (bgColor) {
        this.ctx.fillStyle = bgColor;
        this.ctx.fillRect(0, 0, this.width, this.height);
    };
    Renderer.prototype.drawPixel = function (color, x, y) {
        this.ctx.fillStyle = color;
        this.ctx.fillRect(Math.round(x), Math.round(y), 1, 1);
    };
    Renderer.prototype.drawFrame = function (img, frameIndex, frameWidth, frameHeight, x, y) {
        if (img) {
            this.ctx.drawImage(img, frameIndex * frameWidth, 0, frameWidth, frameHeight, Math.round(x), Math.round(y), frameWidth, frameHeight);
        }
    };
    return Renderer;
}());
var Particles = /** @class */ (function () {
    function Particles(count, particleVariables) {
        this.particles = [];
        this.count = count;
        for (var i = 0; i < this.count; i++) {
            this.particles[i] = __assign({}, particleVariables);
        }
    }
    return Particles;
}());
var WhisperEnd = /** @class */ (function () {
    function WhisperEnd() {
        var _this = this;
        this.state = 1 /* TitleScreen */;
        this.assets = {
            splashScreenBasic: AssetManager.loadImageAsset("assets/splash-art-basic.png"),
            //aihtwe
            //alone is how the whisper ends
            aihtweBackground: AssetManager.loadImageAsset("assets/aloneishowthewhisperends/background.png"),
            aihtweCeilingSplit: AssetManager.loadImageAsset("assets/aloneishowthewhisperends/ceilingsplit.png"),
            aihtweEve: AssetManager.loadImageAsset("assets/aloneishowthewhisperends/eve.png"),
            aihtweForegroundShadow: AssetManager.loadImageAsset("assets/aloneishowthewhisperends/foregroundshadow.png"),
            aihtweRaven: AssetManager.loadImageAsset("assets/aloneishowthewhisperends/raven.png"),
            aihtweAnimatedRaven: AssetManager.loadImageAsset("assets/aloneishowthewhisperends/animation-raven.png"),
            icon: AssetManager.loadImageAsset("assets/icon.png"),
        };
        this.animations = {
            ravenAnimation: new Animator(this.assets.aihtweAnimatedRaven, 12, 10, 32, 0.125)
        };
        this.loop = function () {
            _this.timeManager.update();
            _this.input.update();
            _this.renderer.clear();
            switch (_this.state) {
                case 1 /* TitleScreen */:
                    _this.animations.ravenAnimation.update(_this.timeManager.getDelta());
                    _this.drawAnimatedMainMenu();
                    break;
                case 2 /* Quote */:
                    // can be used to load in between
                    _this.drawStateQuote();
                    break;
                default:
            }
            requestAnimationFrame(_this.loop);
        };
        this.snow = new Particles(100, {
            x: 0,
            y: 0,
            dx: 0,
            dy: 0,
            speed: 0,
            timeAlive: 0,
            alive: false
        });
        this.quote = null;
        console.log("Whisper End @Sefemuza 2020");
        this.timeManager = new TimeManager();
        this.lore = new LoreManager();
        this.input = new Input();
        this.renderer = new Renderer("whisperend", 400, 240);
        this.loop();
    }
    WhisperEnd.prototype.randomInt = function (min, max) {
        return Math.round(Math.random() * (max - min) + min);
    };
    WhisperEnd.prototype.drawSnow = function () {
        var snowColor = "#ffffff";
        var snowColorDark = "#bacdde";
        for (var i = 0; i < this.snow.count; i++) {
            var p = this.snow.particles[i];
            if (!p.alive) {
                var x = this.randomInt(80, 370);
                var y = this.randomInt(-40, -5);
                var speed = this.randomInt(8, 15);
                p.speed = speed;
                p.x = x;
                p.y = y;
                p.timeAlive = this.randomInt(3, 15);
                p.alive = true;
            }
            else {
                p.y += p.speed * this.timeManager.getDelta();
                p.x += Math.sin(p.speed + p.timeAlive) * this.timeManager.getDelta();
                this.renderer.drawPixel((p.y > 100 || p.timeAlive <= 1.5) ? snowColorDark : snowColor, p.x, p.y);
                p.timeAlive -= this.timeManager.getDelta();
                if (p.timeAlive <= 0 || p.y > 190 || p.x < 20) {
                    p.alive = false;
                }
            }
        }
    };
    WhisperEnd.prototype.drawAnimatedMainMenu = function () {
        this.renderer.fillBackground("#130e1a");
        var delayer = 20;
        var distance = 1;
        var menuOffset = 30;
        this.renderer.drawImg(this.assets.aihtweBackground, menuOffset, 0);
        this.renderer.drawImg(this.assets.aihtweEve, menuOffset, 0);
        var a = this.animations.ravenAnimation;
        this.renderer.drawFrame(a.src, a.currentFrame, a.frameWidth, a.frameHeight, menuOffset + 231, 131);
        this.drawSnow();
        this.renderer.drawImg(this.assets.aihtweCeilingSplit, menuOffset, 0);
        this.renderer.drawImg(this.assets.aihtweForegroundShadow, menuOffset + Math.sin(this.timeManager.getElapsed() / 1) * 2 - 2, 0);
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
        this.renderer.drawImg(this.assets.icon, titleX, titleY - 16);
        this.renderer.drawText("Whisper End", titleX, titleY);
        for (var i = 0; i < menuOptions.length; i++) {
            this.renderer.drawText(menuOptions[i], menuX, menuY + menuYgap * i);
            if (selectorPosition == i) {
                this.renderer.drawText(">", menuX - 5, menuY + menuYgap * i);
            }
        }
        var footerY = 224;
        this.renderer.drawText("(DEMO)", titleX, footerY);
    };
    WhisperEnd.prototype.drawStateQuote = function () {
        if (!this.quote) {
            this.quote = this.lore.getRandomQuote();
        }
        var quote = this.quote;
        var x = 70;
        var y = 88;
        var dy = 8;
        for (var i = 0; i < quote.length; i++) {
            this.renderer.drawText(quote[i], x, y + i * dy);
        }
    };
    return WhisperEnd;
}());
window.onload = function () {
    new WhisperEnd();
};
