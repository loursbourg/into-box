<template>
  <PageContent title="Archive" :emails="archivedEmails" :read="read" :onOpen="emailStore.onOpen" />
</template>

<script lang="ts" setup>
import { useEmailStore } from '~/store/email';

const emailStore = useEmailStore();

const { emails, read, archived } = storeToRefs(emailStore)

const archivedEmails = computed(() => {
  const allArchived = emails.value.filter(email => archived.value[email.id]);
  return allArchived;
});

</script>

<style></style>