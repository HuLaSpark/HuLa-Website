<template>
  <div class="min-h-[calc(100vh-var(--header-height))] bg-[#f8fafc] dark:bg-[#111729] relative overflow-hidden">
    <div class="flex relative flex-col md:flex-row">
      <!-- Sidebar -->
      <aside
        class="md:sticky md:top-16 h-auto md:h-[calc(100vh-var(--header-height))] md:w-44 md:ml-48 w-full border-b md:border-b-0 md:border-r border-gray-200 dark:border-teal-900 overflow-y-auto">
        <nav class="p-4 space-y-1">
          <div class="mb-4">
            <h3 class="px-3 text-sm font-semibold text-gray-500 dark:text-gray-400">开始使用</h3>
            <div class="mt-1 space-y-1">
              <NuxtLink
                to="/docs/getting-started/introduction"
                class="flex items-center px-3 py-2 text-sm rounded-lg md:ml-4"
                :class="{
                  'text-teal-600': $route.path === '/docs/getting-started/introduction',
                  'hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300':
                    $route.path !== '/docs/getting-started/introduction'
                }">
                <div
                  :class="[
                    'w-5 h-5 mr-2 flex items-center justify-center rounded',
                    $route.path === '/docs/getting-started/introduction'
                      ? 'bg-teal-600'
                      : 'bg-gray-200 dark:bg-gray-700'
                  ]">
                  <Icon
                    name="ph:book-open"
                    :class="[
                      'w-3.5 h-3.5',
                      $route.path === '/docs/getting-started/introduction'
                        ? 'text-white'
                        : 'text-gray-500 dark:text-gray-400'
                    ]" />
                </div>
                安装与启动
              </NuxtLink>
            </div>
          </div>
        </nav>
      </aside>

      <!-- Main content -->
      <main class="flex-1 md:ml-2 overflow-y-auto" style="scrollbar-width: none">
        <div class="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <slot />
        </div>
      </main>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

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
</style>
