<script>
import Grid from "./Grid.vue";

export default {
  components: {
    Grid,
  },
  props: {
    url: String,
    title: String,
    description: String,
    img: String,
  },
};
</script>

<template>
  <div>
    <Grid>
      <img :src="img" :alt="title" />
      <h2>{{ title }}</h2>
      <p>{{ description }}</p>
      <a :href="url">{{ url }}</a>
    </Grid>
  </div>
</template>

<style scoped>
img {
  height: 100px;
  object-fit: cover;
  padding: 0.5rem;
}

h2 {
  font-size: 1.5rem;
  margin: 0.5rem 0;
  color: #007bff;
}

p {
  margin: 0.5rem 0;
}

a {
  color: #007bff;
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}
</style>
