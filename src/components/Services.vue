<template>
  <section id="services" class="relative py-16 md:py-32 bg-black overflow-hidden ml-20 md:ml-24">
    <div class="absolute inset-0 opacity-10">
      <div class="grid-pattern"></div>
    </div>

    <div class="container mx-auto px-4 md:px-6 relative z-10">
      <!-- Section Header -->
      <div class="text-center mb-12 md:mb-20 fade-in-up">
        <div class="flex items-center space-x-4 mb-8 justify-center">
          <div class="w-12 h-px bg-purple-500"></div>
          <p class="text-xs md:text-sm text-purple-400 tracking-[0.3em] uppercase">Nossos Serviços</p>
          <div class="w-12 h-px bg-purple-500"></div>
        </div>
        <h2 class="text-4xl md:text-6xl lg:text-7xl font-black text-white leading-tight max-w-3xl mx-auto px-4">
          Soluções abrangentes para o crescimento do seu negócio
        </h2>
      </div>

      <!-- Services Grid -->
      <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
        <!-- Service Card 1 -->
        <div class="service-card group fade-in-up">
          <div class="service-icon">
            <svg class="w-10 h-10 md:w-12 md:h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"/>
            </svg>
          </div>
          <h4 class="text-xl md:text-2xl font-bold text-white mb-3 md:mb-4">Soluções de Automação</h4>
          <p class="text-sm md:text-base text-gray-400 leading-relaxed mb-4 md:mb-6">
            Simplifique seus processos de negócios com automação inteligente que economiza tempo e reduz custos operacionais.
          </p>
          <button class="bubble-text-button inline-flex items-center text-sm md:text-base text-purple-400 hover:text-white transition-colors px-4 py-2 rounded-lg">
            Saiba Mais
            <svg class="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
            </svg>
          </button>
        </div>

        <!-- Service Card 2 -->
        <div class="service-card group fade-in-up" style="animation-delay: 0.1s">
          <div class="service-icon">
            <svg class="w-10 h-10 md:w-12 md:h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"/>
            </svg>
          </div>
          <h4 class="text-xl md:text-2xl font-bold text-white mb-3 md:mb-4">Infraestrutura em Nuvem</h4>
          <p class="text-sm md:text-base text-gray-400 leading-relaxed mb-4 md:mb-6">
            Construa soluções em nuvem escaláveis e seguras que crescem com as necessidades do seu negócio e garantem alta disponibilidade.
          </p>
          <button class="bubble-text-button inline-flex items-center text-sm md:text-base text-purple-400 hover:text-white transition-colors px-4 py-2 rounded-lg">
            Saiba Mais
            <svg class="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
            </svg>
          </button>
        </div>

        <!-- Service Card 3 -->
        <div class="service-card group sm:col-span-2 lg:col-span-1 fade-in-up" style="animation-delay: 0.2s">
          <div class="service-icon">
            <svg class="w-10 h-10 md:w-12 md:h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13 10V3L4 14h7v7l9-11h-7z"/>
            </svg>
          </div>
          <h4 class="text-xl md:text-2xl font-bold text-white mb-3 md:mb-4">Transformação Digital</h4>
          <p class="text-sm md:text-base text-gray-400 leading-relaxed mb-4 md:mb-6">
            Transforme seu negócio com soluções digitais de ponta, análise de dados e estratégias inovadoras.
          </p>
          <button class="bubble-text-button inline-flex items-center text-sm md:text-base text-purple-400 hover:text-white transition-colors px-4 py-2 rounded-lg">
            Saiba Mais
            <svg class="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
            </svg>
          </button>
        </div>
      </div>

      <!-- CTA Section -->
      <div class="mt-12 md:mt-20 text-center fade-in-up">
        <button class="bubble-button-gradient px-8 md:px-12 py-4 md:py-5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full text-white text-base md:text-lg font-bold hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 hover:scale-105 relative overflow-hidden">
          <span class="relative z-10">Ver Todos os Serviços</span>
        </button>
      </div>
    </div>

    <!-- Page Number -->
    <div class="absolute bottom-6 md:bottom-10 right-6 md:right-10 text-6xl md:text-8xl font-black text-white/5 tracking-tighter pointer-events-none">04</div>
  </section>
</template>

<script>
export default {
  name: 'Services'
}
</script>

<style scoped>
.grid-pattern {
  background-image: 
    linear-gradient(rgba(168, 85, 247, 0.1) 1px, transparent 1px),
    linear-gradient(90deg, rgba(168, 85, 247, 0.1) 1px, transparent 1px);
  background-size: 30px 30px;
  width: 100%;
  height: 100%;
}

@media (min-width: 768px) {
  .grid-pattern {
    background-size: 50px 50px;
  }
}

.service-card {
  @apply relative p-6 md:p-8 bg-gradient-to-br from-white/5 to-transparent border border-white/10 rounded-2xl md:rounded-3xl backdrop-blur-sm transition-all duration-500 hover:border-purple-500/50 hover:bg-white/10 hover:transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-purple-500/10;
}

.service-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, rgba(168, 85, 247, 0.1), rgba(236, 72, 153, 0.1));
  border-radius: 1rem;
  opacity: 0;
  transition: opacity 0.5s ease;
  z-index: -1;
}

@media (min-width: 768px) {
  .service-card::before {
    border-radius: 1.5rem;
  }
}

.service-card:hover::before {
  opacity: 1;
}

.service-icon {
  @apply w-16 h-16 md:w-20 md:h-20 rounded-xl md:rounded-2xl bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center text-white mb-4 md:mb-6 group-hover:scale-110 transition-transform duration-300;
  box-shadow: 0 10px 30px rgba(168, 85, 247, 0.3);
}
</style>
