<template>
  <Item>
    <template v-slot:title>{{ title }}</template>
    <template v-slot:content>
      <div class="match">
        <div>
          <img
            :src="require(`@/assets/images/logos/${leftLogo}`)"
            :alt="leftTeam"
          />
          <div :class="['score', { soon }]">{{ score }}</div>
          <img
            :src="require(`@/assets/images/logos/${rightLogo}`)"
            :alt="rightTeam"
          />
        </div>
        <p class="teamNames">{{ leftTeam }} - {{ rightTeam }}</p>
      </div>
    </template>
  </Item>
</template>

<script>
import Item from "@/components/Item.vue";

export default {
  name: "Match",
  props: [
    "title",
    "score",
    "soon",
    "leftTeam",
    "leftLogo",
    "rightTeam",
    "rightLogo",
  ],
  components: {
    Item,
  },
};
</script>

<style lang="scss" scoped>
.match {
  div:first-child {
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 100%;
  }

  img {
    margin: 0 auto;
    width: 25%;
  }

  .score {
    width: 40%;
    font-weight: 700;
    font-size: 40px;
    text-align: center;
  }

  .soon {
    font-size: 28px;
  }

  .teamNames {
    margin-top: 10px;
    font-size: 14px;
    font-weight: 700;
    text-align: center;
  }
}

@media (min-width: 640px) {
  .match {
    .score {
      font-size: 54px;
    }

    .soon {
      font-size: 40px;
    }

    .teamNames {
      font-size: 18px;
    }
  }
}

@media (min-width: 1024px) {
  .match {
    img {
      width: 100px;
    }
  }
}

@media (min-width: 1280px) {
  .match {
    .score {
      font-size: 40px;
    }

    .soon {
      font-size: 30px;
    }

    .teamNames {
      font-size: 16px;
    }

    img {
      width: 80px;
    }
  }
}

@media (min-width: 1460px) {
  .match {
    .score {
      font-size: 54px;
    }

    .soon {
      font-size: 36px;
    }

    .teamNames {
      font-size: 18px;
    }

    img {
      width: 120px;
    }
  }
}
</style>
