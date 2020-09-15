<template>
  <div id="wrapper">
    <div>Test Page</div>
    <button @click="goBack">Go Back</button><br><br>
  </div>
</template>

<script>
  export default {
    name: 'test-page',
    methods: {
      goBack() {
        this.$router.go(-1)
      }
    }
  }
</script>

<style>
  #wrapper {
    background:
      radial-gradient(
        ellipse at top left,
        rgba(255, 255, 255, 1) 40%,
        rgba(229, 229, 229, .9) 100%
      );
    height: 100vh;
    padding: 60px 80px;
    width: 100vw;
  }
</style>
