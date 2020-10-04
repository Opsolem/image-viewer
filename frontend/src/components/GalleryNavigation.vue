<template>
  <div>
    <button @click="previous" :disabled="canNavigateToPrevious">
      Previous
    </button>
    {{ `${index + 1} / ${seeds.length}` }}
    <button @click="next" :disabled="canNavigateToNext">
      Next
    </button>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, PropType } from "@vue/composition-api";

export default defineComponent({
  name: "GalleryNavigation",
  props: {
    seeds: {
      type: Array as PropType<string[]>,
      default: () => []
    },
    currentSeed: {
      type: String as PropType<string>,
      required: true
    },
    navigate: {
      type: Function as PropType<() => string>,
      default: () => null
    }
  },
  setup(props, context) {
    const index = computed(function() {
      const currentSeedIndex = props.seeds.findIndex(
        seed => seed === props.currentSeed
      );

      return currentSeedIndex !== -1 ? currentSeedIndex : 0;
    });

    const canNavigateToPrevious = computed(function() {
      return index.value <= 0;
    });

    const canNavigateToNext = computed(function() {
      return index.value >= props.seeds.length - 1;
    });

    function previous() {
      if (canNavigateToPrevious) {
        context.emit("navigate", props.seeds[index.value - 1]);
      }
    }

    function next() {
      if (canNavigateToNext) {
        context.emit("navigate", props.seeds[index.value + 1]);
      }
    }

    return {
      index,
      canNavigateToPrevious,
      canNavigateToNext,
      previous,
      next
    };
  }
});
</script>
