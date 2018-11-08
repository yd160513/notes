<template>
  <div class="app-wrapper">
    <sidebar class="sidebar-container"></sidebar>
		<div class="main-container">
      <navbar></navbar>
      <app-main></app-main>
		</div>
  </div>
</template>
<script>
import { Sidebar, Navbar, AppMain } from './components'
export default {
  components: {
    Sidebar,
    Navbar,
    AppMain
  }
}
</script>
<style scoped>
.app-wrapper {
	  position: relative;
	  height: 100%;
	  width: 100%;
	}
</style>

