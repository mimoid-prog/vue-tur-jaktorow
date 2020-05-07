<template>
  <div id="news" class="news">
    <h2 class="secondary-title">Aktualności</h2>
    <div class="posts">
      <div class="post" v-for="(item, index) in getPosts()" :key="index">
        <Item>
          <template v-slot:title>{{ item.title }}</template>
          <template v-slot:content>{{ item.content }}</template>
        </Item>
      </div>
    </div>
    <div class="paginator">
      <a
        v-for="(item, index) in pages"
        :key="index"
        @click="page = index + 1"
        :class="['page', { currentPage: page === index + 1 }]"
        href="#app"
        v-smooth-scroll
      >
        {{ index + 1 }}
      </a>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import Item from "@/components/Item.vue";
import vueSmoothScroll from "vue2-smooth-scroll";

Vue.use(vueSmoothScroll);

export default {
  name: "News",
  components: {
    Item,
  },
  data: function() {
    return {
      page: 1,
      posts: [
        {
          title: "Małe podsumowanie sezonu!1",
          date: "12.04.2019",
          content:
            "Sezon 2013/2014 nasz zespół skończył na ósmej lokacie w swojej lidze. Wynik ten można uznać za mały sukces ponieważ to był pierwszy sezon tego rocznika. W naszym zespole większość chłopców była z rocznika 2001 ale młodsi zawodnicy dorównywali swoim starszym kolegą. Małe podsumowanie sezonu w rozwinięciu (klikamy czytano)... W rozwinięciu również dostępne są zdjęcia z zakończenia sezonu.",
        },
        {
          title: "Minimalna przegrana z Ożarowianką!2",
          date: "12.04.2019",
          content:
            "W ostatniej kolejce ligowej nasi zawodnicy minimalnie ulegli zespołowi Ożarowianki Ożarów. Mecz zakończył się wynikiem 3-4 (2-1). Cieszy to że z zespołem o dużo razy lepszym od nas walczyliśmy jak równy z równym co można uznać za mały sukces. Zabrakło zimnej krwi w obronie i skuteczności w sytuacjach podbramkowych. Zespół przyjezdnych grał do końca i w ostatnich minutach wpakował naszym trzy bramki. Cała relacja w rozwinięciu newsa (klikamy czytano)... ",
        },
        {
          title: "Małe podsumowanie sezonu!3",
          date: "12.04.2019",
          content:
            "Sezon 2013/2014 nasz zespół skończył na ósmej lokacie w swojej lidze. Wynik ten można uznać za mały sukces ponieważ to był pierwszy sezon tego rocznika. W naszym zespole większość chłopców była z rocznika 2001 ale młodsi zawodnicy dorównywali swoim starszym kolegą. Małe podsumowanie sezonu w rozwinięciu (klikamy czytano)... W rozwinięciu również dostępne są zdjęcia z zakończenia sezonu.",
        },
        {
          title: "Małe podsumowanie sezonu!4",
          date: "12.04.2019",
          content:
            "Sezon 2013/2014 nasz zespół skończył na ósmej lokacie w swojej lidze. Wynik ten można uznać za mały sukces ponieważ to był pierwszy sezon tego rocznika. W naszym zespole większość chłopców była z rocznika 2001 ale młodsi zawodnicy dorównywali swoim starszym kolegą. Małe podsumowanie sezonu w rozwinięciu (klikamy czytano)... W rozwinięciu również dostępne są zdjęcia z zakończenia sezonu.",
        },
        {
          title: "Małe podsumowanie sezonu!5",
          date: "12.04.2019",
          content:
            "Sezon 2013/2014 nasz zespół skończył na ósmej lokacie w swojej lidze. Wynik ten można uznać za mały sukces ponieważ to był pierwszy sezon tego rocznika. W naszym zespole większość chłopców była z rocznika 2001 ale młodsi zawodnicy dorównywali swoim starszym kolegą. Małe podsumowanie sezonu w rozwinięciu (klikamy czytano)... W rozwinięciu również dostępne są zdjęcia z zakończenia sezonu.",
        },
        {
          title: "Małe podsumowanie sezonu!6",
          date: "12.04.2019",
          content:
            "Sezon 2013/2014 nasz zespół skończył na ósmej lokacie w swojej lidze. Wynik ten można uznać za mały sukces ponieważ to był pierwszy sezon tego rocznika. W naszym zespole większość chłopców była z rocznika 2001 ale młodsi zawodnicy dorównywali swoim starszym kolegą. Małe podsumowanie sezonu w rozwinięciu (klikamy czytano)... W rozwinięciu również dostępne są zdjęcia z zakończenia sezonu.",
        },
        {
          title: "Małe podsumowanie sezonu!7",
          date: "12.04.2019",
          content:
            "Sezon 2013/2014 nasz zespół skończył na ósmej lokacie w swojej lidze. Wynik ten można uznać za mały sukces ponieważ to był pierwszy sezon tego rocznika. W naszym zespole większość chłopców była z rocznika 2001 ale młodsi zawodnicy dorównywali swoim starszym kolegą. Małe podsumowanie sezonu w rozwinięciu (klikamy czytano)... W rozwinięciu również dostępne są zdjęcia z zakończenia sezonu.",
        },
        {
          title: "Małe podsumowanie sezonu!8",
          date: "12.04.2019",
          content:
            "Sezon 2013/2014 nasz zespół skończył na ósmej lokacie w swojej lidze. Wynik ten można uznać za mały sukces ponieważ to był pierwszy sezon tego rocznika. W naszym zespole większość chłopców była z rocznika 2001 ale młodsi zawodnicy dorównywali swoim starszym kolegą. Małe podsumowanie sezonu w rozwinięciu (klikamy czytano)... W rozwinięciu również dostępne są zdjęcia z zakończenia sezonu.",
        },
        {
          title: "Małe podsumowanie sezonu!9",
          date: "12.04.2019",
          content:
            "Sezon 2013/2014 nasz zespół skończył na ósmej lokacie w swojej lidze. Wynik ten można uznać za mały sukces ponieważ to był pierwszy sezon tego rocznika. W naszym zespole większość chłopców była z rocznika 2001 ale młodsi zawodnicy dorównywali swoim starszym kolegą. Małe podsumowanie sezonu w rozwinięciu (klikamy czytano)... W rozwinięciu również dostępne są zdjęcia z zakończenia sezonu.",
        },
        {
          title: "Małe podsumowanie sezonu!10",
          date: "12.04.2019",
          content:
            "Sezon 2013/2014 nasz zespół skończył na ósmej lokacie w swojej lidze. Wynik ten można uznać za mały sukces ponieważ to był pierwszy sezon tego rocznika. W naszym zespole większość chłopców była z rocznika 2001 ale młodsi zawodnicy dorównywali swoim starszym kolegą. Małe podsumowanie sezonu w rozwinięciu (klikamy czytano)... W rozwinięciu również dostępne są zdjęcia z zakończenia sezonu.",
        },
      ],
    };
  },
  computed: {
    pages: function() {
      return Math.ceil(this.posts.length / 5);
    },
  },
  methods: {
    getPosts: function() {
      return this.posts.slice(this.page * 5 - 5, this.page * 5);
    },
  },
};
</script>

<style lang="scss" scoped>
.news {
  width: 100%;
}

h2 {
  color: white;
  text-align: center;
}

.posts {
  margin-top: 20px;
}

.post {
  background: white;
  margin-top: 15px;

  &:first-child {
    margin: 0;
  }
}

.paginator {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}

.page {
  background: white;
  border: 1px solid #e3e3e3;
  border-radius: 2px;
  width: 32px;
  height: 40px;
  text-align: center;
  line-height: 40px;
  margin-right: 1px;
  cursor: pointer;
  font-family: Jost;
  font-weight: 700;
  font-size: 16px;
  color: black;
  text-decoration: none;

  &:hover {
    background: #f0f0f0;
  }
}

.currentPage {
  background: #7ac1f0;
  border-color: #5ca9db;

  &:hover {
    background: #5ca9db;
  }
}
</style>
