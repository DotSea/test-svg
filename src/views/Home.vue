<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <WebTitle />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';
import WebTitle from '../../public/webTitle.svg';

export default {
  name: 'Home',
  components: {
    HelloWorld,
    WebTitle,
  },
};
</script>
