<template>
  <PageBackground>
    <!-- 首页介绍 -->
    <div class="relative pt-20 pb-16 sm:pb-24 lg:pb-32">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <!-- Hero Section -->
        <div class="text-center relative z-[1]">
          <!-- Background decorative elements -->
          <div class="absolute inset-0 overflow-hidden pointer-events-none">
            <div
              class="absolute top-20 left-1/4 w-72 h-72 bg-gradient-to-r from-teal-500/10 to-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
            <div
              class="absolute top-32 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl animate-pulse animation-delay-400"></div>
            <div
              class="absolute top-40 left-1/2 transform -translate-x-1/2 w-80 h-80 bg-gradient-to-r from-yellow-500/10 to-orange-500/10 rounded-full blur-3xl animate-pulse animation-delay-600"></div>
          </div>

          <div class="mb-8 animate-fade-in relative">
            <NuxtLink to="https://github.com/HuLaSpark/HuLa" target="_blank" rel="noopener noreferrer">
              <span
                class="inline-flex items-center text-sm px-4 py-2 bg-gradient-to-r from-teal-50 to-blue-50 dark:from-teal-400/10 dark:to-blue-400/10 text-teal-600 dark:text-teal-400 ring-1 ring-inset ring-teal-500/25 dark:ring-teal-400/25 rounded-full font-semibold transition-all duration-300 hover:from-teal-100 hover:to-blue-100 dark:hover:from-teal-400/15 dark:hover:to-blue-400/15 hover:scale-105 hover:shadow-lg hover:shadow-teal-500/20 relative overflow-hidden">
                <span
                  class="absolute inset-0 bg-gradient-to-r from-teal-600/10 to-blue-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                <span class="relative z-10">🚀 HuLa {{ hulaVersion }} 现已发布</span>
                <UIcon
                  name="solar:arrow-right-line-duotone"
                  class="w-5 h-5 ml-1 relative z-10 transition-transform duration-300 group-hover:translate-x-1" />
              </span>
            </NuxtLink>
          </div>

          <div class="relative">
            <h1
              class="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-6xl lg:text-7xl mb-8 relative">
              <span class="block animate-fade-in-up relative">
                高度集成的
                <span
                  class="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-teal-500 to-blue-500 rounded-full opacity-20 animate-ping"></span>
              </span>
              <span
                class="block mt-2 bg-gradient-to-r from-teal-600 via-blue-600 to-purple-600 dark:from-teal-500 dark:via-blue-500 dark:to-purple-500 bg-clip-text text-transparent animate-fade-in-up animation-delay-200 relative">
                IM 框架
                <span
                  class="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-teal-500 to-blue-500 rounded-full opacity-50"></span>
              </span>
            </h1>
          </div>

          <div class="mx-auto max-w-3xl mb-12 animate-fade-in-up animation-delay-400 relative">
            <p class="text-xl text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
              HuLa 是一款
              <a
                href="https://github.com/HuLaSpark/HuLa"
                target="_blank"
                rel="noopener noreferrer"
                class="text-teal-600 dark:text-teal-400 hover:underline font-medium transition-colors duration-300 relative">
                开源的即时通讯应用程序
                <span
                  class="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-teal-500 to-blue-500 scale-x-0 transition-transform duration-300 hover:scale-x-100"></span>
              </a>
              ，功能更全面和强大。
            </p>

            <p class="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              可集成更多应用插件，满足各种应用场景。
            </p>

            <!-- Feature highlights -->
            <div class="flex flex-wrap justify-center gap-4 mt-8 animate-fade-in-up animation-delay-600">
              <span
                class="px-3 py-1 bg-gradient-to-r from-teal-500/10 to-blue-500/10 text-teal-600 dark:text-teal-400 rounded-full text-sm font-medium border border-teal-500/20">
                💻 跨端能力
              </span>
              <span
                class="px-3 py-1 bg-gradient-to-r from-purple-500/10 to-pink-500/10 text-purple-600 dark:text-purple-400 rounded-full text-sm font-medium border border-purple-500/20">
                🚀 高性能
              </span>
              <span
                class="px-3 py-1 bg-gradient-to-r from-orange-500/10 to-red-500/10 text-orange-600 dark:text-orange-400 rounded-full text-sm font-medium border border-orange-500/20">
                🎨 现代化界面
              </span>
              <span
                class="px-3 py-1 bg-gradient-to-r from-green-500/10 to-emerald-500/10 text-green-600 dark:text-green-400 rounded-full text-sm font-medium border border-green-500/20">
                🔧 可扩展
              </span>
            </div>
          </div>

          <!-- CTA Buttons -->
          <div class="mt-10 flex flex-wrap items-center justify-center gap-6 animate-fade-in-up animation-delay-600">
            <a
              href="/docs/getting-started/introduction"
              class="group relative inline-flex items-center px-8 py-4 rounded-xl bg-gradient-to-r from-teal-500 to-blue-500 text-white hover:from-teal-600 hover:to-blue-600 transition-all duration-300 shadow-lg shadow-teal-500/20 hover:shadow-xl hover:shadow-teal-500/30 hover:scale-105 transform overflow-hidden">
              <span
                class="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              <span class="relative z-10 font-medium text-lg">开始使用</span>
              <UIcon
                name="solar:arrow-right-linear"
                class="w-5 h-5 ml-2 relative z-10 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
            <div v-if="!isMobile" class="hidden md:block">
              <!-- Mac下载按钮 -->
              <UPopover v-if="system === 'mac'" v-model:open="panelVisible" mode="hover">
                <div class="flex items-center gap-4">
                  <div
                    :class="{ 'text-teal-600': panelVisible }"
                    class="group flex items-center gap-2 text-sm bg-[#fefefe] w-fit px-6 py-2 rounded-md dark:bg-gray-800">
                    <svg class="size-6 group-hover:text-teal-600"><use href="#mac"></use></svg>
                    <span class="group-hover:text-teal-600">MacOS</span>
                    <UIcon
                      name="solar:alt-arrow-down-line-duotone"
                      :class="{ 'rotate-180': panelVisible }"
                      class="w-4 h-4 group-hover:text-teal-600 group-hover:rotate-180" />
                  </div>
                </div>

                <template #panel>
                  <div class="p-2 flex flex-col gap-2">
                    <a
                      v-for="(item, index) in macDownloads"
                      :key="index"
                      class="flex items-center gap-4 py-1 px-2 box-border rounded-md hover:bg-gray-100 hover:dark:bg-gray-800"
                      rel="noopener noreferrer"
                      :href="item.url">
                      <svg class="size-4 flex-shrink-0"><use href="#to-bottom"></use></svg>
                      <p class="text-end w-full">{{ item.label }}</p>
                    </a>
                  </div>
                </template>
              </UPopover>

              <!-- Windows下载按钮 -->
              <template v-if="system === 'windows'">
                <div class="flex items-center gap-4">
                  <a
                    class="group flex items-center gap-2 text-sm bg-[#fefefe] w-fit px-6 py-2 rounded-md dark:bg-gray-800"
                    rel="noopener noreferrer"
                    :href="windowsDownload.url">
                    <svg class="size-6 group-hover:text-teal-600"><use href="#windows"></use></svg>
                    <span class="group-hover:text-teal-600">Windows</span>
                  </a>
                </div>
              </template>

              <!-- Linux下载按钮 -->
              <UPopover v-if="system === 'linux'" v-model:open="linuxPanelVisible" mode="hover">
                <div class="flex items-center gap-4">
                  <div
                    :class="{ 'text-teal-600': linuxPanelVisible }"
                    class="group flex items-center gap-2 text-sm bg-[#fefefe] w-fit px-6 py-2 rounded-md dark:bg-gray-800">
                    <UIcon name="solar:linux-bold" class="size-6 group-hover:text-teal-600" />
                    <span class="group-hover:text-teal-600">Linux</span>
                    <UIcon
                      name="solar:alt-arrow-down-line-duotone"
                      :class="{ 'rotate-180': linuxPanelVisible }"
                      class="w-4 h-4 group-hover:text-teal-600 group-hover:rotate-180" />
                  </div>
                </div>

                <template #panel>
                  <div class="p-2 flex flex-col gap-2">
                    <a
                      v-for="(item, index) in linuxDownloads"
                      :key="index"
                      class="flex items-center gap-4 py-1 px-2 box-border rounded-md hover:bg-gray-100 hover:dark:bg-gray-800"
                      rel="noopener noreferrer"
                      :href="item.url">
                      <svg class="size-4 flex-shrink-0"><use href="#to-bottom"></use></svg>
                      <p class="text-end w-full">{{ item.label }}</p>
                    </a>
                  </div>
                </template>
              </UPopover>
            </div>
            <div v-else class="text-center py-4 text-gray-500">移动端版本敬请期待</div>
          </div>
        </div>

        <!-- 统计数据展示区域 -->
        <div class="mt-32 relative">
          <div class="text-center mb-16">
            <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-4">项目数据</h2>
            <p class="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">见证 HuLa 的成长与发展</p>
          </div>

          <!-- 统计卡片 -->
          <div class="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-32">
            <div class="relative group">
              <div
                class="absolute inset-0 bg-gradient-to-r from-teal-500/20 to-blue-500/20 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div
                class="relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/50 dark:border-gray-700/50 hover:border-teal-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-teal-500/10">
                <div class="text-center">
                  <div
                    class="w-12 h-12 bg-gradient-to-r from-teal-500 to-blue-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <UIcon name="solar:star-bold" class="w-6 h-6 text-white" />
                  </div>
                  <div class="text-2xl font-bold text-gray-900 dark:text-white mb-1 counter" :data-target="githubStats.stars">0</div>
                  <div class="text-sm text-gray-600 dark:text-gray-400">GitHub Stars</div>
                </div>
              </div>
            </div>

            <div class="relative group">
              <div
                class="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div
                class="relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/50 dark:border-gray-700/50 hover:border-purple-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/10">
                <div class="text-center">
                  <div
                    class="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <UIcon name="solar:code-2-bold" class="w-6 h-6 text-white" />
                  </div>
                  <div class="text-2xl font-bold text-gray-900 dark:text-white mb-1 counter" :data-target="githubStats.commits">0</div>
                  <div class="text-sm text-gray-600 dark:text-gray-400">代码提交</div>
                </div>
              </div>
            </div>

            <div class="relative group">
              <div
                class="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div
                class="relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/50 dark:border-gray-700/50 hover:border-orange-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/10">
                <div class="text-center">
                  <div
                    class="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <UIcon name="solar:users-group-rounded-bold" class="w-6 h-6 text-white" />
                  </div>
                  <div class="text-2xl font-bold text-gray-900 dark:text-white mb-1 counter" :data-target="githubStats.contributors">0</div>
                  <div class="text-sm text-gray-600 dark:text-gray-400">贡献者</div>
                </div>
              </div>
            </div>

            <div class="relative group">
              <div
                class="absolute inset-0 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div
                class="relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/50 dark:border-gray-700/50 hover:border-green-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-green-500/10">
                <div class="text-center">
                  <div
                    class="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <UIcon name="solar:download-bold" class="w-6 h-6 text-white" />
                  </div>
                  <div class="text-2xl font-bold text-gray-900 dark:text-white mb-1 counter" :data-target="githubStats.downloads">0</div>
                  <div class="text-sm text-gray-600 dark:text-gray-400">下载量</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Key Features -->
        <div class="mt-32 relative">
          <div class="text-center mb-16">
            <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-4">核心功能</h2>
            <p class="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              为现代即时通讯场景量身打造的强大功能特性
            </p>
          </div>

          <div class="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div
              class="relative rounded-2xl border border-gray-200 dark:border-gray-800 p-8 hover:border-teal-500 dark:hover:border-teal-500 transition-all duration-300 group hover:shadow-xl hover:shadow-teal-500/10 hover:-translate-y-1 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm">
              <div class="absolute -top-4 left-4">
                <span
                  class="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-r from-teal-500 to-blue-500 text-white transform group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <UIcon name="solar:chat-dots-bold" class="w-5 h-5" />
                </span>
              </div>
              <h3
                class="mt-4 text-xl font-semibold text-gray-900 dark:text-white group-hover:text-teal-500 dark:group-hover:text-teal-400 transition-colors duration-300">
                即时通讯
              </h3>
              <p class="mt-3 text-gray-600 dark:text-gray-400 leading-relaxed">
                支持文本、图片、语音等多种消息类型，实现流畅的即时通讯体验。基于 WebSocket
                的实时通信，确保消息的及时送达。
              </p>
            </div>

            <div
              class="relative rounded-2xl border border-gray-200 dark:border-gray-800 p-8 hover:border-teal-500 dark:hover:border-teal-500 transition-all duration-300 group hover:shadow-xl hover:shadow-teal-500/10 hover:-translate-y-1 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm">
              <div class="absolute -top-4 left-4">
                <span
                  class="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 text-white transform group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <UIcon name="solar:shield-keyhole-bold" class="w-5 h-5" />
                </span>
              </div>
              <h3
                class="mt-4 text-xl font-semibold text-gray-900 dark:text-white group-hover:text-teal-500 dark:group-hover:text-teal-400 transition-colors duration-300">
                安全可靠
              </h3>
              <p class="mt-3 text-gray-600 dark:text-gray-400 leading-relaxed">
                采用端到端加密技术，确保用户隐私和数据安全。支持消息加密传输，保护您的通信内容不被窃取。
              </p>
            </div>

            <div
              class="relative rounded-2xl border border-gray-200 dark:border-gray-800 p-8 hover:border-teal-500 dark:hover:border-teal-500 transition-all duration-300 group hover:shadow-xl hover:shadow-teal-500/10 hover:-translate-y-1 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm">
              <div class="absolute -top-4 left-4">
                <span
                  class="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 text-white transform group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <UIcon name="solar:code-square-bold" class="w-5 h-5" />
                </span>
              </div>
              <h3
                class="mt-4 text-xl font-semibold text-gray-900 dark:text-white group-hover:text-teal-500 dark:group-hover:text-teal-400 transition-colors duration-300">
                开源生态
              </h3>
              <p class="mt-3 text-gray-600 dark:text-gray-400 leading-relaxed">
                完全开源，支持自定义开发和扩展，打造属于你的IM系统。提供丰富的API接口，方便与其他系统集成。
              </p>
            </div>

            <div
              class="relative rounded-2xl border border-gray-200 dark:border-gray-800 p-8 hover:border-teal-500 dark:hover:border-teal-500 transition-all duration-300 group hover:shadow-xl hover:shadow-teal-500/10 hover:-translate-y-1 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm">
              <div class="absolute -top-4 left-4">
                <span
                  class="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500 text-white transform group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <UIcon name="solar:widget-bold" class="w-5 h-5" />
                </span>
              </div>
              <h3
                class="mt-4 text-xl font-semibold text-gray-900 dark:text-white group-hover:text-teal-500 dark:group-hover:text-teal-400 transition-colors duration-300">
                跨平台支持
              </h3>
              <p class="mt-3 text-gray-600 dark:text-gray-400 leading-relaxed">
                支持 Windows、MacOS 等多个平台，提供统一的用户体验。基于 Tauri 构建，确保应用性能和稳定性。
              </p>
            </div>

            <div
              class="relative rounded-2xl border border-gray-200 dark:border-gray-800 p-8 hover:border-teal-500 dark:hover:border-teal-500 transition-all duration-300 group hover:shadow-xl hover:shadow-teal-500/10 hover:-translate-y-1 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm">
              <div class="absolute -top-4 left-4">
                <span
                  class="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-r from-orange-500 to-red-500 text-white transform group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <UIcon name="solar:user-plus-bold" class="w-5 h-5" />
                </span>
              </div>
              <h3
                class="mt-4 text-xl font-semibold text-gray-900 dark:text-white group-hover:text-teal-500 dark:group-hover:text-teal-400 transition-colors duration-300">
                社区驱动
              </h3>
              <p class="mt-3 text-gray-600 dark:text-gray-400 leading-relaxed">
                活跃的开发者社区，持续提供功能更新和问题修复。欢迎参与项目开发，共同打造更好的即时通讯工具。
              </p>
            </div>

            <div
              class="relative rounded-2xl border border-gray-200 dark:border-gray-800 p-8 hover:border-teal-500 dark:hover:border-teal-500 transition-all duration-300 group hover:shadow-xl hover:shadow-teal-500/10 hover:-translate-y-1 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm">
              <div class="absolute -top-4 left-4">
                <span
                  class="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-500 text-white transform group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <UIcon name="solar:settings-bold" class="w-5 h-5" />
                </span>
              </div>
              <h3
                class="mt-4 text-xl font-semibold text-gray-900 dark:text-white group-hover:text-teal-500 dark:group-hover:text-teal-400 transition-colors duration-300">
                高度可定制
              </h3>
              <p class="mt-3 text-gray-600 dark:text-gray-400 leading-relaxed">
                提供丰富的配置选项，满足不同场景的需求。支持主题定制、插件扩展，打造个性化的通讯工具。
              </p>
            </div>
          </div>
        </div>

        <!-- 产品展示 -->
        <div class="mt-32 relative">
          <div class="text-center mb-16">
            <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-4">产品展示</h2>
            <p class="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">优雅的界面设计，流畅的用户体验</p>
          </div>

          <div class="relative w-full flex items-center justify-center" @click="toggleImage">
            <div
              class="relative cursor-pointer">
              <Transition name="fade" mode="out-in">
                <img
                  v-if="showFirstImage"
                  key="first"
                  class="dark:hidden w-full max-w-5xl aspect-auto md:aspect-[5xl] select-none"
                  src="/assets/images/1.png"
                  alt="HuLa 应用界面展示" />
                <img
                  v-else
                  key="second"
                  class="dark:hidden w-full max-w-5xl aspect-auto md:aspect-[5xl] select-none"
                  src="/assets/images/3.png"
                  alt="HuLa 应用界面展示" />
              </Transition>
              <Transition name="fade" mode="out-in">
                <img
                  v-if="showFirstImage"
                  key="first-dark"
                  class="hidden dark:block w-full max-w-5xl aspect-auto md:aspect-[5xl] select-none"
                  src="/assets/images/2.png"
                  alt="HuLa 应用界面展示" />
                <img
                  v-else
                  key="second-dark"
                  class="hidden dark:block w-full max-w-5xl aspect-auto md:aspect-[5xl] select-none"
                  src="/assets/images/4.png"
                  alt="HuLa 应用界面展示" />
              </Transition>
            </div>
          </div>
        </div>

        <!-- Technical Features -->
        <div class="mt-32 relative">
          <!-- Background glow effect -->
          <div class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[400px] pointer-events-none">
            <div
              class="absolute inset-0 bg-gradient-to-r from-teal-500/30 to-blue-500/30 blur-[64px] opacity-20 animate-pulse"></div>
          </div>

          <div class="text-center mb-16 relative">
            <h2 class="text-3xl font-bold text-gray-900 dark:text-white">技术特性</h2>
            <p class="mt-4 text-lg text-gray-600 dark:text-gray-400">基于现代化技术栈，提供强大的功能支持</p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-8 relative">
            <div
              class="p-8 rounded-2xl bg-gradient-to-br from-white/80 to-gray-50/80 dark:from-gray-800/80 dark:to-gray-900/80 backdrop-blur-sm group hover:scale-[1.02] transition-all duration-300 hover:shadow-xl border border-gray-200/50 dark:border-gray-700/50">
              <div class="flex items-center mb-6">
                <div
                  class="w-12 h-12 rounded-xl bg-gradient-to-r from-teal-500 to-blue-500 flex items-center justify-center mr-4">
                  <UIcon name="solar:server-bold" class="w-6 h-6 text-white" />
                </div>
                <h3 class="text-xl font-semibold text-gray-900 dark:text-white">后端架构</h3>
              </div>
              <ul class="space-y-4 text-gray-600 dark:text-gray-400">
                <li class="flex items-center">
                  <UIcon name="solar:check-circle-bold" class="w-5 h-5 mr-3 text-teal-500" />
                  基于 Spring Boot 的微服务架构
                </li>
                <li class="flex items-center">
                  <UIcon name="solar:check-circle-bold" class="w-5 h-5 mr-3 text-teal-500" />
                  高性能的 WebSocket 服务
                </li>
                <li class="flex items-center">
                  <UIcon name="solar:check-circle-bold" class="w-5 h-5 mr-3 text-teal-500" />
                  分布式消息队列支持
                </li>
              </ul>
            </div>

            <div
              class="p-8 rounded-2xl bg-gradient-to-br from-white/80 to-gray-50/80 dark:from-gray-800/80 dark:to-gray-900/80 backdrop-blur-sm group hover:scale-[1.02] transition-all duration-300 hover:shadow-xl border border-gray-200/50 dark:border-gray-700/50">
              <div class="flex items-center mb-6">
                <div
                  class="w-12 h-12 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center mr-4">
                  <UIcon name="solar:screencast-2-bold" class="w-6 h-6 text-white" />
                </div>
                <h3 class="text-xl font-semibold text-gray-900 dark:text-white">客户端技术</h3>
              </div>
              <ul class="space-y-4 text-gray-600 dark:text-gray-400">
                <li class="flex items-center">
                  <UIcon name="solar:check-circle-bold" class="w-5 h-5 mr-3 text-teal-500" />
                  Tauri + Vue3 + Typescript 构建
                </li>
                <li class="flex items-center">
                  <UIcon name="solar:check-circle-bold" class="w-5 h-5 mr-3 text-teal-500" />
                  优雅的UI设计和交互体验
                </li>
                <li class="flex items-center">
                  <UIcon name="solar:check-circle-bold" class="w-5 h-5 mr-3 text-teal-500" />
                  高效的消息处理机制
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 技术栈 -->
    <div class="w-full py-20 flex flex-col items-center justify-center relative overflow-hidden">
      <!-- Background glow effect -->
      <div class="text-center max-w-4xl mx-auto px-4 relative">
        <span class="text-sm font-semibold text-teal-500 dark:text-teal-400 mb-3 block"> 开源技术 </span>
        <h2
          class="pb-1 text-3xl sm:text-4xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
          采用尖端技术构建
        </h2>

        <!-- Overlapping Cards -->
        <div class="relative mt-12 mb-16">
          <!-- Background glow effect -->
          <div
            class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] pointer-events-none">
            <div
              class="absolute inset-0 bg-gradient-to-r from-teal-500/30 to-blue-500/30 blur-[64px] opacity-20 animate-pulse"></div>
          </div>

          <!-- Cards Container -->
          <div class="relative grid grid-cols-1 md:grid-cols-2 gap-6 perspective-1000">
            <!-- First Card -->
            <div class="group">
              <div
                class="aspect-square bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-xl border border-gray-100 dark:border-gray-700 transition-all duration-500 hover:shadow-2xl hover:scale-105 hover:z-10 hover:border-teal-500/50 dark:hover:border-teal-400/50">
                <div class="h-full flex flex-col">
                  <div class="flex items-start gap-4 mb-4">
                    <div class="flex -space-x-4">
                      <img
                        src="~/assets/home/Dawn.jpeg"
                        alt="User Avatar"
                        class="w-12 h-12 rounded-full border-2 border-white" />
                      <img
                        src="~/assets/home/ZOL.jpeg"
                        alt="User Avatar"
                        class="w-12 h-12 rounded-full border-2 border-white" />
                      <img
                        src="~/assets/home/EzLittleChen.jpeg"
                        alt="User Avatar"
                        class="w-12 h-12 rounded-full border-2 border-white" />
                    </div>

                    <div class="flex-1">
                      <div class="font-semibold text-gray-900 dark:text-white">HuLa 社区</div>
                      <div class="text-sm text-teal-500 dark:text-teal-400">开源贡献者</div>
                    </div>
                  </div>
                  <p class="text-sm line-clamp-4 text-gray-600 dark:text-gray-400 flex-1 text-left leading-relaxed">
                    “HuLa 的现代技术栈使开发变得轻而易举。Vue 3、TypeScript 和 Tauri
                    为构建跨平台应用程序奠定了极其强大的基础。”
                  </p>
                </div>
              </div>
            </div>

            <!-- Second Card -->
            <div class="group">
              <div
                class="aspect-square bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-xl border border-gray-100 dark:border-gray-700 transition-all duration-500 hover:shadow-2xl hover:scale-105 hover:z-10 hover:border-teal-500/50 dark:hover:border-teal-400/50">
                <div class="h-full flex flex-col">
                  <div class="flex items-start gap-4 mb-4">
                    <div class="w-12 h-12 relative">
                      <TransitionGroup name="fade">
                        <img
                          v-for="(image, index) in techImages"
                          :key="image.src"
                          :src="image.src"
                          :alt="image.alt"
                          v-show="currentImageIndex === index"
                          class="w-12 h-12 absolute top-0 left-0" />
                      </TransitionGroup>
                    </div>

                    <div class="flex-1">
                      <div class="font-semibold text-gray-900 dark:text-white">开发者经验</div>
                      <div class="text-sm text-teal-500 dark:text-teal-400">核心团队</div>
                    </div>
                  </div>
                  <p class="text-sm line-clamp-4 text-gray-600 dark:text-gray-400 flex-1 text-left leading-relaxed">
                    “Vite 和 UnoCSS 的集成通过即时 HMR 提供了卓越的开发者体验
                    以及实用至上的造型。非常适合快速开发和原型设计。”
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <p class="text-gray-600 dark:text-gray-400 text-lg relative">
          HuLa 自信地采用现代开源技术构建，确保可靠性、性能和开发人员 经验。
        </p>
      </div>

      <div class="flex items-center justify-center gap-8 flex-wrap mt-12">
        <a href="https://vitejs.dev" target="_blank" rel="noopener" class="group">
          <div
            class="p-4 rounded-xl bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 group-hover:border-teal-500/50 transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg">
            <img
              class="h-8 lg:h-10 rounded-md filter grayscale group-hover:grayscale-0 transition-all duration-300"
              src="/assets/home/vite.svg"
              alt="vite" />
          </div>
        </a>
        <a href="https://www.typescriptlang.org" target="_blank" rel="noopener" class="group">
          <div
            class="p-4 rounded-xl bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 group-hover:border-teal-500/50 transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg">
            <img
              class="h-8 lg:h-10 rounded-md filter grayscale group-hover:grayscale-0 transition-all duration-300"
              src="/assets/home/TS.svg"
              alt="typescript" />
          </div>
        </a>
        <a href="https://tauri.app" target="_blank" rel="noopener" class="group">
          <div
            class="p-4 rounded-xl bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 group-hover:border-teal-500/50 transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg">
            <img
              class="h-8 lg:h-10 rounded-md filter grayscale group-hover:grayscale-0 transition-all duration-300"
              src="/assets/home/tauri.png"
              alt="tauri" />
          </div>
        </a>
        <a href="https://vuejs.org" target="_blank" rel="noopener" class="group">
          <div
            class="p-4 rounded-xl bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 group-hover:border-teal-500/50 transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg">
            <img
              class="h-8 lg:h-10 rounded-md filter grayscale group-hover:grayscale-0 transition-all duration-300"
              src="/assets/home/vue.png"
              alt="vue" />
          </div>
        </a>
        <a href="https://unocss.dev" target="_blank" rel="noopener" class="group">
          <div
            class="p-4 rounded-xl bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 group-hover:border-teal-500/50 transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg">
            <img
              class="h-8 lg:h-10 rounded-md filter grayscale group-hover:grayscale-0 transition-all duration-300"
              src="/assets/home/unocss.png"
              alt="unocss" />
          </div>
        </a>
      </div>
    </div>

    <!-- 社区部分 -->
    <div class="relative mt-32 text-center px-4 sm:px-6">
      <h2 class="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">加入我们</h2>
      <p class="mt-4 text-base sm:text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
        HuLa
        是一个开源项目，我们欢迎所有开发者参与贡献。无论是提交代码、报告问题还是改进文档，您的每一份贡献都将帮助我们构建更好的即时通讯工具。
      </p>
      <div class="mt-8 flex flex-col sm:flex-row justify-center gap-4 px-4">
        <a
          href="https://github.com/HuLaSpark"
          target="_blank"
          rel="noopener noreferrer"
          class="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 rounded-lg bg-[#24292e] text-white hover:bg-[#2f363d] transition">
          <UIcon name="mdi:github" class="w-5 h-5 mr-2" />
          <span class="font-medium">GitHub</span>
        </a>
        <a
          href="/docs/getting-started/introduction"
          class="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 rounded-lg bg-teal-500 text-white hover:bg-teal-600 transition">
          <UIcon name="solar:book-bold" class="w-5 h-5 mr-2" />
          <span class="font-medium">开发文档</span>
        </a>
      </div>
    </div>

    <!-- 页脚部分 -->
    <footer
      class="relative mt-32 bg-gradient-to-b from-[#f8fafc] to-gray-100 dark:from-gray-900 dark:to-gray-950 w-full overflow-hidden">
      <!-- 装饰性背景元素 -->
      <div class="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          class="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-r from-teal-500/5 to-blue-500/5 rounded-full blur-3xl"></div>
        <div
          class="absolute bottom-0 right-1/4 w-80 h-80 bg-gradient-to-r from-purple-500/5 to-pink-500/5 rounded-full blur-3xl"></div>
      </div>

      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        <!-- 联系方式 -->
        <div class="flex flex-col lg:flex-row items-start gap-8 mb-8">
          <div class="flex-shrink-0 animate-fade-in-up">
            <img
              class="h-24 hover:scale-105 transition-transform duration-300"
              src="/assets/logo/hula.png"
              alt="HuLa Logo" />
          </div>
          <div class="flex-1 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            <div class="animate-fade-in-up animation-delay-200">
              <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                <span class="w-2 h-2 bg-teal-500 rounded-full mr-2"></span>
                联系我们
              </h3>
              <div class="space-y-3 text-gray-600 dark:text-gray-300">
                <p class="flex items-center gap-2 hover:text-teal-500 transition-colors duration-300">
                  <UIcon name="i-heroicons-envelope" class="w-4 h-4 text-teal-500" />
                  <a href="mailto:2439646234@qq.com" class="text-sm">邮箱联系</a>
                </p>
                <p class="flex items-center gap-2">
                  <UIcon name="i-heroicons-map-pin" class="w-4 h-4 text-teal-500" />
                  <span class="text-sm">中国</span>
                </p>
              </div>
            </div>
            <div class="animate-fade-in-up animation-delay-400">
              <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                <span class="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                关注我们
              </h3>
              <div class="flex space-x-4">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://github.com/HuLaSpark"
                  class="w-10 h-10 bg-gray-100 dark:bg-gray-800 rounded-xl flex items-center justify-center text-gray-600 dark:text-gray-300 hover:text-white hover:bg-gray-800 dark:hover:bg-white dark:hover:text-gray-800 transition-all duration-300 hover:scale-110">
                  <UIcon name="i-simple-icons-github" class="size-5" />
                </a>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://gitee.com/HuLaSpark"
                  class="w-10 h-10 bg-gray-100 dark:bg-gray-800 rounded-xl flex items-center justify-center text-gray-600 dark:text-gray-300 hover:text-white hover:bg-red-500 transition-all duration-300 hover:scale-110">
                  <UIcon name="i-simple-icons-gitee" class="size-5" />
                </a>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://gitcode.com/HuLaSpark"
                  class="w-10 h-10 bg-gray-100 dark:bg-gray-800 rounded-xl flex items-center justify-center text-gray-600 dark:text-gray-300 hover:text-white hover:bg-blue-500 transition-all duration-300 hover:scale-110">
                  <img src="/assets/svg/gitcode.png" alt="GitCode" class="size-5" />
                </a>
              </div>
            </div>
            <div class="animate-fade-in-up animation-delay-600">
              <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                <span class="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                快速链接
              </h3>
              <div class="space-y-3 text-gray-600 dark:text-gray-300 text-sm">
                <p>
                  <a
                    href="/docs/getting-started/introduction"
                    class="hover:text-teal-500 transition-colors duration-300 flex items-center gap-2">
                    <UIcon name="solar:book-2-linear" class="w-4 h-4" />
                    文档中心
                  </a>
                </p>
                <p>
                  <a href="/" class="hover:text-teal-500 transition-colors duration-300 flex items-center gap-2">
                    <UIcon name="solar:info-circle-linear" class="w-4 h-4" />
                    关于我们
                  </a>
                </p>
                <p>
                  <a href="/" class="hover:text-teal-500 transition-colors duration-300 flex items-center gap-2">
                    <UIcon name="solar:shield-check-linear" class="w-4 h-4" />
                    隐私政策
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
        <!-- 分隔线 -->
        <div class="border-t border-gray-200 dark:border-gray-800 my-8 opacity-50"></div>
        <!-- 版权信息 -->
        <div class="text-center text-sm text-gray-500 dark:text-gray-400 animate-fade-in-up animation-delay-800">
          <p class="flex items-center justify-center gap-2">
            <span>Copyright © {{ new Date().getFullYear() }} HuLaSpark All Rights Reserved.</span>
            <span class="hidden sm:inline">•</span>
            <span class="hidden sm:inline">Made with ❤️ in China</span>
          </p>
        </div>
      </div>
    </footer>
  </PageBackground>
</template>
<script setup lang="ts">
import { useUserSystem } from '~/hooks/useUserSystem'
import { getCachedStats, isCacheExpired, saveCachedStats } from '~/utils/githubStatsCache'

useSeoMeta({
  title: 'HuLa: 一款高度集成的即时通讯应用'
})
const hulaVersion = ref()
const notVersion = ref()
const panelVisible = ref(false)
const linuxPanelVisible = ref(false)
const showFirstImage = ref(true)
const { system, isMobile } = useUserSystem()
const currentImageIndex = ref(0)

// GitHub 统计数据
const githubStats = ref({
  stars: 0,
  commits: 0,
  contributors: 0,
  downloads: 0
})
const techImages = ref([
  {
    src: '/assets/home/vite.svg',
    alt: 'Vite'
  },
  {
    src: '/assets/home/unocss.png',
    alt: 'UnoCSS'
  }
])

const macDownloads = computed(() => [
  {
    label: 'aarch64.app.tar.gz',
    url: `https://gitee.com/HuLaSpark/HuLa/releases/download/${hulaVersion.value}/HuLa_aarch64.app.tar.gz`,
    filename: 'aarch64.app.tar.gz'
  },
  {
    label: 'x64.app.tar.gz',
    url: `https://gitee.com/HuLaSpark/HuLa/releases/download/${hulaVersion.value}/HuLa_x64.app.tar.gz`,
    filename: 'x64.app.tar.gz'
  },
  {
    label: 'aarch64.dmg',
    url: `https://gitee.com/HuLaSpark/HuLa/releases/download/${hulaVersion.value}/HuLa_${notVersion.value}_aarch64.dmg`,
    filename: `HuLa_${notVersion.value}_aarch64.dmg`
  },
  {
    label: 'x64.dmg',
    url: `https://gitee.com/HuLaSpark/HuLa/releases/download/${hulaVersion.value}/HuLa_${notVersion.value}_x64.dmg`,
    filename: `HuLa_${notVersion.value}_x64.dmg`
  }
])

const windowsDownload = computed(() => ({
  label: 'x64_zh-CN_windows.msi',
  url: `https://gitee.com/HuLaSpark/HuLa/releases/download/${hulaVersion.value}/HuLa_${hulaVersion.value}_x64_zh-CN.msi`,
  filename: `HuLa_${hulaVersion.value}_x64_zh-CN_windows.msi`
}))

const linuxDownloads = computed(() => [
  {
    label: 'deb (Debian/Ubuntu)',
    url: `https://gitee.com/HuLaSpark/HuLa/releases/download/${hulaVersion.value}/HuLa_${notVersion.value}_amd64.deb`,
    filename: `HuLa_${notVersion.value}_amd64.deb`
  },
  {
    label: 'rpm (Fedora/RHEL)',
    url: `https://gitee.com/HuLaSpark/HuLa/releases/download/${hulaVersion.value}/HuLa-${notVersion.value}-1.x86_64.rpm`,
    filename: `HuLa_${notVersion.value}_x86_64.rpm`
  }
])

const toggleImage = () => {
  showFirstImage.value = !showFirstImage.value
}

let imageRotateInterval: NodeJS.Timeout
const startImageRotation = () => {
  imageRotateInterval = setInterval(() => {
    currentImageIndex.value = (currentImageIndex.value + 1) % techImages.value.length
  }, 3000)
}

// 数字计数器动画
const animateCounter = (element: Element, target: number, duration = 2000) => {
  const start = 0
  const increment = target / (duration / 16) // 60fps
  let current = start

  const timer = setInterval(() => {
    current += increment
    if (current >= target) {
      element.textContent = target.toLocaleString()
      clearInterval(timer)
    } else {
      element.textContent = Math.floor(current).toLocaleString()
    }
  }, 16)
}

// 观察器用于检测元素是否进入视口
const observeCounters = () => {
  const counters = document.querySelectorAll('.counter')
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const target = parseInt(entry.target.getAttribute('data-target') || '0')
          animateCounter(entry.target, target)
          observer.unobserve(entry.target)
        }
      })
    },
    { threshold: 0.5 }
  )

  counters.forEach((counter) => observer.observe(counter))
}


// 获取 GitHub 仓库信息（Stars）
const fetchGitHubRepoInfo = async (): Promise<number> => {
  try {
    const data = await $fetch<{ success: boolean; stars: number }>('/api/github/repo')
    if (data.success) {
      return data.stars || 0
    }
    return 0
  } catch (error: any) {
    console.error('获取 GitHub Stars 失败:', error.message || error)
    return 0
  }
}

// 获取贡献者数量
const fetchContributors = async (): Promise<number> => {
  try {
    const data = await $fetch<{ success: boolean; count: number }>('/api/github/contributors')
    if (data.success) {
      return data.count || 0
    }
    return 0
  } catch (error: any) {
    console.error('获取贡献者数量失败:', error.message || error)
    return 0
  }
}

// 获取提交数量
const fetchCommitsCount = async (): Promise<number> => {
  try {
    const data = await $fetch<{ success: boolean; count: number }>('/api/github/commits')
    if (data.success) {
      return data.count || 0
    }
    return 0
  } catch (error: any) {
    console.error('获取提交数量失败:', error.message || error)
    return 0
  }
}

// 获取 releases 下载量
const fetchDownloadsCount = async (): Promise<number> => {
  try {
    const response = await $fetch<{ success: boolean; count: number; cached?: boolean }>(
      '/api/github/clones'
    )
    
    if (response.success) {
      return response.count || 0
    }
    return 0
  } catch (error: any) {
    console.error('获取 releases 下载量失败:', error.message || error)
    return 0
  }
}

// 获取所有 GitHub 统计数据（带 localStorage 缓存）
const fetchGitHubStats = async () => {
  // 1. 先尝试从 localStorage 读取缓存
  const cached = getCachedStats()
  
  if (cached && !isCacheExpired(cached)) {
    // 缓存存在且未过期，使用缓存数据（立即显示，不等待网络请求）
    githubStats.value = {
      stars: cached.stars,
      commits: cached.commits,
      contributors: cached.contributors,
      downloads: cached.downloads
    }
    
    // 数据加载完成后，观察计数器
    await nextTick()
    observeCounters()
    
    // 2. 缓存未过期，不需要重新获取，直接返回
    return
  }
  
  // 3. 没有缓存或缓存已过期
  if (cached && isCacheExpired(cached)) {
    // 缓存已过期，先使用旧数据显示，然后异步获取新数据
    githubStats.value = {
      stars: cached.stars,
      commits: cached.commits,
      contributors: cached.contributors,
      downloads: cached.downloads
    }
    
    // 数据加载完成后，观察计数器
    await nextTick()
    observeCounters()
    
    // 异步获取新数据（不阻塞 UI）
    Promise.all([
      fetchGitHubRepoInfo(),
      fetchContributors(),
      fetchCommitsCount(),
      fetchDownloadsCount()
    ]).then(([stars, contributors, commits, downloads]) => {
      // 只有成功获取到数据（值大于0）才更新
      const newStats = {
        stars: stars > 0 ? stars : cached.stars,
        commits: commits > 0 ? commits : cached.commits,
        contributors: contributors > 0 ? contributors : cached.contributors,
        downloads: downloads > 0 ? downloads : cached.downloads
      }
      
      // 更新显示
      githubStats.value = newStats
      
      // 保存到缓存
      saveCachedStats(newStats)
      
      // 重新观察计数器（如果数据有变化）
      nextTick(() => {
        observeCounters()
      })
    }).catch((error) => {
      console.error('异步更新统计数据失败:', error)
      // 失败时保持使用缓存数据
    })
  } else {
    // 没有缓存或缓存已过期，同步获取数据
    const [stars, contributors, commits, downloads] = await Promise.all([
      fetchGitHubRepoInfo(),
      fetchContributors(),
      fetchCommitsCount(),
      fetchDownloadsCount()
    ])
    
    // 更新显示
    githubStats.value = {
      stars,
      commits,
      contributors,
      downloads
    }
    
    // 保存到缓存
    saveCachedStats({
      stars,
      commits,
      contributors,
      downloads
    })
    
    // 数据获取完成后，观察计数器
    await nextTick()
    observeCounters()
  }
}

onMounted(() => {
  fetch(
    'https://gitee.com/api/v5/repos/HuLaSpark/HuLa/tags?access_token=a9029798336825cea39ac9e4413b8579&sort=updated&direction=desc&page=1&per_page=1',
    {
      method: 'GET'
    }
  )
    .then((res) => res.json())
    .then((res) => {
      hulaVersion.value = res[0].name
      notVersion.value = hulaVersion.value.replace('v', '')
      localStorage.setItem('hulaVersion', hulaVersion.value)
    })
  startImageRotation()

  // 获取 GitHub 统计数据
  fetchGitHubStats()
})

onUnmounted(() => {
  clearInterval(imageRotateInterval)
})
</script>

<style scoped>
/** */
.fade-enter-active,
.fade-leave-active {
  transition: all 0.6s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: scale(0.95);
}

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

/* Custom animations */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes float {
  0%,
  100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-10px);
  }
}

@keyframes glow {
  0%,
  100% {
    box-shadow: 0 0 20px rgba(20, 184, 166, 0.3);
  }
  50% {
    box-shadow: 0 0 30px rgba(20, 184, 166, 0.6);
  }
}

.animate-fade-in {
  animation: fadeIn 0.8s ease-out;
}

.animate-fade-in-up {
  animation: fadeInUp 0.8s ease-out;
}

.animation-delay-200 {
  animation-delay: 0.2s;
}

.animation-delay-400 {
  animation-delay: 0.4s;
}

.animation-delay-600 {
  animation-delay: 0.6s;
}

.animate-float {
  animation: float 3s ease-in-out infinite;
}

.animate-glow {
  animation: glow 2s ease-in-out infinite;
}

/* Hover effects */
.hover-lift:hover {
  transform: translateY(-8px);
  transition: all 0.3s ease;
}

.hover-glow:hover {
  box-shadow: 0 0 25px rgba(20, 184, 166, 0.4);
  transition: all 0.3s ease;
}

/* Gradient text */
.gradient-text {
  background: linear-gradient(135deg, #14b8a6, #0ea5e9);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

/* Magnetic effect */
.magnetic-effect {
  transition: transform 0.3s ease;
}

.magnetic-effect:hover {
  transform: translate3d(0, -2px, 0);
}

/* Ripple effect */
.ripple {
  position: relative;
  overflow: hidden;
}

.ripple::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 0;
  height: 0;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.5);
  transform: translate(-50%, -50%);
  transition:
    width 0.6s,
    height 0.6s;
}

.ripple:hover::before {
  width: 300px;
  height: 300px;
}

/* Breathing animation */
@keyframes breathe {
  0%,
  100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
}

.breathe {
  animation: breathe 3s ease-in-out infinite;
}

/* Morphing border */
.morphing-border {
  position: relative;
  border-radius: 16px;
  background: linear-gradient(45deg, #f3f4f6, #e5e7eb);
  padding: 2px;
}

.dark .morphing-border {
  background: linear-gradient(45deg, #374151, #1f2937);
}

.morphing-border::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border-radius: 16px;
  background: linear-gradient(45deg, #14b8a6, #0ea5e9, #8b5cf6, #ec4899);
  background-size: 400% 400%;
  animation: morphing-gradient 8s ease infinite;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.morphing-border:hover::before {
  opacity: 1;
}

@keyframes morphing-gradient {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

/* Parallax effect */
.parallax-element {
  transform: translateZ(0);
  will-change: transform;
}

/* Stagger animation */
.stagger-animation {
  animation: staggerFade 0.8s ease-out forwards;
}

@keyframes staggerFade {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.stagger-animation:nth-child(1) {
  animation-delay: 0.1s;
}
.stagger-animation:nth-child(2) {
  animation-delay: 0.2s;
}
.stagger-animation:nth-child(3) {
  animation-delay: 0.3s;
}
.stagger-animation:nth-child(4) {
  animation-delay: 0.4s;
}
.stagger-animation:nth-child(5) {
  animation-delay: 0.5s;
}
.stagger-animation:nth-child(6) {
  animation-delay: 0.6s;
}

/* Neon glow effect */
.neon-glow {
  position: relative;
}

.neon-glow::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: inherit;
  border-radius: inherit;
  filter: blur(20px);
  opacity: 0;
  transition: opacity 0.3s ease;
  z-index: -1;
}

.neon-glow:hover::after {
  opacity: 0.8;
}

/* Loading shimmer effect */
.shimmer {
  position: relative;
  overflow: hidden;
}

.shimmer::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
  animation: shimmer 2s infinite;
}

@keyframes shimmer {
  0% {
    left: -100%;
  }
  100% {
    left: 100%;
  }
}

/* Pulse ring effect */
.pulse-ring {
  position: relative;
}

.pulse-ring::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100%;
  height: 100%;
  border: 2px solid #14b8a6;
  border-radius: 50%;
  transform: translate(-50%, -50%);
  animation: pulse-ring 1.5s ease-out infinite;
}

@keyframes pulse-ring {
  0% {
    transform: translate(-50%, -50%) scale(0.8);
    opacity: 1;
  }
  100% {
    transform: translate(-50%, -50%) scale(1.4);
    opacity: 0;
  }
}

/* Glass effect */
.glass-effect {
  backdrop-filter: blur(10px);
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.dark .glass-effect {
  background: rgba(0, 0, 0, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.1);
}

/* Scrolling animation */
@keyframes scroll-reveal {
  from {
    opacity: 0;
    transform: translateY(50px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.scroll-reveal {
  opacity: 0;
  animation: scroll-reveal 0.8s ease-out forwards;
}

/* Responsive text sizing */
@media (max-width: 640px) {
  .text-responsive {
    font-size: 1.5rem;
  }
}

@media (min-width: 641px) and (max-width: 1024px) {
  .text-responsive {
    font-size: 2rem;
  }
}

@media (min-width: 1025px) {
  .text-responsive {
    font-size: 2.5rem;
  }
}
</style>
