<template>
  <div class="github-username">
    <div
      class="flex items-center justify-center flex-wrap mx-auto bg-uzimaru-black p-4"
    >
      <div class="flex items-center flex-shrink-0 text-white">
        <input
          v-model="githubUsername"
          class="border-solid rounded py-2 px-3 text-center font-semibold text-2xl tracking-tight text-white bg-uzimaru-black outline-none focus:bg-uzimaru-gray"
          type="text"
          placeholder="GitHub username"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Watch, Vue } from "vue-property-decorator";

@Component
export default class Footer extends Vue {
  githubUsername = "";
  mounted() {
    if (localStorage.githubUsername) {
      this.githubUsername = localStorage.githubUsername;
    }
  }
  @Watch("githubUsername")
  onGitHubUsernameChanged(newGitHubUsername: string) {
    localStorage.githubUsername = newGitHubUsername;
  }
}
</script>
