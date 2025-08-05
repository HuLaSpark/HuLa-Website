<template>
  <div class="relative w-full h-screen overflow-hidden">
    <!-- 背景 Dither 效果 -->
    <Dither
      :wave-speed="0.06"
      :wave-frequency="1.5"
      :wave-amplitude="0.6"
      :wave-color="[0.1, 0.7, 0.5]"
      :color-num="8"
      :pixel-size="2"
      :disable-animation="false"
      :enable-mouse-interaction="false"
      :mouse-radius="0.8" />

    <!-- 主要内容 -->
    <div class="absolute inset-0 flex items-center justify-center">
      <div class="text-center px-6 max-w-4xl mx-auto">
        <!-- Retro Background 标签 -->
        <div
          class="inline-flex items-center gap-2 px-4 py-2 mb-8 bg-black/20 backdrop-blur-sm border border-white/20 rounded-full text-white/90 text-sm font-medium">
          <div class="w-2 h-2 bg-white/60 rounded-full"></div>
          Retro Background
        </div>

        <!-- 主标题 -->
        <h1 class="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight">
          Dithered waves with
          <br />
          <span class="bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent">
            vintage charm
          </span>
        </h1>

        <!-- 按钮组 -->
        <div class="flex flex-col sm:flex-row gap-4 justify-center items-center mt-12">
          <button
            class="px-8 py-4 bg-white text-black font-semibold rounded-full hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-lg">
            Get Started
          </button>
          <button
            class="px-8 py-4 bg-transparent border-2 border-white/30 text-white font-semibold rounded-full hover:bg-white/10 hover:border-white/50 transition-all duration-300 backdrop-blur-sm">
            Learn More
          </button>
        </div>
      </div>
    </div>

    <!-- 装饰性渐变 -->
    <div
      class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/20 pointer-events-none"></div>
  </div>
</template>
<script setup lang="ts">
import Dither from '~/components/common/Dither.vue'

useSeoMeta({
  title: 'HuLa: 一款高度集成的即时通讯应用'
})
</script>

<style scoped></style>
