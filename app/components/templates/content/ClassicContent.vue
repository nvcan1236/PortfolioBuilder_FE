<template>
  <div class="classic-content">
    <section class="hero-section">
      <div class="hero-content">
        <h1>{{ title }}</h1>
        <p>{{ subtitle }}</p>
        <div class="hero-actions">
          <a href="#projects" class="cta-button">View Projects</a>
          <a href="#contact" class="cta-button secondary">Contact Me</a>
        </div>
      </div>
    </section>

    <section class="about-section">
      <div class="section-header">
        <h2>About Me</h2>
        <div class="section-divider"></div>
      </div>
      <div class="about-content">
        <div class="about-text">
          <p>{{ aboutText }}</p>
        </div>
        <div class="about-image">
          <img :src="profileImage" alt="Profile" class="w-24 h-24 object-contain" />
        </div>
      </div>
    </section>

    <section class="skills-section">
      <div class="section-header">
        <h2>Skills</h2>
        <div class="section-divider"></div>
      </div>
      <div class="skills-grid">
        <div v-for="skill in skills" :key="skill.name" class="skill-item">
          <div class="skill-icon">
            <component :is="skill.icon" />
          </div>
          <h3>{{ skill.name }}</h3>
          <p>{{ skill.description }}</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const props = defineProps({
  title: {
    type: String,
    default: 'Welcome to My Portfolio'
  },
  subtitle: {
    type: String,
    default: 'Full Stack Developer & Designer'
  },
  aboutText: {
    type: String,
    default: 'I am a passionate developer with experience in building modern web applications. I love creating beautiful and functional user interfaces.'
  },
  profileImage: {
    type: String,
    default: '/icons/profile.png'
  }
});

const skills = ref([
  {
    name: 'Frontend Development',
    icon: 'FrontendIcon',
    description: 'Expert in Vue.js, React, and modern web technologies'
  },
  {
    name: 'Backend Development',
    icon: 'BackendIcon',
    description: 'Proficient in Node.js, Python, and database systems'
  },
  {
    name: 'UI/UX Design',
    icon: 'DesignIcon',
    description: 'Creating intuitive and beautiful user experiences'
  }
]);
</script>

<style scoped>
.classic-content {
  padding: 2rem;
  color: #333;
}

.hero-section {
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
  padding: 4rem 2rem;
  text-align: center;
}

.hero-content h1 {
  font-size: 3rem;
  margin-bottom: 1rem;
  color: #212529;
}

.hero-content p {
  font-size: 1.2rem;
  margin-bottom: 2rem;
  color: #6c757d;
}

.hero-actions {
  display: flex;
  gap: 1rem;
  justify-content: center;
}

.cta-button {
  display: inline-block;
  padding: 0.8rem 2rem;
  border-radius: 4px;
  text-decoration: none;
  font-weight: bold;
  transition: all 0.3s ease;
}

.cta-button.primary {
  background: #007bff;
  color: white;
}

.cta-button.secondary {
  background: #f8f9fa;
  color: #212529;
  border: 2px solid #dee2e6;
}

.cta-button:hover {
  transform: translateY(-2px);
}

.section-header {
  text-align: center;
  margin-bottom: 3rem;
}

.section-header h2 {
  font-size: 2rem;
  margin-bottom: 1rem;
}

.section-divider {
  width: 60px;
  height: 3px;
  background: #007bff;
  margin: 0 auto;
}

.about-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  margin-top: 2rem;
}

.about-image img {
  width: 100%;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.skills-section {
  padding: 4rem 0;
}

.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
}

.skill-item {
  background: #fff;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s;
}

.skill-item:hover {
  transform: translateY(-5px);
}

.skill-icon {
  width: 48px;
  height: 48px;
  margin-bottom: 1rem;
}
</style>
