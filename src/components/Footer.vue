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
              <a href="#" class="social-link w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:border-purple-500 hover:bg-purple-500/20 transition-all duration-300 hover:scale-110">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
              <a href="#" class="social-link w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:border-purple-500 hover:bg-purple-500/20 transition-all duration-300 hover:scale-110">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"/></svg>
              </a>
              <a href="#" class="social-link w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:border-purple-500 hover:bg-purple-500/20 transition-all duration-300 hover:scale-110">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 16h-2v-6h2v6zm-1-6.891c-.607 0-1.1-.496-1.1-1.109 0-.612.492-1.109 1.1-1.109s1.1.497 1.1 1.109c0 .613-.493 1.109-1.1 1.109zm8 6.891h-1.998v-2.861c0-1.881-2.002-1.722-2.002 0v2.861h-2v-6h2v1.093c.872-1.616 4-1.736 4 1.548v3.359z"/></svg>
              </a>
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
