<template>
  <PageContent title="Inbox" :emails="inbox" :read="read" :onOpen="onOpen" />
</template>

<script lang="ts" setup>
import { useEmailStore } from '~/store/email';

const { emails, onOpen, read, archived } = useEmailStore();

const inbox = computed(() => {
  return emails.filter(email => !archived[email.id]);
});
</script>

<style></style>