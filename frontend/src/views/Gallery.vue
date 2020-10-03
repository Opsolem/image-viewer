<template>
  <div>
    <h2>You are on the gallery page</h2>
    <div>{{ currentSeed }}</div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, Ref } from "@vue/composition-api";
import { useGetGalleryQuery } from "@/models.generated";

export default defineComponent({
  name: "Gallery",
  setup() {
    const currentSeed: Ref<string> = ref("");
    const { onResult } = useGetGalleryQuery();

    onResult(function(result) {
      const resultSeeds = result?.data.gallery.seeds;

      if (!resultSeeds || !resultSeeds[0]) {
        return;
      }

      currentSeed.value = resultSeeds[0];
    });

    return { currentSeed };
  }
});
</script>
