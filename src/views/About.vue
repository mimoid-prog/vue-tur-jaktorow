<template>
  <div class="about">
    <h2 class="secondaryTitle viewTitle">O klubie</h2>
    <div class="content">
      <p>Klub piłkarski Tur Jaktorów powstał w roku 2003. Od tej pory vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Suspendisse id nibh id diam sodales pretium nec in sapien. Maecenas placerat sem vitae felis consequat ultrices. Etiam libero lacus, condimentum at justo in, porttitor ultrices orci. Integer diam mauris, suscipit eu augue ac, ullamcorper tempus lorem. Phasellus porttitor arcu non consequat cursus. Aenean iaculis pretium augue, in vestibulum elit consectetur ac. Ut non neque id nunc iaculis euismod. Aenean viverra enim turpis, vel laoreet urna molestie in.</p>
      <div class="image" />
      <p>Bestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Suspendisse id nibh id diam sodales pretium nec in sapien. Maecenas placerat sem vitae felis consequat ultrices. Etiam libero lacus, condimentum at justo in, porttitor ultrices orci. Integer diam mauris, suscipit eu augue ac, ullamcorper tempus lorem. Phasellus porttitor arcu non consequat cursus. Aenean iaculis pretium augue, in vestibulum elit consectetur ac. Ut non neque id nunc iaculis euismod. Aenean viverra enim turpis, vel laoreet urna molestie in.</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'About',
};
</script>

<style lang="scss" scoped>
.about {
  width: 100%;
}

.content {
  background: white;
  padding: 20px;
}

.image {
  background: url('../assets/images/kadra.jpg');
  width: 100%;
  height: 300px;
  margin: 20px 0;
  background-size: cover;
  background-position: 50%;
  background-repeat: no-repeat;
}

@media (min-width: 1024px) {
  .content {
    padding: 30px;
  }

  .image {
    background-size: 110%;
    transition: background-size 0.4s ease;

    &:hover {
      background-size: 100%;
    }
  }
}
</style>