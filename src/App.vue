<template>
  <div id="app">
    <div class="main-layout">
      <div class="container">
        <div class="main-layout-inner">
          <Navbar />
          <div class="view">
            <router-view></router-view>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";

export default {
  name: "App",
  components: {
    Navbar,
  },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Jost:wght@400;700&display=swap");

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: "Jost", sans-serif;
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

.secondary-title {
  font-size: 32px;
}

@media (min-width: 850px) {
  .main-layout-inner {
    display: flex;
  }
}

@media (min-width: 1024px) {
  .secondary-title {
    font-size: 40px;
  }
}

@media (min-width: 1300px) {
  .container {
    width: 85%;
  }
}
</style>

<style lang="scss" scoped>
.view {
  padding: 30px 0;
  width: 100%;
}

@media (min-width: 850px) {
  .view {
    padding: 0;
  }
}
</style>
