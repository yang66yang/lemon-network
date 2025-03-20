<template>
  <footer class="footer">
    <div class="footer-content">
      <div class="footer-info">
        <p class="copyright">&copy; {{ new Date().getFullYear() }} 柠檬网络. All rights reserved.</p>
        <div class="footer-links">
           <a href="mailto:dae123ll@163.com" class="social-link" title="Email">
            <i class="fas fa-envelope"></i>
          </a>
          <a href="https://github.com/yang66yang" target="_blank" class="social-link" title="GitHub">
            <i class="fab fa-github"></i>
          </a>
          <a href="https://linkedin.com/in/yourusername" target="_blank" class="social-link" title="LinkedIn">
            <i class="fab fa-weixin"></i>
          </a>
        </div>
      </div>
      <p class="powered-by">Made with <i class="fas fa-heart"></i> 大鹅</p>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background-color: #f8f9fa;
  padding: 2rem 0;
  margin-top: 4rem;
}

.footer-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  text-align: center;
}

.footer-info {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
}

.copyright {
  color: #666;
  font-size: 0.9rem;
}

.footer-links {
  display: flex;
  gap: 1.5rem;
}

.footer-links a {
  color: #2c3e50;
  font-size: 1.2rem;
  transition: all 0.3s ease;
}

.footer-links a:hover {
  color: #42b883;
  transform: translateY(-2px);
}

.powered-by {
  color: #666;
  font-size: 0.9rem;
}

.powered-by i {
  color: #ff6b6b;
  margin: 0 0.3rem;
}

@media (max-width: 768px) {
  .footer-content {
    padding: 0 1rem;
  }

  .footer-info {
    flex-direction: column;
    gap: 1rem;
  }
}
</style> 