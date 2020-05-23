<template>
  <main>
    <h1>Démo de @nuxt/content</h1>

    <input id="search" v-model="q" placeholder="Search..." />

    <article v-for="article in articles" :key="article.slug">
      <nuxt-link
        :to="{ name: 'slug', params: { slug: article.slug } }"
      >
        {{ article.title }}
      </nuxt-link>
    </article>
  </main>
</template>

<script>
export default {
  watchQuery: true,
  async asyncData ({ $content, route }) {
    const q = route.query.q

    let query = $content('articles')
      .sortBy('date', 'desc')

    if (q) {
      query = query.search('title', q)
    }

    const articles = await query.fetch()

    return {
      q,
      articles
    }
  },
  watch: {
    q () {
      this.$router.replace({ query: this.q ? { q: this.q } : undefined }).catch(() => { })
    }
  }
}
</script>

<style>
input {
  margin: 0rem 2rem 2rem 2rem;
  font-size: 1.5rem;
  padding: 0.5rem;
}
</style>
