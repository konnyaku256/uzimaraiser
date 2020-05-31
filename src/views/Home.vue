<template>
  <div class="home flex flex-grow flex-col">
    <Info v-bind:age="uzimaruAge" v-bind:generation="uzimaruGeneration" />
    <Uzimaru v-bind:version="uzimaruVersion" />
    <Share
      v-bind:nickname="uzimaruNickname"
      v-bind:age="uzimaruAge"
      v-bind:version="uzimaruVersion"
      v-bind:generation="uzimaruGeneration"
    />
    <GitHubUsername />
  </div>
</template>

<script lang="ts">
// @ is an alias to /src
import { Component, Vue } from "vue-property-decorator";
import Info from "@/components/Info.vue";
import Uzimaru from "@/components/Uzimaru.vue";
import Share from "@/components/Share.vue";
import GitHubUsername from "@/components/GitHubUsername.vue";
import { getUzimaru } from "../utils/uzimaru";
import axios from "axios";

@Component({
  components: {
    Info,
    Uzimaru,
    Share,
    GitHubUsername
  }
})
export default class Home extends Vue {
  contributions = 0;
  uzimaruNickname = "";
  uzimaruAge = 0;
  uzimaruVersion = "v1";
  uzimaruGeneration = 0;
  async mounted() {
    if (localStorage.nickname) {
      this.uzimaruNickname = localStorage.nickname;
    }
    if (localStorage.githubUsername) {
      const response = await axios.get(
        `/api/github-contributions/${localStorage.githubUsername}`
      );
      this.contributions = response.data.count;
    }
    const uzimaru = getUzimaru(this.contributions);
    this.uzimaruAge = uzimaru.age;
    this.uzimaruVersion = uzimaru.version;
    this.uzimaruGeneration = uzimaru.generation;
  }
}
</script>
