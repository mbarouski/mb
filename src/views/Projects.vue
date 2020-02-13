<template>
  <div class="page projects-page">
    <section class="section">
      <div class="container">
        <PageHeader :title="'Projects I am/was working on'" />
        <ProjectList :projects="projects" :columns="4" />
      </div>
    </section>
  </div>
</template>

<script>
import ProjectList from "../components/ProjectList";
import PageHeader from "../components/PageHeader";
export default {
  name: "projects",
  components: {
    PageHeader,
    ProjectList
  },
  mounted() {
    this.$ga.page("/projects");
  },
  data: () => ({
    projects: [
      {
        name: "Ezispeak Video Interpreter",
        internalLink: null,
        externalLink:
          "https://apps.apple.com/us/app/ezispeak-video-interpreter/id1256607378",
        image: "ezispeak.png",
        description:
          "Video communication between doctor and patient on one side and interpreter on another side",
        labels: ["iOS", "Web", "Node.js", "React", "Swift", "MongoDB", "2017"]
      },
      {
        name: "Visual Server",
        internalLink: null,
        externalLink: "https://app.visualserver.com",
        image: "vs.png",
        description: "Website builder for artists and photographers",
        labels: ["Node.js", "Angular", "MSSQL", "2017-2018"]
      },
      {
        name: "EarthToday",
        internalLink: null,
        externalLink: "https://earthtoday.com",
        image: "et.png",
        description:
          "EarthToday is a community-driven content platform to inform, inspire, educate and entertain.",
        labels: ["Java", "Angular", "DevOps", "Neo", "Cassandra", "2018-now"]
      },
      {
        name: "HearHear",
        internalLink: null,
        externalLink: "https://hearhear.app",
        image: "hh.svg",
        description: "Ask anybody, anything. Together, we will get an answer.",
        labels: ["Java", "Vue", "DevOps", "Cassandra", "2019-now"]
      },
      {
        name: "Project in development",
        internalLink: null,
        externalLink: null,
        image: "rocket.svg",
        description: "Description is totally secret.",
        labels: [
          "Java/Kotlin",
          "Vue",
          "Go",
          "DevOps",
          "Cassandra",
          "Elastic",
          "Postgres",
          "2019-now"
        ]
      }
    ].reverse()
  })
};
</script>

<style lang="scss">
.projects-page {
  background: $color-lighter-grey;
  min-height: 100vh;

  .project-item {
    .project-item__image-container {
      margin: 0.5rem 0;
      height: 6rem;
      border: none;
    }
  }
}
</style>
