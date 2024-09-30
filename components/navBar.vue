<template>
    <nav class="nav">
        <div class="user">
            <NuxtLink @mousemove="store.dot = true" @mouseleave="store.dot = false" to="/" class="nick-name">
                <img src="~/assets/img/svg/log.svg" alt="" width="120" height="100">
            </NuxtLink>
        </div>
        <ul class="nav-wrapper">
            <li class="nav-link link">
                <NuxtLink @mousemove="store.dot = true" @mouseleave="store.dot = false" to="/">Home</NuxtLink>
            </li>
            <li class="nav-link">
                <NuxtLink @mousemove="store.dot = true" @mouseleave="store.dot = false" to="about">About</NuxtLink>
            </li>
            <!-- <li class="nav-link">
                <NuxtLink @mousemove="store.dot = true" @mouseleave="store.dot = false" to="/">Service</NuxtLink>
            </li> -->
            <li class="nav-link">
                <NuxtLink @mousemove="store.dot = true" @mouseleave="store.dot = false" to="portfolio">Portfolio</NuxtLink>
            </li>
            <li class="nav-link">
                <NuxtLink @mousemove="store.dot = true" @mouseleave="store.dot = false" to="contact">Contact</NuxtLink>
            </li>
        </ul>
        <!-- <button>Light</button> -->
        <!-- <form class="form-dark">
            <input id="dark-mode" class="toggle" type="checkbox" name="Dark mode" role="switch" value="on">
            
        </form> -->

        <p @mousemove="store.dot = true" @mouseleave="store.dot = false" class="create">© Portfolio Created by Umarjonov</p>
    </nav>
</template>

<script setup>
import { useStore } from "~~/store/store"
const store = useStore()
</script>

