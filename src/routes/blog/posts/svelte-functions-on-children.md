---
slug: 'svelte-functions-on-children'
title: 'Running functions on child components in Svelte'
date: 20200428
---

In Svelte you can easily expose properties using `export let prop` to make them available in your parent.  But nothing stops us from exposing a function in the same way doing `export function fn() { }`, the question now is how do we call this ? This is actually, as so often with Svelte, relatively simple.

First we need to prepare our component:

```html
<script>
    export function doSomething() {
        console.log('test')
    }
</script>
```

In our parent we need to get a reference to this component, this is done using the `bind:this` attribute.

```html
<script>
    import Child from './Child.svelte'
    let child
</script>
<Child bind:this="{child}" />
```

Now we can use _child_ to access our components and thus call our exported function on it.

```html
<script>
    import Child from './Child.svelte'
    let child
</script>
<Child bind:this="{child}" />
<button on:click="{() => child.doSomething()}">Click</button>
```

That's it!!

## Wait! There is more!

We can even use this within an `each` block and assign the children to an array. Let us first create a new component called **Animal**:

```html
<script>
    export let animal
    export function love() {
        console.log(`I love ${animal}`)
    }
</script>
```

And then render and bind them in a loop:

```html
<script>
    import Animal from './Animal.svelte'

    const animals = ['bunnies', 'squirrels', 'unicorns']

    let children = [];
</script>

{#each animals as animal, idx}
    <Animal {animal} bind:this="{children[idx]}" />
{/each}
```

As before we can still call our function on one of the children, this code will print _I love unicorns_ (the animal on position 2) to the console:

```html
<button on:click="{() => children[2].love()}">
	Click
</button>
```
    
## A slightly more advanced example

To close let's look at a _'more advanced'_ use case.  We will first start with a simple component that shows a title and, if a toggle is set to true, some content in a slot.  This toggle can be set by clicking on the title, or alternatively can be set using a function `close`. Note that in this setup it is impossible to control the state from outside of the component **except** for setting it to false.

```html
<script>
	let open = false
	
	export let title
	export const close = () => open = false
</script>

<h2 on:click="{() => open = !open}">{title}</h2>

{#if open}<slot></slot>{/if}
```

(Fair enough, not the most usefull component ever)

In our parent component we will use this to render some chapters from an imaginary text:

```html
<script>
    // data.js exports an array of items of the form { text, title }
	import data from './data.js'
    import Item from './Item.svelte'
    
    let items = []
</script>

<h1>This is a title</h1>

{#each data as {text, title}, idx}
    <Item {title} bind:this="{items[idx]}">{text}</Item>
{/each}
```

This doesn't actually do anything, except just printing the titles and when clicked it will open or close that section. For convenience sake we will add a button that closes **all** sections.

```html
<button on:click="{() => items.forEach(item => item.close())}">
	Close All
</button>
```

## Even more ??

Yes! There is one more thing I want to show.  Namely that instead of binding your elements to an array you could also bind them to an object, creating a kind of lookup table.  This can be handy if you have elements with some kind of id. Let's go back to our very first example and adjust it a little bit:

```html
<script>
    import Animal from './Animal.svelte'

    const animals = [{
			code: 'bun',
			name:'bunnies'
		}, {
			code: 'squ',
			name:'squirrels'
		}, {
			code: 'uni', 
			name:'unicorns'
		}]

    let children = {}
		$: console.log(children)
</script>

{#each animals as {name, code}, idx}
    <Animal animal={name} bind:this="{children[code]}" />
{/each}

<button on:click="{() => children.bun.love()}">
    Click
</button>
```

As you can see the possibilities of this technique are absolutely endless!
