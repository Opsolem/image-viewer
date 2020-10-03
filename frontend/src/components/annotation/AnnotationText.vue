<template>
  <text :x="point.x" :y="point.y">{{ text }}</text>
</template>

<script lang="ts">
import { defineComponent, PropType } from "@vue/composition-api";
import Point from "@/models/Point";

export default defineComponent({
  name: "AnnotationText",
  props: {
    point: {
      type: Object as PropType<Point>,
      required: true
    },
    text: {
      type: String as PropType<string>,
      required: true
    }
  }
});
</script>

<style scoped>
text {
  fill: #d64541;
  font-size: 20px;
  font-weight: bold;
}
</style>
