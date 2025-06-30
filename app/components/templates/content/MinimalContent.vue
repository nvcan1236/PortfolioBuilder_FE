<template>
  <div class="minimal-content">
    <div class="hero-section">
      <div class="hero-content">
        <h1>{{ title }}</h1>
        <p>{{ subtitle }}</p>
        <div class="hero-actions">
          <a href="#projects" class="cta-button">View Projects</a>
        </div>
      </div>
    </div>

    <div class="about-section">
      <h2>About</h2>
      <div class="about-content">
        <div class="about-text">
          <p>{{ aboutText }}</p>
        </div>
        <div class="about-image">
          <img :src="profileImage" alt="Profile" class=" h-24 object-contain" />
        </div>
      </div>
    </div>

    <div class="skills-section">
      <h2>Skills</h2>
      <div class="skills-grid">
        <div v-for="skill in skills" :key="skill.name" class="skill-item">
          <div class="skill-icon">
            <component :is="skill.icon" />
          </div>
          <h3>{{ skill.name }}</h3>
        </div>
      </div>
    </div>

    <div class="projects-section">
      <h2>Projects</h2>
      <div class="projects-grid">
        <div v-for="project in projects" :key="project.title" class="project-card">
          <div class="project-image">
            <img :src="project.image" :alt="project.title" class="w-24 h-24 object-contain" />
          </div>
          <div class="project-info">
            <h3>{{ project.title }}</h3>
            <p>{{ project.description }}</p>
            <div class="project-links">
              <a v-if="project.github" :href="project.github" target="_blank" class="github-link">
                <!-- <GithubIcon /> -->
              </a>
              <a v-if="project.demo" :href="project.demo" target="_blank" class="demo-link">
                <!-- <ExternalLinkIcon /> -->
              </a>
            </div>
          </div>
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

const skills = ref([
  {
    name: 'Frontend Development',
    icon: 'FrontendIcon'
  },
  {
    name: 'Backend Development',
    icon: 'BackendIcon'
  },
  {
    name: 'UI/UX Design',
    icon: 'DesignIcon'
  }
]);

const projects = ref([
  {
    title: 'Project One',
    description: 'A modern web application built with Vue.js and TypeScript',
    image: '/icons/developer.png',
    github: 'https://github.com/username/project1',
    demo: 'https://project1.com'
  },
  {
    title: 'Project Two',
    description: 'A responsive e-commerce website with modern design',
    image: '/icons/developer.png',
    github: 'https://github.com/username/project2',
    demo: 'https://project2.com'
  },
  {
    title: 'Project Three',
    description: 'A data visualization dashboard with real-time updates',
    image: '/icons/developer.png',
    github: 'https://github.com/username/project3',
    demo: 'https://project3.com'
  }
]);
</script>

<style scoped>
.minimal-content {
  padding: 2rem;
  color: #333;
}

.hero-section {
  padding: 4rem 0;
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
  justify-content: center;
  gap: 1rem;
}

.cta-button {
  display: inline-block;
  padding: 0.8rem 2rem;
  border-radius: 4px;
  text-decoration: none;
  font-weight: bold;
  background: #007bff;
  color: white;
  transition: all 0.3s ease;
}

.cta-button:hover {
  background: #0056b3;
  transform: translateY(-2px);
}

section {
  margin-bottom: 4rem;
}

h2 {
  font-size: 2rem;
  margin-bottom: 2rem;
  color: #212529;
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
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
}

.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
}

.skill-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 1rem;
}

.skill-icon {
  width: 48px;
  height: 48px;
  margin-bottom: 1rem;
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
}

.project-card {
  background: #fff;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s;
}

.project-card:hover {
  transform: translateY(-5px);
}

.project-image img {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.project-info {
  padding: 1.5rem;
}

.project-info h3 {
  margin-bottom: 1rem;
  color: #212529;
}

.project-info p {
  margin-bottom: 1.5rem;
  color: #6c757d;
}

.project-links {
  display: flex;
  gap: 1rem;
}

.github-link,
.demo-link {
  display: inline-flex;
  align-items: center;
  color: #007bff;
  text-decoration: none;
  transition: color 0.3s;
}

.github-link:hover,
.demo-link:hover {
  color: #0056b3;
}

@media (max-width: 768px) {
  .about-content {
    grid-template-columns: 1fr;
  }

  .hero-content h1 {
    font-size: 2.5rem;
  }
}
</style>
