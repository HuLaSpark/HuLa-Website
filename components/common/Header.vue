<template>
  <div class="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-4xl px-4">
    <div class="liquid-glass-header">
      <!-- 主要内容 -->
      <div class="relative flex justify-between items-center gap-3 px-6 py-3">
        <div class="flex-1 flex items-center gap-2.5">
          <NuxtLink to="/">
            <label class="inline-flex items-center gap-2.5 cursor-pointer">
              <img class="w-7 h-7 md:w-9 md:h-9" src="~/assets/logo/logo.png" alt="" />
              <span class="text-lg md:text-2xl text-gray-800 dark:text-white font-semibold">HuLa</span>
            </label>
          </NuxtLink>

          <div v-if="hulaVersion" class="relative inline-flex">
            <UTooltip :text="`最新版本: ${hulaVersion}`">
              <span
                class="inline-flex items-center cursor-pointer text-xs px-1.5 py-0.5 bg-gray-100/80 dark:bg-gray-800/80 text-gray-700 dark:text-gray-300 ring-1 ring-inset ring-gray-300/30 dark:ring-gray-600/30 -mb-[2px] rounded font-semibold backdrop-blur-sm">
                {{ hulaVersion }}
              </span>
            </UTooltip>
          </div>
        </div>

        <ul class="items-center gap-x-8 hidden lg:flex">
          <UPopover v-model:open="panelVisible" mode="hover">
            <li class="relative group">
              <NuxtLink
                to="/docs/getting-started/introduction"
                :class="{ 'text-blue-600 dark:text-blue-400': isActive('/docs/getting-started/introduction') }"
                class="text-sm/6 font-semibold flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200">
                文档
                <UIcon
                  name="solar:alt-arrow-down-line-duotone"
                  :class="{ 'rotate-180': panelVisible }"
                  class="w-4 h-4 transform transition-transform duration-300 group-hover:rotate-180" />
              </NuxtLink>
            </li>
            <template #panel>
              <div
                class="overflow-hidden focus:outline-none relative bg-white/90 dark:bg-gray-900/90 backdrop-blur-xl ring-1 ring-gray-200/50 dark:ring-gray-700/50 rounded-xl shadow-2xl border border-gray-200/20 dark:border-gray-700/20">
                <div class="p-3 space-y-1">
                  <a
                    class="px-3 py-2 rounded-lg flex items-start gap-2 hover:bg-gray-100/50 dark:hover:bg-gray-800/50 transition-colors duration-200"
                    href="/docs/getting-started/introduction">
                    <UIcon
                      name="solar:bolt-outline"
                      :class="{ 'text-blue-600 dark:text-blue-400': isActive('/docs/getting-started/introduction') }"
                      class="w-4 h-4 text-gray-500 dark:text-gray-400 flex-shrink-0 mt-1" />
                    <p>
                      <span
                        :class="{ 'text-blue-600 dark:text-blue-400': isActive('/docs/getting-started/introduction') }"
                        class="font-semibold text-sm/6 inline-block relative text-gray-800 dark:text-gray-200">
                        开始使用
                      </span>
                      <span class="text-sm leading-snug text-gray-600 dark:text-gray-400 line-clamp-2 block">
                        了解如何开始使用 HuLa
                      </span>
                    </p>
                  </a>
                </div>
              </div>
            </template>
          </UPopover>
        </ul>

        <div class="flex justify-end items-center flex-1 gap-2.5">
          <UTooltip text="GitHub Start" class="hidden md:block">
            <a href="https://github.com/HulaSpark/HuLa" class="hover:scale-105 transition-transform duration-200">
              <img src="https://img.shields.io/github/stars/HulaSpark/HuLa" alt="star" class="rounded" />
            </a>
          </UTooltip>

          <UTooltip text="Gitee Start" class="hidden md:block">
            <a href="https://gitee.com/HuLaSpark/HuLa" class="hover:scale-105 transition-transform duration-200">
              <img src="https://gitee.com/HuLaSpark/HuLa/badge/star.svg?theme=gray" alt="star" class="rounded" />
            </a>
          </UTooltip>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const hulaVersion = ref()
const route = useRoute()
const panelVisible = ref(false)

// 检查当前路由是否匹配
const isActive = (path: string) => {
  return route.path === path
}

onMounted(() => {
  hulaVersion.value = localStorage.getItem('hulaVersion') || void 0
})
</script>

<style scoped lang="scss">
.liquid-glass-header {
  background: transparent;
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-radius: 50px;
  transition: all 0.3s;
  backdrop-filter: blur(4px);
}

// 响应式调整
@media (max-width: 768px) {
  .liquid-glass-header {
    border-radius: 25px;
    margin: 0 8px;
  }
}
</style>
