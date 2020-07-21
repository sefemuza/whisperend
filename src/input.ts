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
        console.log("Input ready");
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