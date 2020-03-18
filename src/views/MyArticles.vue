<template>
  <div class="page my-articles-page">
    <section class="section">
      <div class="container">
        <PageHeader :title="'My articles'" />
        <div class="articles">
          <div class="article">
            <span>18 Mar 2020 - </span>
            <a
              href="https://medium.com/@mbarouski/google-compute-engine-load-balancing-with-consul-da3ada21d010"
              target="_blank"
              >Google Compute Engine load balancing with Consul</a
            >
          </div>
          <div class="article">
            <span>31 Dec 2018 - </span>
            <a href="https://habr.com/ru/post/434902/" target="_blank"
              >Создание кастомного генератора запросов в Spring Data Neo4j
              (Часть 1)</a
            >
          </div>
          <div class="article">
            <span>11 Nov 2018 - </span>
            <a href="https://habr.com/ru/post/429472/" target="_blank"
              >Docker Compose + Consul + Spring Boot + FeignClient</a
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
  data: () => ({}),
  mounted() {
    this.$ga.page("/my-articles");
  }
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
