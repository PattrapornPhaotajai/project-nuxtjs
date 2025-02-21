export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss'],

  tailwindcss: {
    cssPath: '~/assets/css/tailwind.css',
  },

  compatibilityDate: "2025-02-21",

// https://nuxt.com/docs/api/configuration/nuxt-config
  app: {
    head: {
      "meta": [
        {
          "name": "viewport",
          "content": "width=device-width, initial-scale=1"
        },
        {
          "charset": "utf-8"
        }
      ],
      "link": [
        {
          rel: "preconnect", 
          href: "https://fonts.googleapis.com"
        },
        {
          rel: "preconnect", 
          href: "https://fonts.gstatic.com"
        },
        {
          rel: "stylesheet", 
          href: "https://fonts.googleapis.com/css2?family=Montserrat:wght@500&display=swap"
        },
        {
          rel: "stylesheet", 
          href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css"
        }
      ],
    }
  },
})