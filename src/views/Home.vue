<template>
  <div class="page home-page">
    <section class="hero is-primary">
      <div class="hero-body">
        <div class="container">
          <figure class="image is-256x256">
            <img class="is-rounded" src="../assets/images/me.jpg" />
          </figure>

          <div class="short-info-container">
            <h1 class="title">Maksim Barouski</h1>
            <ul>
              <li>
                Software Engineer [<a
                  href="http://senior-node.com"
                  style="color: #FFDD57;"
                  >Senior Node</a
                >]
              </li>
              <li>
                Bachelor of Computer Science [<a
                  href="https://bsuir.by"
                  style="color: #FFDD57;"
                  >BSUIR</a
                >]
              </li>
            </ul>
          </div>

          <ul class="social-link-list">
            <li>
              <a
                href="https://www.linkedin.com/in/maksim-barouski/"
                class="social-link"
              >
                <b-icon pack="fab" icon="linkedin-in" size="is-medium" />
              </a>
            </li>
            <li>
              <a href="https://github.com/maximka777" class="social-link">
                <b-icon pack="fab" icon="github" size="is-medium" />
              </a>
            </li>
            <li>
              <a href="https://t.me/mbarouski" class="social-link">
                <b-icon pack="fab" icon="telegram-plane" size="is-medium" />
              </a>
            </li>
            <li>
              <a href="mailto:maksim.borovskij@yandex.ru" class="social-link">
                <b-icon pack="fas" icon="envelope" size="is-medium" />
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/maximka_anatolevich"
                class="social-link"
              >
                <b-icon pack="fab" icon="instagram" size="is-medium" />
              </a>
            </li>
            <li>
              <a href="https://twitter.com/MBorovskij" class="social-link">
                <b-icon pack="fab" icon="twitter" size="is-medium" />
              </a>
            </li>
            <li>
              <a
                href="https://stackoverflow.com/users/6575674/maxim-anatolevich-borovsky"
                class="social-link"
              >
                <b-icon pack="fab" icon="stack-overflow" size="is-medium" />
              </a>
            </li>
            <li>
              <a
                href="https://www.producthunt.com/@mborovskij/made"
                class="social-link"
              >
                <b-icon
                  pack="fab"
                  icon="product-hunt"
                  size="is-medium"
                  title="Product hunt"
                />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>

    <!--p class="ask-me-section" style="text-align: center; margin: 1rem 0;">
      Ask me anything in
      <a href="https://hear.hr/fevvun" target="_blank">my HearHear room</a>
    </p>

    <hr class="hr" /-->

    <section class="section mb-footer-section">
      <div class="container mb-footer">
        <div class="page-link">
          <router-link to="/projects">Projects I am/was working on</router-link>
        </div>
        <div class="page-link">
          <router-link to="/technologies"
            >Technologies I touched to</router-link
          >
        </div>
        <div class="page-link">
          <router-link to="/side-projects">Side projects</router-link>
        </div>
        <div class="page-link">
          <router-link to="/my-articles">My articles</router-link>
        </div>
      </div>
    </section>

    <hr class="hr" />

    <p style="text-align: center; margin: 1rem 0;">
      Maybe I'm coding now... 👨‍💻
    </p>

    <!--p style="text-align: center; margin: 1rem 0;">
      Passed
      <a
        class="link"
        href="https://www.coursera.org/learn/vvedenie-mashinnoe-obuchenie"
        >Introduction to ML</a
      >
      course... 👨‍🔬
      <br />
      Submitted the final task on
      <a class="link" href="https://www.kaggle.com/maksimbarouski">Kaggle</a> 💪
    </p-->
  </div>
</template>

<script>
export default {
  name: "home",
  components: {},
  mounted() {
    if (this.$ga) {
      this.$ga.page("/");
    }
  }
};
</script>

<style lang="scss">
.home-page {
  .hero-body .container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .short-info-container {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    max-width: 19.5rem;
    overflow: visible;
    white-space: nowrap;
    overflow: visible;
  }

  .short-info-container h1 {
    margin: 0.5rem 0 !important;
  }

  .short-info-container ul {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  .short-info-container ul li a:hover {
    text-decoration: underline;
  }

  .hero-body {
    padding: 1.5rem !important;
  }

  .social-link-list {
    display: flex;
    margin-top: 0.5rem;

    li {
      margin: 0.25rem;

      .social-link {
        color: $color-white;
        transition: 0.05s color ease-in-out;

        &:hover {
          color: $color-yellow;
        }
      }
    }
  }

  .title {
    text-align: center;
  }

  .hr {
    margin: 1rem 5rem;
  }

  .ask-me-section {
    a {
      background: $color-purple;
      color: $color-yellow;
      padding: 0.25rem;
      border-radius: 0.25rem;

      &:hover {
        text-decoration: underline;
      }
    }
  }

  .mb-footer-section {
    padding: 0;

    .mb-footer {
      display: flex;
      flex-direction: column;
      align-items: center;

      .page-link {
        margin: 0.5rem;

        a {
          &:hover {
            color: $color-yellow;
            text-decoration: underline;
          }
        }
      }
    }
  }

  p {
    a.link {
      &:hover {
        color: $color-yellow;
        text-decoration: underline;
      }
    }
  }
}
</style>
