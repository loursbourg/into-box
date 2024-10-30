<template>
  <div :class="['container', { unread: !read }]">
    <div class="inner">
      <input type="checkbox" class="checkbox" :checked="isSelected" @change="props.onSelect(email)" />
      <div @click="props.onOpen(email)" class="fill">
        <span class="text">{{ email.content }}</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { defineProps, ref } from 'vue';
import type { Email } from '~/types';

const props = defineProps<{
  email: Email;
  onSelect: (email: Email) => void;
  onOpen: (email: Email) => void;
  read?: boolean
  isSelected: boolean;
}>();

</script>

<style lang="scss" scoped>
@use '~/assets/scss/components/email-list-item';
</style>
