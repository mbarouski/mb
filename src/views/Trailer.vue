<template>
  <div class="page trailer-page">
    <section class="section">
      <div class="container">
        <router-link class="main-link" to="/">main</router-link>
        <h1 class="title">Project: Trailer</h1>
        <div class="slides">
          <div class="slide">
            <div class="slide-content slide-content--instagram">
              <a
                href="https://www.instagram.com/p/B1UZAPSjLSC"
                target="_blank"
                style="display: block;"
                >0. Trailer in action (Instagram)</a
              >
            </div>
          </div>
          <div v-for="(slide, i) in slides" :key="slide.image" class="slide">
            <div class="slide-content">
              <p>{{ i + 1 + ". " + slide.description }}</p>
              <div class="slide__image-container">
                <img
                  :class="{ rotate90: slide.rotate90 }"
                  :src="'images/trailer/' + slide.image"
                  :loading="i < 3 ? 'eager' : 'lazy'"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "trailer",
  components: {},
  mounted() {
    this.$ga.page("/trailer");
  },
  data: () => ({
    slides: [
      {
        image: "1-min.jpg",
        description: "Getting old Ford Escort back bridge"
      },
      {
        image: "2-min.jpg",
        description: "Before assembling chassis"
      },
      {
        image: "3-min.jpg",
        description: "Assembled chassis"
      },
      {
        image: "4-min.jpg",
        description: "Chassis with wheels and jambs"
      },
      {
        image: "5-min.jpg",
        description: "Constructed box"
      },
      {
        image: "6-min.jpg",
        description: "Box on chassis"
      },
      {
        image: "7-min.jpg",
        description: "Fixed box on chassis"
      },
      {
        image: "8-min.jpg",
        description: "Floor for legs"
      },
      {
        image: "9-min.jpg",
        description: "Back door XD"
      },
      {
        image: "10-min.jpg",
        description: "Almost..."
      },
      {
        image: "11-min.jpg",
        description: "Stop pedal"
      },
      {
        image: "12.JPG",
        description: "Painted"
      },
      {
        image: "13-min.jpg",
        description: "Painted (back view)"
      }
    ]
  })
};
</script>

<style scoped lang="scss">
.trailer-page {
  .main-link {
    display: block;
    margin-bottom: 1rem;
  }
  .slides {
    .slide {
      margin-bottom: 1rem;

      .slide-content {
        .slide__image-container {
          width: 50vmin;
          height: 50vmin;
          min-width: 20rem;
          min-height: 20rem;
          background-color: #eee;
          border-radius: 0.5rem;
          overflow: hidden;

          img {
            width: 100%;
            height: 100%;
            object-fit: cover;

            &.rotate90 {
              transform: rotateZ(90deg) scale(0.75);
            }
          }
        }
      }
    }
  }
}
</style>
