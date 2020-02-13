<template>
  <div class="project-item">
    <div class="project-item__image-container">
      <ImageSlider v-if="project.images" :images="project.images" />
      <img v-else :src="'images/' + project.image" />
    </div>
    <h3 class="project-title__name">
      <a :href="project.externalLink" v-if="project.externalLink">{{
        project.name
      }}</a>
      <router-link
        v-else-if="project.internalLink"
        :to="project.internalLink"
        >{{ project.name }}</router-link
      >
      <p v-else>{{ project.name }}</p>
    </h3>
    <p class="project-item__description">{{ project.description }}</p>
    <div
      v-for="(label, i) in project.labels"
      :key="i"
      class="is-size-7 project-item__label"
    >
      {{ label }}
    </div>
  </div>
</template>

<script>
import ImageSlider from "../ImageSlider/index";

export default {
  components: {
    ImageSlider
  },
  props: {
    project: Object
  },
  data: () => ({
    publicPath: process.env.BASE_URL
  })
};
</script>

<style lang="scss">
.project-item {
  width: 100%;
  border: 1px solid $color-light-grey;
  border-radius: 0.5rem;
  background: $color-white;
  overflow: hidden;
  padding-bottom: 0.25rem;

  .project-item__image-container {
    display: flex;
    justify-content: center;
    margin-bottom: 0.5rem;
    border-bottom: 1px solid $color-lighter-grey;
    width: 100%;

    img {
      min-width: 100%;
      object-fit: contain;
    }
  }

  .project-title__name {
    color: $color-almost-black;
    margin-bottom: 0.25rem;
    padding: 0 0.5rem;

    a {
      color: $color-almost-black;
      padding: 0.125rem;
      display: inline-block;
      transition: 0.1s transform ease-in-out;

      &:hover {
        color: $color-yellow;
        background: $color-purple;
        transform: rotateZ(-10deg);
      }
    }
  }

  .project-item__description {
    color: $color-darker-grey;
    margin-bottom: 0.5rem;
    padding: 0 0.5rem;
    font-size: 0.875rem;
  }

  .project-item__label {
    border-radius: 0.5rem;
    color: $color-purple;
    background: $color-lighter-grey;
    width: fit-content;
    margin: 0.25rem -0.25rem 0 0.5rem;
    padding: 0.25rem;
    display: inline-block;
  }
}
</style>
