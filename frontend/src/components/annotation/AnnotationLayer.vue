<template>
  <div>
    <slot></slot>
    <svg xmlns="http://www.w3.org/2000/svg">
      <annotation-polygon
        v-for="polygon in polygons"
        :key="polygon.key"
        :points="polygon.points"
      />
      <annotation-text
        v-for="text in texts"
        :key="text.key"
        :text="text.label"
        :point="text.point"
      />
    </svg>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  PropType,
  Ref,
  ref,
  watch
} from "@vue/composition-api";
import { Annotation, PolygonProps, TextProps } from "@/models/Annotation";
import Point from "@/models/Point";
import AnnotationPolygon from "@/components/annotation/AnnotationPolygon.vue";
import AnnotationText from "@/components/annotation/AnnotationText.vue";

export default defineComponent({
  name: "AnnotationLayer",
  components: {
    "annotation-polygon": AnnotationPolygon,
    "annotation-text": AnnotationText
  },
  props: {
    annotations: {
      type: Array as PropType<Annotation[]>,
      default: () => []
    }
  },
  setup(props) {
    const polygons: Ref<PolygonProps[]> = ref([]);
    const texts: Ref<TextProps[]> = ref([]);

    function computeAnnotationProps(annotations: Annotation[]) {
      polygons.value = annotations.map((annotation: Annotation) => ({
        key: `polygon_${annotation.id}`,
        points: annotation.points
      }));

      // position labels to the top right of each annotation
      texts.value = annotations.map((annotation: Annotation) => {
        const textPoint: Point = {
          x: Math.max(...annotation.points.map(p => p.x)) + 10,
          y: Math.min(...annotation.points.map(p => p.y)) + 20
        };

        return {
          key: `text_${annotation.id}`,
          label: annotation.label,
          point: textPoint
        };
      });
    }

    // compute annotation props with initial props
    computeAnnotationProps(props.annotations);

    // watch props update to re-compute annotations props
    watch(() => props.annotations, computeAnnotationProps);

    return { polygons, texts };
  }
});
</script>

<style scoped>
div {
  position: relative;
  display: inline-block;
}
svg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>
