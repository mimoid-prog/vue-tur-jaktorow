<template>
  <div class="vote">
    <h3>Kto wygra mecz?</h3>
    <div>
      <button>Tur</button>
      <button>Chlebnia</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Vote',
};
</script>

<style lang="scss" scoped>
.vote {
  background: white;
  text-align: center;
  padding: 10px 0 20px;

  h3 {
    font-size: 26px;
    margin-bottom: 8px;
  }

  div {
    display: flex;
    justify-content: center;
  }

  button {
    background: none;
    border: 3px solid black;
    font-weight: 800;
    text-transform: uppercase;
    font-size: 16px;
    width: 42%;
    padding: 8px 0;

    &:first-child {
      margin-right: 8px;
    }
  }
}

@media (min-width: 640px) {
  .vote {
    padding: 20px 0 30px;

    button {
      &:first-child {
        margin-right: 14px;
      }
    }
  }
}

@media (min-width: 1024px) {
  .vote {
    button {
      width: 200px;
    }
  }
}

@media (min-width: 1280px) {
  .vote {
    button {
      width: 40%;
    }
  }
}
</style>