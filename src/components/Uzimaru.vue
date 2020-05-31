<template>
  <div class="uzimaru flex flex-grow flex-col justify-center items-center">
    <img v-bind:src="imgSrc" class="w-48 h-48" />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class Uzimaru extends Vue {
  @Prop({ default: "v1" })
  version!: string;
  get imgSrc() {
    return require(`../assets/img/${this.version}.svg`);
  }
}
</script>
