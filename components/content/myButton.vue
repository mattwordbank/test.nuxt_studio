<template>
  <a
    :href="href"
    class="bg-blue-500 text-white px-4 py-2 rounded-md inline-block"
  >
    <slot name="button-label" />
  </a>
</template>

<script setup>
defineProps({
  href: {
    type: String,
    default: "/",
  },
});
</script>
