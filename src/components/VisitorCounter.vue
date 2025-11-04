<!-- src/components/VisitorCounter.vue -->
<template>
  <div class="visitor-counter">
    <p class="text-gray-500 text-xs tracking-wider">
      Visitor #<span class="counter-number">{{ displayCount }}</span>
    </p>
  </div>
</template>

<script>
export default {
  name: 'VisitorCounter',
  data() {
    return {
      count: 0,
      displayCount: 0,
      targetCount: 1247 // Simule um número
    }
  },
  mounted() {
    this.animateCount()
  },
  methods: {
    animateCount() {
      const duration = 2000
      const increment = this.targetCount / (duration / 16)
      
      const timer = setInterval(() => {
        this.displayCount += Math.ceil(increment)
        if (this.displayCount >= this.targetCount) {
          this.displayCount = this.targetCount
          clearInterval(timer)
        }
      }, 16)
    }
  }
}
</script>

<style scoped>
.visitor-counter {
  position: fixed;
  bottom: 1rem;
  left: 50%;
  transform: translateX(-50%);
  z-index: 50;
  padding: 0.5rem 1rem;
  background: rgba(0, 0, 0, 0.5);
  border-radius: 20px;
  backdrop-filter: blur(10px);
}

.counter-number {
  color: #a855f7;
  font-weight: bold;
  font-family: 'Courier New', monospace;
}
</style>
