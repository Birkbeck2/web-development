---
title: All workshops
outline: false

---

<script setup>
  import ClassMeetingList from '../.vitepress/theme/ClassMeetingList.vue'
  import { data } from './workshops.data.js'
  import { ref } from 'vue'
  const meetings = ref(data)
</script>

# All workshops

<ClassMeetingList :meetings="meetings" />
