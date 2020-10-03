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
  defineComponent,
  PropType,
  reactive,
  watch
} from "@vue/composition-api";
import { useResult } from "@vue/apollo-composable";
import { useGetImageQuery } from "@/models.generated";

export default defineComponent({
  props: {
    seed: {
      type: String as PropType<string>,
      required: true
    }
  },
  setup(props) {
    const queryVariables: { id: string } = reactive({ id: "" });
    const queryOptions: { enabled: boolean } = reactive({ enabled: false });
    const { result, loading, refetch } = useGetImageQuery(
      queryVariables,
      queryOptions
    );
    const image = useResult(result, null, data => data.image);

    watch(
      () => props.seed,
      function(newSeed) {
        queryVariables.id = newSeed;

        // to discuss
        // https://github.com/vuejs/vue-apollo/issues/909
        if (!queryOptions.enabled) {
          queryOptions.enabled = true;
          return;
        }

        refetch();
      }
    );

    return { image, loading };
  }
});
</script>
