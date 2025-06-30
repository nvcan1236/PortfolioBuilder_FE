<template>
  <header class="classic-header">
    <div class="header-content">
      <h1>{{ title }}</h1>
      <nav>
        <ul>
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: 'ClassicHeader',
  props: {
    title: {
      type: String,
      default: 'My Portfolio'
    }
  }
};
</script>

<style scoped>
.classic-header {
  background-color: #333;
  color: white;
  padding: 1rem;
}

.header-content {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

nav ul {
  list-style: none;
  padding: 0;
  display: flex;
  gap: 2rem;
}

nav a {
  color: white;
  text-decoration: none;
}

nav a:hover {
  text-decoration: underline;
}
</style>
