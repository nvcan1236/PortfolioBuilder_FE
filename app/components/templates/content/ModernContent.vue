<template>
  <div class="modern-content">
    <div class="hero-section">
      <div class="hero-content">
        <h1>{{ title }}</h1>
        <p>{{ subtitle }}</p>
        <div class="cta-buttons">
          <button class="primary-btn">View Projects</button>
          <button class="secondary-btn">Contact Me</button>
        </div>
      </div>
    </div>

    <div class="about-section">
      <h2>About Me</h2>
      <div class="about-grid">
        <div class="about-text">
          <p>{{ aboutText }}</p>
        </div>
        <div class="about-image">
          <img :src="profileImage" alt="Profile" class="w-24 h-24 object-contain" />
        </div>
      </div>
    </div>

    <div class="skills-section">
      <h2>Skills</h2>
      <div class="skills-grid">
        <div v-for="skill in skills" :key="skill.name" class="skill-card">
          <div class="skill-icon">
            <component :is="skill.icon" />
          </div>
          <h3>{{ skill.name }}</h3>
          <p>{{ skill.description }}</p>
        </div>
      </div>
    </div>
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

// Sample skills data
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
.modern-content {
  min-height: 100vh;
  padding: 2rem;
}

.hero-section {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 4rem 2rem;
  text-align: center;
}

.hero-content {
  max-width: 800px;
  margin: 0 auto;
}

.hero-content h1 {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.cta-buttons {
  display: flex;
  gap: 1rem;
  justify-content: center;
  margin-top: 2rem;
}

.primary-btn, .secondary-btn {
  padding: 0.8rem 2rem;
  border-radius: 25px;
  font-weight: bold;
  transition: 0.3s;
}

.primary-btn {
  background: white;
  color: #667eea;
  border: none;
}

.primary-btn:hover {
  background: #f0f1ff;
  transform: translateY(-2px);
}

.secondary-btn {
  background: rgba(255, 255, 255, 0.1);
  color: white;
  border: 2px solid white;
}

.secondary-btn:hover {
  background: rgba(255, 255, 255, 0.2);
  transform: translateY(-2px);
}

.about-section {
  padding: 4rem 0;
}

.about-grid {
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
  background: #f8f9fa;
}

.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
}

.skill-card {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s;
}

.skill-card:hover {
  transform: translateY(-5px);
}

.skill-icon {
  width: 48px;
  height: 48px;
  margin-bottom: 1rem;
}
</style>
