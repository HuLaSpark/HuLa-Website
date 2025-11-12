<template>
  <div class="min-h-[calc(100vh-var(--header-height))] bg-[#f8fafc] dark:bg-[#111729] relative overflow-hidden">
    <!-- Particle Background -->
    <div class="absolute inset-0 overflow-hidden">
      <div class="particles-container">
        <div v-for="i in 50" :key="i" class="particle" :style="getParticleStyle(i)"></div>
      </div>
    </div>
    
    <!-- Floating Elements -->
    <div class="absolute inset-0 overflow-hidden pointer-events-none">
      <div class="floating-element floating-element-1"></div>
      <div class="floating-element floating-element-2"></div>
      <div class="floating-element floating-element-3"></div>
      <div class="floating-element floating-element-4"></div>
    </div>
    
    <img
      class="pointer-events-none absolute w-full top-[1px] text-teal flex-shrink-0 z-10"
      src="/assets/svg/header.svg"
      alt="" />
    <div class="absolute inset-0">
      <div
        class="absolute inset-0 bg-gradient-to-b from-[#f8fafc] via-[#e2e8f0] to-[#f8fafc] dark:from-[#111729] dark:via-[#0c1322] dark:to-[#111729] opacity-60 dark:opacity-80"></div>
      <div
        class="absolute inset-0 bg-[url('/assets/svg/grid-light.svg')] dark:bg-[url('/assets/svg/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]">
        <div class="photon-effect light-photon dark:dark-photon"></div>
        <div class="photon-effect light-photon dark:dark-photon delay-2"></div>
        <div class="photon-effect light-photon dark:dark-photon delay-4"></div>
      </div>
    </div>
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
// 使用确定性的伪随机数生成器，基于 index 生成种子
// 这样可以确保服务器端和客户端生成相同的随机值，避免 hydration mismatch
const seededRandom = (seed: number) => {
  const x = Math.sin(seed) * 10000
  return x - Math.floor(x)
}

const getParticleStyle = (index: number) => {
  // 使用 index 作为种子，确保每次生成的随机值都是确定的
  const seed1 = index * 0.1
  const seed2 = index * 0.2
  const seed3 = index * 0.3
  const seed4 = index * 0.4
  const seed5 = index * 0.5
  const seed6 = index * 0.6
  
  // 使用 Math.round 或 toFixed 来确保浮点数精度一致，避免 hydration mismatch
  const delay = Math.round(seededRandom(seed1) * 5000) / 1000 // 保留3位小数
  const duration = Math.round((3 + seededRandom(seed2) * 4) * 1000) / 1000 // 保留3位小数
  const size = Math.round((2 + seededRandom(seed3) * 4) * 1000) / 1000 // 保留3位小数
  const opacity = Math.round((0.1 + seededRandom(seed4) * 0.3) * 100000) / 100000 // 保留5位小数
  const left = Math.round(seededRandom(seed5) * 10000) / 100 // 保留2位小数
  const top = Math.round(seededRandom(seed6) * 10000) / 100 // 保留2位小数
  
  return {
    left: left + '%',
    top: top + '%',
    width: size + 'px',
    height: size + 'px',
    animationDelay: delay + 's',
    animationDuration: duration + 's',
    opacity: opacity,
  }
}
</script>

<style scoped>
.photon-effect {
  position: absolute;
  width: 2px;
  height: 100%;
  animation: movePhoton 3s linear infinite;
}

.light-photon {
  background: linear-gradient(180deg, transparent, rgba(14, 165, 233, 0.5), transparent);
  opacity: 0.3;
}

.dark-photon {
  background: linear-gradient(180deg, transparent, #fff, transparent);
  opacity: 0.5;
}

.delay-2 {
  animation-delay: 1s;
  left: 30%;
}

.delay-4 {
  animation-delay: 2s;
  left: 70%;
}

@keyframes movePhoton {
  0% {
    transform: translateY(-100%) translateX(-100%);
  }
  100% {
    transform: translateY(100%) translateX(100%);
  }
}

/* Particle Animation */
.particles-container {
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.particle {
  position: absolute;
  background: linear-gradient(45deg, #14b8a6, #0ea5e9);
  border-radius: 50%;
  animation: float-particle infinite ease-in-out;
}

.dark .particle {
  background: linear-gradient(45deg, #14b8a6, #0ea5e9);
  opacity: 0.6;
}

@keyframes float-particle {
  0%, 100% {
    transform: translateY(0px) rotate(0deg);
  }
  25% {
    transform: translateY(-20px) rotate(90deg);
  }
  50% {
    transform: translateY(-10px) rotate(180deg);
  }
  75% {
    transform: translateY(-30px) rotate(270deg);
  }
}

/* Floating Elements */
.floating-element {
  position: absolute;
  border-radius: 50%;
  filter: blur(1px);
  animation: float-element infinite ease-in-out;
}

.floating-element-1 {
  width: 60px;
  height: 60px;
  background: linear-gradient(45deg, rgba(20, 184, 166, 0.1), rgba(14, 165, 233, 0.1));
  top: 10%;
  left: 10%;
  animation-duration: 6s;
}

.floating-element-2 {
  width: 80px;
  height: 80px;
  background: linear-gradient(45deg, rgba(139, 92, 246, 0.1), rgba(219, 39, 119, 0.1));
  top: 20%;
  right: 15%;
  animation-duration: 8s;
  animation-delay: -2s;
}

.floating-element-3 {
  width: 100px;
  height: 100px;
  background: linear-gradient(45deg, rgba(245, 101, 101, 0.1), rgba(251, 191, 36, 0.1));
  bottom: 30%;
  left: 20%;
  animation-duration: 10s;
  animation-delay: -4s;
}

.floating-element-4 {
  width: 120px;
  height: 120px;
  background: linear-gradient(45deg, rgba(16, 185, 129, 0.1), rgba(59, 130, 246, 0.1));
  bottom: 10%;
  right: 10%;
  animation-duration: 12s;
  animation-delay: -6s;
}

@keyframes float-element {
  0%, 100% {
    transform: translateY(0px) translateX(0px) rotate(0deg);
  }
  25% {
    transform: translateY(-30px) translateX(20px) rotate(90deg);
  }
  50% {
    transform: translateY(-20px) translateX(-10px) rotate(180deg);
  }
  75% {
    transform: translateY(-40px) translateX(-30px) rotate(270deg);
  }
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .floating-element-1, .floating-element-2, .floating-element-3, .floating-element-4 {
    width: 40px;
    height: 40px;
  }
  
  .particle {
    width: 2px !important;
    height: 2px !important;
  }
}
</style>
