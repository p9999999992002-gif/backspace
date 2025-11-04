<!-- src/components/ScrollProgress.vue -->
<template>
  <div class="scroll-progress-container">
    <div class="scroll-progress-bar" :style="{ width: scrollProgress + '%' }"></div>
  </div>
</template>

<script>
export default {
  name: 'ScrollProgress',
  data() {
    return {
      scrollProgress: 0
    }
  },
  mounted() {
    window.addEventListener('scroll', this.updateScrollProgress)
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.updateScrollProgress)
  },
  methods: {
    updateScrollProgress() {
      const winScroll = document.documentElement.scrollTop
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight
      const scrolled = (winScroll / height) * 100
      this.scrollProgress = scrolled
    }
  }
}
</script>

<style scoped>
.scroll-progress-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 3px;
  background: rgba(255, 255, 255, 0.05);
  z-index: 9999;
}

.scroll-progress-bar {
  height: 100%;
  background: linear-gradient(90deg, #a855f7, #3b82f6);
  transition: width 0.1s ease;
  box-shadow: 0 0 10px rgba(168, 85, 247, 0.6);
}
</style>
