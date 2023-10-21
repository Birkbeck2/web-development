---
title: All lectures
outline: false

---

<script setup>
  import ClassMeetingList from '../.vitepress/theme/ClassMeetingList.vue'
  import { data } from './lectures.data.js'
  import { ref } from 'vue'
  const meetings = ref(data)
</script>

# All lectures

<ClassMeetingList :meetings="meetings" />
