<template>
  <div>
    <p v-if="loading">The image is loading</p>
    <div v-else-if="image">
      <p>
        The image <strong>{{ image.id }}</strong> :
      </p>
      <img :src="image.src" :alt="image.id">
    </div>
  </div>
</template>

<script lang="ts">
import {
  computed,
  defineComponent,
  inject,
  PropType,
  reactive,
  Ref,
  watch
} from "@vue/composition-api";
import { useResult } from "@vue/apollo-composable";
import { useGetImageQuery } from "@/models.generated";
import Annotation from "@/models/Annotation";

export default defineComponent({
  props: {
    seed: {
      type: String as PropType<string>,
      required: true
    }
  },
  setup(props) {
    const annotations: Ref<Annotation[]> = inject("annotations");
    const imageAnnotations = computed(function() {
      return annotations.value.filter(
        (annotation: Annotation) => annotation.imageId === props.seed
      );
    });

    const queryVariables: { id: string } = reactive({ id: "" });
    const queryOptions: { enabled: boolean } = reactive({ enabled: false });
    const { result, loading, refetch } = useGetImageQuery(
      queryVariables,
      queryOptions
    );
    const image = useResult(result, null, data => data.image);

    function loadImage(seed: string) {
      queryVariables.id = seed;

      // to discuss
      // https://github.com/vuejs/vue-apollo/issues/909
      if (!queryOptions.enabled) {
        queryOptions.enabled = true;
        return;
      }

      refetch();
    }

    loadImage(props.seed);

    watch(() => props.seed, loadImage);

    return { image, imageAnnotations, loading };
  }
});
</script>
