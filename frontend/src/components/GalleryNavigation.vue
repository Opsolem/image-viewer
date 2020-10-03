<template>
  <div>
    <button @click="previous" :disabled="canNavigateToPrevious">
      Previous
    </button>
    <button @click="next" :disabled="canNavigateToNext">
      Next
    </button>
  </div>
</template>

<script lang="ts">
import {
  computed,
  defineComponent,
  PropType,
  Ref,
  ref
} from "@vue/composition-api";

export default defineComponent({
  name: "GalleryNavigation",
  props: {
    seeds: {
      type: Array as PropType<string[]>,
      default: () => []
    },
    navigate: {
      type: Function as PropType<() => string>,
      default: () => null
    }
  },
  setup(props, context) {
    const index: Ref<number> = ref(0);

    const canNavigateToPrevious = computed(function() {
      return index.value <= 0;
    });

    const canNavigateToNext = computed(function() {
      return index.value >= props.seeds.length - 1;
    });

    function previous() {
      if (canNavigateToPrevious) {
        index.value--;
        context.emit("navigate", props.seeds[index.value]);
      }
    }

    function next() {
      if (canNavigateToNext) {
        index.value++;
        context.emit("navigate", props.seeds[index.value]);
      }
    }

    return {
      canNavigateToPrevious,
      canNavigateToNext,
      previous,
      next
    };
  }
});
</script>
