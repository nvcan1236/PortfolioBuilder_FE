<template>
  <div class="flex flex-col min-h-screen">
    <component :is="headerComponent" v-bind="headerProps" />
    <main class="flex-grow">
      <component :is="contentComponent" v-bind="contentProps" />
    </main>
    <footer>
      <component :is="footerComponent" v-bind="footerProps" />
    </footer>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { getTemplateConfig, type TemplateKey } from "./templatesConfig";
const props = defineProps<{ templateKey: TemplateKey }>();

const templateConfig = computed(() => getTemplateConfig(props.templateKey));
const headerComponent = computed(() => templateConfig.value.components.header);
const contentComponent = computed(
  () => templateConfig.value.components.content
);
const footerComponent = computed(() => templateConfig.value.components.footer);
const headerProps = computed(() => templateConfig.value.props.header);
const contentProps = computed(() => templateConfig.value.props.content);
const footerProps = computed(() => templateConfig.value.props.footer);
</script>

<style scoped>
/* Add any shared styles here */
</style>
