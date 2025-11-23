<template>
  <div>
    <!-- Sidebar Navigation - APENAS DESKTOP -->
    <nav class="sidebar-desktop hidden md:flex fixed left-0 top-0 h-screen w-20 md:w-24 bg-zinc-900/95 backdrop-blur-xl border-r border-white/10 z-50 flex-col items-center py-8">
      <!-- Logo - Muda com o tema -->
      <a href="#home" class="mb-12" @click.prevent="scrollToSection('home')">
        <img 
          :src="currentLogo" 
          alt="Backspace" 
          class="w-10 h-10 md:w-12 md:h-12 hover:scale-110 transition-transform duration-300" 
        />
      </a>

      <!-- Navigation Links -->
      <div class="flex-1 flex flex-col justify-center space-y-8">
        <a 
          href="#home" 
          @click.prevent="scrollToSection('home')"
          class="nav-dot group" 
          :class="{ active: activeSection === 'home' }"
          title="Home"
        >
          <span class="dot"></span>
          <span class="nav-label">HOME</span>
        </a>
        <a 
          href="#projects" 
          @click.prevent="scrollToSection('projects')"
          class="nav-dot group" 
          :class="{ active: activeSection === 'projects' }"
          title="Projects"
        >
          <span class="dot"></span>
          <span class="nav-label">PROJECTS</span>
        </a>
        <a 
          href="#services" 
          @click.prevent="scrollToSection('services')"
          class="nav-dot group" 
          :class="{ active: activeSection === 'services' }"
          title="Services"
        >
          <span class="dot"></span>
          <span class="nav-label">SERVICES</span>
        </a>
        <a 
          href="#contact" 
          @click.prevent="scrollToSection('contact')"
          class="nav-dot group" 
          :class="{ active: activeSection === 'contact' }"
          title="Contact"
        >
          <span class="dot"></span>
          <span class="nav-label">CONTACT</span>
        </a>
      </div>
    </nav>

    <!-- Top Bar Mobile - LOGO ESQUERDA + MENU CENTRO -->
    <div class="md:hidden fixed top-0 left-0 right-0 w-full bg-black/40 backdrop-blur-xl border-b border-white/5 z-50 px-6 py-4 flex items-center justify-center relative">
      <!-- Logo absolutamente à esquerda -->
      <a href="#home" @click.prevent="scrollToSection('home')" class="absolute left-6">
        <img 
          :src="currentLogo" 
          alt="Backspace" 
          class="w-9 h-9 hover:scale-110 transition-transform duration-300" 
        />
      </a>

      <!-- Botão Menu no centro -->
      <button @click="toggleMobileMenu" class="flex items-center space-x-2 text-white hover:text-purple-400 transition-colors">
        <span class="text-xs tracking-widest font-semibold">MENU</span>
        <svg class="w-6 h-6 transition-transform duration-300" :class="{ 'rotate-90': mobileMenuOpen }" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path v-if="!mobileMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
          <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
        </svg>
      </button>
    </div>

    <!-- Mobile Menu Overlay -->
    <transition name="menu-fade">
      <div v-if="mobileMenuOpen" class="md:hidden fixed inset-0 bg-black/95 backdrop-blur-xl z-[60] flex flex-col items-center justify-center space-y-8">
        <!-- Botão Fechar -->
        <button @click="closeMobileMenu" class="absolute top-6 right-6 text-white hover:text-purple-400 transition-colors">
          <svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
          </svg>
        </button>
        
        <!-- Links do Menu Mobile -->
        <a href="#home" @click="handleMobileNavClick" class="bubble-text-button mobile-nav-link px-8 py-3 rounded-lg">HOME</a>
        <a href="#projects" @click="handleMobileNavClick" class="bubble-text-button mobile-nav-link px-8 py-3 rounded-lg">PROJECTS</a>
        <a href="#services" @click="handleMobileNavClick" class="bubble-text-button mobile-nav-link px-8 py-3 rounded-lg">SERVICES</a>
        <a href="#contact" @click="handleMobileNavClick" class="bubble-text-button mobile-nav-link px-8 py-3 rounded-lg">CONTACT</a>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'Header',
  data() {
    return {
      mobileMenuOpen: false,
      activeSection: 'home',
      currentLogo: `${import.meta.env.BASE_URL}logo.png`
    }
  },
  mounted() {
    this.observeSections()
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
    toggleMobileMenu() {
      this.mobileMenuOpen = !this.mobileMenuOpen
      // Previne scroll quando menu aberto
      if (this.mobileMenuOpen) {
        document.body.style.overflow = 'hidden'
      } else {
        document.body.style.overflow = ''
      }
    },
    closeMobileMenu() {
      this.mobileMenuOpen = false
      document.body.style.overflow = ''
    },
    handleMobileNavClick(e) {
      e.preventDefault()
      const sectionId = e.currentTarget.getAttribute('href').substring(1)
      this.scrollToSection(sectionId)
      this.closeMobileMenu()
    },
    scrollToSection(sectionId) {
      const element = document.getElementById(sectionId)
      if (element) {
        const yOffset = window.innerWidth < 768 ? -70 : 0
        const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset
        
        window.scrollTo({
          top: y,
          behavior: 'smooth'
        })
      }
    },
    observeSections() {
      const sections = document.querySelectorAll('section[id]')
      
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            this.activeSection = entry.target.id
          }
        })
      }, {
        threshold: 0.3
      })
      
      sections.forEach(section => {
        observer.observe(section)
      })
    },
    checkTheme() {
      const theme = document.documentElement.getAttribute('data-theme')
      this.currentLogo = theme === 'light'
        ? `${import.meta.env.BASE_URL}logolight2.png`
        : `${import.meta.env.BASE_URL}logo.png`
    }
  }
}
</script>

<style scoped>
/* Desktop Navigation Dots */
.nav-dot {
  @apply relative flex items-center justify-center w-12 h-12 transition-all duration-300;
}

.dot {
  @apply w-2 h-2 rounded-full bg-gray-600 transition-all duration-300;
}

.nav-dot:hover .dot {
  @apply bg-purple-500 scale-150;
}

.nav-dot.active .dot {
  @apply bg-purple-500 scale-150;
  box-shadow: 0 0 15px rgba(168, 85, 247, 0.8);
}

.nav-label {
  @apply absolute left-full ml-6 text-xs tracking-widest text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none;
}

/* Mobile Menu Links */
.mobile-nav-link {
  @apply text-2xl font-bold text-white hover:text-purple-400 transition-all duration-300 tracking-widest;
}

/* Menu Fade Animation */
.menu-fade-enter-active,
.menu-fade-leave-active {
  transition: opacity 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.menu-fade-enter-from,
.menu-fade-leave-to {
  opacity: 0;
}

/* Sidebar com tom mais claro */
.sidebar-desktop {
  background: rgba(24, 24, 27, 0.95) !important;
  box-shadow: 2px 0 20px rgba(0, 0, 0, 0.3);
}

/* FORÇA REMOÇÃO NO MOBILE */
@media (max-width: 768px) {
  .sidebar-desktop {
    display: none !important;
  }
}
</style>
