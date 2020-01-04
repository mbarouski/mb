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
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 1rem;
  grid-row-gap: 1rem;

  @media only screen and (max-width: 920px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media only screen and (max-width: 480px) {
    grid-template-columns: repeat(1, 1fr);
  }

  .project-item {
    @media only screen and (max-width: 480px) {
      margin: 0 0 1rem 0;
    }
  }
}
</style>
