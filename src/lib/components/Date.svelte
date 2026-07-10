<script lang="ts">
	type Props = {
		variant?: 'bold';
		date: string;
	};

	const { date, variant }: Props = $props();

	const formatted = $derived(
		new Date(date).toLocaleDateString('en-GB', {
			year: 'numeric',
			month: 'long',
			day: 'numeric'
		})
	);
</script>

<time datetime={date} class:bold={variant == 'bold'}>{formatted}</time>

<style>
	time {
	}
	time.bold {
		color: var(--secondary);
		font-weight: 500;
		text-transform: uppercase;
	}
</style>
