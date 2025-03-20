<template>
  <header class="header">
    <nav class="nav-container">
      <div class="nav-left">
        <router-link to="/" class="logo">
          <div class="logo-icon">C</div>
          <span class="logo-text">柠檬网络</span>
        </router-link>
      </div>
      
      <div class="nav-right">
        <div class="nav-links">
          <a href="#about" class="nav-link" @click.prevent="scrollToSection('about')">关于</a>
          <a href="#skills" class="nav-link" @click.prevent="scrollToSection('skills')">技能</a>
          <a href="#projects" class="nav-link" @click.prevent="scrollToSection('projects')">项目</a>
        </div>
        <div class="theme-switch">
          <button class="theme-btn" @click="toggleTheme" :title="themeTitle">
            <i :class="themeIcon"></i>
          </button>
        </div>
      </div>
    </nav>
  </header>
</template>

<script setup>
import { computed } from 'vue'
import { useTheme } from '../composables/useTheme'

const { theme, toggleTheme } = useTheme()

// 滚动到指定部分
const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId)
  if (element) {
    const headerHeight = 80 // 头部导航的高度
    const elementPosition = element.getBoundingClientRect().top
    const offsetPosition = elementPosition + window.pageYOffset - headerHeight

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    })
  }
}

// 监听滚动以高亮当前部分
const sections = ['about', 'skills', 'projects']
let currentSection = ''

const highlightCurrentSection = () => {
  const headerHeight = 80
  sections.forEach(sectionId => {
    const element = document.getElementById(sectionId)
    if (element) {
      const rect = element.getBoundingClientRect()
      if (rect.top <= headerHeight + 50 && rect.bottom >= headerHeight) {
        currentSection = sectionId
        document.querySelector(`[href="#${sectionId}"]`)?.classList.add('active')
      } else {
        document.querySelector(`[href="#${sectionId}"]`)?.classList.remove('active')
      }
    }
  })
}

// 添加滚动监听
if (typeof window !== 'undefined') {
  window.addEventListener('scroll', highlightCurrentSection)
  window.addEventListener('load', highlightCurrentSection)
}

const themeIcon = computed(() => {
  switch (theme.value) {
    case 'light':
      return 'fas fa-sun'
    case 'dark':
      return 'fas fa-moon'
    default:
      return 'fas fa-circle-half-stroke'
  }
})

const themeTitle = computed(() => {
  switch (theme.value) {
    case 'light':
      return '切换到深色模式'
    case 'dark':
      return '切换到自动模式'
    default:
      return '切换到浅色模式'
  }
})
</script>

<style scoped>
.header {
  background-color: var(--card-bg);
  backdrop-filter: blur(10px);
  box-shadow: 0 2px 10px var(--shadow-color);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  border-bottom: 1px solid var(--border-color);
}

.nav-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0.8rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.nav-left, .nav-right {
  display: flex;
  align-items: center;
  gap: 2rem;
}

.logo {
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 0.8rem;
}

.logo-icon {
  width: 36px;
  height: 36px;
  background: linear-gradient(135deg, var(--primary-color), var(--primary-dark));
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: 700;
  font-size: 1.2rem;
  transition: transform 0.3s ease;
}

.logo:hover .logo-icon {
  transform: rotate(-10deg);
}

.logo-text {
  font-size: 1.4rem;
  font-weight: 700;
  background: linear-gradient(135deg, var(--primary-color), var(--primary-dark));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.nav-links {
  display: flex;
  gap: 2rem;
}

.nav-link {
  color: var(--text-color);
  text-decoration: none;
  font-size: 0.95rem;
  font-weight: 500;
  padding: 0.5rem;
  position: relative;
  transition: all 0.3s ease;
}

.nav-link::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 50%;
  width: 0;
  height: 2px;
  background: var(--primary-color);
  transition: all 0.3s ease;
  transform: translateX(-50%);
}

.nav-link:hover,
.nav-link.active {
  color: var(--primary-color);
}

.nav-link:hover::after,
.nav-link.active::after {
  width: 100%;
}

/* 添加滚动指示器动画 */
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.nav-link.active {
  animation: fadeIn 0.3s ease forwards;
}

.theme-btn {
  background: none;
  border: none;
  color: var(--text-color);
  font-size: 1.1rem;
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 50%;
  transition: all 0.3s ease;
  position: relative;
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.theme-btn::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border-radius: 50%;
  background: var(--primary-color);
  opacity: 0;
  transition: all 0.3s ease;
}

.theme-btn:hover::after {
  opacity: 0.1;
}

.theme-btn i {
  position: relative;
  z-index: 1;
  transition: transform 0.5s ease;
}

.theme-btn:active i {
  transform: scale(0.8);
}

@media (max-width: 768px) {
  .nav-container {
    padding: 0.8rem 1rem;
  }

  .nav-links {
    display: none;
  }

  .nav-right {
    gap: 1rem;
  }

  .logo-text {
    display: none;
  }
}
</style> 