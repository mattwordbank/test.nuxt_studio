<template>
  <div class="grid grid-cols-2 gap-4 mb-8 w-full">
    <div class="col-span-1 bg-white p-6 rounded-lg shadow">
      <slot name="left" />
    </div>
    <div class="col-span-1 bg-white p-6 rounded-lg shadow">
      <slot name="right" />
    </div>
  </div>
</template>

<script setup>
defineProps({
  left: {
    type: String,
    default: "",
  },
  right: {
    type: String,
    default: "",
  },
});
</script>
