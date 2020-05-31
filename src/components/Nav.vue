<template>
  <div
    class="nav flex items-center justify-around flex-wrap bg-uzimaru-gray p-4"
  >
    <router-link
      to="/"
      class="px-2 font-normal text-lg tracking-tight text-white"
      >Home</router-link
    >
    <router-link
      to="/about"
      class="px-2 font-normal text-lg tracking-tight text-white"
      >About</router-link
    >
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Nav extends Vue {}
</script>

<style lang="scss">
.nav {
  a {
    &.router-link-exact-active {
      color: #199861;
    }
  }
}
</style>
