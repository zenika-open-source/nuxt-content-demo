<template>
  <main>
    <h1>{{ show.title }}</h1>
    <img :src="show.images.banner.large" alt="" />
    <div class="genres">
      <Genre v-for="genre in show.genres" :key="genre" :name="genre" />
    </div>
    <ul>
      <li>Création: {{show.creation}}</li>
      <li>Réalisateur: {{show.showrunner}}</li>
      <li>Statut: {{show.status}}</li>
    </ul>

    <nuxt-content :document="show" />

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
    let show

    try {
      show = await $content('shows', params.slug).fetch()
    } catch (e) {
      error({ status: 404, message: 'Cette série n\'a pas été enregistrée' })
    }

    const [prev, next] = await $content('shows')
      .only(['title', 'slug'])
      .sortBy('date', 'desc')
      .surround(params.slug)
      .fetch()

    return {
      show,
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
