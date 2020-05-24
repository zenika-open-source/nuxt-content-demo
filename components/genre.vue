<template>
  <span>
    {{name}}
  </span>
</template>

<script>
export default {
  name: 'Genre',
  props: {
    name: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>
span {
  background: rgb(237,242,247);
  border-radius: .25rem;
  margin: 0.2rem;
  padding: 0.5rem;
}
</style>