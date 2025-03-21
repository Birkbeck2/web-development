---
title: Student projects 
outline: false

---

<script setup>
  import { data } from './projects.data.js'
  import slugify from 'slugify'
</script>

# Student projects

These past student projects are provided as examples for you to see what has
been done previously and get ideas for your own projects.

<div v-for="group of data.data">
  <h2>
    {{ group.h2 }}
    <a
      :href="'#'+slugify(group.h2)"
      :aria-label="'Permalink to '+group.h2"
      tabindex="-1"
      class="header-anchor">
    </a>
  </h2>
  <div v-for="project of group.projects">
    <h3>
      {{ project.name }}
      <a
        :href="'#'+slugify(project.name)"
        :aria-label="'Permalink to '+project.name"
        tabindex="-1"
        class="header-anchor">
      </a>
    </h3>
    <div class="flex gap-8">
      <a v-if="project.pages" :href="project.pages" target="_blank">Live site</a>
      <a v-if="project.code" :href="project.code" target="_blank">Source code</a>
    </div>
  </div>
</div>
