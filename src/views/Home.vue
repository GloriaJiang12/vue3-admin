<template>
  <div class="home">
    <!-- <router-link to="/todolist">todolist demo</router-link>
    <router-view></router-view> -->
    <Layout />
  </div>
</template>

<script>
// @ is an alias to /src
import Layout from "@/layout/index.vue";

export default {
  name: "Home",
  components: {
    Layout
  }
};
</script>
<style lang="scss">
.home {
  height: 100%;
}
</style>
