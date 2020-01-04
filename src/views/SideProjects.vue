<template>
  <div class="page side-projects-page">
    <section class="section">
      <div class="container">
        <PageHeader :title="'Side projects'" />
        <ProjectList :projects="projects" />
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
        name: "PhoenixPay",
        internalLink: null,
        externalLink: null,
        image: "phoenixpay.jpeg",
        description: "Play Market for everything",
        labels: ["software engineer", "2016"]
      },
      {
        name: "R-409 Virtual tour",
        internalLink: null,
        externalLink: null,
        image: "r409.jpg",
        description: "Unity game for learning R-409",
        labels: ["3d-modeller", "animation designer", "c#", "2016-2017"]
      },
      {
        name: "Family calendar",
        internalLink: null,
        externalLink: null,
        image: "family-calendar.jpeg",
        description:
          "Android application on Ionic + Angular with backend on Node.js",
        labels: ["backend", "node.js", "2019"]
      },
      {
        name: "Trailer",
        internalLink: "/trailer",
        externalLink: null,
        image: "trailer.jpg",
        description: 'Welding "hello world" project',
        labels: ["welder", "designer", "painter", "2019"]
      },
      {
        name: "Skaz",
        internalLink: null,
        externalLink: null,
        image: "skaz.png",
        description: "Website for selling books",
        labels: ["angular", "frontend", "2019"]
      }
    ]
  }),
  mounted() {
    this.$ga.page("/side-projects");
  }
};
</script>

<style lang="scss">
.side-projects-page {
}
</style>
