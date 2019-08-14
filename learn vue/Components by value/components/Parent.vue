<template>
  <div>
    Parent {{mvy}}
    <Son1 :value="mvy"></Son1>
  </div>
</template>
<script>
import Son1 from './Son1'
export default {
  components: {
    Son1
  },
  data() {
    return {
      mvy: 100
    }
  }
}
</script>
