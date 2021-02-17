<template class="layout-wrapper1">
  <div class="layout-wrapper" :class="classPrefix && `${classPrefix}-wrapper`">
    <div class="content" :class="classPrefix && `${classPrefix}-content`">
      <!-- slot: 插槽 -->
      <slot />
    </div>
    <Nav />
  </div>
</template>

<script lang="ts">
export default {
  props: ['classPrefix'],
  name: 'Layout',
}
</script>

<style lang="scss" scoped>
.layout-wrapper1 {
}

.layout-wrapper {
  display: flex;
  flex-direction: column;
  min-height: 100vh;

  // height: -webkit-fill-available;
  // height: 100vh;
  // height: -moz-available; /* WebKit-based browsers will ignore this. */
  // height: -webkit-fill-available; /* Mozilla-based browsers will ignore this. */
  // height: fill-available;
}
.content {
  overflow: auto;
  flex-grow: 1;
  min-height: -webkit-fill-available;
  min-height: fill-available;
}
</style>
