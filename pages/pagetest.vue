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
      <div class="grid grid-cols-2 gap-4">
        <div class="col-span-1">
          <h1>Add Specific content here</h1>
        </div>
        <div class="col-span-1">
          <p>and some more here</p>
        </div>
      </div>

      <h1>{{ mypage.body.content.header }}</h1>
      <div v-for="section in mypage.body.content.sections" :key="section.id">
        <h2>{{ section.title }}</h2>
        <p>{{ section.text }}</p>
      </div>
      <pre>{{ mypage }}</pre>
    </div>
  </div>
</template>
