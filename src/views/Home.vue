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
            <!-- TODO: Add habr link -->
          </ul>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <h1 class="title">Projects I am/was working on</h1>
        <div class="projects columns">
          <div class="project-item column">
            <div class="logo-container">
              <img src="../assets/images/vs.png" />
            </div>
            <h3><a href="https://app.visualserver.com/">Visual Server</a></h3>
            <p>Website builder for artists</p>
            <span class="is-size-7">Node.js + Angular developer</span><br />
            <span class="is-size-7">2017-2018</span>
          </div>
          <div class="project-item column">
            <div class="logo-container">
              <img src="../assets/images/et.png" />
            </div>
            <h3><a href="https://earthtoday.com">EarthToday</a></h3>
            <p>
              EarthToday is a community-driven content platform to inform,
              inspire, educate and entertain.
            </p>
            <span class="is-size-7">Software engineer (Java + Angular)</span
            ><br />
            <span class="is-size-7">2018-now</span>
          </div>
          <div class="project-item column">
            <div class="logo-container">
              <img src="../assets/images/hh.svg" />
            </div>
            <h3><a href="https://hearhear.app">HearHear</a></h3>
            <p>Ask anybody, anything. Together, we will get an answer.</p>
            <span class="is-size-7">Software engineer (Java + Vue)</span><br />
            <span class="is-size-7">2019-now</span>
          </div>
        </div>
      </div>
    </section>

    <hr />

    <section class="section">
      <div class="container">
        <h1 class="title">Technologies I touched to</h1>

        <div class="technologies columns">
          <h2 class="column subtitle">Languages and platforms</h2>
        </div>
        <div class="technologies columns">
          <div class="technology-item column">
            <h3>JavaScript</h3>
            <b-progress
              type="is-warning"
              size="small"
              :value="95"
              :show-value="false"
            />
          </div>
          <div class="technology-item column">
            <h3>Java</h3>
            <b-progress
              type="is-warning"
              size="small"
              :value="90"
              :show-value="false"
            />
          </div>
          <div class="technology-item column">
            <h3>Python</h3>
            <b-progress
              type="is-warning"
              size="small"
              :value="60"
              :show-value="false"
            />
          </div>
          <div class="technology-item column">
            <h3>Go</h3>
            <b-progress
              type="is-warning"
              size="small"
              :value="55"
              :show-value="false"
            />
          </div>
        </div>
        <div class="columns">
          <div class="column">
            <h3>
              Node.js, TypeScript, Kotlin, bash, VHDL, R, C, C++, Assembler,
              Swift, C#, ...
            </h3>
          </div>
        </div>

        <div class="technologies columns">
          <h2 class="column subtitle">Client web frameworks and libraries</h2>
        </div>
        <div class="technologies columns">
          <div class="technology-item column">
            <h3>Vue</h3>
            <b-progress
              type="is-warning"
              size="small"
              :value="90"
              :show-value="false"
            />
          </div>
          <div class="technology-item column">
            <h3>Angular</h3>
            <b-progress
              type="is-warning"
              size="small"
              :value="90"
              :show-value="false"
            />
          </div>
          <div class="technology-item column">
            <h3>React</h3>
            <b-progress
              type="is-warning"
              size="small"
              :value="60"
              :show-value="false"
            />
          </div>
          <div class="technology-item column" />
        </div>
        <div class="columns">
          <div class="column">
            <h3>
              Nuxt.js, ...
            </h3>
          </div>
        </div>

        <div class="technologies columns">
          <h2 class="column subtitle">Server web frameworks and libraries</h2>
        </div>
        <div class="technologies columns">
          <div class="technology-item column">
            <h3>Spring</h3>
            <b-progress
              type="is-warning"
              size="small"
              :value="90"
              :show-value="false"
            />
          </div>
          <div class="technology-item column">
            <h3>Express</h3>
            <b-progress
              type="is-warning"
              size="small"
              :value="90"
              :show-value="false"
            />
          </div>
          <div class="technology-item column" />
          <div class="technology-item column" />
        </div>

        <div class="technologies columns">
          <h2 class="column subtitle">Storage</h2>
        </div>
        <div class="technologies columns">
          <div class="technology-item column">
            <h3>Cassandra</h3>
            <b-progress
              type="is-warning"
              size="small"
              :value="90"
              :show-value="false"
            />
          </div>
          <div class="technology-item column">
            <h3>Neo4j</h3>
            <b-progress
              type="is-warning"
              size="small"
              :value="90"
              :show-value="false"
            />
          </div>
          <div class="technology-item column">
            <h3>MongoDB</h3>
            <b-progress
              type="is-warning"
              size="small"
              :value="80"
              :show-value="false"
            />
          </div>
          <div class="technology-item column">
            <h3>MSSQL</h3>
            <b-progress
              type="is-warning"
              size="small"
              :value="75"
              :show-value="false"
            />
          </div>
        </div>
        <div class="columns">
          <div class="column">
            <h3>Redis, Hazelcast, Elastic, PostgreSQL, ...</h3>
          </div>
        </div>

        <div class="technologies columns">
          <h2 class="column subtitle">Infrastructure</h2>
        </div>
        <div class="columns">
          <div class="column">
            <h3>
              Google Cloud, SaltStack, Terraform, Nomad, Consul, Kafka, Grafana,
              Prometheus, ...
            </h3>
          </div>
        </div>

        <div class="technologies columns">
          <h2 class="column subtitle">Other thingies</h2>
        </div>
        <div class="columns">
          <div class="column">
            <h3>
              Linux, Git, MacOS, iOS, Android, Blender, Unity, Twilio, SSR,
              FPGA, Arduino, 3d-modelling, JWT, Cypress, Gatling, Jetty, Apache,
              Nginx, OpenLDAP, OpenIDConnect, Stripe, GDPR, Google Analytics,
              GrpahQL, Webpack, Avro,...
            </h3>
          </div>
        </div>
      </div>
    </section>

    <hr />

    <section class="section">
      <div class="container">
        <h1 class="title">Side/home projects</h1>
        <div class="projects columns">
          <div class="project-item column">
            <div class="project-preview-container">
              <img src="../assets/images/r409.jpg" />
            </div>
            <h3><a>R-409 Virtual tour</a></h3>
            <p>Unity game for learning R-409</p>
            <span class="is-size-7"
              >3d-modeller, animation designer, C# developer</span
            ><br />
            <span class="is-size-7">2016-2017</span>
          </div>
          <div class="project-item column">
            <p>Will be added soon...</p>
          </div>
          <div class="project-item column"></div>
        </div>
      </div>
    </section>

    <hr />

    <p style="text-align: center; margin: 1rem 0;">To be continued... 👨‍💻</p>
  </div>
</template>

<script>
export default {
  name: "home",
  components: {}
};
</script>

<style scoped lang="scss">
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
      transition: 0.1s color ease-in-out;

      &:hover {
        color: $color-yellow;
      }
    }
  }
}

.project-item {
  .logo-container {
    display: flex;
    justify-content: center;
    margin-bottom: 1rem;

    img {
      height: 3rem;
    }
  }

  .project-preview-container {
    display: flex;
    justify-content: center;
    margin-bottom: 1rem;

    img {
      width: 100%;
    }
  }
}

.title {
  text-align: center;
}

hr {
  background-color: #7957d5;
  margin: 1rem 3rem;
}
</style>
