// vue.config.js
module.exports = {
  css: {
    loaderOptions: {
      scss: {
        additionalData: `@import "@/scss/_main.scss";@import "@/scss/_variables.scss";@import "@/scss/_mixins.scss";`
      },
    }
  }
}