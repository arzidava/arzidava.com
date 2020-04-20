---
slug: 'svelte-userbased-config'
title: 'Configuring a Svelte App based on the user'
date: 20200420
---

If you follow the official Svelte template you will notice that you can pass in data to your app during initialization.  The interesting lines are found in _main.js_:

```javascript
const app = new App({
  target: document.body,
  props: {
    name: 'world'
  }
});
```

As can be expected this will be pass in _world_ as value for the prop _name_ on the App component.  But if you use this approach the values have to be known during compile time, something which is not very usefull if you are working on an app that would require some kind of configuration depending on which user is currently logged in.

## Use the document

The most straightforward method to get this data to Svelte is to define it on the document during server rendering:

```html
<script>
  document.myapp = {
    // Here you can use your chosen backend language to output the correct value
    name: 'Stephane'
  }
</script>
```

And then read this value in your initialization:

```javascript
const app = new App({
  target: document.body,
  props: {
    name: document.myapp.name
  }
});
```

If you are using stores, it is also a viable approach to read it straight into a store:

```javascript
export const config = readable(document.myapp);
```

That's all, the actual implementation on how to make valid a valid javascript object to place in your document will depend on your platform of choice.
