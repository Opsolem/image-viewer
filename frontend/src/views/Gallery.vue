<template>
  <div>
    <h2>You are on the gallery page</h2>
    <p v-if="loading">The gallery is loading</p>
    <div v-else-if="seeds">
      <gallery-navigation :seeds="seeds" v-on:navigate="handleNavigation" />
      <image-loader :seed="currentSeed" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, Ref } from "@vue/composition-api";
import { useResult } from "@vue/apollo-composable";
import { useGetGalleryQuery } from "@/models.generated";
import GalleryNavigation from "@/components/GalleryNavigation.vue";
import ImageLoader from "@/components/ImageLoader.vue";

export default defineComponent({
  name: "Gallery",
  components: {
    "gallery-navigation": GalleryNavigation,
    "image-loader": ImageLoader
  },
  setup() {
    const currentSeed: Ref<string> = ref("");
    const { result, loading, onResult } = useGetGalleryQuery();
    const seeds = useResult(result, [], data => data.gallery.seeds);

    onResult(function(result) {
      const resultSeeds = result?.data.gallery.seeds;

      if (!resultSeeds || !resultSeeds[0]) {
        return;
      }

      currentSeed.value = resultSeeds[0];
    });

    function handleNavigation(seed: string) {
      currentSeed.value = seed;
    }

    return { seeds, loading, currentSeed, handleNavigation };
  }
});
</script>
