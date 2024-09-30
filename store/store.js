import { defineStore } from 'pinia';

export const useStore = defineStore('store', ()=> {
    const dot = ref(false)
    const rightNav = ref(false)
    const overlay = ref(false)
    return {
        dot,
        rightNav,
        overlay
    }
})