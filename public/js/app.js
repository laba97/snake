window.onload = function () {
    init();
};
function init() {
    var game = new Game('game');
}
var Game = /** @class */ (function () {
    function Game(_id) {
        this._id = _id;
        var container = document.getElementById(_id);
        this.w = container.offsetWidth;
        this.h = container.offsetHeight;
        var canvas = document.createElement('canvas');
        canvas.width = this.w;
        canvas.height = this.h;
        this.cv = canvas;
        this.ctx = this.cv.getContext('2d');
        container.appendChild(this.cv);
    }
    Game.prototype.start = function () {
        this.interval = setInterval(function () {
            console.log('test');
        }, 1000 / 10);
    };
    return Game;
}());
