<template>
  <div class="page technologies-page">
    <section class="section">
      <div class="container">
        <PageHeader :title="'Technologies I touched to'" />
      </div>
      <div class="container">
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
              :value="70"
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
            <h3>Redis, Hazelcast, Elastic, PostgreSQL, SQLite...</h3>
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
              GrpahQL, Webpack, Avro, CircleCI, CSS, SCSS, ...
            </h3>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import PageHeader from "../components/PageHeader";
export default {
  name: "technologies",
  components: {
    PageHeader
  },
  data: () => ({}),
  mounted() {
    this.$ga.page("/technologies");
  }
};
</script>

<style lang="scss">
.technologies-page {
}
</style>
