<template>
  <div>
    <item-container father-component="item"></item-container>
  </div>
</template>
<script>
import itemContainer from '@/components/itemContainer'
export default {
  name: 'item',
  components: {
    itemContainer
  }
}
</script>
<style lang="scss" scoped>

</style>
