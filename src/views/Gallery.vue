<template>
  <div class="gallery">
    <h2 class="secondaryTitle viewTitle">Galeria zdjęć</h2>
    <div class="content">
      <VueGallery :images="images" :index="index" @close="index = null"></VueGallery>
      <div
        class="image"
        v-for="(image, imageIndex) in images"
        :key="imageIndex"
        @click="index = imageIndex"
        :style="{
          backgroundImage: 'url(' + image + ')',
        }"
      ></div>
    </div>
  </div>
</template>

<script>
import VueGallery from 'vue-gallery';

export default {
  name: 'Gallery',
  components: {
    VueGallery,
  },
  data: function() {
    return {
      im: '1.jpg',
      images: [
        'https://scontent-frx5-1.xx.fbcdn.net/v/t31.0-8/622155_275267069252144_768721570_o.jpg?_nc_cat=100&_nc_sid=d2e176&_nc_ohc=clmX1rLckD0AX_q1tYl&_nc_ht=scontent-frx5-1.xx&oh=01d8a910b0cc0277bcbae8c74c674969&oe=5EDA13B9',
        'https://scontent-frx5-1.xx.fbcdn.net/v/t31.0-8/622155_275267069252144_768721570_o.jpg?_nc_cat=100&_nc_sid=d2e176&_nc_ohc=clmX1rLckD0AX_q1tYl&_nc_ht=scontent-frx5-1.xx&oh=01d8a910b0cc0277bcbae8c74c674969&oe=5EDA13B9',
        'https://scontent-frx5-1.xx.fbcdn.net/v/t31.0-8/622155_275267069252144_768721570_o.jpg?_nc_cat=100&_nc_sid=d2e176&_nc_ohc=clmX1rLckD0AX_q1tYl&_nc_ht=scontent-frx5-1.xx&oh=01d8a910b0cc0277bcbae8c74c674969&oe=5EDA13B9',
        'https://scontent-frx5-1.xx.fbcdn.net/v/t31.0-8/622155_275267069252144_768721570_o.jpg?_nc_cat=100&_nc_sid=d2e176&_nc_ohc=clmX1rLckD0AX_q1tYl&_nc_ht=scontent-frx5-1.xx&oh=01d8a910b0cc0277bcbae8c74c674969&oe=5EDA13B9',
        'https://scontent-frx5-1.xx.fbcdn.net/v/t31.0-8/622155_275267069252144_768721570_o.jpg?_nc_cat=100&_nc_sid=d2e176&_nc_ohc=clmX1rLckD0AX_q1tYl&_nc_ht=scontent-frx5-1.xx&oh=01d8a910b0cc0277bcbae8c74c674969&oe=5EDA13B9',
        'https://scontent-frx5-1.xx.fbcdn.net/v/t31.0-8/622155_275267069252144_768721570_o.jpg?_nc_cat=100&_nc_sid=d2e176&_nc_ohc=clmX1rLckD0AX_q1tYl&_nc_ht=scontent-frx5-1.xx&oh=01d8a910b0cc0277bcbae8c74c674969&oe=5EDA13B9',
        'https://scontent-frx5-1.xx.fbcdn.net/v/t31.0-8/622155_275267069252144_768721570_o.jpg?_nc_cat=100&_nc_sid=d2e176&_nc_ohc=clmX1rLckD0AX_q1tYl&_nc_ht=scontent-frx5-1.xx&oh=01d8a910b0cc0277bcbae8c74c674969&oe=5EDA13B9',
        'https://scontent-frx5-1.xx.fbcdn.net/v/t31.0-8/622155_275267069252144_768721570_o.jpg?_nc_cat=100&_nc_sid=d2e176&_nc_ohc=clmX1rLckD0AX_q1tYl&_nc_ht=scontent-frx5-1.xx&oh=01d8a910b0cc0277bcbae8c74c674969&oe=5EDA13B9',
        'https://scontent-frx5-1.xx.fbcdn.net/v/t31.0-8/622155_275267069252144_768721570_o.jpg?_nc_cat=100&_nc_sid=d2e176&_nc_ohc=clmX1rLckD0AX_q1tYl&_nc_ht=scontent-frx5-1.xx&oh=01d8a910b0cc0277bcbae8c74c674969&oe=5EDA13B9',
        'https://scontent-frx5-1.xx.fbcdn.net/v/t31.0-8/622155_275267069252144_768721570_o.jpg?_nc_cat=100&_nc_sid=d2e176&_nc_ohc=clmX1rLckD0AX_q1tYl&_nc_ht=scontent-frx5-1.xx&oh=01d8a910b0cc0277bcbae8c74c674969&oe=5EDA13B9',
        'https://scontent-frx5-1.xx.fbcdn.net/v/t31.0-8/622155_275267069252144_768721570_o.jpg?_nc_cat=100&_nc_sid=d2e176&_nc_ohc=clmX1rLckD0AX_q1tYl&_nc_ht=scontent-frx5-1.xx&oh=01d8a910b0cc0277bcbae8c74c674969&oe=5EDA13B9',
        'https://scontent-frx5-1.xx.fbcdn.net/v/t31.0-8/622155_275267069252144_768721570_o.jpg?_nc_cat=100&_nc_sid=d2e176&_nc_ohc=clmX1rLckD0AX_q1tYl&_nc_ht=scontent-frx5-1.xx&oh=01d8a910b0cc0277bcbae8c74c674969&oe=5EDA13B9',
        'https://scontent-frx5-1.xx.fbcdn.net/v/t31.0-8/622155_275267069252144_768721570_o.jpg?_nc_cat=100&_nc_sid=d2e176&_nc_ohc=clmX1rLckD0AX_q1tYl&_nc_ht=scontent-frx5-1.xx&oh=01d8a910b0cc0277bcbae8c74c674969&oe=5EDA13B9',
        'https://scontent-frx5-1.xx.fbcdn.net/v/t31.0-8/622155_275267069252144_768721570_o.jpg?_nc_cat=100&_nc_sid=d2e176&_nc_ohc=clmX1rLckD0AX_q1tYl&_nc_ht=scontent-frx5-1.xx&oh=01d8a910b0cc0277bcbae8c74c674969&oe=5EDA13B9',
        'https://scontent-frx5-1.xx.fbcdn.net/v/t31.0-8/622155_275267069252144_768721570_o.jpg?_nc_cat=100&_nc_sid=d2e176&_nc_ohc=clmX1rLckD0AX_q1tYl&_nc_ht=scontent-frx5-1.xx&oh=01d8a910b0cc0277bcbae8c74c674969&oe=5EDA13B9',
        'https://scontent-frx5-1.xx.fbcdn.net/v/t31.0-8/622155_275267069252144_768721570_o.jpg?_nc_cat=100&_nc_sid=d2e176&_nc_ohc=clmX1rLckD0AX_q1tYl&_nc_ht=scontent-frx5-1.xx&oh=01d8a910b0cc0277bcbae8c74c674969&oe=5EDA13B9',
      ],
      index: null,
    };
  },
};
</script>

<style lang="scss" scoped>
.gallery {
  width: 100%;
}

.content {
  background: white;
  padding: 20px;
  display: grid;
  grid-gap: 10px 0;
}

.image {
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  border: 1px solid #ebebeb;
  height: 180px;
  width: 100%;
  object-fit: cover;
  cursor: pointer;
}

@media (min-width: 640px) {
  .content {
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 20px;
  }
}

@media (min-width: 850px) {
  .content {
    grid-template-columns: 1fr 1fr;
  }
}

@media (min-width: 1280px) {
  .content {
    grid-template-columns: 1fr 1fr 1fr;
  }
}

@media (min-width: 1460px) {
  .content {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
}
</style>
