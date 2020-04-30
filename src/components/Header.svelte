<script>
    import Logo from './Logo.svelte'
</script>

<style>
    h1 {
        color: var(--white);
        font-size: 3rem;
        padding-right: 3.5rem;
        -webkit-text-stroke-width: 1px;
        -webkit-text-stroke-color: black;
    }

    h1 > span {   
        display: inline-block;     
        height: 40px;
        margin-right: 1rem;
        vertical-align: middle;
        width: 40px;
    }
</style>

<h1><span><Logo/></span><slot></slot></h1>
