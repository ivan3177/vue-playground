<template>
  <div id="main">
    <img src="./../assets/logo.png">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <link-list :links="links" />
    <h2>Ecosystem</h2>
    <link-list :links="ecosystem" />
  </div>
</template>

<script>
  import LinkList from "./link-list";

  export default {
    components: {LinkList},
    name: 'index',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App',
        links: [
          {url: "https://vuejs.org", name: "Core Docs"},
          {url: "https://forum.vuejs.org", name: "Forum"},
          {url: "https://chat.vuejs.org", name: "Community Chat"},
          {url: "https://twitter.com/vuejs", name: "Twitter"}
        ],
        ecosystem: [
          {url: "http://router.vuejs.org/", name: "vue-router"},
          {url: "http://vuex.vuejs.org/", name: "vuex"},
          {url: "http://vue-loader.vuejs.org/", name: "vue-loader"},
          {url: "https://github.com/vuejs/awesome-vue", name: "awesome-vue"}
        ]
      }
    },
    methods: {
    },
    created: function () {
      document.title = "Index"
    }
  }
</script>

<style lang="scss" scoped>
  h1, h2 {
    font-weight: normal;
  }
</style>
