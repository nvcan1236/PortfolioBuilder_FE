<template>
  <footer class="minimal-footer">
    <div class="footer-content">
      <div class="footer-grid">
        <div class="footer-section">
          <h3>Contact</h3>
          <ul class="contact-list">
            <li v-for="(contact, index) in contactInfo" :key="index">
              <component :is="contact.icon" class="contact-icon" />
              <span>{{ contact.value }}</span>
            </li>
          </ul>
        </div>
        <div class="footer-section">
          <h3>Social</h3>
          <div class="social-links">
            <a v-for="(link, index) in socialLinks" :key="index" :href="link.url" target="_blank">
              <component :is="link.icon" class="social-icon" />
            </a>
          </div>
        </div>
      </div>
      <div class="footer-bottom">
        <p>&copy; {{ currentYear }} {{ name }}. All rights reserved.</p>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const props = defineProps({
  name: {
    type: String,
    default: 'Your Name'
  }
});

const currentYear = new Date().getFullYear();

const contactInfo = ref([
  {
    icon: 'EmailIcon',
    value: 'contact@example.com'
  },
  {
    icon: 'PhoneIcon',
    value: '+123 456 789'
  }
]);

const socialLinks = ref([
  {
    icon: 'GithubIcon',
    url: '#'
  },
  {
    icon: 'LinkedinIcon',
    url: '#'
  },
  {
    icon: 'TwitterIcon',
    url: '#'
  }
]);
</script>

<style scoped>
.minimal-footer {
  background: #f8f9fa;
  padding: 3rem 2rem 2rem;
}

.footer-content {
  max-width: 1200px;
  margin: 0 auto;
}

.footer-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 3rem;
  margin-bottom: 3rem;
}

.footer-section h3 {
  color: #333;
  margin-bottom: 1.5rem;
  font-size: 1.2rem;
}

.contact-list {
  list-style: none;
  padding: 0;
}

.contact-list li {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
}

.contact-icon {
  width: 20px;
  height: 20px;
}

.social-links {
  display: flex;
  gap: 1.5rem;
}

.social-icon {
  width: 24px;
  height: 24px;
  transition: transform 0.3s;
}

.social-icon:hover {
  transform: translateY(-3px);
}

.footer-bottom {
  text-align: center;
  padding-top: 2rem;
  border-top: 1px solid #dee2e6;
}

@media (max-width: 768px) {
  .footer-grid {
    grid-template-columns: 1fr;
  }
}
</style>
