<template>
  <article>
    <h1>You are on the homepage</h1>
    <p>
      You can
      <router-link :to="{ name: 'images-item', params: { id: 'my-image' } }">
        load my image
      </router-link>
      .
    </p>
  </article>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api";

export default defineComponent({});
</script>
