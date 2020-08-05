<template>
  <Layout>
    <div class="doc-title">
      <h1 class="doc-title__text">
        {{ $page.doc.title }}
      </h1>

      <PostMeta :doc="$page.doc" />
    </div>

    <div class="doc content-box">
      <div class="doc__header">
        <g-image
          alt="Cover image"
          v-if="$page.doc.cover_image"
          :src="$page.doc.cover_image"
        />
      </div>

      <div class="doc__content" v-html="$page.doc.content" />

      <div class="doc__footer">
        <PostTags :doc="$page.doc" />
      </div>
    </div>

    <div class="doc-comments">
      <!-- Add comment widgets here -->
    </div>

    <Author class="doc-author" />
  </Layout>
</template>

<script>
export default {
  components: {},
  metaInfo() {
    return {
      title: this.$page.doc.title,
      meta: [
        {
          name: "description",
          content: this.$page.doc.description
        }
      ]
    };
  }
};
</script>

<page-query>
query Doc ($id: ID!) {
  doc: doc (id: $id) {
    title
    path
    timeToRead
    content
  }
}
</page-query>
