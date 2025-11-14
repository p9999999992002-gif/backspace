<template>
  <section id="contact" class="relative py-16 md:py-32 bg-gradient-to-br from-black via-purple-950/10 to-black overflow-hidden ml-20 md:ml-24">
    <div class="absolute top-10 md:top-20 right-10 md:right-20 w-32 h-32 md:w-64 md:h-64 bg-purple-600/20 rounded-full blur-3xl animate-pulse"></div>
    <div class="absolute bottom-10 md:bottom-20 left-10 md:left-20 w-32 h-32 md:w-64 md:h-64 bg-pink-600/20 rounded-full blur-3xl animate-pulse" style="animation-delay: 1s;"></div>

    <div class="container mx-auto px-4 md:px-6 relative z-10">
      <div class="grid md:grid-cols-2 gap-12 md:gap-16 items-start max-w-6xl mx-auto">
        <div class="space-y-8 md:space-y-12 fade-in-up">
          <div>
            <div class="flex items-center space-x-4 mb-8 justify-center md:justify-start">
              <div class="w-12 h-px bg-purple-500"></div>
              <p class="text-xs md:text-sm text-purple-400 tracking-[0.3em] uppercase">Entre em Contato</p>
            </div>
            <h2 class="text-4xl md:text-5xl font-black text-white leading-tight mb-4 md:mb-6 text-center md:text-left">
              Receba um design de infraestrutura personalizado grátis!
            </h2>
            <p class="text-sm md:text-lg text-gray-400 leading-relaxed text-center md:text-left">
              Pronto para transformar seu negócio? Entre em contato hoje e vamos discutir como podemos ajudá-lo a alcançar seus objetivos.
            </p>
          </div>

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
                <p class="text-gray-400 text-sm md:text-base">Ryan Dias, Pedro Dias, Gabriel Fernandes, Danilo Santiago</p>
              </div>
            </div>
          </div>
        </div>

        <div class="bg-white/5 border border-white/10 rounded-2xl md:rounded-3xl p-6 md:p-8 backdrop-blur-xl fade-in-up hover:border-purple-500/30 transition-all duration-300">
          <form @submit.prevent="handleSubmit" class="space-y-4 md:space-y-5">
            <div>
              <label class="block text-xs md:text-sm font-medium text-white mb-2">Nome completo</label>
              <input v-model="form.name" type="text" required class="form-input" placeholder="Insira o nome do responsável"/>
            </div>

            <div>
              <label class="block text-xs md:text-sm font-medium text-white mb-2">Endereço de Email</label>
              <input v-model="form.email" type="email" required class="form-input" placeholder="Insira seu e-mail"/>
            </div>

            <div>
              <label class="block text-xs md:text-sm font-medium text-white mb-2">Celular</label>
              <input v-model="form.phone" type="tel" required class="form-input" placeholder="Insira seu número de celular"/>
            </div>

            <div>
              <label class="block text-xs md:text-sm font-medium text-white mb-2">Nome da empresa</label>
              <input v-model="form.company" type="text" required class="form-input" placeholder="Escreva o nome da sua empresa"/>
            </div>

            <div>
              <label class="block text-xs md:text-sm font-medium text-white mb-2">Nicho</label>
              <select v-model="form.niche" required class="form-input">
                <option value="" disabled selected>Selecione o nicho do seu negócio</option>
                <option value="tecnologia">Tecnologia</option>
                <option value="saude">Saúde</option>
                <option value="educacao">Educação</option>
                <option value="financeiro">Financeiro</option>
                <option value="varejo">Varejo</option>
                <option value="servicos">Serviços</option>
                <option value="industria">Indústria</option>
                <option value="outro">Outro</option>
              </select>
            </div>

            <div>
              <label class="block text-xs md:text-sm font-medium text-white mb-2">Quantos funcionários seu negócio tem</label>
              <select v-model="form.employees" required class="form-input">
                <option value="" disabled selected>Selecionar</option>
                <option value="1-10">1-10 funcionários</option>
                <option value="11-50">11-50 funcionários</option>
                <option value="51-200">51-200 funcionários</option>
                <option value="201-500">201-500 funcionários</option>
                <option value="500+">Mais de 500 funcionários</option>
              </select>
            </div>

            <div>
              <label class="block text-xs md:text-sm font-medium text-white mb-3">Todos os processos de trabalho hoje são manuais?</label>
              <div class="flex items-center space-x-6">
                <label class="flex items-center cursor-pointer">
                  <input type="radio" v-model="form.manualProcesses" value="nao" class="w-4 h-4 text-purple-600 bg-white/5 border-white/20 focus:ring-purple-500 focus:ring-2"/>
                  <span class="ml-2 text-sm text-gray-300">Não</span>
                </label>
                <label class="flex items-center cursor-pointer">
                  <input type="radio" v-model="form.manualProcesses" value="sim" class="w-4 h-4 text-purple-600 bg-white/5 border-white/20 focus:ring-purple-500 focus:ring-2"/>
                  <span class="ml-2 text-sm text-gray-300">Sim</span>
                </label>
                <label class="flex items-center cursor-pointer">
                  <input type="radio" v-model="form.manualProcesses" value="parte" class="w-4 h-4 text-purple-600 bg-white/5 border-white/20 focus:ring-purple-500 focus:ring-2"/>
                  <span class="ml-2 text-sm text-gray-300">Parte deles</span>
                </label>
              </div>
            </div>

            <div>
              <label class="block text-xs md:text-sm font-medium text-white mb-2">Qual o principal desafio técnico hoje?</label>
              <textarea v-model="form.challenge" rows="4" required class="form-input resize-none" placeholder="Conte-nos sobre seu negócio..."></textarea>
            </div>

            <button type="submit" :disabled="isSubmitting" class="bubble-button-gradient w-full group flex items-center justify-center space-x-2 md:space-x-3 px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full text-white text-sm md:text-base font-semibold hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 hover:scale-105 relative overflow-hidden disabled:opacity-50 disabled:cursor-not-allowed">
              <span class="relative z-10">{{ isSubmitting ? 'Enviando...' : 'Solicitar design' }}</span>
              <svg v-if="!isSubmitting" class="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
              </svg>
            </button>
          </form>
        </div>
      </div>
    </div>

    <div class="absolute bottom-6 md:bottom-10 right-6 md:right-10 text-6xl md:text-8xl font-black text-white/5 tracking-tighter pointer-events-none">05</div>
  </section>
</template>

<script>
import Swal from 'sweetalert2';

export default {
  name: 'Contact',
  data() {
    return {
      form: {
        name: '',
        email: '',
        phone: '',
        company: '',
        niche: '',
        employees: '',
        manualProcesses: '',
        challenge: ''
      },
      isSubmitting: false
    }
  },
  methods: {
    async handleSubmit() {
      if (!this.form.name || !this.form.email || !this.form.phone || !this.form.company) {
        await Swal.fire({
          icon: 'warning',
          title: '<span style="color: #f59e0b; font-size: 28px;">⚠️ Atenção!</span>',
          html: '<p style="font-size: 17px; color: #666; line-height: 1.6;">Por favor, preencha todos os <strong>campos obrigatórios</strong> para continuar.</p>',
          confirmButtonText: '✓ Entendi',
          confirmButtonColor: '#f59e0b',
          background: 'linear-gradient(135deg, #fff 0%, #f9fafb 100%)',
          backdrop: 'rgba(0,0,0,0.5)',
          allowOutsideClick: true,
          allowEscapeKey: true,
          showClass: {
            popup: 'animate__animated animate__shakeX animate__faster'
          },
          hideClass: {
            popup: 'animate__animated animate__fadeOutUp animate__faster'
          },
          customClass: {
            popup: 'premium-popup',
            title: 'premium-title',
            confirmButton: 'premium-button'
          }
        });
        return;
      }

      this.isSubmitting = true;

      try {
        const response = await fetch('http://localhost:3001/api/send-email', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(this.form)
        });

        const data = await response.json();

        if (data.success) {
          await Swal.fire({
            icon: 'success',
            title: '<span style="background: linear-gradient(135deg, #a855f7 0%, #ec4899 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; font-size: 32px; font-weight: 900;">🚀 Sucesso!</span>',
            html: `
              <div style="padding: 20px;">
                <p style="font-size: 18px; color: #333; margin-bottom: 15px; line-height: 1.7;">
                  <strong>Seu pedido foi enviado!</strong>
                </p>
                <div style="background: linear-gradient(135deg, #a855f7 0%, #ec4899 100%); padding: 15px; border-radius: 12px; margin: 20px 0;">
                  <p style="color: white; font-size: 16px; margin: 0;">
                    📧 <strong>contato@backspace.dev.br</strong>
                  </p>
                </div>
                <p style="font-size: 16px; color: #666; line-height: 1.6;">
                  Nossa equipe entrará em contato <strong>em breve</strong> com sua infraestrutura personalizada! ✨
                </p>
              </div>
            `,
            confirmButtonText: '🎉 Perfeito!',
            confirmButtonColor: '#a855f7',
            background: 'linear-gradient(135deg, #fff 0%, #faf5ff 100%)',
            backdrop: 'rgba(168, 85, 247, 0.2)',
            allowOutsideClick: true,
            allowEscapeKey: true,
            timer: 6000,
            timerProgressBar: true,
            showClass: {
              popup: 'animate__animated animate__bounceIn'
            },
            hideClass: {
              popup: 'animate__animated animate__zoomOut animate__faster'
            },
            customClass: {
              popup: 'premium-popup-success',
              title: 'premium-title-success',
              confirmButton: 'premium-button-success',
              timerProgressBar: 'premium-progress-bar'
            }
          });

          this.form = {
            name: '',
            email: '',
            phone: '',
            company: '',
            niche: '',
            employees: '',
            manualProcesses: '',
            challenge: ''
          };
        } else {
          throw new Error(data.message);
        }
      } catch (error) {
        console.error('Erro ao enviar formulário:', error);
        await Swal.fire({
          icon: 'error',
          title: '<span style="color: #dc2626; font-size: 28px;">❌ Erro ao Enviar</span>',
          html: `
            <div style="padding: 15px;">
              <p style="font-size: 17px; color: #666; margin-bottom: 20px; line-height: 1.6;">
                Não foi possível enviar o formulário.
              </p>
              <div style="background: #fee2e2; padding: 15px; border-radius: 10px; border-left: 4px solid #dc2626;">
                <p style="font-size: 15px; color: #dc2626; margin: 0;">
                  📧 Entre em contato diretamente:<br>
                  <strong>contato@backspace.dev.br</strong>
                </p>
              </div>
            </div>
          `,
          confirmButtonText: 'OK, Entendi',
          confirmButtonColor: '#dc2626',
          background: '#fff',
          backdrop: 'rgba(220, 38, 38, 0.2)',
          allowOutsideClick: true,
          allowEscapeKey: true,
          showClass: {
            popup: 'animate__animated animate__headShake'
          },
          hideClass: {
            popup: 'animate__animated animate__fadeOut animate__faster'
          },
          customClass: {
            popup: 'premium-popup-error',
            confirmButton: 'premium-button-error'
          }
        });
      } finally {
        this.isSubmitting = false;
      }
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

select.form-input {
  appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%23a78bfa' d='M6 9L1 4h10z'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 1rem center;
  padding-right: 2.5rem;
}

select.form-input option {
  background-color: #1a1a2e;
  color: white;
}

input[type="radio"] {
  appearance: none;
  -webkit-appearance: none;
  width: 1rem;
  height: 1rem;
  border: 2px solid rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.05);
  cursor: pointer;
  position: relative;
  transition: all 0.3s ease;
}

input[type="radio"]:checked {
  background-color: #a855f7;
  border-color: #a855f7;
}

input[type="radio"]:checked::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 0.4rem;
  height: 0.4rem;
  border-radius: 50%;
  background-color: white;
}

input[type="radio"]:focus {
  outline: 2px solid rgba(168, 85, 247, 0.5);
  outline-offset: 2px;
}

/* Estilos Premium do SweetAlert2 */
:global(.premium-popup) {
  border-radius: 24px !important;
  padding: 30px !important;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25) !important;
  border: 1px solid rgba(168, 85, 247, 0.1) !important;
}

:global(.premium-popup-success) {
  border-radius: 28px !important;
  padding: 35px !important;
  box-shadow: 0 30px 60px -15px rgba(168, 85, 247, 0.4) !important;
  border: 2px solid rgba(168, 85, 247, 0.2) !important;
}

:global(.premium-popup-error) {
  border-radius: 24px !important;
  padding: 30px !important;
  box-shadow: 0 25px 50px -12px rgba(220, 38, 38, 0.3) !important;
}

:global(.premium-button) {
  border-radius: 12px !important;
  padding: 14px 32px !important;
  font-weight: 700 !important;
  font-size: 16px !important;
  transition: all 0.3s ease !important;
  box-shadow: 0 10px 20px -10px rgba(245, 158, 11, 0.5) !important;
}

:global(.premium-button:hover) {
  transform: translateY(-2px) !important;
  box-shadow: 0 15px 30px -10px rgba(245, 158, 11, 0.6) !important;
}

:global(.premium-button-success) {
  border-radius: 14px !important;
  padding: 16px 40px !important;
  font-weight: 800 !important;
  font-size: 17px !important;
  background: linear-gradient(135deg, #a855f7 0%, #ec4899 100%) !important;
  transition: all 0.3s ease !important;
  box-shadow: 0 12px 24px -8px rgba(168, 85, 247, 0.5) !important;
}

:global(.premium-button-success:hover) {
  transform: translateY(-3px) scale(1.05) !important;
  box-shadow: 0 18px 36px -8px rgba(168, 85, 247, 0.7) !important;
}

:global(.premium-button-error) {
  border-radius: 12px !important;
  padding: 14px 32px !important;
  font-weight: 700 !important;
  transition: all 0.3s ease !important;
}

:global(.premium-progress-bar) {
  background: linear-gradient(90deg, #a855f7 0%, #ec4899 100%) !important;
  height: 6px !important;
  border-radius: 10px !important;
}

/* Animações Personalizadas */
@keyframes bounceIn {
  0% { transform: scale(0.3); opacity: 0; }
  50% { transform: scale(1.05); }
  70% { transform: scale(0.9); }
  100% { transform: scale(1); opacity: 1; }
}

@keyframes shakeX {
  0%, 100% { transform: translateX(0); }
  10%, 30%, 50%, 70%, 90% { transform: translateX(-10px); }
  20%, 40%, 60%, 80% { transform: translateX(10px); }
}

@keyframes zoomOut {
  0% { transform: scale(1); opacity: 1; }
  100% { transform: scale(0.3); opacity: 0; }
}

.animate__animated {
  animation-duration: 0.6s !important;
}

.animate__faster {
  animation-duration: 0.4s !important;
}
</style>
