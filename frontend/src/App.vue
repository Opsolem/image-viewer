<template>
  <div id="app">
    <h1>Welcome to my Image Viewer!</h1>
    <router-view />
  </div>
</template>

<script lang="ts">
import { defineComponent, provide, Ref, ref } from "@vue/composition-api";
import { Annotation } from "@/models/Annotation";

export default defineComponent({
  name: "App",
  setup() {
    const annotations: Ref<Annotation[]> = ref([]);
    provide("annotations", annotations);

    fetch("https://htest.blob.core.windows.net/public/annotations.json")
      .then(response => response.json())
      .then(data => (annotations.value = data));
  }
});
</script>
