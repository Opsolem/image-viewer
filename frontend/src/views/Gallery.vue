<template>
  <div>
    <h2>You are on the gallery page</h2>
    <p v-if="loading">The gallery is loading</p>
    <div v-else-if="seeds">
      <gallery-navigation
        :seeds="seeds"
        :current-seed="currentSeed"
        v-on:navigate="handleNavigation"
      />
      <image-loader :seed="currentSeed" />
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, Ref } from "@vue/composition-api";
import { useResult } from "@vue/apollo-composable";
import { useGetGalleryQuery } from "@/models.generated";
import GalleryNavigation from "@/components/GalleryNavigation.vue";
import ImageLoader from "@/components/ImageLoader.vue";
import useImage from "@/hooks/use-image";

export default defineComponent({
  name: "Gallery",
  components: {
    "gallery-navigation": GalleryNavigation,
    "image-loader": ImageLoader
  },
  setup(_, context) {
    const { loadImage } = useImage();
    const { result, loading, onResult } = useGetGalleryQuery();
    const seeds = useResult(result, [], data => data.gallery.seeds);

    const currentSeed: Ref<string> = computed(function() {
      const urlSeed = context.root.$route.params.seed;

      if (!seeds.value[0]) {
        return "";
      }

      return seeds.value.findIndex(s => s === urlSeed) !== -1
        ? urlSeed
        : seeds.value[0];
    });

    function preLoadNextImage() {
      const currentIndex = seeds.value.findIndex(s => s === currentSeed.value);

      if (currentIndex === -1) {
        return;
      }

      const nextSeed = seeds.value[currentIndex + 1];

      if (nextSeed) {
        loadImage(nextSeed);
      }
    }

    function handleNavigation(seed: string) {
      context.root.$router.push({ name: "gallery-image", params: { seed } });
      preLoadNextImage();
    }

    onResult(function() {
      preLoadNextImage();
    });

    return { seeds, loading, currentSeed, handleNavigation };
  }
});
</script>
