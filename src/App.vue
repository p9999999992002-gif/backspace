<template>
  <div id="app" class="bg-black">
    <ScrollProgress />
    <CustomCursor />
    <ThemeToggle @theme-changed="handleThemeChange" />
    <Header />
    <Hero />
    <About />
    <Projects />
    <Services />
    <Contact />
    <Footer />
  </div>
</template>

<script>
import ScrollProgress from './components/ScrollProgress.vue'
import CustomCursor from './components/CustomCursor.vue'
import ThemeToggle from './components/ThemeToggle.vue'
import Header from './components/Header.vue'
import Hero from './components/Hero.vue'
import About from './components/About.vue'
import Projects from './components/Projects.vue'
import Services from './components/Services.vue'
import Contact from './components/Contact.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    ScrollProgress,
    CustomCursor,
    ThemeToggle,
    Header,
    Hero,
    About,
    Projects,
    Services,
    Contact,
    Footer
  },
  mounted() {
    // Carrega tema salvo ao iniciar
    const savedTheme = localStorage.getItem('theme')
    if (savedTheme === 'light') {
      document.documentElement.setAttribute('data-theme', 'light')
      document.body.classList.add('light-theme')
    }
  },
  methods: {
    handleThemeChange(theme) {
      console.log('Theme changed to:', theme)
      
      // Você pode adicionar analytics ou outras lógicas aqui
      if (window.gtag) {
        window.gtag('event', 'theme_change', {
          'event_category': 'engagement',
          'event_label': theme
        })
      }
    }
  }
}
</script>

<style>
@import './assets/styles.css';

/* Hide default cursor on desktop */
@media (min-width: 768px) {
  * {
    cursor: none !important;
  }
}
</style>
