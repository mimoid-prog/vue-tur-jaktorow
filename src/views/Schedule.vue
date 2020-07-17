<template>
  <div class="schedule">
    <h2 class="secondaryTitle viewTitle">Terminarz (seniorzy)</h2>
    <h3>
      Terminarz ulegnie zmianie ze względu na sytuację spowodowaną koronawirusem
    </h3>
    <div class="content">
      <div v-for="(itemB, indexB) in schedule" :key="indexB" class="box">
        <div class="date">
          Kolejka {{ itemB.week }}
          <span>- {{ itemB.date }}</span>
        </div>
        <ul class="matches">
          <li v-for="(item, index) in itemB.matches.teamOne" :key="index">
            <span
              :class="{
                tur:
                  itemB.matches.teamOne[index] == 14 ||
                  itemB.matches.teamTwo[index] == 14,
              }"
            >
              {{ teams[itemB.matches.teamOne[index]] }}
              {{ itemB.matches.scoreOne[index] }} -
              {{ itemB.matches.scoreTwo[index] }}
              {{ teams[itemB.matches.teamTwo[index]] }}
            </span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import seniorsInfo from "@/data/seniors/info";
import seniorsSchedule from "@/data/seniors/schedule";
import seniorsCurrentWeek from "@/data/seniors/currentWeek";

const seniors = {
  seniorsInfo,
  seniorsSchedule,
  seniorsCurrentWeek,
};

console.log(seniors);

export default {
  name: "Schedule",
  data: function() {
    return {
      teams: {
        1: "Passovia Pass",
        2: "Naprzód Brwinów",
        3: "Wrzos Międzyborów",
        4: "Partyzant Leszno",
        5: "Józefowianka Józefów",
        6: "Zaborowianka Zaborów",
        7: "Promyk Nowa Sucha",
        8: "Tajfun Brochów",
        9: "Błękitni Korytów",
        10: "LKS Osuchów",
        11: "Piast Feliksów",
        12: "LKS II Chlebnia",
        13: "Orzeł Kampinos",
        14: "Tur Jaktorów",
      },
      schedule: [
        {
          week: 26,
          date: "13-14 czerwca 2020",
          matches: {
            teamOne: [2, 12, 10, 14, 3, 9, 8],
            teamTwo: [6, 7, 11, 1, 4, 13, 5],
            scoreOne: ["x", "x", "x", "x", "x", "x", "x"],
            scoreTwo: ["x", "x", "x", "x", "x", "x", "x"],
          },
        },
        {
          week: 25,
          date: "6-7 czerwca 2020",
          matches: {
            teamOne: [2, 11, 1, 4, 13, 5, 8],
            teamTwo: [7, 6, 12, 10, 14, 3, 9],
            scoreOne: ["x", "x", "x", "x", "x", "x", "x"],
            scoreTwo: ["x", "x", "x", "x", "x", "x", "x"],
          },
        },
        {
          week: 24,
          date: "30-31 maja 2020",
          matches: {
            teamOne: [2, 11, 1, 4, 13, 5, 8],
            teamTwo: [7, 6, 12, 10, 14, 3, 9],
            scoreOne: ["x", "x", "x", "x", "x", "x", "x"],
            scoreTwo: ["x", "x", "x", "x", "x", "x", "x"],
          },
        },
        {
          week: 23,
          date: "23-24 maja 2020",
          matches: {
            teamOne: [2, 11, 1, 4, 13, 5, 8],
            teamTwo: [7, 6, 12, 10, 14, 3, 9],
            scoreOne: ["x", "x", "x", "x", "x", "x", "x"],
            scoreTwo: ["x", "x", "x", "x", "x", "x", "x"],
          },
        },
        {
          week: 22,
          date: "16-17 maja 2020",
          matches: {
            teamOne: [2, 11, 1, 4, 13, 5, 8],
            teamTwo: [7, 6, 12, 10, 14, 3, 9],
            scoreOne: ["x", "x", "x", "x", "x", "x", "x"],
            scoreTwo: ["x", "x", "x", "x", "x", "x", "x"],
          },
        },
        {
          week: 21,
          date: "9-10 maja 2020",
          matches: {
            teamOne: [2, 11, 1, 4, 13, 5, 8],
            teamTwo: [7, 6, 12, 10, 14, 3, 9],
            scoreOne: ["x", "x", "x", "x", "x", "x", "x"],
            scoreTwo: ["x", "x", "x", "x", "x", "x", "x"],
          },
        },
        {
          week: 20,
          date: "2-3 maja 2020",
          matches: {
            teamOne: [2, 11, 1, 4, 13, 5, 8],
            teamTwo: [7, 6, 12, 10, 14, 3, 9],
            scoreOne: ["x", "x", "x", "x", "x", "x", "x"],
            scoreTwo: ["x", "x", "x", "x", "x", "x", "x"],
          },
        },
        {
          week: 19,
          date: "25-26 kwietnia 2020",
          matches: {
            teamOne: [2, 11, 1, 4, 13, 5, 8],
            teamTwo: [7, 6, 12, 10, 14, 3, 9],
            scoreOne: ["x", "x", "x", "x", "x", "x", "x"],
            scoreTwo: ["x", "x", "x", "x", "x", "x", "x"],
          },
        },
        {
          week: 18,
          date: "18-19 kwietnia 2020",
          matches: {
            teamOne: [2, 11, 1, 4, 13, 5, 8],
            teamTwo: [7, 6, 12, 10, 14, 3, 9],
            scoreOne: ["x", "x", "x", "x", "x", "x", "x"],
            scoreTwo: ["x", "x", "x", "x", "x", "x", "x"],
          },
        },
        {
          week: 17,
          date: "11-12 kwietnia 2020",
          matches: {
            teamOne: [2, 11, 1, 4, 13, 5, 8],
            teamTwo: [7, 6, 12, 10, 14, 3, 9],
            scoreOne: ["x", "x", "x", "x", "x", "x", "x"],
            scoreTwo: ["x", "x", "x", "x", "x", "x", "x"],
          },
        },
        {
          week: 16,
          date: "4-5 kwietnia 2020",
          matches: {
            teamOne: [2, 11, 1, 4, 13, 5, 8],
            teamTwo: [7, 6, 12, 10, 14, 3, 9],
            scoreOne: ["x", "x", "x", "x", "x", "x", "x"],
            scoreTwo: ["x", "x", "x", "x", "x", "x", "x"],
          },
        },
        {
          week: 15,
          date: "28-29 marca 2020",
          matches: {
            teamOne: [2, 11, 1, 4, 13, 5, 8],
            teamTwo: [7, 6, 12, 10, 14, 3, 9],
            scoreOne: ["x", "x", "x", "x", "x", "x", "x"],
            scoreTwo: ["x", "x", "x", "x", "x", "x", "x"],
          },
        },
        {
          week: 14,
          date: "21-22 marca 2020",
          matches: {
            teamOne: [2, 11, 1, 4, 13, 5, 8],
            teamTwo: [7, 6, 12, 10, 14, 3, 9],
            scoreOne: ["x", "x", "x", "x", "x", "x", "x"],
            scoreTwo: ["x", "x", "x", "x", "x", "x", "x"],
          },
        },
        {
          week: 13,
          date: "9-10 listopada 2019",
          matches: {
            teamOne: [2, 11, 1, 4, 13, 5, 8],
            teamTwo: [7, 6, 12, 10, 14, 3, 9],
            scoreOne: [3, 2, 2, 0, 1, 2, 4],
            scoreTwo: [2, 3, 1, 1, 0, 1],
          },
        },
        {
          week: 12,
          date: "2-3 listopada 2019",
          matches: {
            teamOne: [2, 11, 1, 4, 13, 5, 8],
            teamTwo: [7, 6, 12, 10, 14, 3, 9],
            scoreOne: [3, 2, 2, 0, 1, 2, 4],
            scoreTwo: [2, 3, 1, 1, 0, 1],
          },
        },
        {
          week: 11,
          date: "26-27 października 2019",
          matches: {
            teamOne: [2, 11, 1, 4, 13, 5, 8],
            teamTwo: [7, 6, 12, 10, 14, 3, 9],
            scoreOne: [3, 2, 2, 0, 1, 2, 4],
            scoreTwo: [2, 3, 1, 1, 0, 1],
          },
        },
        {
          week: 10,
          date: "19-20 października 2019",
          matches: {
            teamOne: [2, 11, 1, 4, 13, 5, 8],
            teamTwo: [7, 6, 12, 10, 14, 3, 9],
            scoreOne: [3, 2, 2, 0, 1, 2, 4],
            scoreTwo: [2, 3, 1, 1, 0, 1],
          },
        },
        {
          week: 9,
          date: "12-13 października 2019",
          matches: {
            teamOne: [2, 11, 1, 4, 13, 5, 8],
            teamTwo: [7, 6, 12, 10, 14, 3, 9],
            scoreOne: [3, 2, 2, 0, 1, 2, 4],
            scoreTwo: [2, 3, 1, 1, 0, 1],
          },
        },
        {
          week: 8,
          date: "5-6 października 2019",
          matches: {
            teamOne: [2, 11, 1, 4, 13, 5, 8],
            teamTwo: [7, 6, 12, 10, 14, 3, 9],
            scoreOne: [3, 2, 2, 0, 1, 2, 4],
            scoreTwo: [2, 3, 1, 1, 0, 1],
          },
        },
        {
          week: 7,
          date: "28-29 września 2019",
          matches: {
            teamOne: [2, 11, 1, 4, 13, 5, 8],
            teamTwo: [7, 6, 12, 10, 14, 3, 9],
            scoreOne: [3, 2, 2, 0, 1, 2, 4],
            scoreTwo: [2, 3, 1, 1, 0, 1],
          },
        },
        {
          week: 6,
          date: "21-22 września 2019",
          matches: {
            teamOne: [2, 11, 1, 4, 13, 5, 8],
            teamTwo: [7, 6, 12, 10, 14, 3, 9],
            scoreOne: [3, 2, 2, 0, 1, 2, 4],
            scoreTwo: [2, 3, 1, 1, 0, 1],
          },
        },
        {
          week: 5,
          date: "14-15 września 2019",
          matches: {
            teamOne: [2, 11, 1, 4, 13, 5, 8],
            teamTwo: [7, 6, 12, 10, 14, 3, 9],
            scoreOne: [3, 2, 2, 0, 1, 2, 4],
            scoreTwo: [2, 3, 1, 1, 0, 1],
          },
        },
        {
          week: 4,
          date: "7-8 września 2019",
          matches: {
            teamOne: [2, 11, 1, 4, 13, 5, 8],
            teamTwo: [7, 6, 12, 10, 14, 3, 9],
            scoreOne: [3, 2, 2, 0, 1, 2, 4],
            scoreTwo: [2, 3, 1, 1, 0, 1],
          },
        },
        {
          week: 3,
          date: "31 sierpnia - 1 września 2019",
          matches: {
            teamOne: [2, 11, 1, 4, 13, 5, 8],
            teamTwo: [7, 6, 12, 10, 14, 3, 9],
            scoreOne: [3, 2, 2, 0, 1, 2, 4],
            scoreTwo: [2, 3, 1, 1, 0, 1],
          },
        },
        {
          week: 2,
          date: "24-25 sierpnia 2019",
          matches: {
            teamOne: [2, 11, 1, 4, 13, 5, 8],
            teamTwo: [7, 6, 12, 10, 14, 3, 9],
            scoreOne: [3, 2, 2, 0, 1, 2, 4],
            scoreTwo: [2, 3, 1, 1, 0, 1],
          },
        },
        {
          week: 1,
          date: "17-18 sierpnia 2019",
          matches: {
            teamOne: [8, 9, 3, 14, 10, 12, 6],
            teamTwo: [2, 5, 13, 4, 1, 11, 7],
            scoreOne: [2, 6, 3, 0, 1, 2, 3],
            scoreTwo: [1, 2, 0, 3, 2, 3, 0],
          },
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.box {
  margin-bottom: 10px;
}

h3 {
  color: white;
  text-align: center;
  margin-bottom: 10px;
}

.date {
  font-weight: 700;
  background: #f5f2f2;
  padding: 8px 10px;
  font-size: 16px;

  span {
    font-weight: 400;
  }
}

.matches {
  font-size: 14px;
  list-style: none;
  padding: 8px 10px;
  background: white;

  li {
    padding: 3px 0;
    border-bottom: 1px solid #f5f2f2;

    &:first-child {
      padding-top: 0;
    }

    &:last-child {
      border: none;
    }
  }
}

.tur {
  font-weight: 700;
  color: #404040;
}

@media (min-width: 500px) {
  .date {
    font-size: 18px;

    span {
      font-weight: 700;
    }
  }

  .matches {
    font-size: 16px;
  }
}
</style>
