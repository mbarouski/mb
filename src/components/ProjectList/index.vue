<template>
  <div class="project-list">
    <ProjectItem
      v-for="project in projects"
      :key="project.name"
      :project="project"
    />
  </div>
</template>

<script>
import ProjectItem from "./ProjectItem";

export default {
  components: {
    ProjectItem
  },
  props: {
    projects: Array
  }
};
</script>

<style lang="scss">
.project-list {
  display: flex;
  flex-wrap: wrap;

  .project-item {
    margin: 1rem;

    @media only screen and (max-width: 480px) {
      margin: 0 0 1rem 0;
    }
  }
}
</style>
