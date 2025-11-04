<template>
  <div>
    <div ref="cursor" class="custom-cursor"></div>
    <div ref="cursorDot" class="cursor-dot"></div>
  </div>
</template>

<script>
export default {
  name: 'CustomCursor',
  data() {
    return {
      mouseX: 0,
      mouseY: 0,
      cursorX: 0,
      cursorY: 0
    }
  },
  mounted() {
    this.initCursor()
  },
  methods: {
    initCursor() {
      const cursor = this.$refs.cursor
      const dot = this.$refs.cursorDot

      // Update mouse position
      document.addEventListener('mousemove', (e) => {
        this.mouseX = e.clientX
        this.mouseY = e.clientY
        
        // Dot follows immediately
        dot.style.left = e.clientX + 'px'
        dot.style.top = e.clientY + 'px'
      })

      // Smooth cursor follow
      const animateCursor = () => {
        const dx = this.mouseX - this.cursorX
        const dy = this.mouseY - this.cursorY
        
        this.cursorX += dx * 0.15 // Velocidade aumentada (era 0.1)
        this.cursorY += dy * 0.15
        
        cursor.style.left = this.cursorX + 'px'
        cursor.style.top = this.cursorY + 'px'
        
        requestAnimationFrame(animateCursor)
      }
      
      animateCursor()

      // Hover effects
      const interactiveElements = document.querySelectorAll('a, button, .nav-dot, .project-card')
      
      interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', () => {
          cursor.classList.add('cursor-hover')
        })
        
        el.addEventListener('mouseleave', () => {
          cursor.classList.remove('cursor-hover')
        })
      })
    }
  }
}
</script>

<style scoped>
.custom-cursor {
  width: 40px;
  height: 40px;
  border: 2px solid rgba(168, 85, 247, 0.5);
  border-radius: 50%;
  position: fixed;
  pointer-events: none;
  z-index: 9999;
  transform: translate(-50%, -50%);
  transition: width 0.3s ease, height 0.3s ease, border-color 0.3s ease;
}

.cursor-dot {
  width: 6px;
  height: 6px;
  background: rgba(168, 85, 247, 1);
  border-radius: 50%;
  position: fixed;
  pointer-events: none;
  z-index: 10000;
  transform: translate(-50%, -50%);
  box-shadow: 0 0 10px rgba(168, 85, 247, 0.8);
}

.cursor-hover {
  width: 60px;
  height: 60px;
  border-color: rgba(168, 85, 247, 0.8);
  background: rgba(168, 85, 247, 0.1);
}

@media (max-width: 768px) {
  .custom-cursor,
  .cursor-dot {
    display: none;
  }
}
</style>
