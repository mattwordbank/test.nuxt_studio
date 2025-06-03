// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "@nuxt/content", "@nuxt/image"],
  css: ["~/assets/css/main.css"],

  // Tailwind CSS configuration
  tailwindcss: {
    cssPath: "~/assets/css/main.css",
    configPath: "tailwind.config.ts",
    exposeConfig: false,
    viewer: true,
  },

  // Security headers
  nitro: {
    routeRules: {
      "/**": {
        headers: {
          "X-Frame-Options": "DENY",
          "X-Content-Type-Options": "nosniff",
          "X-XSS-Protection": "1; mode=block",
          "Referrer-Policy": "strict-origin-when-cross-origin",
          "Content-Security-Policy":
            "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; font-src 'self' data:; connect-src 'self'",
          "Permissions-Policy": "camera=(), microphone=(), geolocation=()",
        },
      },
    },
  },

  // Content security settings
  content: {
    renderer: {
      anchorLinks: { h2: false, h3: false, h4: false },
    },
    build: {
      markdown: {
        toc: {
          depth: 3,
          searchDepth: 3,
        },
        remarkPlugins: {},
        rehypePlugins: {},
      },
    },
  },

  // Runtime config for environment variables
  runtimeConfig: {
    public: {
      // Add any public runtime config here
    },
    // Private keys are only available on the server
    private: {
      // Add any private runtime config here
    },
  },
});
