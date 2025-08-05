<template>
  <div class="relative w-full h-[calc(100vh-var(--header-height))] overflow-hidden">
    <ClientOnly>
      <Dither
        :wave-speed="0.1"
        :wave-frequency="7"
        :wave-amplitude="0.2"
        :wave-color="[0.1, 0.7, 0.5]"
        :color-num="4"
        :pixel-size="6"
        :disable-animation="false"
        :enable-mouse-interaction="false"
        :mouse-radius="0.5" />
    </ClientOnly>
  </div>
</template>
<script setup lang="ts">
import Dither from '~/components/common/Dither.vue'

useSeoMeta({
  title: 'HuLa: 一款高度集成的即时通讯应用'
})
</script>

<style scoped></style>
