<template>
  <top-nav />
  <nav-bar />
  <NuxtPage />

  <div class="circle" :class="{ 'circle-hover': store.dot }">
  </div>
  <div class="dot" :class="{ 'hover-dot': store.dot }"></div>
</template>
<script setup>
import { gsap } from "gsap";
import { useStore } from "~~/store/store"
const store = useStore()
useHead({
  title: 'Portfolio'
})
onMounted(() => {
  window.addEventListener('mousemove', (event) => {
    const tl = gsap.timeline()
    tl.to('.dot', { x: event.clientX, y: event.clientY, duration: 0.1, ease: "power4" })
    tl.to('.circle', { x: event.clientX, y: event.clientY, duration: 0.1, delay: .01 })

  })

})
</script>
<style >
.page-enter-active,
.page-leave-active {
  transition: all 0.5s ease;
  transform: translateX(0);
}

.page-enter-from,
.page-leave-to {
  transition: all 0.5s ease;
  opacity: 0;
  transform: translateX(200px);
}

@media (max-width: 1100px) {
  .page-enter-from,
  .page-leave-to {
    transition: all 0.5s ease;
    opacity: 0;
    transform: translateX(-200px);
  }
}
</style>
