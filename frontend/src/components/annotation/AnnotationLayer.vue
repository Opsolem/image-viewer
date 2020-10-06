<template>
  <div>
    <slot></slot>
    <svg xmlns="http://www.w3.org/2000/svg">
      <annotation-polygon
        v-for="polygon in annotationsProps.polygons"
        :key="polygon.key"
        :points="polygon.points"
      />
      <annotation-text
        v-for="text in annotationsProps.texts"
        :key="text.key"
        :text="text.label"
        :point="text.point"
      />
    </svg>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, PropType } from "@vue/composition-api";
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
    const annotationsProps = computed(function() {
      const polygons: PolygonProps[] = props.annotations.map(
        (annotation: Annotation) => ({
          key: `polygon_${annotation.id}`,
          points: annotation.points
        })
      );

      // position labels to the top right of each annotation
      const texts: TextProps[] = props.annotations.map(
        (annotation: Annotation) => {
          const textPoint: Point = {
            x: Math.max(...annotation.points.map(p => p.x)) + 10,
            y: Math.min(...annotation.points.map(p => p.y)) + 20
          };

          return {
            key: `text_${annotation.id}`,
            label: annotation.label,
            point: textPoint
          };
        }
      );

      return { polygons, texts };
    });

    return { annotationsProps };
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
