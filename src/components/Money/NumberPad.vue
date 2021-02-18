<template>
  <div class="numberPad">
    <div class="output">{{ output }}</div>
    <div class="buttons">
      <button @click="inputContent">1</button>
      <button @click="inputContent">2</button>
      <button @click="inputContent">3</button>
      <button @click="remove">删除</button>
      <button @click="inputContent">4</button>
      <button @click="inputContent">5</button>
      <button @click="inputContent">6</button>
      <button @click="clear">清空</button>
      <button @click="inputContent">7</button>
      <button @click="inputContent">8</button>
      <button @click="inputContent">9</button>
      <button @click="ok" class="ok">OK</button>
      <button @click="inputContent" class="zero">0</button>
      <button @click="inputContent">.</button>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component, Prop } from 'vue-property-decorator'
@Component
export default class NumberPad extends Vue {
  @Prop(Number) readonly value!: number
  output = this.value.toString()
  inputContent(event: MouseEvent) {
    const button = event.target as HTMLButtonElement
    const input = button.textContent!
    if (this.output.length === 16) {
      return
    }
    if (this.output === '0') {
      if ('0123456789'.indexOf(input) >= 0) {
        this.output = input
      } else {
        this.output += input
      }
      return
    }
    if (this.output.indexOf('.') >= 0 && input === '.') {
      return
    }
    this.output += input
  }
  remove() {
    if (this.output.length === 1) {
      this.output = '0'
    } else {
      this.output = this.output.slice(0, -1)
    }
  }
  clear() {
    this.output = '0'
  }
  ok() {
    const number = parseFloat(this.output)
    this.$emit('update:value', number)
    this.$emit('submit', number)
    this.output = '0'
  }
}
</script>

<style lang="scss" scoped>
@import '~@/assets/style/helper.scss';
.numberPad {
  .output {
    @extend %clearFix;
    @extend %innerShadow;
    font-size: 36px;
    font-family: Consolas, monospace;
    padding: 9px 16px;
    text-align: right;
    height: 72px;
    color: rgb(199, 195, 189);
  }
  .buttons {
    @extend %clearFix;

    > button {
      color: rgb(199, 195, 189);

      width: 25%;
      height: 64px;
      float: left;
      background: transparent;
      border: none;
      &.ok {
        height: 64 * 2px;
        float: right;
      }
      &.zero {
        width: 25 * 2%;
      }
      $bg: #f2f2f2;
      &:nth-child(1) {
        background: rgb(31, 33, 34);
      }
      &:nth-child(2) {
        background: rgb(37, 40, 42);
      }
      &:nth-child(3) {
        background: rgb(43, 46, 48);
      }
      &:nth-child(4) {
        background: rgb(49, 53, 55);
      }
      &:nth-child(5) {
        background: rgb(37, 40, 42);
      }

      &:nth-child(6) {
        background: rgb(43, 46, 48);
      }
      &:nth-child(7) {
        background: rgb(49, 53, 55);
      }
      &:nth-child(8) {
        background: rgb(55, 59, 61);
      }
      &:nth-child(9) {
        background: rgb(43, 46, 48);
      }

      &:nth-child(10) {
        background: rgb(49, 53, 55);
      }

      &:nth-child(11) {
        background: rgb(55, 59, 61);
      }
      &:nth-child(12) {
        background: rgb(66, 71, 74);
      }
      &:nth-child(13) {
        background: rgb(55, 59, 61);
      }
      &:nth-child(14) {
        background: rgb(61, 65, 68);
      }
    }
  }
}
</style>
