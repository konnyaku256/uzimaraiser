<template>
  <div
    class="info flex items-center justify-between flex-wrap bg-uzimaru-black p-4"
  >
    <div class="flex justify-center w-full text-white">
      <div class="age px-2 font-semibold text-2xl tracking-tight text-white">
        Generation {{ generation }}
      </div>
    </div>
    <div class="flex w-8/12 text-white">
      <input
        v-model="nickname"
        class="border-solid rounded w-full py-2 px-3 font-semibold text-2xl tracking-tight text-white bg-uzimaru-black outline-none focus:bg-uzimaru-gray"
        type="text"
        placeholder="Nickname"
      />
    </div>
    <div class="flex flex justify-center w-4/12 text-white">
      <div class="age px-2 font-semibold text-2xl tracking-tight text-white">
        Age {{ age }}
      </div>
      <div class="sex px-2 font-semibold text-2xl tracking-tight text-white">
        ♂
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Watch, Vue } from "vue-property-decorator";

@Component
export default class Info extends Vue {
  nickname = "";
  @Prop({ default: 0 })
  age!: number;
  @Prop({ default: 0 })
  generation!: number;
  mounted() {
    if (localStorage.nickname) {
      this.nickname = localStorage.nickname;
    }
  }
  @Watch("nickname")
  onNicknameChanged(newNickname: string) {
    localStorage.nickname = newNickname;
  }
}
</script>
