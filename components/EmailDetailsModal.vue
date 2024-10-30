<template>
  <div class="wrapper">
    <div class="backdrop" @click="onDismiss"></div>
    <div class="elements-panel">
      <div class="frame-424">
        <!-- Button -->
        <div class="frame-426" @click="onDismiss">
          <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.25 0.75L0.75 10.25M0.75 0.75L10.25 10.25" stroke="#88909B" stroke-width="1.5"
              stroke-linecap="round" stroke-linejoin="round" />
          </svg>
          <span> Close (Esc)</span>
        </div>
        <div class="frame-425">
          <div class="frame-426" @click="emailStore.onRead">
            <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10.25 0.75L0.75 10.25M0.75 0.75L10.25 10.25" stroke="#88909B" stroke-width="1.5"
                stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            <span> Mark as read (r) </span>
          </div>
          <div class="frame-426" @click="emailStore.onArchive">
            <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10.25 0.75L0.75 10.25M0.75 0.75L10.25 10.25" stroke="#88909B" stroke-width="1.5"
                stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            <span> Archive (a) </span>
          </div>
        </div>
      </div>
      <div class="title">
        {{ email.content }}
      </div>
      <div class="content">
        In the early days of the pandemic, audio-only huddles helped recreate
        the informal discussions that traditionally took place in office cafés
        and hallways. Whether your team is remote, in the office, or a mix of
        both, working alongside your colleagues is as important as ever.
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { Email } from "~/types";
import { useEmailStore } from '~/store/email';

const emailStore = useEmailStore();

const { emails, openEmail, read } = storeToRefs(emailStore)

const props = defineProps<{
  email: Email;
  onDismiss: () => void;
}>();

import { onMounted, onBeforeUnmount } from 'vue'

const handleKeyPress = (event: KeyboardEvent): void => {
  if (event.key === 'R' || event.key === 'r') {
    emailStore.onRead()
  } else if (event.key === 'A' || event.key === 'a') {
   emailStore.onArchive();
  }else if (event.key === 'Escape') {
    props.onDismiss();
  }
}

onMounted(() => {
  window.addEventListener('keydown', handleKeyPress)
})

onBeforeUnmount(() => {
  window.removeEventListener('keydown', handleKeyPress)
})
</script>

<style lang="scss" scoped>
@use '~/assets/scss/layout/email-details-modal';
</style>
