export const useUserSystem = () => {
  const system = ref('unknown')
  const isMobile = ref(false)

  const detectSystem = () => {
    if (process.client) {
      const ua = navigator.userAgent
      isMobile.value = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(ua)

      if (/Macintosh|MacIntel|MacPPC|Mac68K/.test(ua)) {
        system.value = 'mac'
      } else if (/Win32|Win64|Windows|WinCE/.test(ua)) {
        system.value = 'windows'
      } else if (/Linux|X11/.test(ua) && !/Android/.test(ua)) {
        system.value = 'linux'
      } else if (/iPhone|iPad|iPod/.test(ua)) {
        system.value = 'ios'
      } else if (/Android/.test(ua)) {
        system.value = 'android'
      }
    }
  }

  onMounted(() => {
    detectSystem()
  })

  return {
    system,
    isMobile
  }
}
