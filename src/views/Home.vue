<template>
  <div class="home">
    <div class="year">
      <p>Wybierz rocznik:</p>
      <v-select
        v-model="selected"
        :options="options"
        :searchable="false"
        :clearable="false"
        onChange="handleSelectChange"
      >
        <div slot="no-options">Nie ma takiej opcji</div>
      </v-select>
    </div>
    <div class="grid">
      <Match
        class="gridLastMatch"
        :firstBox="true"
        :currentWeek="currentWeek"
        :title="'Ostatni mecz - 09.11.2019'"
        :score="'5 : 2'"
        :soon="false"
        :leftTeam="'Passovia Pass'"
        :leftLogo="'passovia.jpg'"
        :rightTeam="'Tur Jaktorów'"
        :rightLogo="'tur.jpg'"
      />
      <Match
        class="gridNextMatch"
        :firstBox="false"
        :currentWeek="currentWeek"
        :title="'Następny mecz - 22.03.2020'"
        :score="'wkrótce'"
        :soon="true"
        :leftTeam="'Partyzant Leszno'"
        :leftLogo="'partyzant.jpg'"
        :rightTeam="'Tur Jaktorów'"
        :rightLogo="'tur.jpg'"
      />
      <Banner class="gridBanner" />
      <Scoreboard class="gridScoreboard" :selected="selected" />
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import vSelect from "vue-select";
import "vue-select/dist/vue-select.css";
import Match from "@/components/Home/Match.vue";
import Banner from "@/components/Home/Banner.vue";
import Scoreboard from "@/components/Home/Scoreboard.vue";

import seniorsCurrentWeek from "@/data/seniors/currentWeek";
import R2005_2006CurrentWeek from "@/data/R2005_2006/currentWeek";

Vue.component("v-select", vSelect);

export default {
  name: "Home",
  components: {
    Match,
    Banner,
    Scoreboard,
  },
  data: function() {
    return {
      currentWeek: seniorsCurrentWeek,
      selected: { label: "Seniorzy", code: 0 },
      options: [
        { label: "Seniorzy", code: 0 },
        { label: "2005/2006", code: 1 },
      ],
    };
  },
  methods: {
    handleSelectChange: function() {
      let week;
      if (this.selected.code === 0) {
        week = seniorsCurrentWeek;
      } else if (this.selected.code === 1) {
        week = R2005_2006CurrentWeek;
      }
      console.log("change", week);
    },
  },
};
</script>

<style lang="scss">
.year {
  p {
    color: white;
    margin-bottom: 5px;
    font-weight: 700;
  }

  .vs__dropdown-toggle {
    background: white;
    width: 100%;
    font-size: 18px;
    font-weight: 700;
  }
}
</style>

<style lang="scss" scoped>
.home {
  width: 100%;
}

.grid {
  display: grid;
  grid-gap: 12px 0;
  margin-top: 12px;
}

@media (min-width: 1280px) {
  .grid {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto auto auto;
    grid-gap: 20px;
    margin-top: 20px;
  }

  .gridScoreboard {
    grid-column: 1 / 2;
    grid-row: 1 / 4;
    background: white;
  }

  .gridLastMatch {
    grid-column: 2 / 3;
    grid-row: 1 / 2;
  }

  .gridNextMatch {
    grid-column: 2 / 3;
    grid-row: 2 / 3;
  }

  .gridBanner {
    grid-column: 2 / 3;
    grid-row: 3 / 4;
  }
}
</style>
