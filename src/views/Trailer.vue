<template>
  <div class="page trailer-page">
    <section class="section">
      <div class="container">
        <h1 class="title">Project: Trailer</h1>
        <router-link class="main-link" to="/">main</router-link>
        <div class="slides">
          <div class="slide">
            <div class="slide-content slide-content--instagram">
              <a
                href="https://www.instagram.com/p/B1UZAPSjLSC"
                target="_blank"
                style="display: block;"
                >0. Trailer in action (instagram link)</a
              >
              <video controls>
                <source
                  src="https://scontent-frx5-1.cdninstagram.com/v/t50.2886-16/69422804_2515295442037175_1210894936221618248_n.mp4?_nc_ht=scontent-frx5-1.cdninstagram.com&_nc_cat=111&_nc_ohc=jy-1IwTsU2cAX-9gDeb&oe=5E130DCA&oh=f907e80b3e13a306d48a31da17458495"
                  type="video/mp4"
                />
                Your browser does not support HTML5 video.
              </video>
            </div>
          </div>
          <div v-for="(slide, i) in slides" :key="slide.image" class="slide">
            <div class="slide-content">
              <p>{{ i + 1 + ". " + slide.description }}</p>
              <img
                :class="{ rotate90: slide.rotate90 }"
                :src="publicPath + 'images/trailer/' + slide.image"
                lazy
              />
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
  data: () => ({
    publicPath: process.env.BASE_URL,
    slides: [
      {
        image: "1.JPG",
        description: "Getting old Ford Escort back bridge"
      },
      {
        image: "2.JPG",
        description: "Before assembling chassis"
      },
      {
        image: "3.JPG",
        description: "Assembled chassis"
      },
      {
        image: "4.JPG",
        description: "Chassis with wheels and jambs"
      },
      {
        image: "5.JPG",
        description: "Constructed box"
      },
      {
        image: "6.JPG",
        description: "Box on chassis"
      },
      {
        image: "7.JPG",
        description: "Fixed box on chassis"
      },
      {
        image: "8.JPG",
        description: "Floor for legs",
        rotate90: true
      },
      {
        image: "9.JPG",
        description: "Back door XD"
      },
      {
        image: "10.JPG",
        description: "Almost..."
      },
      {
        image: "11.JPG",
        description: "Stop pedal"
      },
      {
        image: "12.JPG",
        description: "Painted"
      },
      {
        image: "13.JPG",
        description: "Painted (back view)",
        rotate90: true
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
        img {
          border-radius: 0.25rem;
          object-fit: cover;
          max-height: 50vh;

          &.rotate90 {
            transform: rotateZ(90deg) scale(0.75);
          }
        }
      }
    }
  }
}
</style>
