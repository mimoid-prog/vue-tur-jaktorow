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
          <transition name="showPageUp">
            <a
              href="#app"
              class="pageUp"
              v-smooth-scroll="{ updateHistory: false }"
              v-if="showPageUp"
            >
              <PageUpSVG />
            </a>
          </transition>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue';
import Navbar from '@/components/Navbar.vue';
import PageUpSVG from '@/components/PageUpSVG.vue';
import vueSmoothScroll from 'vue2-smooth-scroll';

Vue.use(vueSmoothScroll);

export default {
  name: 'App',
  components: {
    Navbar,
    PageUpSVG,
  },
  data: function() {
    return {
      showPageUp: false,
    };
  },
  created: function() {
    window.addEventListener('scroll', this.handleScroll);
  },
  destroyed: function() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll: function() {
      if (window.innerHeight / 2 < document.documentElement.scrollTop)
        this.showPageUp = true;
      else this.showPageUp = false;
    },
  },
  watch: {
    $route() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    },
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

.container {
  width: 85%;
  margin: 0 auto;
  padding: 30px 0;
}

.secondaryTitle {
  font-size: 32px;
}

.viewTitle {
  color: white;
  text-align: center;
  margin-bottom: 20px;
}

.pageUp {
  position: fixed;
  display: block;
  width: 50px;
  height: 50px;
  bottom: 30px;
  right: 20px;

  .bgArrow {
    fill: #000;
  }

  .arrow {
    fill: #fff;
  }
}

.showPageUp-enter-active,
.showPageUp-leave-active {
  transition: opacity 0.5s, transform 0.5s;
}
.showPageUp-enter,
.showPageUp-leave-to {
  opacity: 0;
  transform: translateY(100%);
}

@media (min-width: 850px) {
  .pageUp {
    right: auto;

    .bgArrow {
      fill: #fff;
    }

    .arrow {
      fill: #ae0505;
    }
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
.mainLayout {
  background: #ae0505;
  width: 100%;
  min-height: 100vh;
}

.mainLayoutInner {
  position: relative;
}

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
  .mainLayoutInner {
    display: flex;
  }

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
