<template>
  <div
    class="header flex items-center justify-between flex-wrap bg-uzimaru-black p-4"
  >
    <div class="flex items-center flex-shrink-0 text-white mr-6">
      <img src="../assets/img/v1.svg" class="w-10 h-10" />
      <span
        class="pl-2 font-semibold text-2xl tracking-tight text-uzimaru-green"
        >uzimaraiser</span
      >
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Header extends Vue {}
</script>
