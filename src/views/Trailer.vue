<template>
  <div class="page trailer-page">
    <section class="section">
      <div class="container">
        <h1 class="title">Trailer</h1>
        <img
          v-for="i in 13"
          :key="i"
          :src="publicPath + 'images/trailer/' + i + '.JPG'"
        />
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "trailer",
  components: {},
  data: () => ({
    publicPath: process.env.BASE_URL
  })
};
</script>

<style scoped lang="scss">
.trailer-page {
  img {
    width: 50%;
    border-radius: 0.5rem;
    margin: 1rem;
  }
}
</style>
