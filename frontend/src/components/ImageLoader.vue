<template>
  <div>
    <p v-if="loading">The image is loading</p>
    <div v-else-if="image">
      <p>
        The image <strong>{{ image.id }}</strong>
      </p>
      <annotation-layer :annotations="imageAnnotations">
        <img :src="image.src" :alt="image.id" />
      </annotation-layer>
    </div>
  </div>
</template>

<script lang="ts">
import {
  computed,
  defineComponent,
  inject,
  PropType,
  Ref,
  watch
} from "@vue/composition-api";
import { Annotation } from "@/models/Annotation";
import AnnotationLayer from "@/components/annotation/AnnotationLayer.vue";
import useImage from "@/hooks/use-image";

export default defineComponent({
  name: "ImageLoader",
  components: {
    "annotation-layer": AnnotationLayer
  },
  props: {
    seed: {
      type: String as PropType<string>,
      required: true
    }
  },
  setup(props) {
    const annotations = inject("annotations") as Ref<Annotation[]>;
    const imageAnnotations = computed(function() {
      return annotations.value.filter(
        (annotation: Annotation) => annotation.imageId === props.seed
      );
    });

    const { image, loading, loadImage } = useImage();
    loadImage(props.seed);
    watch(() => props.seed, loadImage);

    return { image, imageAnnotations, loading };
  }
});
</script>
