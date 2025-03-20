import { ref, watch, onMounted } from 'vue'

const THEME_KEY = 'theme-preference'
const DARK = 'dark'
const LIGHT = 'light'
const AUTO = 'auto'

export const useTheme = () => {
  const theme = ref(localStorage.getItem(THEME_KEY) || AUTO)
  const systemDark = ref(false)

  // 检测系统主题
  const checkSystemTheme = () => {
    systemDark.value = window.matchMedia('(prefers-color-scheme: dark)').matches
  }

  // 获取实际主题
  const getActualTheme = () => {
    if (theme.value === AUTO) {
      return systemDark.value ? DARK : LIGHT
    }
    return theme.value
  }

  // 应用主题
  const applyTheme = () => {
    const actualTheme = getActualTheme()
    document.documentElement.setAttribute('data-theme', actualTheme)
  }

  // 切换主题
  const toggleTheme = () => {
    const themeMap = {
      [LIGHT]: DARK,
      [DARK]: AUTO,
      [AUTO]: LIGHT
    }
    theme.value = themeMap[theme.value]
  }

  // 监听系统主题变化
  onMounted(() => {
    checkSystemTheme()
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    mediaQuery.addEventListener('change', (e) => {
      systemDark.value = e.matches
      if (theme.value === AUTO) {
        applyTheme()
      }
    })
  })

  // 监听主题变化
  watch([theme, systemDark], () => {
    localStorage.setItem(THEME_KEY, theme.value)
    applyTheme()
  }, { immediate: true })

  return {
    theme,
    toggleTheme,
    getActualTheme
  }
} 