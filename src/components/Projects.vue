<template>
  <section id="projects" class="relative py-20 md:py-32 bg-black overflow-hidden ml-20 md:ml-24">
    <div class="absolute inset-0">
      <div class="stars"></div>
    </div>

    <div class="container mx-auto px-6 md:px-12 relative z-10">
      <!-- Section Label - CENTRALIZADO -->
      <div class="flex items-center justify-center space-x-4 mb-8 fade-in-up">
        <div class="w-12 h-px bg-purple-500"></div>
        <p class="text-xs md:text-sm text-purple-400 tracking-[0.3em] uppercase">Portfólio</p>
        <div class="w-12 h-px bg-purple-500"></div>
      </div>

      <!-- Title - CENTRALIZADO -->
      <h2 class="text-4xl md:text-6xl lg:text-7xl font-black text-white leading-tight mb-16 text-center fade-in-up">
        Projetos em Destaque
      </h2>

      <!-- Projects Grid CENTRALIZADO -->
      <div class="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        <!-- Project Card 1 -->
        <div class="project-card group fade-in-up">
          <div class="project-image">
            <div class="image-placeholder">
              <svg class="w-16 h-16 text-purple-500/20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"/>
              </svg>
            </div>
          </div>
          <div class="project-content">
            <div class="flex items-center space-x-2 mb-3">
              <span class="text-xs text-purple-400 tracking-widest">AUTOMAÇÃO</span>
              <span class="text-gray-600">•</span>
              <span class="text-xs text-gray-500">2024</span>
            </div>
            <h3 class="text-2xl font-bold text-white mb-3">Automação de Sistema Jurídico</h3>
            <p class="text-gray-400 text-sm leading-relaxed mb-4">
              Processamento automatizado de documentos e preenchimento de formulários para sistemas jurídicos brasileiros, reduzindo o tempo de processamento em 80%.
            </p>
          </div>
        </div>

        <!-- Project Card 2 -->
        <div class="project-card group fade-in-up" style="animation-delay: 0.1s">
          <div class="project-image">
            <div class="image-placeholder">
              <svg class="w-16 h-16 text-blue-500/20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"/>
              </svg>
            </div>
          </div>
          <div class="project-content">
            <div class="flex items-center space-x-2 mb-3">
              <span class="text-xs text-blue-400 tracking-widest">NUVEM</span>
              <span class="text-gray-600">•</span>
              <span class="text-xs text-gray-500">2024</span>
            </div>
            <h3 class="text-2xl font-bold text-white mb-3">Configuração de Infraestrutura em Nuvem</h3>
            <p class="text-gray-400 text-sm leading-relaxed mb-4">
              Implementação de arquitetura em nuvem escalável com alta disponibilidade e backups automatizados para cliente corporativo.
            </p>
          </div>
        </div>

        <!-- Project Card 3 -->
        <div class="project-card group fade-in-up" style="animation-delay: 0.2s">
          <div class="project-image">
            <div class="image-placeholder">
              <svg class="w-16 h-16 text-pink-500/20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
              </svg>
            </div>
          </div>
          <div class="project-content">
            <div class="flex items-center space-x-2 mb-3">
              <span class="text-xs text-pink-400 tracking-widest">DASHBOARD</span>
              <span class="text-gray-600">•</span>
              <span class="text-xs text-gray-500">2024</span>
            </div>
            <h3 class="text-2xl font-bold text-white mb-3">Gestão de Ativos de TI</h3>
            <p class="text-gray-400 text-sm leading-relaxed mb-4">
              Dashboard abrangente para rastreamento de notebooks, impressoras e equipamentos de TI com gerenciamento de inventário em tempo real.
            </p>
          </div>
        </div>

        <!-- Project Card 4 -->
        <div class="project-card group fade-in-up" style="animation-delay: 0.3s">
          <div class="project-image">
            <div class="image-placeholder">
              <svg class="w-16 h-16 text-cyan-500/20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M13 10V3L4 14h7v7l9-11h-7z"/>
              </svg>
            </div>
          </div>
          <div class="project-content">
            <div class="flex items-center space-x-2 mb-3">
              <span class="text-xs text-cyan-400 tracking-widest">WEB SCRAPING</span>
              <span class="text-gray-600">•</span>
              <span class="text-xs text-gray-500">2024</span>
            </div>
            <h3 class="text-2xl font-bold text-white mb-3">Plataforma de Extração de Dados</h3>
            <p class="text-gray-400 text-sm leading-relaxed mb-4">
              Solução avançada de web scraping usando Playwright para coleta e processamento automatizado de dados em escala.
            </p>
          </div>
        </div>
      </div>
    </div>
    <!-- Page Number -->
    <div class="absolute bottom-12 right-12 text-6xl md:text-8xl font-black text-white/5 tracking-tighter pointer-events-none">02</div>
  </section>
</template>

<script>
export default {
  name: 'Projects'
}
</script>

<style scoped>
.stars {
  width: 1px;
  height: 1px;
  background: transparent;
  box-shadow: 100px 200px #fff, 300px 400px #fff, 500px 100px #fff, 700px 300px #fff;
  animation: animStar 100s linear infinite;
}

@keyframes animStar {
  from { transform: translateY(0px); }
  to { transform: translateY(-2000px); }
}

.project-card {
  @apply relative bg-gradient-to-br from-white/5 to-transparent border border-white/10 rounded-2xl overflow-hidden backdrop-blur-sm transition-all duration-500 hover:border-purple-500/30 hover:transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-purple-500/10;
}

.project-image {
  @apply relative h-64 bg-gradient-to-br from-purple-900/20 to-blue-900/20 overflow-hidden;
}

.image-placeholder {
  @apply w-full h-full flex items-center justify-center;
}

.project-content {
  @apply p-6;
}
</style>
