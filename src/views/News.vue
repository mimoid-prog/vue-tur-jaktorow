<template>
  <div id="news" class="news">
    <h2 class="secondaryTitle">Aktualności</h2>
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
      >{{ index + 1 }}</a>
    </div>
  </div>
</template>

<script>
import Vue from 'vue';
import Item from '@/components/Item.vue';
import vueSmoothScroll from 'vue2-smooth-scroll';

Vue.use(vueSmoothScroll);

export default {
  name: 'News',
  components: {
    Item,
  },
  data: function() {
    return {
      page: 1,
      posts: [
        {
          title: 'Tytuł 1',
          date: '12.04.2019',
          content:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc a nulla accumsan, auctor purus quis, fermentum est. Nunc sed accumsan eros. Maecenas ullamcorper nulla non ex efficitur, a hendrerit turpis vulputate. Curabitur vel erat velit. Fusce scelerisque lorem et risus ornare, euismod bibendum sapien euismod.',
        },
        {
          title: 'Tytuł 2',
          date: '12.04.2019',
          content:
            'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Suspendisse id nibh id diam sodales pretium nec in sapien. Maecenas placerat sem vitae felis consequat ultrices. Etiam libero lacus, condimentum at justo in, porttitor ultrices orci. Integer diam mauris, suscipit eu augue ac, ullamcorper tempus lorem. Phasellus porttitor arcu non consequat cursus. Aenean iaculis pretium augue, in vestibulum elit consectetur ac. Ut non neque id nunc iaculis euismod. Aenean viverra enim turpis, vel laoreet urna molestie in.',
        },
        {
          title: 'Tytuł 3',
          date: '12.04.2019',
          content:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc a nulla accumsan, auctor purus quis, fermentum est. Nunc sed accumsan eros. Maecenas ullamcorper nulla non ex efficitur, a hendrerit turpis vulputate. Curabitur vel erat velit. Fusce scelerisque lorem et risus ornare, euismod bibendum sapien euismod.',
        },
        {
          title: 'Tytuł 4',
          date: '12.04.2019',
          content:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc a nulla accumsan, auctor purus quis, fermentum est. Nunc sed accumsan eros. Maecenas ullamcorper nulla non ex efficitur, a hendrerit turpis vulputate. Curabitur vel erat velit. Fusce scelerisque lorem et risus ornare, euismod bibendum sapien euismod.',
        },
        {
          title: 'Tytuł 5',
          date: '12.04.2019',
          content:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc a nulla accumsan, auctor purus quis, fermentum est. Nunc sed accumsan eros. Maecenas ullamcorper nulla non ex efficitur, a hendrerit turpis vulputate. Curabitur vel erat velit. Fusce scelerisque lorem et risus ornare, euismod bibendum sapien euismod.',
        },
        {
          title: 'Tytuł 6',
          date: '12.04.2019',
          content:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc a nulla accumsan, auctor purus quis, fermentum est. Nunc sed accumsan eros. Maecenas ullamcorper nulla non ex efficitur, a hendrerit turpis vulputate. Curabitur vel erat velit. Fusce scelerisque lorem et risus ornare, euismod bibendum sapien euismod.',
        },
        {
          title: 'Tytuł 7',
          date: '12.04.2019',
          content:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc a nulla accumsan, auctor purus quis, fermentum est. Nunc sed accumsan eros. Maecenas ullamcorper nulla non ex efficitur, a hendrerit turpis vulputate. Curabitur vel erat velit. Fusce scelerisque lorem et risus ornare, euismod bibendum sapien euismod.',
        },
        {
          title: 'Tytuł 8',
          date: '12.04.2019',
          content:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc a nulla accumsan, auctor purus quis, fermentum est. Nunc sed accumsan eros. Maecenas ullamcorper nulla non ex efficitur, a hendrerit turpis vulputate. Curabitur vel erat velit. Fusce scelerisque lorem et risus ornare, euismod bibendum sapien euismod.',
        },
        {
          title: 'Tytuł 9',
          date: '12.04.2019',
          content:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc a nulla accumsan, auctor purus quis, fermentum est. Nunc sed accumsan eros. Maecenas ullamcorper nulla non ex efficitur, a hendrerit turpis vulputate. Curabitur vel erat velit. Fusce scelerisque lorem et risus ornare, euismod bibendum sapien euismod.',
        },
        {
          title: 'Tytuł 10',
          date: '12.04.2019',
          content:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc a nulla accumsan, auctor purus quis, fermentum est. Nunc sed accumsan eros. Maecenas ullamcorper nulla non ex efficitur, a hendrerit turpis vulputate. Curabitur vel erat velit. Fusce scelerisque lorem et risus ornare, euismod bibendum sapien euismod.',
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
