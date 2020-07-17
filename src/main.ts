/**
 * Whisper End
 * @sefemuza
 */
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
        ],
        [
            `whispers:`,
            `"as above...`,
            `as below..."`
        ],
        [
            `whispers:`,
            `"Five of pentacles...`,
            `Ten of swords...`,
            `The tower...`,
            `Eight of cups...`,
            `The Devil..."`
        ]
        
    ];

    public getRandomQuote():Array<string> {
        return this.quotes[Math.floor(Math.random() * this.quotes.length)];
    }
}

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

class AssetManager {
    public static loadImageAsset(path: string): HTMLImageElement {
        const img = new Image();
        img.addEventListener('load', function() {
    
        }, false);
        img.src = path;
        return img;
    }
}

class Input {
    public usingGamepad: boolean = false;
    public activeGamepadIndex: number = -1;
    public gamepad: Gamepad | null = null;

    public dx: number = 0;
    public dy: number = 0;

    // quick and dirty key down
    // key support is not planned
    // only for quick debug
    // game is gamepad only
    public static is_key_down = (() => {
        const state:any = {};
    
        window.addEventListener('keyup', (e) => state[e.key] = false);
        window.addEventListener('keydown', (e) => state[e.key] = true);
    
        return (key:any) => state.hasOwnProperty(key) && state[key] || false;
    })();

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
    public src: HTMLImageElement;
    public frameWidth: number;
    public frameHeight: number;
    private frameCount:number;
    private frameDuration: number;
    public currentFrame:number = 0;
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

class Renderer {
    private readonly width: number;
    private readonly height: number;
    private readonly canvas: HTMLCanvasElement;
    private readonly ctx: CanvasRenderingContext2D;
    private readonly font:any = {
        //chars go by ASCII values
        "invalid" : AssetManager.loadImageAsset("assets/font/invalid.png"),
        "32" : AssetManager.loadImageAsset("assets/font/32.png"),
        "33" : AssetManager.loadImageAsset("assets/font/33.png"),
        "34" : AssetManager.loadImageAsset("assets/font/34.png"),
        "39" : AssetManager.loadImageAsset("assets/font/39.png"),

        //48-57
        "40" : AssetManager.loadImageAsset("assets/font/40.png"),
        "41" : AssetManager.loadImageAsset("assets/font/41.png"),
        "44" : AssetManager.loadImageAsset("assets/font/44.png"),
        "45" : AssetManager.loadImageAsset("assets/font/45.png"),
        "46" : AssetManager.loadImageAsset("assets/font/46.png"),
        "48" : AssetManager.loadImageAsset("assets/font/48.png"),
        "49" : AssetManager.loadImageAsset("assets/font/49.png"),
        "50" : AssetManager.loadImageAsset("assets/font/50.png"),
        "51" : AssetManager.loadImageAsset("assets/font/51.png"),
        "52" : AssetManager.loadImageAsset("assets/font/52.png"),
        "53" : AssetManager.loadImageAsset("assets/font/53.png"),
        "54" : AssetManager.loadImageAsset("assets/font/54.png"),
        "55" : AssetManager.loadImageAsset("assets/font/55.png"),
        "56" : AssetManager.loadImageAsset("assets/font/56.png"),
        "57" : AssetManager.loadImageAsset("assets/font/57.png"),
        "58" : AssetManager.loadImageAsset("assets/font/58.png"),
        "59" : AssetManager.loadImageAsset("assets/font/59.png"),
        "60" : AssetManager.loadImageAsset("assets/font/60.png"),

        "62" : AssetManager.loadImageAsset("assets/font/62.png"),
        "63" : AssetManager.loadImageAsset("assets/font/63.png"),
        "64" : AssetManager.loadImageAsset("assets/font/64.png"),
        "97" : AssetManager.loadImageAsset("assets/font/97.png"),
        "98" : AssetManager.loadImageAsset("assets/font/98.png"),
        "99" : AssetManager.loadImageAsset("assets/font/99.png"),
        "100" : AssetManager.loadImageAsset("assets/font/100.png"),
        "101" : AssetManager.loadImageAsset("assets/font/101.png"),
        "102" : AssetManager.loadImageAsset("assets/font/102.png"),
        "103" : AssetManager.loadImageAsset("assets/font/103.png"),
        "104" : AssetManager.loadImageAsset("assets/font/104.png"),
        "105" : AssetManager.loadImageAsset("assets/font/105.png"),
        "106" : AssetManager.loadImageAsset("assets/font/106.png"),
        "107" : AssetManager.loadImageAsset("assets/font/107.png"),
        "108" : AssetManager.loadImageAsset("assets/font/108.png"),
        "109" : AssetManager.loadImageAsset("assets/font/109.png"),
        "110" : AssetManager.loadImageAsset("assets/font/110.png"),
        "111" : AssetManager.loadImageAsset("assets/font/111.png"),
        "112" : AssetManager.loadImageAsset("assets/font/112.png"),
        "113" : AssetManager.loadImageAsset("assets/font/113.png"),
        "114" : AssetManager.loadImageAsset("assets/font/114.png"),
        "115" : AssetManager.loadImageAsset("assets/font/115.png"),
        "116" : AssetManager.loadImageAsset("assets/font/116.png"),
        "117" : AssetManager.loadImageAsset("assets/font/117.png"),
        "118" : AssetManager.loadImageAsset("assets/font/118.png"),
        "119" : AssetManager.loadImageAsset("assets/font/119.png"),
        "120" : AssetManager.loadImageAsset("assets/font/120.png"),
        "121" : AssetManager.loadImageAsset("assets/font/121.png"),
        "122" : AssetManager.loadImageAsset("assets/font/122.png"),
    };

    constructor(id: string, width: number, height:number) {
        this.width = width;
        this.height = height;

        this.canvas = document.getElementById(id)! as HTMLCanvasElement;
        this.ctx = this.canvas.getContext("2d")!;
        this.ctx.imageSmoothingEnabled = false;

        window.onresize = () => {
            this.resize();
        };
        this.resize();
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

    public clear():void {
        this.ctx.clearRect(0, 0, this.width, this.height);
    }

    /**
     * Pixel perfect drawImage 
     * @param img may be null, ignore draw call if it is 
     * @param x rounded to nearest int
     * @param y rounded to nearest int
     */
    public drawImg(img: HTMLImageElement | null, x: number, y: number): void {
        if(img) {
            this.ctx.drawImage(img, Math.round(x), Math.round(y));        
        }
    }

    /**
     * Pixel perfect draw text
     * Pixel only font, each character is 3x4 characters, case insensitive
     * Characters supported are abcdefghijklmnopqrstuvwxyz0123456789,."'-?!()><;@ 
     * Invalid characters will be drawn as a high contrast square of the same char size to stand out to fix
     * @param text 
     * @param x 
     * @param y 
     */
    public drawText(text: string, x: number, y:number): void {
        const txt = text.toLowerCase();
        x = Math.round(x);
        y = Math.round(y);
        const  spaceBetweenChars = 4; // size of char plus one
        for(let i = 0, dx = 0; i < txt.length; i++) {
            let img = this.font[txt.charCodeAt(i)];
            if(!img) {
                img = this.font["invalid"];
            }
            this.drawImg(img, x + dx, y);   
            dx += spaceBetweenChars;
        }
    }

    public fillBackground(bgColor: string):void {
        this.ctx.fillStyle = bgColor;
        this.ctx.fillRect(0, 0, this.width, this.height);
    }

    public drawPixel(color: string, x: number, y:number):void {
        this.ctx.fillStyle = color;
        this.ctx.fillRect(Math.round(x), Math.round(y), 1, 1);
    }

    public drawFrame(img: HTMLImageElement | null, frameIndex: number, frameWidth: number, frameHeight: number, x: number, y: number):void {
        if(img) {
            this.ctx.drawImage(img, frameIndex*frameWidth, 0, frameWidth, frameHeight, Math.round(x), Math.round(y), frameWidth, frameHeight);
        }
    }
}

class Particles {
    public count: number;
    public particles:Array<any> = [];

    constructor(count: number, particleVariables: any) {
        this.count = count;
        for(let i = 0; i < this.count; i++) {
            this.particles[i] = {
                ...particleVariables
            }
        }
    }
}

class WhisperEnd {
    private readonly timeManager: TimeManager;
    private readonly input: Input;
    private readonly lore: LoreManager;
    private readonly renderer: Renderer;
    private state: GameStates = GameStates.TitleScreen;
    private assets: any = {
        splashScreenBasic : AssetManager.loadImageAsset("assets/splash-art-basic.png"),
        //aihtwe
        //alone is how the whisper ends
        aihtweBackground : AssetManager.loadImageAsset("assets/aloneishowthewhisperends/background.png"),
        aihtweCeilingSplit : AssetManager.loadImageAsset("assets/aloneishowthewhisperends/ceilingsplit.png"),
        aihtweEve : AssetManager.loadImageAsset("assets/aloneishowthewhisperends/eve.png"),
        aihtweForegroundShadow : AssetManager.loadImageAsset("assets/aloneishowthewhisperends/foregroundshadow.png"),
        aihtweRaven : AssetManager.loadImageAsset("assets/aloneishowthewhisperends/raven.png"),
        aihtweAnimatedRaven : AssetManager.loadImageAsset("assets/aloneishowthewhisperends/animation-raven.png"),
        icon : AssetManager.loadImageAsset("assets/icon.png"),
    }
    private animations: any = {
        ravenAnimation : new Animator(this.assets.aihtweAnimatedRaven, 12, 10, 32, 0.125)
    }

    constructor() {
        console.log("Whisper End @Sefemuza 2020");  
        this.timeManager = new TimeManager();
        this.lore = new LoreManager();
        this.input = new Input();
        this.renderer = new Renderer("whisperend", 400, 240);
        this.loop();
    }

    private loop = () => {
        this.timeManager.update();
        this.input.update();
        this.renderer.clear();
        switch(this.state) {
            case GameStates.TitleScreen:
                this.animations.ravenAnimation.update(this.timeManager.getDelta());
                this.drawAnimatedMainMenu();
                break;
            case GameStates.Quote:
                // can be used to load in between
                this.drawStateQuote();
                break;
            default:
        }
        requestAnimationFrame(this.loop);
    }

    private randomInt(min:number, max:number):number {  
        return Math.round(Math.random() * (max - min) + min); 
    }   
    private snow = new Particles(100, {
        x: 0,
        y: 0,
        dx: 0,
        dy: 0,
        speed: 0,
        timeAlive: 0,
        alive: false
    });
    private drawSnow() {
        const snowColor = "#ffffff";
        const snowColorDark = "#bacdde";
        for(let i = 0; i < this.snow.count; i++) {
            let p = this.snow.particles[i];
            if(!p.alive) {
                let x = this.randomInt(80, 370);
                let y = this.randomInt(-40, -5);
                let speed = this.randomInt(8, 15)
                p.speed = speed;
                p.x = x;
                p.y = y;
                p.timeAlive = this.randomInt(3, 15)
                p.alive = true;
            } else {
                p.y += p.speed * this.timeManager.getDelta();
                p.x += Math.sin(p.speed + p.timeAlive) * this.timeManager.getDelta();
                this.renderer.drawPixel((p.y > 100 || p.timeAlive <= 1.5) ? snowColorDark: snowColor,p.x, p.y);
                p.timeAlive -= this.timeManager.getDelta();
                if(p.timeAlive <= 0 || p.y > 190 || p.x < 20) {
                    p.alive = false;
                }
            }
        }
    }

    private drawAnimatedMainMenu() {
        this.renderer.fillBackground("#130e1a");
        const delayer = 20;
        const distance = 1;
        const menuOffset = 30;
        this.renderer.drawImg(this.assets.aihtweBackground,menuOffset,0);
        this.renderer.drawImg(this.assets.aihtweEve,menuOffset,0);
        let a = this.animations.ravenAnimation as Animator;
        this.renderer.drawFrame(a.src, a.currentFrame, a.frameWidth, a.frameHeight, menuOffset+231, 131);
        this.drawSnow();
        this.renderer.drawImg(this.assets.aihtweCeilingSplit,menuOffset,0);
        this.renderer.drawImg(this.assets.aihtweForegroundShadow,menuOffset + Math.sin(this.timeManager.getElapsed()/1) * 2-2,0);

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

        this.renderer.drawImg(this.assets.icon,  titleX, titleY-16);
        this.renderer.drawText(`Whisper End`, titleX, titleY);

        for(let i = 0; i < menuOptions.length; i++) {
            this.renderer.drawText(menuOptions[i], menuX, menuY + menuYgap*i);
            if(selectorPosition == i) {
                this.renderer.drawText(`>`, menuX-5, menuY + menuYgap*i);
            }
        }
        let footerY = 224;
        this.renderer.drawText(`(DEMO)`, titleX, footerY);
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
            this.renderer.drawText(quote[i], x, y + i * dy);
        }
    }
}

window.onload = () => {
    new WhisperEnd();
};  