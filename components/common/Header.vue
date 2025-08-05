<template>
  <div
    class="bg-background/75 backdrop-blur border-b border-gray-200 dark:border-gray-800 -mb-px sticky top-0 z-50 lg:mb-0">
    <div class="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl flex justify-between items-center gap-3 h-[--header-height]">
      <div class="lg:flex-1 flex items-center gap-2.5">
        <NuxtLink to="/">
          <label class="inline-flex items-center gap-2.5 cursor-pointer">
            <img class="w-7 h-7 md:w-9 md:h-9" src="~/assets/logo/logo.png" alt="" />
            <span class="text-lg md:text-2xl text-teal-900 dark:text-teal-600 font-semibold">HuLa</span>
          </label>
        </NuxtLink>

        <div v-if="hulaVersion" class="relative inline-flex">
          <UTooltip :text="`最新版本: ${hulaVersion}`">
            <span
              class="inline-flex items-center cursor-pointer text-xs px-1.5 py-0.5 bg-teal-50 dark:bg-teal-400 dark:bg-opacity-10 text-teal-500 dark:text-teal-400 ring-1 ring-inset ring-teal-500 dark:ring-teal-400 ring-opacity-25 dark:ring-opacity-25 -mb-[2px] rounded font-semibold">
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
              :class="{ 'text-teal-600': isActive('/docs/getting-started/introduction') }"
              class="text-sm/6 font-semibold flex items-center gap-2 group-hover:text-teal-600">
              文档
              <UIcon
                name="solar:alt-arrow-down-line-duotone"
                :class="{ 'rotate-180': panelVisible }"
                class="w-4 h-4 transform transition-transform duration-300 group-hover:rotate-180 group-hover:text-teal-600" />
            </NuxtLink>
          </li>
          <template #panel>
            <div
              class="overflow-hidden focus:outline-none relative bg-white dark:bg-gray-900 ring-1 ring-gray-200 dark:ring-gray-800 rounded-md shadow-lg">
              <div class="p-2 space-y-1">
                <a
                  class="px-2 py-1.5 rounded-md flex items-start gap-2 hover:bg-gray-100/50 dark:hover:bg-gray-950/50"
                  href="/docs/getting-started/introduction">
                  <UIcon
                    name="solar:bolt-outline"
                    :class="{ 'text-teal-600': isActive('/docs/getting-started/introduction') }"
                    class="w-4 h-4 text-gray-500 dark:text-gray-400 flex-shrink-0 mt-1" />
                  <p>
                    <span
                      :class="{ 'text-teal-600': isActive('/docs/getting-started/introduction') }"
                      class="font-semibold text-sm/6 inline-block relative">
                      开始使用
                    </span>
                    <span class="text-sm leading-snug text-gray-500 dark:text-gray-400 line-clamp-2">
                      了解如何开始使用 HuLa
                    </span>
                  </p>
                </a>
              </div>
            </div>
          </template>
        </UPopover>
      </ul>

      <div class="flex justify-end items-center lg:flex-1 gap-2.5">

        <!-- 切换主题模式 -->
        <ColorMode />

        <UTooltip text="GitHub Start" class="hidden md:block">
          <a href="https://github.com/HulaSpark/HuLa">
            <img src="https://img.shields.io/github/stars/HulaSpark/HuLa" alt="star" />
          </a>
        </UTooltip>

        <UTooltip text="Gitee Start" class="hidden md:block">
          <a href="https://gitee.com/HuLaSpark/HuLa">
            <img src="https://gitee.com/HuLaSpark/HuLa/badge/star.svg?theme=gray" alt="star" />
          </a>
        </UTooltip>

        <!-- Mobile Menu Button -->
        <UButton
          class="md:hidden"
          @click="isMobileMenuOpen = true"
          size="md"
          color="gray"
          variant="ghost"
          icon="solar:hamburger-menu-linear" />
      </div>
    </div>
  </div>

  <div v-if="isMobileMenuOpen" class="fixed inset-0 bg-white dark:bg-gray-900 z-50 flex flex-col overflow-y-auto">
    <button
      @click="isMobileMenuOpen = false"
      class="absolute top-4 right-4 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200">
      <UIcon name="solar:close-circle-linear" class="w-6 h-6" />
    </button>

    <div class="p-4 space-y-4">
      <div class="flex items-center gap-2.5 border-b pb-4 border-gray-200 dark:border-gray-800">
        <NuxtLink to="/" @click="isMobileMenuOpen = false" class="inline-flex items-center gap-2.5">
          <img class="w-7 h-7" src="~/assets/logo/logo.png" alt="" />
          <span class="text-lg text-teal-900 dark:text-teal-600 font-semibold">HuLa</span>
        </NuxtLink>
        <span
          class="inline-flex items-center text-xs px-1.5 py-0.5 bg-teal-50 dark:bg-teal-400 dark:bg-opacity-10 text-teal-500 dark:text-teal-400 ring-1 ring-inset ring-teal-500 dark:ring-teal-400 ring-opacity-25 dark:ring-opacity-25 rounded font-semibold">
          {{ hulaVersion }}
        </span>
      </div>

      <div class="space-y-2">
        <h3 class="text-sm font-semibold text-gray-600 dark:text-gray-400 mb-2">文档</h3>
        <div class="space-y-1">
          <NuxtLink
            to="/docs/getting-started/introduction"
            @click="isMobileMenuOpen = false"
            :class="{ 'text-teal-600': isActive('/docs/getting-started/introduction') }"
            class="px-2 py-1.5 rounded-md hover:bg-gray-100/50 dark:hover:bg-gray-950/50 flex items-center gap-2">
            <UIcon
              name="solar:bolt-outline"
              :class="{ 'text-teal-600': isActive('/docs/getting-started/introduction') }"
              class="w-4 h-4 text-gray-500 dark:text-gray-400 flex-shrink-0" />
            <div>
              <span
                :class="{ 'text-teal-600': isActive('/docs/getting-started/introduction') }"
                class="font-semibold text-sm/6 block">
                开始使用
              </span>
              <span class="text-xs text-gray-500 dark:text-gray-400 line-clamp-1"> 了解如何开始使用 HuLa </span>
            </div>
          </NuxtLink>
        </div>
      </div>

      <div class="space-y-2 mt-4">
        <h3 class="text-sm font-semibold text-gray-600 dark:text-gray-400 mb-2">快捷操作</h3>
        <div class="grid grid-cols-2 gap-2">
          <button
            @click="handleMobileAction('new-file')"
            class="flex items-center gap-2 px-2 py-1.5 rounded-md hover:bg-gray-100/50 dark:hover:bg-gray-950/50">
            <UIcon name="i-heroicons-document-plus" class="w-4 h-4 text-gray-500 dark:text-gray-400" />
            <span class="text-sm">新建文件</span>
          </button>
          <button
            @click="handleMobileAction('new-folder')"
            class="flex items-center gap-2 px-2 py-1.5 rounded-md hover:bg-gray-100/50 dark:hover:bg-gray-950/50">
            <UIcon name="i-heroicons-folder-plus" class="w-4 h-4 text-gray-500 dark:text-gray-400" />
            <span class="text-sm">新建文件夹</span>
          </button>
          <button
            @click="handleMobileAction('hashtag')"
            class="flex items-center gap-2 px-2 py-1.5 rounded-md hover:bg-gray-100/50 dark:hover:bg-gray-950/50">
            <UIcon name="i-heroicons-hashtag" class="w-4 h-4 text-gray-500 dark:text-gray-400" />
            <span class="text-sm">添加标签</span>
          </button>
          <button
            @click="handleMobileAction('label')"
            class="flex items-center gap-2 px-2 py-1.5 rounded-md hover:bg-gray-100/50 dark:hover:bg-gray-950/50">
            <UIcon name="i-heroicons-tag" class="w-4 h-4 text-gray-500 dark:text-gray-400" />
            <span class="text-sm">添加标签</span>
          </button>
        </div>
      </div>

      <div class="space-y-2 mt-4">
        <h3 class="text-sm font-semibold text-gray-600 dark:text-gray-400 mb-2">链接</h3>
        <div class="space-y-1">
          <a
            v-for="user in users"
            :key="user.id"
            :href="user.href"
            target="_blank"
            class="flex items-center gap-2 px-2 py-1.5 rounded-md hover:bg-gray-100/50 dark:hover:bg-gray-950/50">
            <img
              :src="user.avatar.src"
              :srcset="user.avatar.srcset"
              :loading="user.avatar.loading as any"
              class="w-6 h-6 rounded-full" />
            <span class="text-sm">{{ user.label }}</span>
          </a>
        </div>
      </div>
    </div>
  </div>

  <UModal v-model="isOpen">
    <UCommandPalette
      ref="commandPaletteRef"
      :close-button="{ icon: 'i-heroicons-x-mark-20-solid', color: 'gray', variant: 'ghost' }"
      :groups="groups"
      :autoselect="false"
      @update:model-value="onSelect" />
  </UModal>
</template>

<script setup lang="ts">
const hulaVersion = ref()
const route = useRoute()
const isOpen = ref(false)
const panelVisible = ref(false)
const isMobileMenuOpen = ref(false)
const router = useRouter()
const toast = useToast()
const commandPaletteRef = ref()
const users = [
  {
    id: 'HuLaSpark',
    label: 'HuLaSpark',
    href: 'https://github.com/HuLaSpark/HuLa',
    target: '_blank',
    avatar: {
      src: 'https://avatars.githubusercontent.com/u/182812476?s=48&v=4',
      srcset: 'https://avatars.githubusercontent.com/u/182812476?s=48&v=4 2x',
      loading: 'lazy'
    }
  },
  {
    id: 'nongyehong',
    label: 'nongyehong',
    href: 'https://github.com/nongyehong',
    target: '_blank',
    avatar: {
      src: 'https://avatars.githubusercontent.com/u/87641407?v=4',
      srcset: 'https://avatars.githubusercontent.com/u/87641407?v=4 2x',
      loading: 'lazy'
    }
  },
  {
    id: 'smarroufin',
    label: 'smarroufin',
    href: 'https://github.com/smarroufin',
    target: '_blank',
    avatar: {
      src: 'https://ipx.nuxt.com/s_16x16/gh_avatar/smarroufin',
      srcset: 'https://ipx.nuxt.com/s_32x32/gh_avatar/smarroufin 2x',
      loading: 'lazy'
    }
  }
]

const actions = [
  {
    id: 'new-file',
    label: 'Add new file',
    icon: 'i-heroicons-document-plus',
    click: () => toast.add({ title: 'New file added!' }),
    shortcuts: ['⌘', 'N']
  },
  {
    id: 'new-folder',
    label: 'Add new folder',
    icon: 'i-heroicons-folder-plus',
    click: () => toast.add({ title: 'New folder added!' }),
    shortcuts: ['⌘', 'F']
  },
  {
    id: 'hashtag',
    label: 'Add hashtag',
    icon: 'i-heroicons-hashtag',
    click: () => toast.add({ title: 'Hashtag added!' }),
    shortcuts: ['⌘', 'H']
  },
  {
    id: 'label',
    label: 'Add label',
    icon: 'i-heroicons-tag',
    click: () => toast.add({ title: 'Label added!' }),
    shortcuts: ['⌘', 'L']
  }
]

const groups = computed(() =>
  [
    commandPaletteRef.value?.query
      ? {
          key: 'users',
          commands: users
        }
      : {
          key: 'recent',
          label: 'Recent searches',
          commands: users.slice(0, 1)
        },
    {
      key: 'actions',
      commands: actions
    }
  ].filter(Boolean)
)

const onSelect = (option: any) => {
  if (option.click) {
    option.click()
  } else if (option.to) {
    router.push(option.to)
  } else if (option.href) {
    window.open(option.href, '_blank')
  }
}

// 检查当前路由是否匹配
const isActive = (path: string) => {
  return route.path === path
}

const handleMobileAction = (action: string) => {
  switch (action) {
    case 'new-file':
      toast.add({ title: 'New file added!' })
      break
    case 'new-folder':
      toast.add({ title: 'New folder added!' })
      break
    case 'hashtag':
      toast.add({ title: 'Hashtag added!' })
      break
    case 'label':
      toast.add({ title: 'Label added!' })
      break
    default:
      break
  }
}

onMounted(() => {
  hulaVersion.value = localStorage.getItem('hulaVersion') || void 0
})
</script>

<style scoped lang="scss"></style>
