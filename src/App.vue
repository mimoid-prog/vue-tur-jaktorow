<template>
  <div id="app">
    <div class="main-layout">
      <div class="container">
        <div class="main-layout-inner">
          <Navbar />
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue';

export default {
  name: 'App',
  components: {
    Navbar,
  },
};
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Jost:wght@400;700&display=swap');

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: 'Jost', sans-serif;
  font-size: 18px;
}

.main-layout {
  background: #ae0505;
  width: 100%;
  min-height: 100vh;
}

.container {
  width: 85%;
  margin: 0 auto;
  padding: 30px 0;
}

.xd {
  width: 100%;
  height: 300px;
  margin-top: 30px;
  background: white;
}

@media (min-width: 850px) {
  .main-layout-inner {
    display: flex;
  }
}

@media (min-width: 1300px) {
  .container {
    width: 85%;
  }
}
</style>
