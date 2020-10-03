<template>
  <div>
    <p>You are on the image page!</p>
    <image-loader v-if="imageId" :seed="imageId" />
    <p v-else>Looks like something is wrong.</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api";
import ImageLoader from "@/components/ImageLoader.vue";

export default defineComponent({
  components: {
    ImageLoader
  },
  setup(props, context) {
    const imageId = context.root.$route.params.id;

    return { imageId };
  }
});
</script>
