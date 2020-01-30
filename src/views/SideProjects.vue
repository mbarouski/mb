<template>
  <div class="page side-projects-page">
    <section class="section">
      <div class="container">
        <PageHeader :title="'Side projects'" />
        <ProjectList :projects="projects" :columns="4" />
      </div>
    </section>
  </div>
</template>

<script>
import ProjectList from "../components/ProjectList";
import PageHeader from "../components/PageHeader";
export default {
  name: "side-projects",
  components: {
    PageHeader,
    ProjectList
  },
  data: () => ({
    projects: [
      {
        name: "Distance Learning",
        internalLink: null,
        externalLink: "https://github.com/maximka777/distance-learning",
        images: [
          "distance-learning/dls.png",
          "distance-learning/dlc.png"
        ],
        description:
          "Client-server application which allows to transfer audio and drawings from server to clients and messages among all participants.",
        labels: ["java", "javafx", "udp", "tcp", "2016"]
      },
      {
        name: "PhoenixPay",
        internalLink: null,
        externalLink: null,
        images: ["phoenixpay.jpeg"],
        description: "Play Market for everything",
        labels: ["software engineer", "2016"]
      },
      {
        name: "Totalizator",
        internalLink: null,
        externalLink: "https://github.com/maximka777/Java.EE.Totalizator",
        images: [
          "totalizator/1.png",
          "totalizator/2.png",
          "totalizator/3.png",
          "totalizator/4.png"
        ],
        description:
          "It is a final project for EPAM Java course and is accepted well. Web-application on Java EE for making bets on sport events.",
        labels: ["java", "jsp", "servlet", "jdbc", "mysql", "2016"]
      },
      {
        name: "R-409 Virtual tour",
        internalLink: null,
        externalLink: null,
        images: ["r409.jpg"],
        description: "Unity game for learning R-409",
        labels: ["3d-modeller", "animation designer", "c#", "2016-2017"]
      },
      {
        name: "Family calendar",
        internalLink: null,
        externalLink: null,
        images: ["family-calendar.jpeg"],
        description:
          "Android application on Ionic + Angular with backend on Node.js",
        labels: ["backend", "node.js", "2019"]
      },
      {
        name: "Trailer",
        internalLink: "/trailer",
        externalLink: null,
        images: ["trailer.jpg"],
        description: 'Welding "hello world" project',
        labels: ["welder", "designer", "painter", "2019"]
      },
      {
        name: "Skaz",
        internalLink: null,
        externalLink: null,
        images: ["skaz.png"],
        description: "Website for selling books",
        labels: ["angular", "frontend", "2019"]
      }
    ]
  }),
  mounted() {
    if (this.$ga) {
      this.$ga.page("/side-projects");
    }
  }
};
</script>

<style lang="scss">
.side-projects-page {
  background: $color-lighter-grey;
  min-height: 100vh;
}
</style>
