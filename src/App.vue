<template>
  <div id="app">
    <div class="mainLayout">
      <div class="container">
        <div class="mainLayoutInner">
          <Navbar />
          <div class="view">
            <transition name="viewAnimation" mode="out-in">
              <router-view></router-view>
            </transition>
          </div>
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

html {
  overflow-y: scroll;
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: 'Jost', sans-serif;
  font-size: 18px;
}

.mainLayout {
  background: #ae0505;
  width: 100%;
  min-height: 100vh;
}

.container {
  width: 85%;
  margin: 0 auto;
  padding: 30px 0;
}

.secondaryTitle {
  font-size: 32px;
}

@media (min-width: 850px) {
  .mainLayoutInner {
    display: flex;
  }
}

@media (min-width: 1024px) {
  .secondaryTitle {
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

.viewAnimation-enter-active {
  transition: transform 0.3s ease-out, opacity 0.3s ease;
}

.viewAnimation-leave-active {
  transition: transform 0.5s ease-out, opacity 0.5s ease;
}

.viewAnimation-enter {
  transform: translateX(-100%);
  opacity: 0;
}

.viewAnimation-leave-to {
  transform: translateX(100%);
  opacity: 0;
}

@media (min-width: 850px) {
  .view {
    padding: 0;
  }

  .viewAnimation-enter-active {
    transition: transform 0.8s ease-out, opacity 0.8s ease;
  }

  .viewAnimation-leave-active {
    transition: transform 0.6s ease-out, opacity 0.6s ease-in;
  }

  .viewAnimation-enter {
    transform: translateY(-100vh);
  }

  .viewAnimation-leave-to {
    transform: translateY(50vh);
  }
}
</style>
