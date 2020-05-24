<template>
  <main>
    <h1>{{ article.title }}</h1>
    <img :src="article.images.banner.large" alt="" />
    <div class="genres">
      <Genre v-for="genre in article.genres" :key="genre" :name="genre" />
    </div>
    <ul>
      <li>Création: {{article.creation}}</li>
      <li>Réalisateur: {{article.showrunner}}</li>
      <li>Statut: {{article.status}}</li>
    </ul>

    <nuxt-content :document="article" />

    <nuxt-link
      v-if="prev"
      :to="{ name: 'slug', params: { slug: prev.slug } }"
    >&lt; {{ prev.title }}</nuxt-link>&nbsp;|
    <nuxt-link
      v-if="next"
      :to="{ name: 'slug', params: { slug: next.slug } }"
    >{{ next.title }} &gt;</nuxt-link>
  </main>
</template>

<script>
export default {
  async asyncData ({ $content, params, error }) {
    let article

    try {
      article = await $content('articles', params.slug).fetch()
    } catch (e) {
      error({ message: 'Article not found' })
    }

    const [prev, next] = await $content('articles')
      .only(['title', 'slug'])
      .sortBy('date', 'desc')
      .surround(params.slug)
      .fetch()

    return {
      article,
      prev,
      next
    }
  }
}
</script>

<style>
img {
  width: 100%;
  max-width: 1400px;
  display: flex;
  margin: auto;
}
.genres {
  display: flex;
  justify-content: center;
}
</style>
