<script setup>
const { data: home } = await useAsyncData(() =>
  queryCollection("content").path("/mypage").first(),
);

useSeoMeta({
  title: home.value?.title,
  description: home.value?.description,
});

// Debug log
console.log("Home data:", home.value);
</script>

<template>
  <div class="container mx-auto p-10 bg-gray-100">
    <!-- Title Section -->
    <div class="mb-12">
      <h1 class="text-4xl font-bold mb-4">
        {{ home?.title }}
      </h1>
      <p class="text-xl text-gray-600">
        {{ home?.description }}
      </p>
    </div>

    <!-- Content Section -->
    <article class="bg-white p-6 rounded-lg shadow">
      <div class="prose prose-lg max-w-none">
        <ContentRenderer v-if="home" :value="home" />
        <div v-else>Content not found</div>
      </div>
    </article>
  </div>
</template>
