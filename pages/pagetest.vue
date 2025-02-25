<script setup>
const { data: mypage } = await useAsyncData(() =>
  queryCollection("json").path("/pagetest").first()
);

useSeoMeta({
  title: mypage.value?.title,
  description: mypage.value?.description,
});
</script>

<template>
  <div class="container mx-auto p-10 bg-gray-100">
    <div class="prose">
      <h1>{{ mypage.body.content.header }}</h1>
      <div v-for="section in mypage.body.content.sections" :key="section.id">
        <h2>{{ section.title }}</h2>
        <p>{{ section.text }}</p>
      </div>
      <pre>{{ mypage }}</pre>
    </div>
  </div>
</template>
