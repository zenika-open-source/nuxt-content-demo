<template>
  <header>
    <nav>
      <nuxt-link to="/">Home</nuxt-link>
      <span>Hello {{user}}</span>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'Navigation',
  props: {
    user: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>
header {
  position: sticky;
  top: 0px;
}
nav {
  display: flex;
  justify-content: space-between;
  background-color: rgb(0, 197, 142);
  box-shadow: 0 1px 3px 0 rgba(0,0,0,.1), 0 1px 2px 0 rgba(0,0,0,.06);
  color: #fff;
  padding: 1.2rem;
  font-size: 1.3rem;
}
nav a {
  color: #fff;
}
</style>
