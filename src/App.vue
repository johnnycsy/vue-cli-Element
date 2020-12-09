<template>
  <div id="app">
    <div class="app-main">
      <div class="app-left" v-if="left_show">
        <nav-left/>
      </div>
      <div class="app-right">
        <nav-top v-if="top_show"/>
        <div class="app-body">
          <router-view v-on:left="left" v-on:top="top"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavLeft from "@/components/navLeft/navLeft.vue"
import NavTop from "@/components/navTop/navTop.vue"

export default {
  name: 'App',
  components: {NavLeft, NavTop},
  data() {
    return {
      left_show: true,
      top_show: true,
    }
  },
  methods: {
    left(bool) {
      console.log(bool)
      this.left_show = bool
    },
    top(bool) {
      this.top_show = bool
    }
  }
}
</script>

<style>
@import "assets/css/app.css";
</style>
