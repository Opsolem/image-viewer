<template>
  <div>
    <h2>You are on the gallery page</h2>
    <div>
      <gallery-navigation :seeds="seeds" v-on:navigate="handleNavigation" />
      {{ currentSeed }}
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, Ref } from "@vue/composition-api";
import { useGetGalleryQuery } from "@/models.generated";
import GalleryNavigation from "@/components/GalleryNavigation.vue";
import { useResult } from "@vue/apollo-composable";

export default defineComponent({
  name: "Gallery",
  components: {
    "gallery-navigation": GalleryNavigation
  },
  setup() {
    const currentSeed: Ref<string> = ref("");
    const { result, onResult } = useGetGalleryQuery();
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

    return { seeds, currentSeed, handleNavigation };
  }
});
</script>
