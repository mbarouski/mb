<template>
  <div class="page-header">
    <router-link class="main-link" to="/">main</router-link>
    <h1 class="title">{{ title }}</h1>
    <hr class="hr" />
  </div>
</template>

<script>
export default {
  props: {
    title: String
  }
};
</script>

<style lang="scss">
.page-header {
  .main-link {
    display: block;
    margin-bottom: 1rem;
  }

  .title {
    margin-bottom: 1.5rem;
  }
}
</style>
