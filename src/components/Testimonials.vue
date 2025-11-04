<!-- src/components/Testimonials.vue -->
<template>
  <section class="relative py-20 md:py-32 bg-black overflow-hidden ml-20 md:ml-24">
    <div class="container mx-auto px-6 md:px-12 relative z-10">
      <div class="text-center mb-16 fade-in-up">
        <div class="flex items-center space-x-4 mb-8 justify-center">
          <div class="w-12 h-px bg-purple-500"></div>
          <p class="text-xs md:text-sm text-purple-400 tracking-[0.3em] uppercase">Testimonials</p>
          <div class="w-12 h-px bg-purple-500"></div>
        </div>
        <h2 class="text-4xl md:text-6xl font-black text-white">What Our Clients Say</h2>
      </div>

      <div class="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        <div v-for="(testimonial, index) in testimonials" :key="index" 
             class="testimonial-card fade-in-up"
             :style="{ animationDelay: `${index * 0.1}s` }">
          <div class="stars mb-4">
            <span v-for="n in 5" :key="n" class="text-yellow-400">★</span>
          </div>
          <p class="text-gray-400 mb-6 italic">"{{ testimonial.text }}"</p>
          <div class="flex items-center space-x-3">
            <div class="w-12 h-12 rounded-full bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center text-white font-bold">
              {{ testimonial.initials }}
            </div>
            <div>
              <p class="text-white font-semibold">{{ testimonial.name }}</p>
              <p class="text-gray-500 text-sm">{{ testimonial.role }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Testimonials',
  data() {
    return {
      testimonials: [
        {
          text: "Backspace transformed our business operations. The automation solution saved us countless hours.",
          name: "Maria Silva",
          role: "CEO, Tech Corp",
          initials: "MS"
        },
        {
          text: "Professional team, excellent results. Our cloud infrastructure is now rock solid.",
          name: "João Santos",
          role: "CTO, Startup Inc",
          initials: "JS"
        },
        {
          text: "Best investment we made this year. The ROI was incredible!",
          name: "Ana Costa",
          role: "Director, Finance Co",
          initials: "AC"
        }
      ]
    }
  }
}
</script>

<style scoped>
.testimonial-card {
  padding: 2rem;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 1.5rem;
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
}

.testimonial-card:hover {
  transform: translateY(-5px);
  border-color: rgba(168, 85, 247, 0.3);
  box-shadow: 0 20px 40px rgba(168, 85, 247, 0.1);
}
</style>
