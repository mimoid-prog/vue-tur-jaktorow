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
          stats: [10, 1, 2],
          club: 'Passovia Pass',
          logo: 'passovia.jpg',
        },
        {
          stats: [9, 1, 3],
          club: 'Naprzód Brwinów',
          logo: 'naprzod.jpg',
        },
        {
          stats: [8, 2, 3],
          club: 'Wrzos Międzyborów',
          logo: 'wrzos.jpg',
        },
        {
          stats: [8, 2, 3],
          club: 'Partyzant Leszno',
          logo: 'partyzant.jpg',
        },
        {
          stats: [7, 2, 4],
          club: 'Józefowianka Józefów',
          logo: 'jozefow.jpg',
        },
        {
          stats: [7, 0, 6],
          club: 'Zaborowianka Zaborów',
          logo: 'zaborow.jpg',
        },
        {
          stats: [7, 0, 6],
          club: 'Promyk Nowa Sucha',
          logo: 'promyk.jpg',
        },
        {
          stats: [6, 1, 6],
          club: 'Tajfun Brochów',
          logo: 'tajfun.jpg',
        },
        {
          stats: [5, 2, 6],
          club: 'Błękitni Korytów	',
          logo: 'blekitni.jpg',
        },
        {
          stats: [4, 3, 6],
          club: 'LKS Osuchów',
          logo: 'osuchow.jpg',
        },
        {
          stats: [3, 3, 7],
          club: 'Piast Feliksów',
          logo: 'feliksow.jpg',
        },
        {
          stats: [3, 3, 7],
          club: 'LKS II Chlebnia',
          logo: 'chlebnia.jpg',
        },
        {
          stats: [2, 1, 10],
          club: 'Orzeł Kampinos',
          logo: 'orzel.jpg',
        },
        {
          stats: [0, 3, 10],
          club: 'Tur Jaktorów',
          logo: 'tur.jpg',
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
    font-weight: 700;
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
  .scoreboard {
    font-weight: 400;
  }

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
  .scoreboard {
    font-weight: 700;
  }

  img {
    display: block;
  }
}
</style>