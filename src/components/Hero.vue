<template>
  <section id="home" class="relative min-h-screen flex items-center justify-center overflow-hidden bg-black ml-20 md:ml-24">
    <!-- Space Background -->
    <div class="absolute inset-0">
      <div class="stars"></div>
      <div class="stars2"></div>
      <div class="stars3"></div>
      <div class="absolute inset-0 bg-gradient-to-br from-purple-900/10 via-transparent to-blue-900/10"></div>
    </div>

    <!-- Content -->
    <div class="container mx-auto px-6 md:px-12 relative z-10">
      <div class="max-w-5xl fade-in-up">
        <div class="space-y-6 md:space-y-8">
          <!-- Subtitle -->
          <div class="flex items-center space-x-4">
            <div class="w-12 h-px bg-purple-500"></div>
            <p class="text-xs md:text-sm text-gray-400 tracking-[0.3em] uppercase">Backspace</p>
          </div>

          <!-- Title -->
          <h1 class="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-tight">
            <span class="text-white">A BASE INTELIGENTE</span><br/>
            <span class="text-white">QUE O </span><span class="gradient-text">CRESCIMENTO</span><span class="text-white"> DO</span><br/>
            <span class="text-white">SEU NEGÓCIO PRECISA</span>
          </h1>

          <!-- Description -->
          <p class="text-gray-400 text-base md:text-lg leading-relaxed max-w-3xl">
            Crescer exige mais que tecnologia: exige estrutura. A <span class="text-white font-semibold">Backspace</span> projeta, de graça, a arquitetura em nuvem perfeita para o seu negócio automatizada, escalável e pronta para o futuro
          </p>

          <!-- CTA Buttons -->
          <div class="pt-4 flex flex-col sm:flex-row gap-4">
            <!-- Button 1: Entrar em contato -->
            <button @click="handleContactClick" class="bubble-button inline-flex items-center justify-center space-x-2 group relative overflow-hidden px-6 py-3 bg-transparent border border-white/30 rounded-full transition-all duration-300 hover:border-white hover:bg-white/5">
              <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
              </svg>
              <span class="relative z-10 text-sm tracking-wide text-white font-medium">Entrar em contato</span>
            </button>

            <!-- Button 2: Receba uma infraestrutura -->
            <button @click="handleInfrastructureClick" class="bubble-button-gradient inline-flex items-center justify-center space-x-2 group relative overflow-hidden px-6 py-3 bg-gradient-to-r from-purple-600 via-purple-500 to-blue-500 rounded-full transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/50 hover:scale-105">
              <span class="relative z-10 text-sm tracking-wide text-white font-semibold">Receba uma infraestrutura personalizada <span class="font-black">GRATUITAMENTE</span></span>
              <svg class="w-5 h-5 text-white relative z-10 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
              </svg>
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
  methods: {
    handleContactClick() {
      document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' })
    },
    handleInfrastructureClick() {
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

@keyframes scroll {
  0%, 100% { transform: translateY(0); opacity: 0; }
  50% { opacity: 1; }
}

.animate-scroll {
  animation: scroll 2s ease-in-out infinite;
}
</style>