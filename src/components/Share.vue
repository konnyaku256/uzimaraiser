<template>
  <div class="share flex items-center justify-around flex-wrap p-4">
    <button
      class="w-40 h-16 bg-uzimaru-green hover:bg-uzimaru-gray text-white font-bold text-2xl py-2 px-4 rounded-full"
    >
      <a v-bind:href="twitterShareHref">
        <font-awesome-icon :icon="['fab', 'twitter']" class="mr-1" />
        Share
      </a>
    </button>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class Share extends Vue {
  @Prop({ default: "" })
  nickname!: string;
  @Prop({ default: 0 })
  age!: number;
  @Prop({ default: "v1" })
  version!: string;
  @Prop({ default: 0 })
  generation!: number;
  get twitterShareHref() {
    return `https://twitter.com/intent/tweet?text=${this.nickname} is now age ${this.age}(${this.version}) generation ${this.generation} !&url=https://uzimaraiser.konnyaku256.dev/&hashtags=uzimaraiser`;
  }
}
</script>
