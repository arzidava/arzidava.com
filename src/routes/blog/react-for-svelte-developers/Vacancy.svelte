<script>	
    let value = 'svelte';
    
	let jobs = null;
	const search = () => jobs = data[value]
	const goReact = () => {
		value = 'react' 
		jobs = data[value]
	}

    const data = {
        "svelte": {
            count: 0,
            jobs: []
        },
        "react": {
            count: 1456,
            jobs: [
                {
                    title: "Experienced React developer",
                    short: "We are looking to strenghten our team with an experienced React developer."
                },
                {
                    title: "Frontend developer for exciting project",
                    short: "We take React to the next level in our latest project, using best practices from years of experience."
                }, 
                {
                    title: "Exciting position for graduates with 20 years of experience",
                    short: "Well established financial firm is looking for a React expert to join our team in an unpaid internship."
                },
                {
                    short: "Javascript Developer",
                    title: "Hip upstart run by guys with beards wants to strenghten their team working on our brand new React application."
                },
                {
                    title: "...and so on...",
                    short: ""
                }
            ]
        }
    }
</script>

<div class="wrapper">

    <h1>Generic Job Site</h1>

    <form on:submit|preventDefault={search}>
        <label>
            <span>Search by keyword:</span>
            <input type="text" value={value} disabled>
        </label>
        <button type="submit">Search</button>
    </form>

    {#if jobs}
        <div>
            There are {jobs.count} jobs posted:
            <ul>
                {#each jobs.jobs as {title, short}}
                <li>
                    <p>{title}</p>
                    <p>{short}</p>
                </li>
                {:else}
                    <li>No jobs found, did you meant to search for <button on:click={goReact}>'React'</button> ?</li>
                {/each}
            </ul>	
        </div>
    {/if}

</div>

<style>
    .wrapper {
        background-color:rgba(92, 180, 4, 0.2);
        border: 2px solid #5CB404;
        border-radius: .5rem;
        padding: .5rem;
    }

    form {
        align-items: flex-end;
        border-bottom: 1px solid #5CB404;
        display: flex;
        flex-direction: column;
        padding: 1rem;
        max-width: 50ch;
    }
    label {
        display: contents;
    }
    label > span,
    label > input {
        margin-bottom: .25rem;
        padding: .25rem .5rem;
        width: 100%;
    }
    form > button {
        width: 10ch;
    }
    ul {
        list-style-type: none;
    }
    li {
        background-color: var(--white);
        border: 1px solid var(--primary-xlight);
        border-radius: 4px;
        margin: .5rem;
        padding: .5rem;
    }
    li > p:first-child {
        font-weight: 600;
        margin-bottom: .25rem;
    }
    li > button {
        background: transparent;
        border: 0;  
        border-bottom: 2px dashed #5CB404;
        cursor: pointer; 
    }

</style>