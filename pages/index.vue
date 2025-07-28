<script setup>
const { data: home } = await useAsyncData(() =>
  queryCollection("content").path("/").first(),
);

useSeoMeta({
  title: home.value?.title,
  description: home.value?.description,
});
</script>

<template>
  <div class="container mx-auto p-10 bg-gray-100">
    <h1 class="text-4xl font-bold mb-8">
      {{ home?.title }}
    </h1>
    <NuxtImg
      src="/karsten-winegeart-1GRm2Kdwykc-unsplash.jpg"
      alt="Random image"
      width="200"
      height="300"
    />
    <div class="prose">
      <ContentRenderer v-if="home" :value="home" />
      <div v-else>Home not found</div>
    </div>
  </div>
</template>
