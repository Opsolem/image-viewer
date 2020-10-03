<template>
  <div>
    <p>You are on the image page!</p>
    <p v-if="loading">We are loading the image with id {{ imageId }}</p>
    <p v-else-if="result">
      <image-loader :src="result.image.src" :id="result.image.id" />
    </p>
    <p v-else>Looks like something is wrong.</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api";
import { useGetImageQuery } from "@/models.generated";
import ImageLoader from "@/components/ImageLoader.vue";

export default defineComponent({
  components: {
    ImageLoader
  },
  setup(props, context) {
    const imageId = context.root.$route.params.id;

    const { result, loading } = useGetImageQuery({
      id: imageId
    });

    return { imageId, result, loading };
  }
});
</script>
