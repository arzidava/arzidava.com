registerPaint('curvy-strip', class {
    
    static get inputProperties() { return ['color'] }

    paint(ctx, size, props) {
        const color = props.get('color')

        ctx.strokeStyle = color
        ctx.lineWidth = '1'
        ctx.fillStyle = 'transparent'

        const iterations = Math.ceil(size.width / (size.height * 4))
        const ws = size.width / (iterations * 4)
        const hs = ws / 4

        ctx.beginPath()
        
        ctx.moveTo(0, hs * 2)
        for (let x = 0; x < iterations; x++) {
            let cx = x * ws * 4
            ctx.quadraticCurveTo(cx + (ws * 1), 0, cx + (ws * 2), hs * 2)
            ctx.quadraticCurveTo(cx + (ws * 3), hs * 4, cx + (ws * 4), hs * 2)
        }
        
        for (let x = 0; x < iterations; x++) {
            let cx = x * ws * 4
            ctx.moveTo(cx + (ws * 1) + 2, 4)
            ctx.ellipse(cx + (ws * 1), 6, 2, 2, Math.PI / 4, 0, 2 * Math.PI);
            ctx.moveTo(cx + (ws * 3) + 2, (hs * 4) - 4)
            ctx.ellipse(cx + (ws * 3), (hs * 4) - 6, 2, 2, Math.PI / 4, 0, 2 * Math.PI);
        }
        
        ctx.stroke()
        ctx.fill()
    }
  }
);

registerPaint('tape', class {
    paint(ctx, size, props) {

        const h = size.height
        const w = size.width

        ctx.strokeStyle = 'transparent'
        ctx.lineWidth = '1'
        ctx.fillStyle = '#fff9'

        ctx.beginPath()
        
        ctx.moveTo(0, 0)
        ctx.lineTo(w, 0)

        for(let y = 0; y < h; y += 4) {
            ctx.lineTo(w-4, y)
            ctx.lineTo(w,y+2)
        }

        ctx.lineTo(w, h)
        ctx.lineTo(0, h)

        for(let y = h; y > 0; y -= 4) {
            ctx.lineTo(4, y)
            ctx.lineTo(0,y-2)
        }

        ctx.stroke()
        ctx.fill()
    }
})