<template>
  <Item>
    <template v-slot:title>Tabela wyników</template>
    <template v-slot:content>
      <ul class="scoreboard">
        <li>
          <p class="place" title="Miejsce">M</p>
          <p class="club">Nazwa klubu</p>
          <p class="stats" title="Zwycięstwa/Remisy/Porażki">Z/R/P</p>
          <p class="points" title="Punkty">P</p>
        </li>
        <li v-for="(item, index) in scoreboard" :key="index">
          <p class="place">{{ index + 1 }}.</p>
          <p class="club">
            <img
              :src="require(`@/assets/images/logos/${item.logo}`)"
              :alt="item.club + ' logotyp'"
            />
            {{ item.club }}
          </p>
          <p class="stats">{{ item.stats }}</p>
          <p class="points">{{ item.points }}</p>
        </li>
      </ul>
    </template>
  </Item>
</template>

<script>
import Item from "@/components/Item.vue";
import seniorsInfo from "@/data/seniors/info";
import R2005_2006Info from "@/data/R2005_2006/info";

export default {
  name: "Scoreboard",
  props: ["selected"],
  components: {
    Item,
  },
  computed: {
    scoreboard: function() {
      let data;
      if (this.selected.code === 0) data = seniorsInfo;
      else if (this.selected.code === 1) data = R2005_2006Info;

      let scoreboard = data.map((team) => ({
        club: team.club,
        logo: team.logo,
        stats: `${team.stats[0]}/${team.stats[1]}/${team.stats[2]}`,
        points: team.stats[0] * 3 + team.stats[1],
      }));
      scoreboard.sort((a, b) => b.points - a.points);
      return scoreboard;
    },
  },
};
</script>

<style lang="scss" scoped>
.scoreboard {
  display: flex;
  flex-direction: column;
  font-weight: 400;
}

li {
  display: flex;
  align-items: center;
  border-bottom: 1px solid gray;
  padding: 4px 0;
  font-size: 16px;

  &:first-child {
    padding-top: 0;
    font-weight: 700;
  }

  &:last-child {
    border: none;
  }
}

img {
  display: none;
}

.place {
  width: 8%;
}

.club {
  width: 59%;
}

.stats {
  width: 25%;
}

.points {
  width: 8%;
  text-align: center;
}

@media (min-width: 640px) {
  .scoreboard {
    font-weight: 500;
  }

  .club {
    display: flex;
    align-items: center;
  }

  img {
    display: block;
    width: 30px;
    margin-right: 8px;
  }
}

@media (min-width: 1280px) {
  .place {
    width: 26px;
    margin-right: 8px;
  }

  .club {
    padding-right: 5px;
  }

  img {
    display: none;
  }
}

@media (min-width: 1460px) {
  img {
    display: block;
  }
}
</style>
