<script>
    import Logo from './Logo.svelte'
</script>

<style>
    h1 {
        color: var(--white);
        font-size: 3rem;
        margin-bottom: .25rem;
        margin-right: 1rem;
        width: 9ch;
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
