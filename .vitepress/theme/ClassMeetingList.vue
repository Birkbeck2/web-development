<script setup>
  import VPLink from '../../node_modules/vitepress/dist/client/theme-default/components/VPLink.vue'
  import slugify from 'slugify'
  const props = defineProps({
    meetings: Object
  })
</script>

<template>
  <div v-for="meeting of meetings.data">
    <h2 :id="slugify(meeting.text)">
      <a :href="'#'+slugify(meeting.text)">{{ meeting.text }}</a>
    </h2>
    <p v-if="meeting.lecturer">{{ meeting.lecturer }}</p>
    <div v-for="item of meeting.items">
      <h3><VPLink :href="item.link">{{ item.text }}</VPLink></h3>
      <p v-if="item.lecturer">{{ item.lecturer }}</p>
      <p v-if="item.concepts">Concepts: {{ item.concepts }}</p>
      <p v-if="item.code">Code: <code>{{ item.code }}</code></p>
    </div>
  </div>
</template>
