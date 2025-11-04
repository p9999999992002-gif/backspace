<template>
  <section id="about" class="relative py-20 md:py-32 bg-black overflow-hidden ml-20 md:ml-24">
    <!-- Grid Background animado -->
    <div class="absolute inset-0 opacity-5">
      <div class="grid-lines"></div>
    </div>

    <!-- Floating Particles maiores -->
    <div class="absolute inset-0">
      <div class="particle particle-1"></div>
      <div class="particle particle-2"></div>
      <div class="particle particle-3"></div>
      <div class="particle particle-4"></div>
      <div class="particle particle-5"></div>
    </div>

    <!-- Círculo decorativo -->
    <div class="absolute top-20 right-20 w-64 h-64 bg-purple-600/10 rounded-full blur-3xl"></div>

    <div class="container mx-auto px-6 md:px-12 relative z-10">
      <div class="max-w-5xl mx-auto">
        <!-- Section Label - CENTRALIZADO -->
        <div class="flex items-center justify-center space-x-4 mb-8 fade-in-up">
          <div class="w-12 h-px bg-purple-500"></div>
          <p class="text-xs md:text-sm text-purple-400 tracking-[0.3em] uppercase">Sobre Nós</p>
          <div class="w-12 h-px bg-purple-500"></div>
        </div>

        <!-- Title - CENTRALIZADO -->
        <h2 class="text-4xl md:text-6xl lg:text-7xl font-black text-white leading-tight mb-8 text-center fade-in-up">
          Capacitando empresas a alcançar seu pleno potencial
        </h2>

        <!-- Description -->
        <div class="space-y-6 text-gray-400 text-base md:text-lg leading-relaxed text-center max-w-3xl mx-auto fade-in-up">
          <p>
            A Backspace é uma empresa de consultoria líder composta por profissionais experientes dedicados a transformar como as empresas operam na era digital.
          </p>
          <p>
            Com expertise em automação, infraestrutura em nuvem e transformação digital, trazemos soluções inovadoras que geram resultados mensuráveis.
          </p>
        </div>

        <!-- Stats - COM CARDS BONITOS -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 pt-16 fade-in-up">
          <div class="stat-card group">
            <div class="stat-number">50+</div>
            <div class="stat-label">PROJETOS</div>
            <div class="stat-icon">
              <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
              </svg>
            </div>
          </div>

          <div class="stat-card group" style="animation-delay: 0.1s">
            <div class="stat-number">30+</div>
            <div class="stat-label">CLIENTES</div>
            <div class="stat-icon">
              <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"/>
              </svg>
            </div>
          </div>

          <div class="stat-card group" style="animation-delay: 0.2s">
            <div class="stat-number">3</div>
            <div class="stat-label">ESPECIALISTAS</div>
            <div class="stat-icon">
              <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"/>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Page Number -->
    <div class="absolute bottom-12 right-12 text-6xl md:text-8xl font-black text-white/5 tracking-tighter pointer-events-none">03</div>
  </section>
</template>

<script>
export default {
  name: 'About'
}
</script>

<style scoped>
.grid-lines {
  background-image: 
    linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px);
  background-size: 100px 100px;
  width: 100%;
  height: 100%;
  animation: gridMove 20s linear infinite;
}

@keyframes gridMove {
  0% {
    background-position: 0 0;
  }
  100% {
    background-position: 100px 100px;
  }
}

.particle {
  position: absolute;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: rgba(168, 85, 247, 0.6);
  animation: float 20s ease-in-out infinite;
  box-shadow: 0 0 20px rgba(168, 85, 247, 0.8);
}

.particle-1 {
  top: 10%;
  left: 15%;
  animation-delay: 0s;
}

.particle-2 {
  top: 60%;
  right: 20%;
  animation-delay: 3s;
}

.particle-3 {
  bottom: 30%;
  left: 70%;
  animation-delay: 6s;
}

.particle-4 {
  top: 40%;
  left: 40%;
  animation-delay: 9s;
  background: rgba(236, 72, 153, 0.6);
}

.particle-5 {
  bottom: 20%;
  right: 40%;
  animation-delay: 12s;
  background: rgba(59, 130, 246, 0.6);
}

@keyframes float {
  0%, 100% {
    transform: translate(0, 0) scale(1);
    opacity: 0.4;
  }
  50% {
    transform: translate(50px, -50px) scale(1.2);
    opacity: 0.8;
  }
}

/* Stats Cards - MUITO MAIS BONITOS */
.stat-card {
  position: relative;
  padding: 2.5rem 2rem;
  background: linear-gradient(135deg, rgba(168, 85, 247, 0.1), rgba(236, 72, 153, 0.05));
  border: 1px solid rgba(168, 85, 247, 0.2);
  border-radius: 1.5rem;
  text-align: center;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  overflow: hidden;
}

.stat-card::before {
  content: '';
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: linear-gradient(
    135deg,
    transparent,
    rgba(168, 85, 247, 0.1),
    transparent
  );
  transform: rotate(45deg);
  transition: all 0.6s ease;
}

.stat-card:hover::before {
  left: 100%;
}

.stat-card:hover {
  transform: translateY(-10px);
  border-color: rgba(168, 85, 247, 0.5);
  box-shadow: 0 20px 60px rgba(168, 85, 247, 0.3);
  background: linear-gradient(135deg, rgba(168, 85, 247, 0.15), rgba(236, 72, 153, 0.1));
}

.stat-number {
  font-size: 3.5rem;
  font-weight: 900;
  background: linear-gradient(135deg, #a855f7, #ec4899);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 0.5rem;
  position: relative;
  z-index: 1;
}

.stat-label {
  font-size: 0.75rem;
  letter-spacing: 0.2em;
  color: #9ca3af;
  font-weight: 600;
  position: relative;
  z-index: 1;
}

.stat-icon {
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  color: rgba(168, 85, 247, 0.2);
  transition: all 0.4s ease;
}

.stat-card:hover .stat-icon {
  color: rgba(168, 85, 247, 0.6);
  transform: scale(1.2) rotate(10deg);
}

/* Light theme stats */
[data-theme="light"] .stat-card {
  background: linear-gradient(135deg, rgba(124, 58, 237, 0.08), rgba(219, 39, 119, 0.05));
  border-color: rgba(124, 58, 237, 0.15);
}

[data-theme="light"] .stat-card:hover {
  background: linear-gradient(135deg, rgba(124, 58, 237, 0.12), rgba(219, 39, 119, 0.08));
  border-color: rgba(124, 58, 237, 0.3);
  box-shadow: 0 20px 60px rgba(124, 58, 237, 0.15);
}

[data-theme="light"] .stat-number {
  background: linear-gradient(135deg, #7c3aed, #db2777);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

[data-theme="light"] .stat-label {
  color: #6b6c70;
}

[data-theme="light"] .stat-icon {
  color: rgba(124, 58, 237, 0.2);
}

[data-theme="light"] .stat-card:hover .stat-icon {
  color: rgba(124, 58, 237, 0.5);
}
</style>
