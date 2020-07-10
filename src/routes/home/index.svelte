<script>
    import { onMount } from 'svelte'
    import { background, colours } from '../../stores.js'
    import Header from '../../components/Header.svelte'

    onMount(() => background.set($colours.primaryLight));

</script>

<style>
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
    p {
        flex: 0 0 100%;
        margin-bottom: .5rem;
    }
    nav {
        display: contents;
    }
    a {
        background-color: var(--secondary-light);
        display: inline-block;
        flex: 1 0 calc(50% - 10px);
        font-size: 1.25rem;
		margin: 5px;
        padding: .5rem 1rem;
    }

    a:hover {
        background-color: var(--primary-light);
        box-shadow: 2px 2px black;
    }

    @media screen and (max-width: 430px) {
        a {
            flex: 1 0 100%;
        }
    }
</style>

<div class="content">
    <Header>arzidava</Header>
    <p>web development</p>
    <p>lightweight &mid; accessible &mid; simple</p>
    <nav>
        <a href="/about">about</a>
        <a href="/contact">contact</a>
        <a href="/concepts">concepts</a>
        <a href="/blog">blog</a>
    </nav>
</div>