
'use strict'
class Snowflake {
    constructor(canvas, h, s, c, t) {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.h = h;
        this.s = s;
        this.c = c;
        this.t = t;
    }
    calculateNewPosition(oldPosition, oldCanvasSize, newCanvasSize) {
        let percentage = oldPosition / (oldCanvasSize / 100);
        return newCanvasSize / 100 * percentage;
    }
    updateAfterCanvasResize(oldCanvasWidth, oldCanvasHeight, newCanvasWidth, newCanvasHeight) {
        if (oldCanvasWidth !== newCanvasWidth) {
            this.x = this.calculateNewPosition(this.x, oldCanvasWidth, newCanvasWidth);
        }
        if (oldCanvasHeight !== newCanvasHeight) {
            this.y = this.calculateNewPosition(this.y, oldCanvasHeight, newCanvasHeight);
        }
    }
    draw(ctx) {
        let scrollX = window.scrollX;
        let scrollY = window.scrollY;
        let windowWidth = window.innerWidth;
        let windowHeight = window.innerHeight;
        if (this.x + this.h >= scrollX && this.x - this.h <= scrollX + windowWidth && this.y + this.h >= scrollY && this.y - this.h <= scrollY + windowHeight) {
            ctx.font = this.h + "px Arial, sans-serif";
            ctx.fillText(this.t, this.x, this.y);
            ctx.fillStyle = this.c;
        }
    }
    update(canvas) {
        this.y += this.s;
        if (this.y > canvas.height) {
            this.y = -this.h;
            this.x = Math.random() * canvas.width;
        }
    }
}
class Snowfall {
    constructor(options) {
        let {count=150, minRadius=10, maxRadius=30, minSpeed=3, maxSpeed=10, text="\u2744", color="#ffffff", zIndex="999999999999"} = options;
        let snowfieldCanvas = document.createElement("canvas");
        snowfieldCanvas.style.zIndex = zIndex;
        snowfieldCanvas.style.position = "absolute";
        snowfieldCanvas.style.top = "0";
        snowfieldCanvas.style.left = "0";
        snowfieldCanvas.style.pointerEvents = "none";
        document.addEventListener("DOMContentLoaded", ()=>{
            document.body.append(snowfieldCanvas);
        }
        );
        this.canvas = snowfieldCanvas;
        this.ctx = this.canvas.getContext("2d");
        this.resizeCanvas();
        window.addEventListener("resize", ()=>{
            requestAnimationFrame(this.resizeCanvas.bind(this));
        }
        );
        this.snowflakes = [];
        this.count = count;
        this.minRadius = minRadius;
        this.maxRadius = maxRadius;
        this.minSpeed = minSpeed;
        this.maxSpeed = maxSpeed;
        this.color = color;
        this.text = text;
        this.createSnowflakes();
        this.animateSnowflakes();
    }
    resizeCanvas = ()=>{
        let oldCanvasWidth, oldCanvasHeight
        if (this.snowflakes) {
            oldCanvasWidth = this.canvas.width
            oldCanvasHeight = this.canvas.height
        }
        this.canvas.style.display = 'none'
        if (window.devicePixelRatio > 1) {
            let scrollWidth = document.documentElement.scrollWidth
            let scrollHeight = document.documentElement.scrollHeight
            this.canvas.width = scrollWidth * window.devicePixelRatio;
            this.canvas.height = scrollHeight * window.devicePixelRatio;
            this.canvas.style.width = scrollWidth + "px";
            this.canvas.style.height = scrollHeight + "px";
            this.ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
        } else {
            this.canvas.width = document.documentElement.scrollWidth;
            this.canvas.height = document.documentElement.scrollHeight;
        }
        this.canvas.style.display = ''
        if (this.snowflakes) {
            let newCanvasWidth = this.canvas.width
            let newCanvasHeight = this.canvas.height
            for (let snowflake of this.snowflakes) {
                snowflake.updateAfterCanvasResize(oldCanvasWidth, oldCanvasHeight, newCanvasWidth, newCanvasHeight);
            }
        }
    }
    ;
    createSnowflakes = ()=>{
        for (let i = 0; i < this.count; i++) {
            let r = Math.random() * (this.maxRadius - this.minRadius) + this.minRadius;
            let s = (this.maxSpeed - this.minSpeed) / 100 * r;
            let snowflake = new Snowflake(this.canvas,r,s,this.color,this.text);
            this.snowflakes.push(snowflake);
        }
    }
    ;
    animateSnowflakes = ()=>{
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        for (let snowflake of this.snowflakes) {
            snowflake.draw(this.ctx);
            snowflake.update(this.canvas);
        }
        requestAnimationFrame(this.animateSnowflakes);
    }
}
