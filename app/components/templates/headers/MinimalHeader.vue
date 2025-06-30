<template>
  <header class="minimal-header">
    <div class="header-content">
      <div class="logo">
        <h1>{{ title }}</h1>
      </div>
      <nav>
        <div class="nav-menu">
          <button class="menu-toggle" @click="toggleMenu">
            <span></span>
            <span></span>
            <span></span>
          </button>
          <transition name="slide">
            <div v-if="showMenu" class="nav-items">
              <router-link to="/about">About</router-link>
              <router-link to="/projects">Projects</router-link>
              <router-link to="/contact">Contact</router-link>
            </div>
          </transition>
        </div>
      </nav>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const props = defineProps({
  title: {
    type: String,
    default: 'Portfolio'
  }
});

const showMenu = ref(false);

const toggleMenu = () => {
  showMenu.value = !showMenu.value;
};
</script>

<style scoped>
.minimal-header {
  background-color: #fff;
  padding: 1rem 2rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.header-content {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo h1 {
  font-size: 1.5rem;
  color: #333;
  margin: 0;
}

.nav-menu {
  position: relative;
}

.menu-toggle {
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
  display: flex;
  flex-direction: column;
  gap: 5px;
}

.menu-toggle span {
  width: 25px;
  height: 2px;
  background-color: #333;
  transition: 0.3s;
}

.nav-items {
  position: absolute;
  top: 100%;
  right: 0;
  background: #fff;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  padding: 1rem;
  margin-top: 0.5rem;
}

.nav-items a {
  display: block;
  padding: 0.5rem 1rem;
  color: #333;
  text-decoration: none;
  transition: 0.3s;
}

.nav-items a:hover {
  color: #007bff;
}

.slide-enter-active,
.slide-leave-active {
  transition: all 0.3s ease;
}

.slide-enter-from,
.slide-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>
