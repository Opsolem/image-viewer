<template>
  <article>
    <h1>You are on the homepage</h1>
    <p>
      You can
      <router-link :to="{ name: 'images-item', params: { id: 'image_1' } }">
        access to image_1
      </router-link>
      .
    </p>
    <p>
      You can
      <router-link :to="{ name: 'gallery' }">
        access to my gallery
      </router-link>
      .
    </p>
  </article>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api";

export default defineComponent({});
</script>
