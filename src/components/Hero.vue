<template>
  <section id="home" class="relative min-h-screen flex items-center justify-center overflow-hidden bg-black ml-20 md:ml-24">
    <!-- Space Background -->
    <div class="absolute inset-0">
      <div class="stars"></div>
      <div class="stars2"></div>
      <div class="stars3"></div>
      <div class="absolute inset-0 bg-gradient-to-br from-purple-900/10 via-transparent to-blue-900/10"></div>
    </div>

    <!-- Planet - SEMPRE VISÍVEL -->
    <div class="absolute bottom-0 right-0 w-[600px] h-[600px] md:w-[800px] md:h-[800px] opacity-30 md:opacity-40 planet-container">
      <div class="planet"></div>
    </div>

    <!-- Content -->
    <div class="container mx-auto px-6 md:px-12 relative z-10">
      <div class="max-w-4xl fade-in-up">
        <div class="space-y-6 md:space-y-8">
          <!-- Subtitle -->
          <div class="flex items-center space-x-4">
            <div class="w-12 h-px bg-purple-500"></div>
            <p class="text-xs md:text-sm text-gray-400 tracking-[0.3em] uppercase">Backspace</p>
          </div>

          <!-- Title with Typing Animation -->
          <h1 class="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-tight">
            <span class="text-white typing-text">{{ typedText }}</span>
            <span class="cursor-blink">|</span>
            <br/>
            <span class="text-white">& </span><span class="gradient-text">CLOUD</span>
          </h1>

          <!-- Description -->
          <p class="text-gray-400 text-base md:text-lg leading-relaxed max-w-2xl">
            Transformando empresas por meio de automação inteligente e infraestrutura de nuvem escalável. Navegue pelo futuro com precisão e inovação.
          </p>

          <!-- CTA with Bubble Effect -->
          <div class="pt-4">
            <button @click="handleCTAClick" class="bubble-button inline-flex items-center space-x-3 group relative overflow-hidden px-6 py-3 border border-purple-500/50 rounded-full transition-all duration-300 hover:border-purple-400">
              <span class="relative z-10 text-sm tracking-widest text-white font-medium">START PROJECT</span>
              <div class="relative z-10 w-10 h-10 rounded-full border border-purple-500/50 flex items-center justify-center group-hover:border-white transition-all duration-300">
                <svg class="w-4 h-4 text-purple-500 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
                </svg>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Page Number -->
    <div class="absolute bottom-12 right-12 text-6xl md:text-8xl font-black text-white/5 tracking-tighter pointer-events-none">01</div>

    <!-- Scroll Indicator -->
    <div class="absolute bottom-12 left-1/2 transform -translate-x-1/2 hidden md:flex flex-col items-center space-y-3">
      <div class="w-px h-16 bg-gradient-to-b from-transparent via-purple-500/50 to-transparent animate-scroll"></div>
      <p class="text-xs text-gray-500 tracking-widest rotate-90 origin-center">SCROLL</p>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Hero',
  data() {
    return {
      fullText: 'AUTOMATION',
      typedText: '',
      typingSpeed: 150
    }
  },
  mounted() {
    this.typeText()
  },
  methods: {
    typeText() {
      let i = 0
      const type = () => {
        if (i < this.fullText.length) {
          this.typedText += this.fullText.charAt(i)
          i++
          setTimeout(type, this.typingSpeed)
        }
      }
      setTimeout(type, 500)
    },
    handleCTAClick() {
      document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' })
    }
  }
}
</script>

<style scoped>
.gradient-text {
  background: linear-gradient(135deg, #a855f7 0%, #3b82f6 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.typing-text {
  display: inline-block;
}

.cursor-blink {
  animation: blink 1s infinite;
  font-weight: 100;
}

@keyframes blink {
  0%, 50% { opacity: 1; }
  51%, 100% { opacity: 0; }
}

/* Stars */
.stars, .stars2, .stars3 {
  width: 1px;
  height: 1px;
  background: transparent;
  animation: animStar 100s linear infinite;
}

.stars {
  box-shadow: 100px 200px #fff, 300px 400px #fff, 500px 100px #fff,
    700px 300px #fff, 200px 500px #fff, 400px 600px #fff,
    900px 150px #fff, 150px 350px #fff;
}

.stars2 {
  box-shadow: 200px 100px #fff, 400px 300px #fff, 600px 200px #fff,
    800px 400px #fff;
  animation-duration: 150s;
}

.stars3 {
  width: 2px;
  height: 2px;
  box-shadow: 150px 300px rgba(168, 85, 247, 0.8), 
    350px 500px rgba(59, 130, 246, 0.8),
    550px 150px rgba(168, 85, 247, 0.6);
  animation-duration: 200s;
}

@keyframes animStar {
  from { transform: translateY(0px); }
  to { transform: translateY(-2000px); }
}

/* Planet Container */
.planet-container {
  pointer-events: none;
  z-index: 1;
}

/* Planet - SEMPRE VISÍVEL */
.planet {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background: radial-gradient(circle at 30% 30%, 
    rgba(168, 85, 247, 0.3) 0%,
    rgba(59, 130, 246, 0.2) 40%,
    rgba(30, 30, 60, 0.4) 100%);
  box-shadow: 
    inset -40px -40px 80px rgba(0, 0, 0, 0.5), 
    0 0 100px rgba(168, 85, 247, 0.2);
  animation: planetRotate 100s linear infinite;
  display: block !important;
  opacity: 1 !important;
  visibility: visible !important;
}

@keyframes planetRotate {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

@keyframes scroll {
  0%, 100% { transform: translateY(0); opacity: 0; }
  50% { opacity: 1; }
}

.animate-scroll {
  animation: scroll 2s ease-in-out infinite;
}
</style>
