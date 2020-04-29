<script>
	const { cos, sin, PI } = Math
    const r1 = 100
	const r2 = 90
	const x = 0
    const y = 0
    
    export let active = false
    export let href
    export let label
    export let index

    const length = str => (PI/8*(r1-5))*(str.length/9)
	const tpath = (s) => {
		let x1 = x +5 + ((1-cos(s*PI/8)) * (r1-5))
		let y1 = y + ((sin(s*PI/8)) * (r1-5))
		return [
			'M',x1,y1,
			'A',r1-5,r1-5,0,0,0,x+5+((1-cos((s+1)*PI/8))*(r1-5)),y+(sin((s+1)*PI/8)*(r1-5))
		].join(' ');
	}
	const path = (s) => {
		let x1 = x + ((1-cos(s*PI/8)) * r1)
		let y1 = y + ((sin(s*PI/8)) * r1)
		let x2 = x + 10 + ((1-cos(s*PI/8)) * r2)
        let y2 = y + ((sin(s*PI/8)) * r2)
		return [
			'M',x1,y1,
			'A',r1,r1,0,0,0,x+((1-cos((s+1)*PI/8))*r1),y+(sin((s+1)*PI/8)*r1),
			'L',x+10+((1-cos((s+1)*PI/8))*r2),y+(sin((s+1)*PI/8)*r2),
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
		dominant-baseline: middle;
		font-family: monospace;
		font-size: 7px;
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
        <text>
            <textPath xlink:href="#menu-item-path{index}" startOffset="50%" textLength="{length(label)}" spacing="auto">
                {label}
            </textPath>
        </text>	
    </a>
</g>