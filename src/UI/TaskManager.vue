<!-- TaskManager.vue -->
<script setup lang="ts">
import { onMounted, ref } from 'vue'

const tasks = ref<string[]>([])
const loading = ref(true)
const error = ref('')
const newTask = ref('')

async function loadTasks() {
  try {
    const res = await fetch('/api/tasks')
    const data = await res.json()
    tasks.value = data
  } catch {
    error.value = 'Error loading tasks'
  } finally {
    loading.value = false
  }
}

function addTask() {
  if (!newTask.value) return
  tasks.value.push(newTask.value)
  newTask.value = ''
}

onMounted(loadTasks)
</script>

<template>
  <div>
    <p v-if="loading">Loading...</p>
    <p v-else-if="error">{{ error }}</p>

    <div v-else>
      <input v-model="newTask" placeholder="New task" />
      <button @click="addTask">Add</button>

      <ul>
        <li v-for="task in tasks" :key="task">
          {{ task }}
        </li>
      </ul>
    </div>
  </div>
</template>