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
                Software engineer at
                <a href="http://senior-node.com" style="color: #FFDD57;"
                  >Senior Node</a
                >
              </li>
              <li>
                Master course student at
                <a href="https://bsuir.by" style="color: #FFDD57;">BSUIR</a>
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
  </div>
</template>

<script>
export default {
  name: "home",
  components: {}
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
  }

  .short-info-container h1 {
    margin: 0.5rem 0 !important;
  }

  .short-info-container ul {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
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

  .mb-footer-section {
    padding: 1rem 0 0 0;

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
}
</style>
