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

class WhisperEnd {
    private readonly timeManager: TimeManager;
    private readonly width = 400;
    private readonly height = 240;
    private readonly canvas: HTMLCanvasElement;
    private readonly ctx: CanvasRenderingContext2D;
    private assets: any = {
        splashScreenBasic : loadImageAsset("assets/splash-art-basic.png")

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
        const supportedCharacters = `@abcdefghijklmnopqrstuvwxyz0123456789,."'-?!{}> @`.toLowerCase();
        for(let i = 0; i < supportedCharacters.length; i++) {
            console.log(`${supportedCharacters.charAt(i)} : ${supportedCharacters.charCodeAt(i)}`);
        }

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

    private drawText(text: string, x: number, y:number): void {
        // Pixel only font 
        // Everything is 1 single case
        const txt = text.toLowerCase();
        //Characters supported are
        /** 
         * A-Z
         * 0-9
         * 
        */
    }

    private update(): void {
    }

    private draw(): void {
        this.ctx.clearRect(0, 0, this.width, this.height);
        this.ctx.fillStyle = "#130e1a";
        this.ctx.fillRect(0, 0, this.width, this.height);

        const delayer = 1;
        const distance = 3;
        const xOffset = Math.sin(this.timeManager.getElapsed()/delayer) * distance;
        this.drawImg(this.assets.splashScreenBasic, xOffset, 0);
    }
}

// start of everything
window.onload = () => {
    new WhisperEnd();
};  