<template>
  <Layout>
    <div>
      <h1>Get Connected</h1>
      <ul>
        <li>Mailing List</li>
        <li>
          <a href="https://slack.dev.talos-systems.io/" target="_blank"
            >Slack</a
          >
        </li>
        <li>
          <a href="https://twitter.com/talossystems/" target="_blank"
            >Twitter</a
          >
        </li>
        <li>
          <a href="https://github.com/talos-systems/" target="_blank">GitHub</a>
        </li>
      </ul>
    </div>
    <div>
      <h1 class="my-4">Meet The Team</h1>
      <div class="grid grid-flow-row grid-cols-6 grid-rows-3 gap-4">
        <a
          v-for="item in team"
          :href="item.url"
          :key="item.name"
          target="_blank"
        >
          <div class="text-center" :href="item.url">
            <g-image
              class="inline-block h-24 w-24 rounded-full text-white shadow-solid"
              :src="item.avatarUrl"
              alt=""
            />
            <div>
              {{ item.name }}
            </div>
          </div>
        </a>
      </div>
    </div>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: "Releases"
  },

  computed: {
    team: function() {
      return this.$page.github.repository.collaborators.nodes.filter(function(
        item
      ) {
        return item.name;
      });
    }
  }
};
</script>

<page-query>
query {
  github {
    repository(owner: "talos-systems", name: "arges") {
      collaborators {
        nodes {
          name
          avatarUrl
          url
        }
      }
    }
  }
}
</page-query>
