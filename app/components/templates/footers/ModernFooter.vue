<template>
  <footer class="modern-footer">
    <div class="footer-content">
      <div class="footer-grid">
        <div class="footer-section">
          <h3>Contact Me</h3>
          <ul class="contact-list">
            <li v-for="(contact, index) in contactInfo" :key="index">
              <component :is="contact.icon" class="contact-icon" />
              <span>{{ contact.value }}</span>
            </li>
          </ul>
        </div>
        <div class="footer-section">
          <h3>Social Links</h3>
          <div class="social-links">
            <a v-for="(link, index) in socialLinks" :key="index" :href="link.url" target="_blank">
              <component :is="link.icon" class="social-icon" />
            </a>
          </div>
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
        <p>&copy; {{ currentYear }} {{ name }}. All rights reserved.</p>
        <div class="footer-links">
          <a href="/privacy">Privacy Policy</a>
          <a href="/terms">Terms of Service</a>
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
.modern-footer {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
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

.newsletter-form {
  display: flex;
  gap: 1rem;
}

.newsletter-form input {
  flex: 1;
  padding: 0.75rem;
  border-radius: 25px;
  border: none;
  background: rgba(255, 255, 255, 0.1);
  color: white;
}

.newsletter-form button {
  padding: 0.75rem 1.5rem;
  border-radius: 25px;
  border: none;
  background: white;
  color: #667eea;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s;
}

.newsletter-form button:hover {
  background: #f0f1ff;
  transform: translateY(-2px);
}

.footer-bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}

.footer-links {
  display: flex;
  gap: 1.5rem;
}

.footer-links a {
  color: rgba(255, 255, 255, 0.7);
  text-decoration: none;
  transition: color 0.3s;
}

.footer-links a:hover {
  color: white;
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
}
</style>
