/// <reference path="input.ts" />
/// <reference path="world.ts" />
/// <reference path="misc.ts" />
/**
 * Whisper End
 * 
 * "/"
 * @sefemuza
 */

class WhisperEnd {
    private readonly timeManager: TimeManager;
    private readonly input: Input;
    private readonly lore: LoreManager;
    private readonly renderer: Renderer;
    private readonly mainMenu: MenuController;
    private readonly colors = {
        cinder : "#130e1a",
        ziggurat :"#bacdde",
        white : "#ffffff"
   }

    private state: GameStates = GameStates.InGame;
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
        this.mainMenu = new MenuController(`Whisper End`, [
            "Play",
            "Settings",
            "About",
            "Quit"
        ]);
        this.loop();
    }

    //in seconds
    private pause: number = 0.25;
    private transitionDuration: number = 0.5;
    private transitionTime: number = this.transitionDuration;

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
        if(this.pause > 0) {
            this.pause -= this.timeManager.getDelta();
        }
        else if(this.transitionTime > 0) {
            this.transitionTime -= this.timeManager.getDelta();
        }
        this.renderer.fillRect(this.colors.cinder, 0,0,400, 240*(this.transitionTime/this.transitionDuration));
        this.renderer.drawImg(this.assets.icon,  400-6-4, 240-6-8);

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
        const snowColor = this.colors.white;
        const snowColorDark = this.colors.ziggurat;
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
        this.renderer.fillBackground(this.colors.cinder);
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
        let titleX = 10;
        let titleY = 150;
        
        let menuXOffset = 6;
        let menuYOffset = 15;

        let menuX = titleX + menuXOffset;
        let menuY = titleY + menuYOffset;
        let menuYgap = 8;
        let selectorPosition = 0;

        this.renderer.drawText(this.mainMenu.title, titleX, titleY);

        for(let i = 0; i < this.mainMenu.choices.length; i++) {
            this.renderer.drawText(this.mainMenu.choices[i], menuX, menuY + menuYgap*i);
            if(selectorPosition == i) {
                this.renderer.drawText(`>`, menuX-5, menuY + menuYgap*i);
            }
        }
        let footerY = 224;
        this.renderer.drawText(`(DEMO)`, titleX, footerY);
    }

    private quote: Array<string> | null = null;
    private drawStateQuote(): void {
        if(!this.quote) {
            this.quote = this.lore.getRandomQuote();
        }
        let quote: Array<string> = this.quote;
        let x = 70;
        let y = 88;
        let dy = 8;
        for(let i = 0; i < quote.length; i++) {
            this.renderer.drawText(quote[i], x, y + i * dy);
        }
    }
}

window.onload = () => {
    new WhisperEnd();
};  