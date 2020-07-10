<script>
    import MultitoneImage from 'svelte-multitoneimage'
    import Header from '../../components/Header.svelte'
    import Logo from '../../components/Logo.svelte'
	const b = '#404040'
	const w= '¤fcfcfc'
	const p = '#005670'
    const pl = '#0491BD'
	const s = '#BD6004'
	const sl = '#FF8F1F'
	const a = '#F4442E'
	const sp = '#805224'
</script>

<style>
    .wrapper {
        display: flex;
        height: 100vh;
        position: fixed;
        width: 100vw;
    }
    .wrapper > :global(img) {        
        flex: 1 0 50%;
        object-fit: cover;
		width: 50%;
		z-index: -1;
    }
    .wrapper > :global(img:first-of-type) { 
        object-position: 100%;
    }
    .wrapper > :global(img:last-of-type) { 
        object-position: 0%;
    }
    .content {
        color: white;
        display: flex;
        flex-wrap: wrap;
        left: 50%;
        margin-top: 3rem;
        position: absolute;
        text-align: center;
        transform: translateX(-50%);	
		width: 315px;
    }
    .content > :global(h1) {
        font-weight: bold;
        padding-right: 0rem !important;
        text-align: center;
		width: 100%;
    }
    nav {
        display: contents;
    }
    a {
        background-color: black;
        display: inline-block;
        flex: 1 0 calc(50% - 10px);
        font-size: 1.25rem;
		margin: 5px;
        padding: .5rem 1rem;
    }

    a:hover {
        box-shadow: 2px 2px black;
    }

    a:nth-child(2n+1) {
        background-color: var(--secondary-light);
    }
    a:nth-child(2n+1):hover {
        background-color: var(--secondary);
    }
    a:nth-child(2n) {
        background-color: var(--primary-light);
    }
    a:nth-child(2n):hover {
        background-color: var(--primary);
    }

    @media screen and (max-width: 430px) {
        .wrapper > :global(img:last-of-type) {
            display: none;
        }
        a {
            flex: 1 0 100%;
        }
        a:nth-child(2n) {
            background-color: var(--secondary-light);
        }
    }
</style>

<div class="wrapper">
	<MultitoneImage src="./lyderhorn1.png" colours={[b,pl,w]} amplitude="1" exponent="1.1"/>
	<MultitoneImage src="./lyderhorn2.png" colours={[b,sl,w]} amplitude="1" exponent="1.1"/>
</div>

<div class="content">
    <Header>arzidava</Header>
    <nav>
        <a href="/about">about</a>
        <a href="/contact">contact</a>
        <a href="/concepts">concepts</a>
        <a href="/blog">blog</a>
    </nav>
</div>