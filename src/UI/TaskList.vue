<!-- TaskList.vue -->
<script setup lang="ts">
import { onMounted, ref } from "vue";

const tasks = ref<string[]>([]);
const loading = ref(true);

async function loadTasks() {
  const res = await fetch("/api/tasks");
  const data = await res.json();
  tasks.value = data;
  loading.value = false;
}

onMounted(loadTasks);
</script>

<template>
  <div>
    <p v-if="loading">Loading...</p>

    <ul v-else>
      <li v-for="task in tasks" :key="task">
        {{ task }}
      </li>
    </ul>
  </div>
</template>
