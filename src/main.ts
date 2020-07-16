/**
 * Whisper End
 * @sefemuza
 */
function loadImageAsset(path: string): HTMLImageElement {
    const img = new Image();
    img.addEventListener('load', function() {

    }, false);
    img.src = path;
    return img;
}

class TimeManager {
    private delta: number = 0.0;
    private elapsed: number = 0.0;
    private start: number = 0.0;
    private before: number = 0.0;
    public initalized: boolean = false;

    public init(): void {
        this.before = this.start = (performance || Date).now();
    }

    public update(): void {
        this.start = (performance || Date).now();//milliseconds
        this.delta = (this.start - this.before) / 1000;//to seconds
        this.elapsed += this.delta;
        this.before = this.start;
    }

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

const is_key_down = (() => {
    const state:any = {};

    window.addEventListener('keyup', (e) => state[e.key] = false);
    window.addEventListener('keydown', (e) => state[e.key] = true);

    return (key:any) => state.hasOwnProperty(key) && state[key] || false;
})();

class WhisperEnd {
    private readonly timeManager: TimeManager;
    private readonly width = 400;
    private readonly height = 240;
    private readonly canvas: HTMLCanvasElement;
    private readonly ctx: CanvasRenderingContext2D;
    private assets: any = {
        splashScreenBasic : loadImageAsset("assets/splash-art-basic.png"),
        //aihtwe
        //alone is how the whisper ends
        aihtweBackground : loadImageAsset("assets/aloneishowthewhisperends/background.png"),
        aihtweCeilingSplit : loadImageAsset("assets/aloneishowthewhisperends/ceilingsplit.png"),
        aihtweEve : loadImageAsset("assets/aloneishowthewhisperends/eve.png"),
        aihtweForegroundShadow : loadImageAsset("assets/aloneishowthewhisperends/foregroundshadow.png"),
        aihtweRaven : loadImageAsset("assets/aloneishowthewhisperends/raven.png"),
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
            "60" : loadImageAsset("assets/font/60.png"),

            "62" : loadImageAsset("assets/font/62.png"),
            "63" : loadImageAsset("assets/font/63.png"),
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
        console.log("Early demo build, note design choices. for sake of wanting to focus only on making a complete demo as soon as I can, I've set some limitations. Everything will be written in using Typescript to run in Electron desktop. Gamepad support only. Everything will run within resolution of 400x240 pixels. Only the canvas element will be used. Limited font will be used. Demo will be expanded upon later (i.e. touch screen support, mouse/keyboard, multiplatform) and probably rewritten in the Unity Engine but for now. I just want to have a working game to make it as easy for me to play around with and to keep motivation going. Similar to how barebone and straight to the point the pico8 is. I hope to focus as much on the actual game rather than technical details to keep the feeling of 'soul' alive and motivation high. Thank you!");   
        // start
        this.timeManager = new TimeManager();
        // const supportedCharacters = `@abcdefghijklmnopqrstuvwxyz0123456789,."'-?!()>< @`.toLowerCase();
        // for(let i = 0; i < supportedCharacters.length; i++) {
        //     console.log(`${supportedCharacters.charAt(i)} : ${supportedCharacters.charCodeAt(i)}`);
        // }

        this.canvas = document.getElementById("whisperend")! as HTMLCanvasElement;
        this.ctx = this.canvas.getContext("2d")!;
        this.ctx.imageSmoothingEnabled = false;

        window.onresize = () => {
            this.resize();
        };
        this.resize();
        this.timeManager.init();
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
        const xOffset = Math.sin(this.timeManager.getElapsed()/delayer) * distance + 30;
        // this.drawImg(this.assets.splashScreenBasic, xOffset, 0);
        this.drawImg(this.assets.aihtweBackground,xOffset,0);
        this.drawImg(this.assets.aihtweEve,xOffset,0);
        this.drawImg(this.assets.aihtweRaven,xOffset,0);
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
        this.drawText(`(DEMO)`, titleX, 200);
    }

    private draw(): void {
        this.ctx.clearRect(0, 0, this.width, this.height);
        this.drawAnimatedMainMenu();
    }
}

// start of everything
window.onload = () => {
    new WhisperEnd();
};  