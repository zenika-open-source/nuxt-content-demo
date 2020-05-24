<template>
  <div id="content">
    <Navigation user="Yann" />
    <nuxt />
  </div>
</template>

<script>
export default {
  head() {
    return {
      meta: [
        { hid: 'viewport', name: 'viewport', content: 'width=device-width' }
      ]
    }
  }
}
</script>

<style>
@import url(https://fonts.googleapis.com/css?family=Quicksand:400,500,600,700&display=swap);

body {
  margin: 0;
  font-family: Quicksand,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;
}
h1 {
  text-transform: uppercase;
}
h1, h2, h3, h4, h5, h6 {
  color: rgba(47,73,94,1);
  font-weight: 500;
}
main {
  padding: 1rem;
  color: #2f495e;
  font-size: 1.1rem;
  font-weight: 500;
  line-height: 1.5;
}
blockquote {
  border-left: 4px solid #e2e8f0;
  padding: 0.5rem 1rem;
  margin-left: 0;
}
blockquote p {
  margin: 0;
}
</style>