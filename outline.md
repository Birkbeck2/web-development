---
title: Lectures
outline: false

---

<script setup>
  import ClassMeetingList from '.vitepress/theme/ClassMeetingList.vue'
  import { data } from './outline.data.js'
  import { ref } from 'vue'
  const meetings = ref(data)
</script>

# Outline of all lectures and workshops

<ClassMeetingList :meetings="meetings" />
