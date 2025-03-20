<template>
  <div class="home">
    <div class="grid-layout">
      <!-- 个人信息卡片 -->
      <div class="card profile-card">
        <img src="../assets/1.jpg" alt="头像" class="avatar">
        <h1>大鹅</h1>
        <p class="title">前端开发工程师</p>
        <p class="bio-brief">热爱技术 / 开源爱好者 / 终身学习者</p>
        <div class="quick-links">
          <a href="mailto:dae123ll@163.com" class="social-link" title="Email">
            <i class="fas fa-envelope"></i>
          </a>
          <a href="https://github.com/yang66yang" target="_blank" class="social-link" title="GitHub">
            <i class="fab fa-github"></i>
          </a>
          <a @click.prevent="copyWeChat" class="social-link" title="复制微信号">
            <i class="fab fa-weixin"></i>
          </a>
        </div>
      </div>

      <!-- 关于我卡片 -->
      <div id="about" class="card about-card">
        <h2>关于我</h2>
        <p class="bio">我是一名充满热情的前端开发者，专注于创建优秀的用户体验和界面设计。我热爱学习新技术，并且积极参与开源社区。在过去的几年里，我参与开发了多个大型Web应用项目，对现代前端开发工具链和最佳实践有深入的理解。</p>
      </div>

      <!-- 技能卡片 -->
      <div id="skills" class="card skills-card">
        <h2>技能专长</h2>
        <div class="skill-category">
          <h3><i class="fas fa-code"></i> 前端开发</h3>
          <div class="skills">
            <span class="skill-tag">JavaScript</span>
            <span class="skill-tag">TypeScript</span>
            <span class="skill-tag">Vue.js</span>
            <span class="skill-tag">React</span>
            <span class="skill-tag">HTML5</span>
            <span class="skill-tag">CSS3</span>
          </div>
        </div>
        <div class="skill-category">
          <h3><i class="fas fa-tools"></i> 工具 & 其他</h3>
          <div class="skills">
            <span class="skill-tag">Git</span>
            <span class="skill-tag">Webpack</span>
            <span class="skill-tag">Vite</span>
            <span class="skill-tag">Node.js</span>
          </div>
        </div>
      </div>

      <!-- 项目卡片 -->
      <div id="projects" class="card projects-card">
        <h2>项目经历</h2>
        
        <!-- 项目分类标签 -->
        <div class="project-categories">
          <button 
            v-for="category in categories" 
            :key="category.id"
            :class="['category-btn', { active: currentCategory === category.id }]"
            @click="currentCategory = category.id"
          >
            {{ category.name }}
          </button>
        </div>

        <!-- 项目列表 -->
        <div class="projects-list">
          <div v-for="project in filteredProjects" :key="project.id" class="project-item">
            <div class="project-header">
              <h3>{{ project.name }}</h3>
              <span class="project-period">{{ project.period }}</span>
            </div>
            
            <p class="project-desc">{{ project.description }}</p>
            
            <div class="project-tech">
              <div class="tech-stack">
                <span v-for="tech in project.technologies" :key="tech" class="tech-tag">
                  {{ tech }}
                </span>
              </div>
              <div class="project-links">
                <a v-if="project.demoUrl" :href="project.demoUrl" target="_blank" class="project-link" title="访问网站">
                  <i class="fas fa-external-link-alt"></i>
                </a>
                <a v-if="project.githubUrl" :href="project.githubUrl" target="_blank" class="project-link" title="查看源码">
                  <i class="fab fa-github"></i>
                </a>
              </div>
            </div>
          </div>
        </div>

        <!-- 加载更多按钮 -->
        <div v-if="hasMoreProjects" class="load-more">
          <button class="load-more-btn" @click="loadMoreProjects">
            加载更多项目
            <i class="fas fa-chevron-down"></i>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

// 项目分类
const categories = [
  { id: 'all', name: '全部' },
  { id: 'web', name: 'Web应用' },
  { id: 'mobile', name: '移动端' },
  { id: 'other', name: '其他项目' }
]

const currentCategory = ref('all')
const projectsPerPage = 6
const currentPage = ref(1)

// 项目数据
const projects = [
  {
    id: 1,
    name: '个人博客系统',
    period: '2024.01 - 至今',
    description: '基于 Vue 3 + TypeScript 开发的现代化个人博客系统，支持 Markdown 写作和自动部署。',
    technologies: ['Vue 3', 'TypeScript', 'Markdown'],
    category: 'web',
    demoUrl: 'https://llfone.cn',
    githubUrl: 'https://github.com/yang66yang/lemon-network'
  },
  // 添加更多项目...
]

// 根据分类筛选项目
const filteredProjects = computed(() => {
  const filtered = currentCategory.value === 'all'
    ? projects
    : projects.filter(p => p.category === currentCategory.value)
  return filtered.slice(0, currentPage.value * projectsPerPage)
})

// 是否还有更多项目
const hasMoreProjects = computed(() => {
  const filtered = currentCategory.value === 'all'
    ? projects
    : projects.filter(p => p.category === currentCategory.value)
  return filtered.length > currentPage.value * projectsPerPage
})

// 加载更多项目
const loadMoreProjects = () => {
  currentPage.value++
}

// 复制微信号功能
const copyWeChat = () => {
  const weChatId = 'abc665577oo'; // 替换为你的微信号
  navigator.clipboard.writeText(weChatId).then(() => {
    alert('微信号已复制: ' + weChatId);
  }).catch(err => {
    console.error('复制失败:', err);
  });
}
</script>

<style scoped>
.home {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
}

.grid-layout {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 2rem;
}

.card {
  background: var(--card-bg);
  border-radius: 24px;
  padding: 2rem;
  box-shadow: 0 10px 30px var(--shadow-color);
  transition: all 0.3s ease;
  border: 1px solid var(--border-color);
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 35px var(--hover-shadow);
}

/* 个人信息卡片 */
.profile-card {
  grid-column: span 4;
  text-align: center;
  background: linear-gradient(135deg, var(--card-bg) 0%, var(--bg-color) 100%);
}

/* 关于我卡片 */
.about-card {
  grid-column: span 8;
}

/* 技能卡片 */
.skills-card {
  grid-column: span 12;
}

/* 项目卡片 */
.projects-card {
  grid-column: span 12; /* 改为占据整行 */
}

.avatar {
  width: 180px;
  height: 180px;
  border-radius: 24px;
  margin-bottom: 1.5rem;
  object-fit: cover;
  border: 4px solid #fff;
  box-shadow: 0 10px 30px rgba(0,0,0,0.1);
  transition: all 0.3s ease;
}

.avatar:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 35px rgba(0,0,0,0.15);
}

h1 {
  font-size: 1.8rem;
  color: #2c3e50;
  margin-bottom: 0.5rem;
  font-weight: 700;
}

.title {
  color: #42b883;
  font-size: 1.2rem;
  margin-bottom: 1rem;
  font-weight: 600;
}

.bio-brief {
  color: #666;
  font-size: 1rem;
  margin-bottom: 1.5rem;
}

.quick-links {
  display: flex;
  gap: 1.5rem;
}

.social-link {
  color: var(--text-color);
  font-size: 1.5rem;
  transition: all 0.3s ease;
  padding: 0.5rem;
  border-radius: 12px;
  background: var(--card-bg);
  box-shadow: 0 4px 12px var(--shadow-color);
}

.social-link:hover {
  color: var(--primary-color);
  transform: translateY(-3px);
  box-shadow: 0 6px 15px var(--hover-shadow);
}

h2 {
  color: #2c3e50;
  font-size: 2rem;
  margin-bottom: 2rem;
  position: relative;
  padding-bottom: 0.5rem;
  font-weight: 700;
}

h2::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 60px;
  height: 4px;
  background: #42b883;
  border-radius: 4px;
}

.bio {
  line-height: 1.8;
  color: #444;
  font-size: 1.1rem;
}

.skill-category h3 {
  color: #2c3e50;
  margin-bottom: 1.5rem;
  font-size: 1.3rem;
  display: flex;
  align-items: center;
  gap: 0.8rem;
}

.skill-category h3 i {
  color: #42b883;
}

.skills {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}

.skill-tag {
  background: linear-gradient(135deg, #42b883 0%, #3aa876 100%);
  color: white;
  padding: 0.6rem 1.2rem;
  border-radius: 12px;
  font-size: 1rem;
  transition: all 0.3s ease;
  box-shadow: 0 4px 12px rgba(66,184,131,0.15);
}

.skill-tag:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 20px rgba(66,184,131,0.25);
}

.project-categories {
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;
  flex-wrap: wrap;
}

.category-btn {
  padding: 0.5rem 1.2rem;
  border: 1px solid var(--border-color);
  border-radius: 20px;
  background: var(--card-bg);
  color: var(--text-color);
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 0.9rem;
}

.category-btn.active {
  background: var(--primary-color);
  color: white;
  border-color: var(--primary-color);
}

.category-btn:hover:not(.active) {
  border-color: var(--primary-color);
  color: var(--primary-color);
}

.projects-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.5rem;
}

.project-item {
  background: var(--bg-color);
  border-radius: 16px;
  padding: 1.5rem;
  transition: all 0.3s ease;
  border: 1px solid var(--border-color);
}

.project-item:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 24px var(--shadow-color);
}

.project-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 1rem;
  gap: 1rem;
}

.project-header h3 {
  font-size: 1.1rem;
  color: var(--text-color);
  font-weight: 600;
}

.project-period {
  font-size: 0.8rem;
  color: var(--text-light);
  white-space: nowrap;
}

.project-desc {
  color: var(--text-light);
  font-size: 0.9rem;
  line-height: 1.6;
  margin-bottom: 1.5rem;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.project-tech {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.tech-stack {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
}

.tech-tag {
  font-size: 0.8rem;
  color: var(--primary-color);
  background: var(--tag-bg);
  padding: 0.2rem 0.6rem;
  border-radius: 12px;
}

.project-links {
  display: flex;
  gap: 0.8rem;
}

.project-link {
  color: var(--text-light);
  font-size: 1rem;
  transition: all 0.3s ease;
}

.project-link:hover {
  color: var(--primary-color);
  transform: translateY(-2px);
}

.load-more {
  text-align: center;
  margin-top: 2rem;
}

.load-more-btn {
  background: none;
  border: 2px solid var(--primary-color);
  color: var(--primary-color);
  padding: 0.8rem 2rem;
  border-radius: 25px;
  font-size: 0.9rem;
  cursor: pointer;
  transition: all 0.3s ease;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
}

.load-more-btn:hover {
  background: var(--primary-color);
  color: white;
}

.load-more-btn i {
  transition: transform 0.3s ease;
}

.load-more-btn:hover i {
  transform: translateY(2px);
}

@media (max-width: 1200px) {
  .profile-card {
    grid-column: span 12;
  }

  .about-card {
    grid-column: span 12;
  }

  .skills-card {
    grid-column: span 12;
  }

  .projects-card {
    grid-column: span 12;
  }
}

@media (max-width: 768px) {
  .home {
    padding: 1rem;
  }

  .grid-layout {
    gap: 1rem;
  }

  .card {
    padding: 1.5rem;
  }

  .project-categories {
    gap: 0.5rem;
  }

  .category-btn {
    padding: 0.4rem 1rem;
    font-size: 0.8rem;
  }

  .projects-list {
    grid-template-columns: 1fr;
  }

  .project-header {
    flex-direction: column;
    gap: 0.5rem;
  }

  .project-period {
    font-size: 0.75rem;
  }
}
</style> 