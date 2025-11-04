<template>
  <button 
    @click="toggleTheme" 
    class="theme-toggle bubble-button"
    :class="{ 'light-mode': isLightMode }"
    title="Toggle Theme"
  >
    <transition name="icon-rotate" mode="out-in">
      <svg v-if="isLightMode" key="sun" class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"/>
      </svg>
      <svg v-else key="moon" class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"/>
      </svg>
    </transition>
  </button>
</template>

<script>
export default {
  name: 'ThemeToggle',
  data() {
    return {
      isLightMode: false // SEMPRE INICIA EM DARK
    }
  },
  mounted() {
    // Força tema dark ao iniciar
    const savedTheme = localStorage.getItem('theme')
    
    // Remove o tema light se existir
    if (savedTheme === 'light') {
      localStorage.removeItem('theme')
    }
    
    // Garante que inicia em dark
    this.isLightMode = false
    this.applyTheme('dark')
  },
  methods: {
    toggleTheme() {
      this.isLightMode = !this.isLightMode
      const theme = this.isLightMode ? 'light' : 'dark'
      this.applyTheme(theme)
      localStorage.setItem('theme', theme)
      
      this.showToast(theme)
      this.$emit('theme-changed', theme)
    },
    applyTheme(theme) {
      if (theme === 'light') {
        document.documentElement.setAttribute('data-theme', 'light')
        document.body.classList.add('light-theme')
      } else {
        document.documentElement.removeAttribute('data-theme')
        document.body.classList.remove('light-theme')
      }
    },
    showToast(theme) {
      const message = theme === 'light' ? '☀️ Light Mode Activated' : '🌙 Dark Mode Activated'
      
      const toast = document.createElement('div')
      toast.textContent = message
      toast.style.cssText = `
        position: fixed;
        top: 100px;
        right: 2rem;
        padding: 1rem 1.5rem;
        background: rgba(168, 85, 247, 0.9);
        color: white;
        border-radius: 12px;
        font-size: 0.9rem;
        font-weight: 600;
        z-index: 10000;
        animation: slideIn 0.3s ease-out;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
        backdrop-filter: blur(10px);
      `
      
      document.body.appendChild(toast)
      
      setTimeout(() => {
        toast.style.animation = 'slideOut 0.3s ease-out'
        setTimeout(() => toast.remove(), 300)
      }, 2000)
    }
  }
}
</script>

<style scoped>
.theme-toggle {
  position: fixed;
  top: 2rem;
  right: 2rem;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: rgba(168, 85, 247, 0.2);
  border: 2px solid rgba(168, 85, 247, 0.3);
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 5px 20px rgba(168, 85, 247, 0.2);
}

.theme-toggle:hover {
  transform: translateY(-3px) rotate(15deg);
  box-shadow: 0 10px 30px rgba(168, 85, 247, 0.4);
  background: rgba(168, 85, 247, 0.3);
}

.theme-toggle.light-mode {
  background: rgba(255, 200, 0, 0.2);
  border-color: rgba(255, 200, 0, 0.4);
  color: #ff9800;
}

.theme-toggle.light-mode:hover {
  box-shadow: 0 10px 30px rgba(255, 200, 0, 0.3);
  background: rgba(255, 200, 0, 0.3);
  transform: translateY(-3px) rotate(-15deg);
}

.icon-rotate-enter-active,
.icon-rotate-leave-active {
  transition: all 0.3s ease;
}

.icon-rotate-enter-from {
  transform: rotate(-180deg) scale(0);
  opacity: 0;
}

.icon-rotate-leave-to {
  transform: rotate(180deg) scale(0);
  opacity: 0;
}

@media (max-width: 768px) {
  .theme-toggle {
    top: 1rem;
    right: 1rem;
    width: 45px;
    height: 45px;
  }
}
</style>
