<template>
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
.layout-wrapper {
  display: flex;
  flex-direction: column;
  height: 100vh;
  // min-height: -webkit-fill-available;
  min-height: fill-available;
}
.content {
  overflow: auto;
  flex-grow: 1;
  background: rgb(30, 32, 33);
}
</style>
