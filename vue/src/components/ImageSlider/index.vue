<template>
  <div class="image-slider">
    <div
      v-if="isPreviewActive"
      class="image-slider__privew-background"
      @click="handleImageClick"
    />
    <img
      v-if="images && images.length"
      class="image-slider__image"
      :class="{ 'image-slider__image--preview': isPreviewActive }"
      :src="'images/' + images[activeImageIndex]"
      @click="handleImageClick"
    />
    <div v-if="images && images.length > 1" class="image-slider__navigation">
      <img
        v-for="(image, index) in images"
        :key="image"
        class="image-slider__navigation__thumbnail"
        :class="{
          'image-slider__navigation__thumbnail--active':
            index === activeImageIndex
        }"
        loading="lazy"
        :src="'images/' + image"
        @click="handleImageThumbnailClick(index)"
      />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    images: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      activeImageIndex: 0,
      isPreviewActive: false
    };
  },
  methods: {
    wrapUrl(imageUrl) {
      return `url(${imageUrl})`;
    },
    handleImageThumbnailClick(index) {
      this.activeImageIndex = index;
      this.isPreviewActive = false;
    },
    handleImageClick() {
      this.isPreviewActive = !this.isPreviewActive;
    },
    handleKeyUp(event) {
      if (this.isPreviewActive) {
        switch (event.key) {
          case "ArrowRight":
            this.activeImageIndex =
              (this.activeImageIndex + 1) % this.images.length;
            break;
          case "ArrowLeft":
            this.activeImageIndex =
              this.activeImageIndex - 1 < 0
                ? this.images.length - 1
                : this.activeImageIndex - 1;
            break;
        }
      }
    }
  },
  created() {
    this.keyUpEventListener = e => this.handleKeyUp(e);
    window.addEventListener("keyup", this.keyUpEventListener);
  },
  beforeDestroy() {
    window.removeEventListener("keyup", this.keyUpEventListener);
  }
};
</script>

<style lang="scss">
@import "image-slider.scss";
</style>
