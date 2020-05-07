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
          <p class="place">{{ index+1 }}.</p>
          <p class="club">
            <img :src="require(`@/assets/images/logos/${item.logo}`)" :alt="item.club + ' logotyp'" />
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
import Item from '@/components/Item.vue';

export default {
  name: 'Scoreboard',
  components: {
    Item,
  },
  data: function() {
    return {
      teams: [
        {
          stats: [8, 10, 0],
          club: 'UMKS Piaseczno',
          logo: 'piaseczno.jpg',
        },
        {
          stats: [7, 4, 4],
          club: 'LKS Chlebnia',
          logo: 'chlebnia.jpg',
        },
        {
          stats: [6, 0, 2],
          club: 'Promyk Nowa Sucha',
          logo: 'promyk.jpg',
        },
        {
          stats: [5, 2, 4],
          club: 'MKS Piast Piastów',
          logo: 'piast.jpg',
        },
        {
          stats: [4, 0, 0],
          club: 'Tur Jaktorów',
          logo: 'tur.jpg',
        },
        {
          stats: [3, 2, 0],
          club: 'KS Błonianka',
          logo: 'blonianka.jpg',
        },
        {
          stats: [2, 6, 0],
          club: 'KS Teresin',
          logo: 'teresin.jpg',
        },
      ],
    };
  },
  computed: {
    scoreboard: function() {
      let scoreboard = this.teams.map(team => ({
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
  width: 56%;
}

.stats {
  width: 28%;
}

.points {
  width: 8%;
}

@media (min-width: 640px) {
  .scoreboard {
    font-weight: 700;
  }

  .club {
    display: flex;
    align-items: center;
  }

  img {
    display: block;
    width: 40px;
    margin-right: 8px;
  }
}

@media (min-width: 1280px) {
  .scoreboard {
    font-weight: 400;
  }

  .place {
    width: auto;
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
  .scoreboard {
    font-weight: 700;
  }

  img {
    display: block;
  }
}
</style>