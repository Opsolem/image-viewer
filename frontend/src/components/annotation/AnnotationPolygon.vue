<template>
  <polygon :points="path" />
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api";

export default defineComponent({
  name: "AnnotationPolygon",
  props: {
    points: {
      type: Array as PropType<Point[]>,
      default: () => []
    }
  },
  setup(props) {
    const path = props.points.map(point => `${point.x}, ${point.y}`).join(" ");

    return { path };
  }
});
</script>

<style scoped>
polygon {
  fill: #d64541;
}
</style>
