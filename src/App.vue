<template>
  <div id="app" class="bg-white flex flex-col max-w-md mx-auto min-h-screen">
    <Header />
    <Nav />
    <router-view />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Header from "@/components/Header.vue";
import Nav from "@/components/Nav.vue";

@Component({
  components: {
    Header,
    Nav
  }
})
export default class App extends Vue {}
</script>
