<template>
  <div>
    儿子2: {{value}}
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
