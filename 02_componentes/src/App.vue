<script>
import Card from "./components/Card.vue";

export default {
  components: {
    Card,
  },
};
</script>

<template>
  <div>
    <h1>Componentes</h1>
    <hr />
    <h2>Redes Sociales</h2>
    <div class="card-container">
      <Card
        url="https://www.google.com"
        title="Google"
        description="Google is a search engine"
        img="https://pbs.twimg.com/profile_images/1311763847775125516/mvBRhlDs_400x400.jpg"
      ></Card>
      <Card
        url="https://www.facebook.com"
        title="Facebook"
        description="Facebook is a social media platform"
        img="https://www.facebook.com/images/fb_icon_325x325.png"
      ></Card>
      <Card
        url="https://www.twitter.com"
        title="Twitter"
        description="Twitter is a social media platform"
        img="https://pbs.twimg.com/profile_images/1683364031921356800/lC0xkPJZ_400x400.jpg"
      ></Card>
    </div>
    <h2>Frameworks</h2>
    <div class="card-container">
      <Card
        url="https://vuejs.org"
        title="Vue"
        description="Vue is a progressive framework"
        img="https://vuejs.org/images/logo.png"
      ></Card>
      <Card
        url="https://reactjs.org"
        title="React"
        description="React is a library"
        img="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png"
      ></Card>
      <Card
        url="https://angular.io"
        title="Angular"
        description="Angular is a framework"
        img="https://angular.io/assets/images/logos/angular/angular.svg"
      ></Card>
    </div>
  </div>
</template>

<style scoped>
h2 {
  color: #007bff;
}

.card-container {
  display: flex;
  flex-wrap: wrap;
}
</style>
