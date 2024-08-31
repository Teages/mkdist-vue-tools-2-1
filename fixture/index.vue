<script lang="ts">
import { computed } from 'vue'

export default {
  props: {
    name: {
      type: String,
      required: true
    }
  },
  setup(props) {
    const msg = computed(() => `Hello, ${props.name}!`)

    return {
      msg
    }
  }
}
</script>

<template>
  <h1>{{ msg }}</h1>
</template>
