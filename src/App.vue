<template>
  <div class="app">
    <Header />
    <main class="main-content">
      <router-view></router-view>
    </main>
    <Footer />
  </div>
</template>

<script setup>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
</script>

<style>
.app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.main-content {
  flex: 1;
  padding: 80px 20px 20px;
  background-color: #f8f9fa;
}

/* 全局样式 */
:root {
  /* 浅色主题变量 */
  --primary-color: #42b883;
  --primary-dark: #3aa876;
  --text-color: #2c3e50;
  --text-light: #666;
  --bg-color: #f8f9fa;
  --card-bg: #ffffff;
  --border-color: rgba(0,0,0,0.05);
  --shadow-color: rgba(0,0,0,0.05);
  --hover-shadow: rgba(0,0,0,0.1);
  --tag-bg: rgba(66, 184, 131, 0.1);
  --code-bg: #f8f9fa;
}

[data-theme="dark"] {
  /* 深色主题变量 */
  --primary-color: #42d392;
  --primary-dark: #33bd7c;
  --text-color: #f8f9fa;
  --text-light: #dee2e6;
  --bg-color: #1a1a1a;
  --card-bg: #242424;
  --border-color: rgba(255,255,255,0.05);
  --shadow-color: rgba(0,0,0,0.3);
  --hover-shadow: rgba(0,0,0,0.4);
  --tag-bg: rgba(66, 211, 146, 0.15);
  --code-bg: #2d2d2d;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  transition: background-color 0.3s ease,
              color 0.3s ease,
              border-color 0.3s ease,
              box-shadow 0.3s ease,
              opacity 0.3s ease;
}

body {
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  line-height: 1.6;
  color: var(--text-color);
  background-color: var(--bg-color);
}

a {
  text-decoration: none;
  color: inherit;
}

button {
  cursor: pointer;
}

/* 滚动条样式 */
::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: #f1f1f1;
}

::-webkit-scrollbar-thumb {
  background: #42b883;
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background: #3aa876;
}

html {
  scroll-behavior: smooth;
  scroll-padding-top: 80px; /* 头部导航的高度 */
}
</style> 