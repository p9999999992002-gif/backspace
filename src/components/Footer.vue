<template>
  <footer class="relative bg-black border-t border-white/10 py-12 md:py-16 md:ml-24">
    <div class="container mx-auto px-6 md:px-12">
      <div class="grid md:grid-cols-3 gap-8 mb-8">
        <!-- Brand -->
        <div class="space-y-4 text-center md:text-left">
          <p class="text-gray-400 text-sm leading-relaxed"> 
            Transformando negócios através de automação e soluções em nuvem.
          </p>
        </div>

        <!-- Quick Links -->
        <div class="text-center md:text-left">
          <h4 class="text-white font-bold mb-4 text-sm tracking-widest">LINKS RÁPIDOS</h4>
          <ul class="space-y-2">
            <li><a href="#home" class="footer-link bubble-text-button inline-block px-2 py-1 rounded">Início</a></li>
            <li><a href="#projects" class="footer-link bubble-text-button inline-block px-2 py-1 rounded">Projetos</a></li>
            <li><a href="#services" class="footer-link bubble-text-button inline-block px-2 py-1 rounded">Serviços</a></li>
            <li><a href="#contact" class="footer-link bubble-text-button inline-block px-2 py-1 rounded">Contato</a></li>
          </ul>
        </div>

        <!-- Contact -->
        <div class="text-center md:text-left">
          <h4 class="text-white font-bold mb-4 text-sm tracking-widest">CONTATO</h4>
          <ul class="space-y-2 text-sm text-gray-400">
            <li>contato@backspace.dev.com</li>
            <li>São Paulo, SP - Brasil</li>
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

/* Remove margin-left no mobile */
@media (max-width: 768px) {
  footer {
    margin-left: 0 !important;
  }
}
</style>
