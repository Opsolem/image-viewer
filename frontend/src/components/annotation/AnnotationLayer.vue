<template>
  <div>
    <slot></slot>
    <svg xmlns="http://www.w3.org/2000/svg">
      <annotation-polygon
        v-for="polygon in polygons"
        :key="polygon.key"
        :points="polygon.points"
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
import Annotation from "@/models/Annotation";
import AnnotationPolygon from "@/components/annotation/AnnotationPolygon.vue";
import PolygonProps from "@/models/PolygonProps";

export default defineComponent({
  name: "AnnotationLayer",
  components: {
    "annotation-polygon": AnnotationPolygon
  },
  props: {
    annotations: {
      type: Array as PropType<Annotation[]>,
      default: () => []
    }
  },
  setup(props) {
    const polygons: Ref<PolygonProps[]> = ref([]);

    function computeAnnotationProps(annotations: Annotation[]) {
      polygons.value = annotations.map((annotation: Annotation) => ({
        key: `polygon_${annotation.id}`,
        points: annotation.points
      }));
    }

    // compute annotation props with initial props
    computeAnnotationProps(props.annotations);

    // watch props update to re-compute annotations props
    watch(() => props.annotations, computeAnnotationProps);

    return { polygons };
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
