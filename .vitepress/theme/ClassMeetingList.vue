<script setup>
  const props = defineProps({
    meetings: Object
  })
</script>

<template>
  <div v-for="meeting of meetings.data">
    <h2>{{ meeting.text }}</h2>
    <div v-for="item of meeting.items">
      <h3><a :href="item.link">{{ item.text }}</a></h3>
      <p v-if="item.lecturer">{{ item.lecturer }}</p>
      <p v-if="item.concepts">Concepts: {{ item.concepts }}</p>
      <p v-if="item.code">Code: <code>{{ item.code }}</code></p>
    </div>
  </div>
</template>
