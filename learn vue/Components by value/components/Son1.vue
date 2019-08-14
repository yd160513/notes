<template>
  <div>
    儿子1: {{value}}
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: Number,
      default: 1
    }
  }
}
</script>
