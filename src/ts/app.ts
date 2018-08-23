window.onload = () => {
    init();
};

function init(): void {
    const game = new Game('game');
}

class Game {
    cv: any;
    ctx: any;
    w: number;
    h: number;
    interval: any;

    constructor(public _id: string) {
        const container = document.getElementById(_id);
        this.w = container.offsetWidth;
        this.h = container.offsetHeight;
        const canvas = document.createElement('canvas');
        canvas.width = this.w;
        canvas.height = this.h;
        this.cv = canvas;
        this.ctx = this.cv.getContext('2d');
        container.appendChild(this.cv);
    }

    public start(): void {
        this.interval = setInterval(() => {
            console.log('test');
        }, 1000 / 10);
    }
}
