<!-- src/components/LoadingScreen.vue -->
<template>
  <div v-if="isLoading" class="loading-screen">
    <div class="loading-content">
      <div class="rocket">
        <svg viewBox="0 0 100 100" class="w-20 h-20">
          <path d="M50 10 L60 40 L90 50 L60 60 L50 90 L40 60 L10 50 L40 40 Z" 
                fill="url(#gradient)" 
                class="rocket-shape"/>
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style="stop-color:#a855f7;stop-opacity:1" />
              <stop offset="100%" style="stop-color:#ec4899;stop-opacity:1" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div class="loading-text">
        <span class="loading-letter">L</span>
        <span class="loading-letter">O</span>
        <span class="loading-letter">A</span>
        <span class="loading-letter">D</span>
        <span class="loading-letter">I</span>
        <span class="loading-letter">N</span>
        <span class="loading-letter">G</span>
      </div>
      <div class="loading-bar">
        <div class="loading-progress" :style="{ width: progress + '%' }"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LoadingScreen',
  data() {
    return {
      isLoading: true,
      progress: 0
    }
  },
  mounted() {
    this.startLoading()
  },
  methods: {
    startLoading() {
      const interval = setInterval(() => {
        this.progress += 5
        if (this.progress >= 100) {
          clearInterval(interval)
          setTimeout(() => {
            this.isLoading = false
          }, 500)
        }
      }, 100)
    }
  }
}
</script>

<style scoped>
.loading-screen {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: #000;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10000;
  animation: fadeOut 1s ease 3s forwards;
}

@keyframes fadeOut {
  to { opacity: 0; pointer-events: none; }
}

.loading-content {
  text-align: center;
}

.rocket {
  animation: float 3s ease-in-out infinite;
}

@keyframes float {
  0%, 100% { transform: translateY(0) rotate(0deg); }
  50% { transform: translateY(-20px) rotate(10deg); }
}

.rocket-shape {
  filter: drop-shadow(0 0 20px rgba(168, 85, 247, 0.6));
}

.loading-text {
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  margin: 2rem 0;
  font-size: 1.5rem;
  font-weight: bold;
  letter-spacing: 0.2em;
}

.loading-letter {
  color: #fff;
  animation: wave 1.5s ease-in-out infinite;
}

.loading-letter:nth-child(1) { animation-delay: 0s; }
.loading-letter:nth-child(2) { animation-delay: 0.1s; }
.loading-letter:nth-child(3) { animation-delay: 0.2s; }
.loading-letter:nth-child(4) { animation-delay: 0.3s; }
.loading-letter:nth-child(5) { animation-delay: 0.4s; }
.loading-letter:nth-child(6) { animation-delay: 0.5s; }
.loading-letter:nth-child(7) { animation-delay: 0.6s; }

@keyframes wave {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}

.loading-bar {
  width: 200px;
  height: 4px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 2px;
  overflow: hidden;
  margin: 0 auto;
}

.loading-progress {
  height: 100%;
  background: linear-gradient(90deg, #a855f7, #ec4899);
  transition: width 0.3s ease;
  box-shadow: 0 0 10px rgba(168, 85, 247, 0.6);
}
</style>
