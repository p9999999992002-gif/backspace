<template>
  <section id="contact" class="relative py-16 md:py-32 bg-gradient-to-br from-black via-purple-950/10 to-black overflow-hidden ml-20 md:ml-24">
    <!-- Floating Elements -->
    <div class="absolute top-10 md:top-20 right-10 md:right-20 w-32 h-32 md:w-64 md:h-64 bg-purple-600/20 rounded-full blur-3xl animate-pulse"></div>
    <div class="absolute bottom-10 md:bottom-20 left-10 md:left-20 w-32 h-32 md:w-64 md:h-64 bg-pink-600/20 rounded-full blur-3xl animate-pulse" style="animation-delay: 1s;"></div>

    <div class="container mx-auto px-4 md:px-6 relative z-10">
      <div class="grid md:grid-cols-2 gap-12 md:gap-16 items-start max-w-6xl mx-auto">
        <!-- Left Side - Info -->
        <div class="space-y-8 md:space-y-12 fade-in-up">
          <div>
            <div class="flex items-center space-x-4 mb-8 justify-center md:justify-start">
              <div class="w-12 h-px bg-purple-500"></div>
              <p class="text-xs md:text-sm text-purple-400 tracking-[0.3em] uppercase">Entre em Contato</p>
            </div>
            <h2 class="text-4xl md:text-6xl font-black text-white leading-tight mb-4 md:mb-6 text-center md:text-left">
              Vamos construir algo incrível juntos
            </h2>
            <p class="text-sm md:text-lg text-gray-400 leading-relaxed text-center md:text-left">
              Pronto para transformar seu negócio? Entre em contato hoje e vamos discutir como podemos ajudá-lo a alcançar seus objetivos.
            </p>
          </div>

          <!-- Contact Info Cards -->
          <div class="space-y-4 md:space-y-6">
            <div class="flex items-start space-x-3 md:space-x-4 p-4 md:p-6 bg-white/5 border border-white/10 rounded-xl md:rounded-2xl backdrop-blur-sm hover:bg-white/10 hover:border-purple-500/30 transition-all duration-300 hover:transform hover:-translate-y-1">
              <div class="w-10 h-10 md:w-12 md:h-12 rounded-lg md:rounded-xl bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center flex-shrink-0">
                <svg class="w-5 h-5 md:w-6 md:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
              </div>
              <div>
                <h4 class="text-white text-sm md:text-base font-semibold mb-1">Email</h4>
                <p class="text-gray-400 text-sm md:text-base">contact@backspace.com</p>
              </div>
            </div>

            <div class="flex items-start space-x-3 md:space-x-4 p-4 md:p-6 bg-white/5 border border-white/10 rounded-xl md:rounded-2xl backdrop-blur-sm hover:bg-white/10 hover:border-purple-500/30 transition-all duration-300 hover:transform hover:-translate-y-1">
              <div class="w-10 h-10 md:w-12 md:h-12 rounded-lg md:rounded-xl bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center flex-shrink-0">
                <svg class="w-5 h-5 md:w-6 md:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                </svg>
              </div>
              <div>
                <h4 class="text-white text-sm md:text-base font-semibold mb-1">Localização</h4>
                <p class="text-gray-400 text-sm md:text-base">São Paulo, SP - Brasil</p>
              </div>
            </div>

            <div class="flex items-start space-x-3 md:space-x-4 p-4 md:p-6 bg-white/5 border border-white/10 rounded-xl md:rounded-2xl backdrop-blur-sm hover:bg-white/10 hover:border-purple-500/30 transition-all duration-300 hover:transform hover:-translate-y-1">
              <div class="w-10 h-10 md:w-12 md:h-12 rounded-lg md:rounded-xl bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center flex-shrink-0">
                <svg class="w-5 h-5 md:w-6 md:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"/>
                </svg>
              </div>
              <div>
                <h4 class="text-white text-sm md:text-base font-semibold mb-1">Equipe</h4>
                <p class="text-gray-400 text-sm md:text-base">Ryan Dias, Pedro Dias, Gabriel Fernandes</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Right Side - Form -->
        <div class="bg-white/5 border border-white/10 rounded-2xl md:rounded-3xl p-6 md:p-8 backdrop-blur-xl fade-in-up hover:border-purple-500/30 transition-all duration-300">
          <form @submit.prevent="handleSubmit" class="space-y-4 md:space-y-6">
            <div>
              <label class="block text-xs md:text-sm font-medium black mb-2">Nome Completo</label>
              <input 
                v-model="form.name"
                type="text" 
                required
                class="form-input"
                placeholder="João Silva"
              />
            </div>

            <div>
              <label class="block text-xs md:text-sm font-medium black mb-2">Endereço de Email</label>
              <input 
                v-model="form.email"
                type="email" 
                required
                class="form-input"
                placeholder="joao@exemplo.com"
              />
            </div>

            <div>
              <label class="block text-xs md:text-sm font-medium text-black-300 mb-2">Assunto</label>
              <input 
                v-model="form.subject"
                type="text" 
                required
                class="form-input"
                placeholder="Consulta sobre Projeto"
              />
            </div>

            <div>
              <label class="block text-xs md:text-sm font-medium text-black-300 mb-2">Mensagem</label>
              <textarea 
                v-model="form.message"
                rows="4" 
                required
                class="form-input resize-none"
                placeholder="Conte-nos sobre seu projeto..."
              ></textarea>
            </div>

            <button type="submit" class="bubble-button-gradient w-full group flex items-center justify-center space-x-2 md:space-x-3 px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full text-white text-sm md:text-base font-semibold hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 hover:scale-105 relative overflow-hidden">
              <span class="relative z-10">Enviar Mensagem</span>
              <svg class="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
              </svg>
            </button>
          </form>
        </div>
      </div>
    </div>

    <!-- Page Number -->
    <div class="absolute bottom-6 md:bottom-10 right-6 md:right-10 text-6xl md:text-8xl font-black text-white/5 tracking-tighter pointer-events-none">05</div>
  </section>
</template>

<script>
export default {
  name: 'Contact',
  data() {
    return {
      form: {
        name: '',
        email: '',
        subject: '',
        message: ''
      }
    }
  },
  methods: {
    handleSubmit() {
      console.log('Form submitted:', this.form)
      alert('Mensagem enviada com sucesso! 🚀')
      this.form = { name: '', email: '', subject: '', message: '' }
    }
  }
}
</script>

<style scoped>
.form-input {
  @apply w-full px-3 py-2.5 md:px-4 md:py-3 text-sm md:text-base bg-white/5 border border-white/10 rounded-lg md:rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300;
}

.form-input:focus {
  @apply bg-white/10;
}
</style>
