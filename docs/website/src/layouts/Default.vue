<template>
  <div>
    <header>
      <Navbar
        v-bind:title="$static.metadata.siteName"
        v-bind:links="['guides', 'docs', 'releases']"
      />
    </header>

    <div class="container mx-auto my-4">
      <slot />
    </div>

    <footer></footer>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar";

export default {
  components: {
    Navbar
  }
};
</script>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<style>
body {
  font-family: -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto,
    "Helvetica Neue", Arial, sans-serif;
  margin: 0;
  padding: 0;
  line-height: 1.5;
}
</style>
