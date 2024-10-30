<template>
  <PageContent :emails="emails" :read="read" :onOpen="onOpen" />
</template>

<script lang="ts" setup>
import type { Email } from '~/types';

const props = defineProps<{
  read: Record<string, boolean>;
  onOpen: () => void
}>()

const emails = ref<Email[]>([
  { id: "a76387cb-1c2b-45c8-8ff2-7fb8f073a456", content: "Wave hello with video, reactions and more now in huddles" },
  { id: "b15dcc2c-2e3d-4828-acf4-ba01b2c4d041", content: "Wave hello with video, reactions and more now in huddles" },
  { id: "2d58367a-8c9a-430d-95f2-69f0fae37bfe", content: "[JIRA] (LXQ-2604) Learning path- file - Existing File -two buttons for viewing the file" },
  { id: "9565781e-7339-4a9f-a4ef-07399aa5c48c", content: "Wave hello with video, reactions and more now in huddles" },
  { id: "772db15a-c147-4de8-ae01-3c1ea4a6b0a9", content: "Wave hello with video, reactions and more now in huddles" },
  { id: "66d79824-ee22-474f-a2ab-5aeabb5cae19", content: "Wave hello with video, reactions and more now in huddles" },
  { id: "ba40b6a2-028c-4c34-857a-6fb141be57bc", content: "Wave hello with video, reactions and more now in huddles" },
  { id: "c8bb5b20-a906-466d-a4ae-a44f04f8f176", content: "Wave hello with video, reactions and more now in huddles" },
]);

</script>

<style></style>