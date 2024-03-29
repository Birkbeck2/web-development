---
title: All sandboxes
outline: false

---

<script setup>
  import { data } from './sandbox.data.js'
  import slugify from 'slugify'
</script>

# All sandboxes

What are sandboxes? Check out the [sandbox guide](/lectures/will-it-work-using-sandboxes-to-test-code.html).

<div v-for="sandbox of data">
  <h2>
    {{ sandbox.text }}
    <a
      :href="'#'+slugify(sandbox.text)"
      :aria-label="'Permalink to '+sandbox.text"
      tabindex="-1"
      class="header-anchor">
    </a>
  </h2>
  <div class="flex gap-8">
    <a :href="sandbox.link" target="_blank">Browser</a>
    <a :href="sandbox.codePath" target="_blank">Code</a>
  </div>
</div>
