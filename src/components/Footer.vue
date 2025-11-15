<template>
  <footer class="relative bg-black border-t border-white/10 py-12 md:py-16 ml-20 md:ml-24">
    <div class="container mx-auto px-6 md:px-12">
      <!-- Newsletter Section -->
      <div class="max-w-4xl mx-auto text-center mb-12 md:mb-16 fade-in-up">
        <h3 class="text-2xl md:text-3xl font-bold text-white mb-3">Mantenha-se Atualizado</h3>
        <p class="text-gray-400 text-sm md:text-base mb-6">Assine nossa newsletter para receber as últimas atualizações e insights</p>
        <form @submit.prevent="handleNewsletterSubmit" class="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
          <input 
            v-model="newsletterEmail"
            type="email" 
            placeholder="seu@email.com" 
            required
            class="flex-1 px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white text-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:bg-white/10 transition-all"
          />
          <button type="submit" class="bubble-button-gradient px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg text-white text-sm font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 hover:scale-105 whitespace-nowrap relative overflow-hidden">
            <span class="relative z-10">Assinar</span>
          </button>
        </form>
      </div>

      <div class="grid md:grid-cols-3 gap-8 mb-8">
        <!-- Brand -->
        <div class="space-y-4 text-center md:text-left">
          <p class="text-gray-400 text-sm leading-relaxed"> 
            <BR></BR>
            <BR></BR>
            <BR></BR>
            <BR></BR>
            <BR></BR>
            <BR></BR>
            <BR></BR>
            <BR></BR>   
            Transformando negócios através de automação e soluções em nuvem.
          </p>
        </div>

        <!-- Quick Links -->
        <div class="text-center md:text-left">
          <h4 class="text-black font-bold mb-4 text-sm tracking-widest">LINKS RÁPIDOS</h4>
          <ul class="space-y-2">
            <li><a href="#home" class="footer-link bubble-text-button inline-block px-2 py-1 rounded">Início</a></li>
            <li><a href="#projects" class="footer-link bubble-text-button inline-block px-2 py-1 rounded">Projetos</a></li>
            <li><a href="#services" class="footer-link bubble-text-button inline-block px-2 py-1 rounded">Serviços</a></li>
            <li><a href="#contact" class="footer-link bubble-text-button inline-block px-2 py-1 rounded">Contato</a></li>
          </ul>
        </div>

        <!-- Contact -->
        <div class="text-center md:text-left">
          <h4 class="text-black font-bold mb-4 text-sm tracking-widest">CONTATO</h4>
          <ul class="space-y-2 text-sm text-black-400">
            <li>contact@backspace.com</li>
            <li>São Paulo, SP - Brasil</li>
            <li class="pt-4 flex gap-4 justify-center md:justify-start">
            </li>
          </ul>
        </div>
      </div>

      <!-- Bottom Bar -->
      <div class="pt-8 border-t border-white/10 text-center">
        <p class="text-gray-500 text-xs tracking-wider">© 2025 BACKSPACE. TODOS OS DIREITOS RESERVADOS.</p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
  data() {
    return {
      newsletterEmail: '',
      currentLogo: '/logo.png'
    }
  },
  mounted() {
    this.checkTheme()
    
    // Observer para mudanças de tema
    this.themeObserver = new MutationObserver(() => {
      this.checkTheme()
    })
    
    this.themeObserver.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['data-theme']
    })
  },
  beforeUnmount() {
    if (this.themeObserver) {
      this.themeObserver.disconnect()
    }
  },
  methods: {
    handleNewsletterSubmit() {
      alert(`✅ Inscrito: ${this.newsletterEmail}`)
      this.newsletterEmail = ''
    },
    checkTheme() {
      const theme = document.documentElement.getAttribute('data-theme')
      this.currentLogo = theme === 'light' ? '/logolight.png' : '/logo.png'
    }
  }
}
</script>

<style scoped>
.footer-link {
  @apply text-sm text-gray-400 hover:text-purple-400 transition-colors;
}
</style>
