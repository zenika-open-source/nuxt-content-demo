<template>
  <main>
    <header id="title">
      <h1>{{ show.title }}</h1>
      <div class="genres">
        <Genre v-for="genre in show.genres" :key="genre" :name="genre" />
      </div>
    </header>
    <img :src="show.images.banner.large" width="1920" height="784" alt="" />
    <ul>
      <li>Création: {{show.creation}}</li>
      <li>Réalisateur: {{show.showrunner}}</li>
      <li>Statut: {{show.status}}</li>
    </ul>

    <nuxt-content :document="show" />

    <footer>
      <span><nuxt-link
        v-if="prev"
        :to="{ name: 'slug', params: { slug: prev.slug } }"
      >&lt; {{ prev.title }}</nuxt-link></span>
      |
      <span><nuxt-link
        v-if="next"
        :to="{ name: 'slug', params: { slug: next.slug } }"
      >{{ next.title }} &gt;</nuxt-link></span>
    </footer>
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
header#title {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
header#title .genres {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  height: 100%;
}
img {
  background: #ddd;
  width: 100%;
  max-width: 1400px;
  height: auto;
  display: flex;
  margin: auto;
}
ul {
  display: flex;
  list-style-type: none;
  justify-content: space-evenly;
}
footer {
  border-top: 1px solid #e2e8f0;
  padding: 1rem;
  margin: -1rem;
  margin-top: 1.5rem;
  display: flex;
  justify-content: space-around;
  box-shadow: 0 0 8px rgba(0,0,0,.101562);
}
</style>
