<template>
  <Layout>
    <div class="guide-title">
      <h1 class="guide-title__text">
        {{ $page.guide.title }}
      </h1>

      <PostMeta :guide="$page.guide" />
    </div>

    <div class="guide content-box">
      <div class="guide__header">
        <g-image
          alt="Cover image"
          v-if="$page.guide.cover_image"
          :src="$page.guide.cover_image"
        />
      </div>

      <div class="guide__content" v-html="$page.guide.content" />

      <div class="guide__footer">
        <PostTags :guide="$page.guide" />
      </div>
    </div>

    <div class="guide-comments">
      <!-- Add comment widgets here -->
    </div>

    <Author class="guide-author" />
  </Layout>
</template>

<script>
export default {
  components: {},
  metaInfo() {
    return {
      title: this.$page.guide.title,
      meta: [
        {
          name: "description",
          content: this.$page.guide.description
        }
      ]
    };
  }
};
</script>

<page-query>
query Doc ($id: ID!) {
  guide: guide (id: $id) {
    title
    path
    timeToRead
    content
    description
  }
}
</page-query>
