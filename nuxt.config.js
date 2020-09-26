module.exports = {
  // Depuis nuxt@2.14, on peut ajouter :
  target: 'static',
  // Qui permet de mettre en cache les fichiers générés
  // Pour réduire le temps de compilation !
  // Voir https://nuxtjs.org/blog/nuxt-static-improvements
  components: true,
  modules: [
    '@nuxt/content'
  ]
}
