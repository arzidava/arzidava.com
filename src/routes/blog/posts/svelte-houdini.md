---
slug: svelte-houdini
title: How to add CSS Houdini to your Svelte App
date: 20200430
summary: A quick explainer of how to add CSS Houdini effect to a Svelte App
tags: svelte javascript css houdini
---

[CSS Houdini](https://developer.mozilla.org/en-US/docs/Web/Houdini) is not one specific API or technology, but rather a series of them that allows developers to directly interact with the CSSOM. Once universally supported it will allow us to use JavaScript to directly influence how elements are drawn, filled, ...  Here I would like to make a quick venture into how you can combine one of these (the Paint API, which is currently the best supported one) with your Svelte app to make some interesting effects.

You might actually have seen the usage on this website: ![Houdini example from this website](articles/houdini-1.png)

In normal circumstance you would create a new file (_path-to-worklet.js_) which contains a class (_WorkletClass_) with a _paint_ method. After adding this file ass a module you register it.

```javascript
CSS.paintWorklet.addModule('path-to-worklet.js');
// Check for support
if ('paintWorklet' in CSS) {
    registerPaint('worklet-name', WorkletClass)
}
```

This does however require that _path-to-worklet.js_ is a seperate file, so it will trigger an additional download. With some imagination (and dirty coding) we can however embed it in our Svelte App itself. To do so we create a new worklet javascript file, create the module as encoded uri and register it:

```javascript
    CSS.paintWorklet.addModule(URL.createObjectURL(new Blob([`
    // worklet.js
    class Painter {
        paint(ctx, geom, properties) {
            // do Stuff
        }
    }
  
    if ('paintWorklet' in CSS) {
        registerPaint('my-worklet', Painter)
    }
  `], {type: "application/javascript"})))
```

This looks a bit dirty and the code is a string so you don't get syntax highlighting, what I did was to put the real class on top of the file and copy paste it the whole time.  Tedious work, but I didn't bother finding an automated solution, perhaps some preprocessing could grab the contents of a file and do a replace ?

To use the worklet you can simply do

```css
    background-image: paint(my-worklet);
```

## Adding reactivity to your Worklet

So far we only did some boring things, but we can do more. First of all, if you look at the code above you see that the _paint_ function takes three parameters: `paint(ctx, geom, properties)`. The _ctx_ is a [Canvas](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API) object that can be used to draw upon, _geom_ will give you the width and height of said canvas. _Properties_ then is the most interesting one, in here we will find the CSS propeties available to us in this function. To get them is a two step process:

```javascript
class Painter {
    // First define which properties to use
    static get inputProperties() { return ['color']; }
    // In the paint function read and parse the properties    
    paint(ctx, geom, properties) {
        const color = properties.get('color').toString();
    }
}
```

The nice things about the paint function is that it will re-fire if any of the passed properties change! This of course can be lovely combined with the reactivity of Svelte by hooking those properties to a variable using the `style` attribute of tags:

```html
<style>
    div {
        background-image: paint(my-worklet);
    }
</style>     
<div style="padding: {padding}"></div>
```

Now _my-worklet_ will run every time _padding_ has changed. Note that this of course also works with custom properties and with store values, this means you can get really fancy if so desired:

```html
<script>
    import { onMount, tick } from 'svelte'
    import { tweened } from 'svelte/motion'
    const bubbleSize = tweened(0);
    onMount(async () => {
        await tick()
        setTimeout(() => bubbleSize.set(100), 500)
    })
</script>
<style>
    div {
        --bubbleColor: red;
        background-image: paint(bubbles);
    }
</style>
<div style="--bubbleSize: {$bubbleSize}"></div>
```

## A note on Sapper

This code will not work in SSR because the server does not recognize the CSS Object, just make sure this code only runs on the client

```javascript
if (process.browser && 'paintWorklet' in CSS) {
    // Create and register your worklet
}
```
