<template>
  <footer class="classic-footer">
    <div class="footer-content">
      <div class="footer-grid">
        <div class="footer-section">
          <h3>Contact Information</h3>
          <ul class="contact-list">
            <li v-for="(contact, index) in contactInfo" :key="index">
              <component :is="contact.icon" class="contact-icon" />
              <span>{{ contact.value }}</span>
            </li>
          </ul>
        </div>
        <div class="footer-section">
          <h3>Quick Links</h3>
          <ul class="quick-links">
            <li v-for="(link, index) in quickLinks" :key="index">
              <a :href="link.url">{{ link.text }}</a>
            </li>
          </ul>
        </div>
        <div class="footer-section">
          <h3>Newsletter</h3>
          <form class="newsletter-form" @submit.prevent="subscribe">
            <input type="email" v-model="email" placeholder="Your email" required />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </div>
      <div class="footer-bottom">
        <div class="bottom-left">
          <p>&copy; {{ currentYear }} {{ name }}. All rights reserved.</p>
          <div class="social-links">
            <a v-for="(link, index) in socialLinks" :key="index" :href="link.url" target="_blank">
              <component :is="link.icon" class="social-icon" />
            </a>
          </div>
        </div>
        <div class="bottom-right">
          <p>Powered by PortfolioBuilder</p>
        </div>
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
const email = ref('');

const contactInfo = ref([
  {
    icon: 'EmailIcon',
    value: 'contact@example.com'
  },
  {
    icon: 'PhoneIcon',
    value: '+123 456 789'
  },
  {
    icon: 'LocationIcon',
    value: '123 Street, City, Country'
  }
]);

const quickLinks = ref([
  { text: 'About', url: '/about' },
  { text: 'Projects', url: '/projects' },
  { text: 'Blog', url: '/blog' },
  { text: 'Contact', url: '/contact' }
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

const subscribe = () => {
  // Add subscription logic here
  console.log('Subscribed:', email.value);
  email.value = '';
};
</script>

<style scoped>
.classic-footer {
  background: #333;
  color: white;
  padding: 4rem 2rem 2rem;
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
  color: white;
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

.quick-links {
  list-style: none;
  padding: 0;
}

.quick-links li {
  margin-bottom: 0.5rem;
}

.quick-links a {
  color: rgba(255, 255, 255, 0.7);
  text-decoration: none;
  transition: color 0.3s;
}

.quick-links a:hover {
  color: white;
}

.newsletter-form {
  display: flex;
  gap: 1rem;
}

.newsletter-form input {
  flex: 1;
  padding: 0.75rem;
  border-radius: 4px;
  border: 1px solid #444;
  background: #444;
  color: white;
}

.newsletter-form button {
  padding: 0.75rem 1.5rem;
  border-radius: 4px;
  border: none;
  background: #007bff;
  color: white;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s;
}

.newsletter-form button:hover {
  background: #0056b3;
}

.footer-bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}

.bottom-left {
  display: flex;
  align-items: center;
  gap: 2rem;
}

.social-links {
  display: flex;
  gap: 1rem;
}

.social-icon {
  width: 24px;
  height: 24px;
  transition: transform 0.3s;
}

.social-icon:hover {
  transform: translateY(-3px);
}

.bottom-right {
  color: rgba(255, 255, 255, 0.7);
}

@media (max-width: 768px) {
  .footer-grid {
    grid-template-columns: 1fr;
  }

  .footer-bottom {
    flex-direction: column;
    text-align: center;
    gap: 1rem;
  }

  .bottom-left {
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
  }
}
</style>
