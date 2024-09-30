<template>
    <header class="header">
        <div class="overlay" v-if="overlay" @click="navFalse()"></div>
        <div class="container">
            <NuxtLink to="/" @mousemove="store.dot = true" @mouseleave="store.dot = false" class="nick-name">
                <img src="~/assets/img/svg/log.svg" alt="" width="50" height="126">
            </NuxtLink>
            <div @click="store.rightNav = !store.rightNav, overlay = !overlay" class="bars"> <button class="menu"
                    onclick="this.classList.toggle('opened');this.setAttribute('aria-expanded', this.classList.contains('opened'))"
                    aria-label="Main Menu">
                    <svg width="35" height="35" viewBox="0 0 100 100">
                        <path class="line line1"
                            d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058" />
                        <path class="line line2" d="M 20,50 H 80" />
                        <path class="line line3"
                            d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942" />
                    </svg>
                </button></div>
        </div>

        <transition name="right">
            <div v-if="store.rightNav" class="right-nav">
                <ul>
                    <li>
                        <NuxtLink @click="navFalse()" @mousemove="store.dot = true" @mouseleave="store.dot = false" to="/">
                            Home</NuxtLink>
                    </li>

                    <li>
                        <NuxtLink @click="navFalse()" @mousemove="store.dot = true" @mouseleave="store.dot = false"
                            to="about">About</NuxtLink>
                    </li>

                    <!-- <li>
                        <NuxtLink @click="navFalse()" @mousemove="store.dot = true" @mouseleave="store.dot = false" to="/">
                            Service</NuxtLink>
                    </li> -->

                    <li>
                        <NuxtLink @click="navFalse()" @mousemove="store.dot = true" @mouseleave="store.dot = false"
                            to="portfolio">
                            Portfolio</NuxtLink>
                    </li>

                    <li>
                        <NuxtLink @click="navFalse()" @mousemove="store.dot = true" @mouseleave="store.dot = false"
                            to="contact">
                            Contact</NuxtLink>
                    </li>
                </ul>
                <!-- <form class="form-dark">
                    <input id="dark-mode" class="toggle" type="checkbox" name="Dark mode" role="switch" value="on">

                </form> -->
            </div>
        </transition>
    </header>
</template>

<script setup>
import { useStore } from "~~/store/store"
const store = useStore()
const overlay = ref(false)
function navFalse() {
    document.querySelector('.menu').classList.remove('opened')
    overlay.value = false, store.rightNav = false
}
</script>

<style>
.right-enter-active,
.right-leave-active {
    transition: all 0.5s ease;
    transform: translateX(0);
}

.right-enter-from,
.right-leave-to {
    transition: all 0.5s ease;
    opacity: 0;
    transform: translateX(100%);
}
</style>