import { readable, writable } from 'svelte/store'

export const backdropColour = (() => {
    const colours = {
        grey: '#808080',
        blue: '#037BA0',
        green: '#5CB404',
        pink: '#FF1493',
        red: '#FF0800'
    }

    const { set, subscribe } = writable(colours.blue)

    return {
        set: colour => colours.hasOwnProperty(colour) && set(colours[colour]),
        subscribe
    }
})()

export const pagetitle = writable('arzidava')