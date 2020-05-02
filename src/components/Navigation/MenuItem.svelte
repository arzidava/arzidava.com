<script>
	const { cos, sin, PI } = Math
    const r1 = 100
	const r2 = 80
	const x = 0
    const y = 0
    
    export let active = false
    export let href
    export let label
    export let index

    const length = str => (PI/6*(r1-5))*(str.length/9)+(str.length < 5 ? 5 : 0)
	const tpath = (s) => {
		let x1 = x + 10 + ((1-cos(s*PI/6)) * (r1-10))
		let y1 = y + ((sin(s*PI/6)) * (r1-10))
		return [
			'M',x1,y1,
			'A',r1-10,r1-10,0,0,0,x+10 + ((1-cos((s+1)*PI/6))*(r1-10)),y+(sin((s+1)*PI/6)*(r1-10)),
		].join(' ');
	}
	const path = (s) => {
		let x1 = x + ((1-cos(s*PI/6)) * r1)
		let y1 = y + ((sin(s*PI/6)) * r1)
		let x2 = x + 20 + ((1-cos(s*PI/6)) * r2)
        let y2 = y + ((sin(s*PI/6)) * r2)
		return [
			'M',x1,y1,
			'A',r1,r1,0,0,0,x+((1-cos((s+1)*PI/6))*r1),y+(sin((s+1)*PI/6)*r1),
			'L',x+20+((1-cos((s+1)*PI/6))*r2),y+(sin((s+1)*PI/6)*r2),
			'A',r2,r2,0,0,1,x2,y2,
			'Z'
		].join(' ');
	}
</script>

<style>
	path {
		fill: var(--primary);
		stroke: var(--primary);
	}
	text {
        fill: var(--white);
		cursor: pointer;
		font-family: monospace;
		font-size: 10px;
		text-anchor: middle;
	}
    g.active > a > path,
	g:focus-within > a > path,
	g:hover > a > path {
		fill: var(--secondary);
        stroke: var(--secondary);
	}
	a {
        fill: var(--white);
		text-decoration: none;
	}
	a:focus {
		outline: none;
	}
    defs {
        display: none;
	}
</style>
<g class:active>
    <defs>    
        <path id="menu-item-path{index}" d="{tpath(index)}"/>
    </defs>
    <a href="{href}">
        <path d="{path(index)}"/>
        <text style="dominant-baseline: middle;">
            <textPath xlink:href="#menu-item-path{index}" startOffset="{label.length < 5 ? '50%' : '45%'}" textLength="{length(label)}" spacing="exact">
                {label}
            </textPath>
        </text>
    </a>
</g>