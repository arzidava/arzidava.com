<script>
    import Section from '../../components/Section.svelte'
</script>

<style>
    h2 {
        font-size: 100%;
    }
    ul {
        list-style-type: none;
    }

    ul > li > a {
        align-items: center;
        display: flex;
        margin-bottom: .5rem;
        padding: .25rem .5rem;
        width: 20ch;
    }
    ul > li > a > span {
        margin-left: 1ch;
    }
</style>

<Section stack>
    <h2>👋 Hi</h2>
    <p>I am Stéphane Vanraes, a Bergen based frontend developer with a passion for lightweight applications.</p>
    <p>Currently I am working with React and Typescript on a professional level, but all my personal projects use Svelte and pure honest vanilla JavaScript and CSS which are 100% my favourite technologies to work with at the moment. This entire website is written actually using Svelte/Sapper, JavaScript and CSS without the use of any external library (excepts for libraries I authored myself).</p>
    <p>If I am not programming myself, or helping people with questions on the subject either on Discord, StackOverflow or in person, you can find me hiking in the beautifull nature of Bergen and surroundings. Or alternatively if it rains (like 200 days per year here) I am a big boardgame fanatic 🎲.</p>
    <h2>Obligatory Social Media</h2>
    <ul>
        <li>
            <a href="https://twitter.com/StephaneVanraes" target="_blank">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="M24 4.557a9.83 9.83 0 01-2.828.775 4.932 4.932 0 002.165-2.724 9.864 9.864 0 01-3.127 1.195 4.916 4.916 0 00-3.594-1.555c-3.179 0-5.515 2.966-4.797 6.045A13.978 13.978 0 011.671 3.149a4.93 4.93 0 001.523 6.574 4.903 4.903 0 01-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.935 4.935 0 01-2.224.084 4.928 4.928 0 004.6 3.419A9.9 9.9 0 010 19.54a13.94 13.94 0 007.548 2.212c9.142 0 14.307-7.721 13.995-14.646A10.025 10.025 0 0024 4.557z"/></svg>
                <span>twitter</span>
            </a>
        </li>
        <li>
            <a href="https://github.com/stephane-vanraes" target="_blank">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/></svg>
                <span>github</span>
            </a>
        </li>
        <li>
            <a href="https://www.linkedin.com/in/svanraes/" target="_blank">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="M19 0H5a5 5 0 00-5 5v14a5 5 0 005 5h14a5 5 0 005-5V5a5 5 0 00-5-5zM8 19H5V8h3v11zM6.5 6.732c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zM20 19h-3v-5.604c0-3.368-4-3.113-4 0V19h-3V8h3v1.765c1.396-2.586 7-2.777 7 2.476V19z"/></svg>
                <span>linkedin</span>
            </a>
        </li>
    </ul>
</Section>