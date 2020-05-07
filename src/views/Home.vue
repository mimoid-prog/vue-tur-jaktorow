<template>
  <div class="home">
    <div class="year">
      <p>Wybierz rocznik:</p>
      <v-select v-model="selected" :options="options" :searchable="false" :clearable="false">
        <div slot="no-options">Nie ma takiej opcji</div>
      </v-select>
    </div>
    <div class="grid">
      <Match class="gridLastMatch" :title="'Ostatni mecz - 24.05.2020'" :score="'2 : 1'" />
      <Match
        class="gridNextMatch"
        :title="'Następny mecz - 31.05.2020'"
        :score="'wkrótce'"
        :soon="true"
      />
      <Vote class="gridVote" />
      <Scoreboard class="gridScoreboard" />
    </div>
  </div>
</template>

<script>
import Vue from 'vue';
import vSelect from 'vue-select';
import 'vue-select/dist/vue-select.css';
import Match from '@/components/Home/Match.vue';
import Vote from '@/components/Home/Vote.vue';
import Scoreboard from '@/components/Home/Scoreboard.vue';

Vue.component('v-select', vSelect);

export default {
  name: 'Home',
  components: {
    Match,
    Vote,
    Scoreboard,
  },
  data: function() {
    return {
      selected: { label: 'Seniorzy', code: 0 },
      options: [
        { label: 'Seniorzy', code: 0 },
        { label: '2003/2004', code: 1 },
        { label: '2005/2006', code: 2 },
        { label: '2007/2008', code: 3 },
      ],
    };
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
  padding: 30px 0;
  width: 100%;
}

.grid {
  display: grid;
  grid-gap: 12px 0;
  margin-top: 12px;
}

@media (min-width: 850px) {
  .home {
    padding: 0;
  }
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
  }

  .gridLastMatch {
    grid-column: 2 / 3;
    grid-row: 1 / 2;
  }

  .gridNextMatch {
    grid-column: 2 / 3;
    grid-row: 2 / 3;
  }

  .gridVote {
    grid-column: 2 / 3;
    grid-row: 3 / 4;
  }
}
</style>
