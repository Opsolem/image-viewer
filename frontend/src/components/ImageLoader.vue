<template>
  <div>
    The image <strong>{{ id }}</strong
    >:<br />
    <img :src="src" :alt="id" />
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "@vue/composition-api";

export default defineComponent({
  props: {
    src: {
      type: String as PropType<string>,
      required: true
    },
    id: {
      type: String as PropType<string>,
      required: true
    }
  }
});
</script>
