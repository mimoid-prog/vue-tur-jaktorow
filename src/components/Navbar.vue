<template>
  <div class="navbar">
    <div class="titleBox">
      <h1>
        Tur
        <span>Jaktorów</span>
      </h1>
    </div>
    <div class="navBox">
      <div class="hamburgerBox">
        <button class="hamburgerToOpen" @click="active = true">
          <div></div>
        </button>
      </div>
      <div :class="[{ active }, 'navBoxInner']">
        <button class="hamburgerToClose" @click="active = false">
          <div></div>
          <div></div>
        </button>
        <nav>
          <ul class="menu">
            <li>
              <router-link to="/" exact>Strona główna</router-link>
            </li>
            <li>
              <router-link to="/aktualnosci">Aktualności</router-link>
            </li>
            <li>
              <router-link to="/o-klubie">O klubie</router-link>
            </li>
            <li>
              <router-link to="/galeria">Galeria zdjęć</router-link>
            </li>
            <li>
              <router-link to="/terminarz">Terminarz</router-link>
            </li>
            <li>
              <router-link to="/informacje">Informacje</router-link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Navbar',
  data: function() {
    return {
      active: false,
    };
  },
  watch: {
    $route() {
      this.active = false;
    },
  },
};
</script>

<style lang="scss" scoped>
.navbar {
  color: white;
  display: flex;
  justify-content: space-between;
}

h1 {
  font-size: 70px;
  line-height: 1;
  text-transform: uppercase;

  span {
    font-size: 40px;
    display: block;
    transform: translateX(10px) translateY(-8px);
  }
}

.hamburgerToOpen {
  cursor: pointer;
  border: none;
  display: block;
  height: 60px;
  background: none;
  box-sizing: content-box;
  padding: 0px 10px;

  div {
    width: 42px;
    height: 6px;
    background: white;

    &:before,
    &:after {
      content: '';
      display: block;
      width: 42px;
      height: 6px;
      background: white;
    }

    &:before {
      transform: translateY(-12px);
    }

    &:after {
      transform: translateY(6px);
    }
  }
}

.navBoxInner {
  position: fixed;
  background: #1a1a1a;
  top: 0;
  bottom: 0;
  right: 0;
  padding: 30px;
  transition: transform 0.5s ease-in-out;
  transform: translateX(100%);
  z-index: 99;
}

.navBoxInner.active {
  transform: translateX(0);
}

.hamburgerToClose {
  cursor: pointer;
  border: none;
  display: block;
  background: none;
  width: 42px;
  height: 60px;
  position: relative;
  padding: 0 10px;
  margin: 0 auto;
  box-sizing: content-box;

  div {
    width: 42px;
    height: 6px;
    background: white;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);

    &:first-child {
      transform: rotate(45deg);
    }

    &:last-child {
      transform: rotate(-45deg);
    }
  }
}

nav {
  height: 100%;
  margin: 20px 0;
}

.menu {
  list-style: none;
  text-align: center;
  height: 100%;
}

li {
  margin-bottom: 25px;

  &:last-child {
    margin: 0;
  }
}

a {
  color: white;
  text-decoration: none;
  font-size: 22px;
  font-weight: 700;
  display: inline-block;

  &:after {
    content: '';
    display: block;
    width: 0;
    height: 4px;
    background: white;
    transition: width 0.3s;
  }
}

.router-link-active:after {
  content: '';
  display: block;
  width: 100%;
  height: 4px;
  background: white;
}

@media (min-width: 850px) {
  .hamburgerToOpen,
  .hamburgerToClose,
  .hamburgerBox {
    display: none;
  }

  nav {
    margin: 0;
  }

  .navBox {
    margin-top: 30px;
  }

  .navBoxInner {
    transform: translateX(0);
    background: none;
    position: static;
    padding: 0;
  }

  .menu {
    text-align: left;
  }

  .navbar {
    flex-direction: column;
    padding-right: 50px;
    justify-content: flex-start;
  }
}

@media (min-width: 1024px) {
  li {
    margin-bottom: 20px;
    transition: transform 0.2s ease;
  }

  h1 {
    font-size: 100px;

    span {
      font-size: 50px;
      transform: translateX(18px) translateY(-8px);
    }
  }

  .navbar {
    padding-right: 100px;
  }

  .navBox {
    padding-left: 10px;
  }

  a {
    font-size: 28px;

    &:hover:after {
      width: 100%;
    }
  }
}

@media (min-width: 1620px) {
  h1 {
    font-size: 120px;

    span {
      font-size: 70px;
      transform: translateX(18px) translateY(-8px);
    }
  }
}
</style>
