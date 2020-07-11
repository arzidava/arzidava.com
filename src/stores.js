import { readable, writable } from 'svelte/store'

export const colours = readable({
    primaryLight: '#0491BD',
    secondaryLight: '#FF8F1F',
    grey: '#787878'

})

export const background = writable('#0491BD')

export const pagetitle = writable('arzidava')
