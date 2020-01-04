<template>
  <div class="page my-articles-page">
    <section class="section">
      <div class="container">
        <PageHeader :title="'My articles'" />
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
import PageHeader from "../components/PageHeader";

export default {
  name: "my-articles",
  components: {
    PageHeader
  },
  data: () => ({})
};
</script>

<style scoped lang="scss">
.my-articles-page {
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
