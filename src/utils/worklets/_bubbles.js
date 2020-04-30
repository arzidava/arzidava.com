class BubblesPainter {
    static get inputProperties() { return ['--bubbles-color', '--bubbles-size', '--bubbles-position']; }
    paint(ctx, geom, properties) {
        const color = properties.get('--bubbles-color').toString();
        const pos = parseInt((properties.get('--bubbles-position').toString()) || '0');
        const size = parseInt((properties.get('--bubbles-size').toString()) || '10');
        if (!color) return;

        ctx.fillStyle = color;

        ctx.beginPath();
        ctx.arc(pos*(geom.width/100), 0, size, 0, Math.PI*2, false);
        ctx.fill();

        ctx.beginPath();
        ctx.arc(geom.width, pos*(geom.height/100), size, 0, Math.PI*2, false);
        ctx.fill();

        ctx.beginPath();
        ctx.arc(geom.width-pos*(geom.width/100), geom.height, size, 0, Math.PI*2, false);
        ctx.fill();

        ctx.beginPath();
        ctx.arc(0, geom.height-pos*(geom.height/100), size, 0, Math.PI*2, false);
        ctx.fill();
    }
}