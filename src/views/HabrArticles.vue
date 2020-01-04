<template>
  <div class="page habr-articles-page">
    <section class="section">
      <div class="container">
        <router-link class="main-link" to="/">main</router-link>
        <h1 class="title">Habr articles</h1>
        <div class="articles">
          <div class="article">
            <a href="https://habr.com/ru/post/429472/"
              >Docker Compose + Consul + Spring Boot + FeignClient</a
            >
          </div>
          <div class="article">
            <a href="https://habr.com/ru/post/434902/"
              >Создание кастомного генератора запросов в Spring Data Neo4j
              (Часть 1)</a
            >
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "habr-articles",
  components: {},
  data: () => ({})
};
</script>

<style scoped lang="scss">
.habr-articles-page {
  .main-link {
    display: block;
    margin-bottom: 1rem;
  }
  .articles {
    .article {
      margin-bottom: 1rem;
    }
  }
}
</style>
