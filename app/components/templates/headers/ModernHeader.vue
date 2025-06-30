<template>
  <header class="modern-header">
    <div class="header-content">
      <h1>{{ title }}</h1>
      <nav>
        <div class="nav-buttons">
          <button @click="scrollTo('about')">About</button>
          <button @click="scrollTo('projects')">Projects</button>
          <button @click="scrollTo('contact')">Contact</button>
        </div>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: 'ModernHeader',
  props: {
    title: {
      type: String,
      default: 'My Portfolio'
    }
  },
  methods: {
    scrollTo(section) {
      const element = document.getElementById(section);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }
};
</script>

<style scoped>
.modern-header {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding: 1.5rem;
}

.header-content {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.nav-buttons {
  display: flex;
  gap: 1rem;
}

button {
  background: none;
  border: 2px solid white;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 25px;
  cursor: pointer;
  transition: all 0.3s ease;
}

button:hover {
  background: white;
  color: #667eea;
}
</style>
