<script>
    import Logo from '../../components/Logo.svelte'
    import Note from '../../components/Note.svelte'
    import Section from '../../components/Section.svelte'
</script>

<style>
    .logo {
        float: left;
        height: 100px;
        margin-right: 1rem;
        shape-outside: circle(50%);
        width: 100px;
    }
    .logo + p {
        margin-top: 0;
    }
</style>

<Section stack>
    <div class="logo"><Logo /></div>
    <p><strong>Arzidava</strong> was born during the COVID-19 pandemic and the subsequent isolations. Working for a company active in the tourism industry meant we were hit rather hard by the sudden travel restrictions and most employees were put on 'non active'.  Sitting at home doing nothing is not my nature so I decided to make a personal website, and who knows, maybe I could earn a little on the side ?</p>
    <p>Initially the site was only meant to publish some articles on the use of <a href="https://www.svelte.dev" target="_blank">Svelte</a> and <a href="https://sapper.svelte.dev" target="_blank">Sapper</a>, primarly based on frequently asked questions on the <a href="https://www.svelte.dev/chat" target="_blank">Discord channel</a> of these libraries.</p>
    <Note stack>
        <p>
        The name <strong>arzidava</strong> is a mash up of the old Thracian words 'arzi' meaning white and 'dava' meaning settlement.  The combination would (with some imagination) form 'The White City', referring to the snowy mountain tops around my home town of Bergen in Norway.</p>
        <p>This is also reflected in the logo which is meant to represent a city wall with buildings. It's complete crap I know 🙄</p>
    </Note>
    <p>Over time the idea of offering some training in Svelte came, and that got the ball rolling, adding simple code review services, help getting started with projects, etc... To the point where I am as part time freelancer in all things Svelte.</p>
</Section>