<template>
  <ul>
    <li v-for="link in links"><a :href="link.url" target="_blank">{{ link.name }}</a></li>
  </ul>
</template>

<script>
    export default {
      name: "link-list",
      props: ['links']
    }
</script>

<style lang="scss" scoped>
  ul {
     list-style-type: none;
     padding: 0;

    a {
      color: #42b983;
    }

    li {
      display: inline-block;
      margin: 0 10px;
    }
   }
</style>
