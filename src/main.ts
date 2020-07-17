/**
 * Whisper End
 * @sefemuza
 */
class TimeManager {
    private delta: number = 0.0;
    private elapsed: number = 0.0;
    private start: number = 0.0;
    private before: number = 0.0;
    public initalized: boolean = false;

    constructor() {
        this.before = this.start = (performance || Date).now();
    }

    private init(): void {
        this.before = this.start = (performance || Date).now();
    }

    public update(): void {
        this.start = (performance || Date).now();//milliseconds
        this.delta = (this.start - this.before) / 1000;//to seconds
        this.elapsed += this.delta;
        this.before = this.start;
    }

    //returns time in seconds
    public getDelta(): number {
        return this.delta;
    }

    public getDeltaMS(): number {
        return this.delta * 1000;
    }

    public getElapsed(): number {
        return this.elapsed;
    }

    public reset(): void {
        this.init();
        this.elapsed = 0;
    }
}

class LoreManager {
    public readonly quotes: Array<Array<string>> = [
        [
            `"But ungodly men by their words and deeds summoned death;`,
            `considering him a friend,`,
            `they pined away,`,
            `and they made a covenant with him,`,
            `because they are fit to belong to his party."`,
            `(Wisdom 1:16)`,],
        [
            `"And the sea gave up the dead which were in it;`,
            `and death and hell delivered up the dead which were in them:`,
            `and they were judged every man according to their works."`,
            `(Revelation 20:13)`
        ],
        [
            `"Whoever fights monsters should see to it that`,
            `in the process he does not become a monster.`,
            `And if you gaze long enough into an abyss,`,
            `the abyss will gaze back into you."`,
            `-Friedrich Nietzsche`
        ],
        [
            `"Every tree that does not bear good fruit is cut down`,
            `and thrown into the fire."`,
            `(Matthew 7:1)`
        ],
        [
            `"When the axe came into the Forest,`,
            `the trees said `,
            `'The handle is one of us'"`,
            `-proverb`
        ],
        [
            `"I am about to take my last voyage,`,
            `a great leap in the dark"`,
            `-Thomas Hobbes`
        ],
        [
            `"The condition of man...`,
            `is a condition of war of everyone against everyone."`,
            `-Thomas Hobbes`
        ],
        [
            `"And I looked, and behold, a pale horse!`,
            `And its rider's name was Death, and Hades followed him."`,
            `(Revelation 6:8)`
        ],
        [
            `"And in those days shall men seek death and shall not find it;`,
            `and shall desire to die, and death shall flee from them."`,
            `(Revelation 9:6)`
        ],
        [
            `"Do not act as if you were going to live ten thousand years.`,
            `Death hangs over you.`,
            `While you live, while it is in your power, be good."`,
            `-Marcus Aurelius`
        ],
        [
            `"Now I am become Death, the destroyer of worlds"`,
            `-Robert Oppenheimer`
        ],
        [
            `"Reality exists in the human mind, and nowhere else."`,
            `-George Orwell`
        ],
        [
            `"We are what we pretend to be,`,
            `so we must be careful about what we pretend to be."`,
            `-Kurt Vonnegut`
        ],
        [
            `"We must laugh at man to avoid crying for him."`,
            `-Napoleon Bonaparte`
        ],
        [
            `whispers:`,
            `"I wonder what they think when they see me"`
        ],
        [
            `whispers:`,
            `"and now I am forgotten..."`
        ],
        [
            `whispers:`,
            `"I have no one...`,
            `but I have company in my dreams,`,
            `I just want to dream...`,
            `I just want to dream..."`,
        ],
        [
            `whispers:`,
            `"What do you want out of life?`,
            `Are you sure?"`
        ],
        [
            `whispers:`,
            `"our memories hollow...`
        ],
        [
            `whispers:`,
            `"to reanimate someone...`,
            `you must offer someone...`,
            `and we choose you..."`
        ],
        [
            `whispers:`,
            `"the shadows call...`,
            `alone..."`
        ],
        [
            `whispers:`,
            `"a key...`,
            `a note...`,
            `the altar...`,
            `beyond the cave of despair..."`
        ]
        
    ];

    public getRandomQuote():Array<string> {
        return this.quotes[Math.floor(Math.random() * this.quotes.length)];
    }
}

function loadImageAsset(path: string): HTMLImageElement {
    const img = new Image();
    img.addEventListener('load', function() {

    }, false);
    img.src = path;
    return img;
}



const is_key_down = (() => {
    const state:any = {};

    window.addEventListener('keyup', (e) => state[e.key] = false);
    window.addEventListener('keydown', (e) => state[e.key] = true);

    return (key:any) => state.hasOwnProperty(key) && state[key] || false;
})();

class Input {
    public usingGamepad: boolean = false;
    public activeGamepadIndex: number = -1;
    public gamepad: Gamepad | null = null;

    public dx: number = 0;
    public dy: number = 0;

    constructor() {

        window.addEventListener("gamepadconnected", (event:any) => {
            this.usingGamepad = true;
            this.activeGamepadIndex = event.gamepad.index;
            this.gamepad = navigator.getGamepads()[this.activeGamepadIndex];
        });

        window.addEventListener("gamepaddisconnected", (event:any) => {
            this.usingGamepad = false;
            this.activeGamepadIndex = -1;
            this.gamepad = null;
        });
    }

    public isGamepadConnected(): boolean {
        return this.usingGamepad && navigator.getGamepads()[0] != null;
    }

    public getGamepad(gamepadIndex:number = 0): Gamepad {
        return <Gamepad> navigator.getGamepads()[gamepadIndex];
    }

    public update():void {
        let gamepad: Gamepad = this.getGamepad();
        if(gamepad) {
            let leftStickX = gamepad.axes[0];
            let leftStickY = gamepad.axes[1];
            const minDistance = 0.2;
    
            this.dx = (Math.abs(leftStickX) > minDistance) ? leftStickX : 0;
            this.dy = (Math.abs(leftStickY) > minDistance) ? leftStickY : 0;
    
            if (gamepad) {
                for (let i = 0; i < gamepad.buttons.length; i++) {
                    // console.log(`Pressed ${gamepad.buttons[ButtonXBox.A].pressed}`);
                }
            }
            console.log(`${this.dx}|${this.dy}`);
        }
    }
}

// Basic
class Animator {
    private src: HTMLImageElement;
    private frameWidth: number;
    private frameHeight: number;
    private frameCount:number;
    private frameDuration: number;
    private currentFrame:number = 0;
    private timer: number = 0;

    /**
     * Assumed to be horizontal sprite sheet with constant width and height
     * Manually need to input the width and height for now as the img is not guaranteed to be loaded in
     */
    constructor(img: HTMLImageElement, frameWidth: number, frameHeight: number, frameCount:number, frameDuration: number) {
        this.src = img;
        this.frameWidth = frameWidth;
        this.frameHeight = frameHeight;
        this.frameCount = frameCount;
        this.frameDuration = frameDuration;

    }

    public update(dt: number):void {
        this.timer += dt;
        if(this.timer > this.frameDuration) {
            this.currentFrame++;
            this.timer = 0;
        }
        if(this.currentFrame >= this.frameCount) {
            this.currentFrame = 0;
        }
    }

    public draw(ctx: CanvasRenderingContext2D, x: number, y: number):void {
        if(this.src) {
            ctx.drawImage(this.src, this.currentFrame*this.frameWidth, 0, this.frameWidth, this.frameHeight, Math.round(x), Math.round(y), this.frameWidth, this.frameHeight);
        }
    }
}

const enum GameStates {
    Boot,
    TitleScreen,
    Quote,
    InGame,
}

class WhisperEnd {
    private readonly timeManager: TimeManager;
    private readonly input: Input;
    private readonly lore: LoreManager;
    private readonly width = 400;
    private readonly height = 240;
    private readonly canvas: HTMLCanvasElement;
    private readonly ctx: CanvasRenderingContext2D;
    private state: GameStates = GameStates.Quote;

    private assets: any = {
        splashScreenBasic : loadImageAsset("assets/splash-art-basic.png"),
        //aihtwe
        //alone is how the whisper ends
        aihtweBackground : loadImageAsset("assets/aloneishowthewhisperends/background.png"),
        aihtweCeilingSplit : loadImageAsset("assets/aloneishowthewhisperends/ceilingsplit.png"),
        aihtweEve : loadImageAsset("assets/aloneishowthewhisperends/eve.png"),
        aihtweForegroundShadow : loadImageAsset("assets/aloneishowthewhisperends/foregroundshadow.png"),
        aihtweRaven : loadImageAsset("assets/aloneishowthewhisperends/raven.png"),
        aihtweAnimatedRaven : loadImageAsset("assets/aloneishowthewhisperends/animation-raven.png"),
        icon : loadImageAsset("assets/icon.png"),
        font : {
            //chars go by ASCII values
            "invalid" : loadImageAsset("assets/font/invalid.png"),
            "32" : loadImageAsset("assets/font/32.png"),
            "33" : loadImageAsset("assets/font/33.png"),
            "34" : loadImageAsset("assets/font/34.png"),
            "39" : loadImageAsset("assets/font/39.png"),

            //48-57
            "40" : loadImageAsset("assets/font/40.png"),
            "41" : loadImageAsset("assets/font/41.png"),
            "44" : loadImageAsset("assets/font/44.png"),
            "45" : loadImageAsset("assets/font/45.png"),
            "46" : loadImageAsset("assets/font/46.png"),
            "48" : loadImageAsset("assets/font/48.png"),
            "49" : loadImageAsset("assets/font/49.png"),
            "50" : loadImageAsset("assets/font/50.png"),
            "51" : loadImageAsset("assets/font/51.png"),
            "52" : loadImageAsset("assets/font/52.png"),
            "53" : loadImageAsset("assets/font/53.png"),
            "54" : loadImageAsset("assets/font/54.png"),
            "55" : loadImageAsset("assets/font/55.png"),
            "56" : loadImageAsset("assets/font/56.png"),
            "57" : loadImageAsset("assets/font/57.png"),
            "58" : loadImageAsset("assets/font/58.png"),
            "59" : loadImageAsset("assets/font/59.png"),
            "60" : loadImageAsset("assets/font/60.png"),

            "62" : loadImageAsset("assets/font/62.png"),
            "63" : loadImageAsset("assets/font/63.png"),
            "64" : loadImageAsset("assets/font/64.png"),
            "97" : loadImageAsset("assets/font/97.png"),
            "98" : loadImageAsset("assets/font/98.png"),
            "99" : loadImageAsset("assets/font/99.png"),
            "100" : loadImageAsset("assets/font/100.png"),
            "101" : loadImageAsset("assets/font/101.png"),
            "102" : loadImageAsset("assets/font/102.png"),
            "103" : loadImageAsset("assets/font/103.png"),
            "104" : loadImageAsset("assets/font/104.png"),
            "105" : loadImageAsset("assets/font/105.png"),
            "106" : loadImageAsset("assets/font/106.png"),
            "107" : loadImageAsset("assets/font/107.png"),
            "108" : loadImageAsset("assets/font/108.png"),
            "109" : loadImageAsset("assets/font/109.png"),
            "110" : loadImageAsset("assets/font/110.png"),
            "111" : loadImageAsset("assets/font/111.png"),
            "112" : loadImageAsset("assets/font/112.png"),
            "113" : loadImageAsset("assets/font/113.png"),
            "114" : loadImageAsset("assets/font/114.png"),
            "115" : loadImageAsset("assets/font/115.png"),
            "116" : loadImageAsset("assets/font/116.png"),
            "117" : loadImageAsset("assets/font/117.png"),
            "118" : loadImageAsset("assets/font/118.png"),
            "119" : loadImageAsset("assets/font/119.png"),
            "120" : loadImageAsset("assets/font/120.png"),
            "121" : loadImageAsset("assets/font/121.png"),
            "122" : loadImageAsset("assets/font/122.png"),

        }
    }
    private animations: any = {
        ravenAnimation : new Animator(this.assets.aihtweAnimatedRaven, 12, 10, 32, 0.125)
    }

    private resize():void {
        const sx = (window.innerWidth / this.width) | 0;
        const sy = (window.innerHeight / this.height) | 0;
        let scale = sx <= sy ? sx : sy;
        if (scale < 1) {
            scale = 1;
        }
        this.canvas.style.width = `${this.width * scale}px`;
        this.canvas.style.height = `${this.height * scale}px`;
    }

    constructor() {
        // notes
        console.log("Whisper End @Sefemuza 2020");  
        // start
        this.timeManager = new TimeManager();
        this.lore = new LoreManager();
        this.input = new Input();
        // const supportedCharacters = `@abcdefghijklmnopqrstuvwxyz0123456789,."'-?!()>< @`.toLowerCase();
        // for(let i = 0; i < supportedCharacters.length; i++) {
        //     console.log(`${supportedCharacters.charAt(i)} : ${supportedCharacters.charCodeAt(i)}`);
        // }`

        this.canvas = document.getElementById("whisperend")! as HTMLCanvasElement;
        this.ctx = this.canvas.getContext("2d")!;
        this.ctx.imageSmoothingEnabled = false;

        window.onresize = () => {
            this.resize();
        };
        this.resize();
        this.loop();
    }

    private loop = () => {
        this.timeManager.update();
        this.update();
        this.draw();
        requestAnimationFrame(this.loop);
    }

    private drawImg(img: HTMLImageElement | null, x: number, y: number): void {
        // everything is pixel perfect
        if(img) {
            this.ctx.drawImage(img, Math.round(x), Math.round(y));        
        }
    }

    private fontEffects = new OffscreenCanvas(3,4);
    private fontEffectsCtx = this.fontEffects.getContext('2d')!;

    private drawText(text: string, x: number, y:number): void {
        // Pixel only font, each character is 3x4 characters, case insensitive
        //Characters supported are abcdefghijklmnopqrstuvwxyz0123456789,."'-?!{}> 
        const txt = text.toLowerCase();
        let dx = 0; //horizontal displacement
        for(let i = 0; i < txt.length; i++) {
            const asciiValue = txt.charCodeAt(i);
            let img = this.assets.font[asciiValue];
            if(!img) {
                img = this.assets.font["invalid"];
            }
            this.drawImg(img, x + dx, y);   

            dx += 4;
        }
    }

    private update(): void {
        this.input.update();
        this.animations.ravenAnimation.update(this.timeManager.getDelta());

    }

    private snowParticles:any = [];

    private randomInt(min:number, max:number):number {  
        return Math.round(Math.random() * (max - min) + min); 
    }   

    private drawSnow() {
        const snowColor = "#ffffff";
        const snowColorDark = "#bacdde";
        const snowFlakesCount = 100;
        //seconds

        for(let i = 0; i < snowFlakesCount; i++) {
            let flake = this.snowParticles[i];
            if(flake) {    
                if(!flake.alive) {
                    let x = this.randomInt(80, 370);
                    let y = this.randomInt(-40, -5);
                    let speed = this.randomInt(8, 15)
                    flake.speed = speed;
                    flake.x = x;
                    flake.y = y;
                    flake.timeAlive = this.randomInt(3, 15)
                    flake.alive = true;
                } else {
                    flake.y += flake.speed * this.timeManager.getDelta();
                    flake.x += Math.sin(flake.speed + flake.timeAlive) * this.timeManager.getDelta();

                    if(flake.y > 100 || flake.timeAlive <= 1.5) {
                        this.ctx.fillStyle = snowColorDark;
                    } else {
                        this.ctx.fillStyle = snowColor;
                    }
                    this.ctx.fillRect(Math.round(flake.x), Math.round(flake.y), 1, 1);

                    flake.timeAlive -= this.timeManager.getDelta();
                    if(flake.timeAlive <= 0 || flake.y > 190 || flake.x < 20) {
                        flake.alive = false;
                    }
                }
            } else {
                this.snowParticles[i] = {
                    x: 0,
                    y: 0,
                    dx: 0,
                    dy: 0,
                    speed: 0,
                    timeAlive: 0,
                    alive: false
                };
            }
        }
    }

    private drawAnimatedMainMenu() {
        
        const bgColor = "#130e1a";
        this.ctx.fillStyle = bgColor;
        this.ctx.fillRect(0, 0, this.width, this.height);

        const delayer = 20;
        const distance = 1;
        //make room for menu
        const xOffset = 30;
        // this.drawImg(this.assets.splashScreenBasic, xOffset, 0);
        this.drawImg(this.assets.aihtweBackground,xOffset,0);
        this.drawImg(this.assets.aihtweEve,xOffset,0);
        this.animations.ravenAnimation.draw(this.ctx, xOffset+231, 131);
        // this.drawImg(this.assets.aihtweRaven,xOffset,0);
        this.drawSnow();
        this.drawImg(this.assets.aihtweCeilingSplit,xOffset,0);
        this.drawImg(this.assets.aihtweForegroundShadow,xOffset + Math.sin(this.timeManager.getElapsed()/1) * 2-2,0);



        //draw menu
        let menuOptions = [
            "Play",
            "Settings",
            "About",
            "Quit"
        ];

        let titleX = 10;
        let titleY = 150;
        
        let menuXOffset = 6;
        let menuYOffset = 15;

        let menuX = titleX + menuXOffset;
        let menuY = titleY + menuYOffset;
        let menuYgap = 8;
        let selectorPosition = 0;

        this.drawImg(this.assets.icon,  titleX, titleY-16);

        this.drawText(`Whisper End`, titleX, titleY);

        for(let i = 0; i < menuOptions.length; i++) {
            this.drawText(menuOptions[i], menuX, menuY + menuYgap*i);
            if(selectorPosition == i) {
                this.drawText(`>`, menuX-5, menuY + menuYgap*i);
            }
        }
        let footerY = 224;
        this.drawText(`(DEMO)`, titleX, footerY);
        // this.drawText(`@sefemuza 2020`, titleX, footerY+5);
    }

    private quote: any;
    private drawStateQuote(): void {
        if(!this.quote) {
            this.quote = this.lore.getRandomQuote();
        }
        let quote: Array<string> = this.quote;
        let x = 78;
        let y = 90;
        let dy = 8;
        for(let i = 0; i < quote.length; i++) {
            this.drawText(quote[i], x, y + i * dy);
        }
    }

    private draw(): void {
        this.ctx.clearRect(0, 0, this.width, this.height);
        switch(this.state) {

            case GameStates.TitleScreen:
                this.drawAnimatedMainMenu();
                break;
            case GameStates.Quote:
                // can be used to load in between
                this.drawStateQuote();
                break;
            default:

        }
    }
}

window.onload = () => {
    new WhisperEnd();
};  