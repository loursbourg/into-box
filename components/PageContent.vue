<template>
  <div class="wrapper">
    <h3 class="heading">{{ title }}</h3>
    <div class="top-nav">
      <div class="checkbox-container">
        <input class="checkbox" type="checkbox" :checked="isAllSelected" @change="handleToggleAll" />
      </div>
      <h4>Email Selected ({{ selectedIds.length }})</h4>
    </div>
    <div>
      <template v-for="email in emails" :key="email.id">
        <EmailListItem :email="email" :onOpen="handleOpen" :onSelect="handleSelect"
          :isSelected="selectedIds.includes(email.id)" :read="read[email.id]" />
      </template>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { useEmailStore } from "~/store/email";
import type { Email } from "~/types";

const emailStore = useEmailStore();

const { openEmail, onOpen, onRead, onDismissModal, read } = emailStore;

const { selectedIds } = storeToRefs(emailStore);

const handleSelect = (email: Email) => {
  if (selectedIds.value.includes(email.id)) {
    selectedIds.value = selectedIds.value.filter(
      (selectedId) => selectedId !== email.id
    );
  } else {
    selectedIds.value.push(email.id);
  }
};

const props = defineProps<{
  title: string;
  emails: Email[]
}>();

const handleOpen = (email: Email) => {
  onOpen(email);
};
const isAllSelected = computed(() => {
  if (props.emails.length === 0) {
    return false;
  }
  return props.emails.every((email) => selectedIds.value.includes(email.id))
}
);

const handleToggleAll = () => {
  if (isAllSelected.value) {
    selectedIds.value = [];
  } else {
    selectedIds.value = props.emails.map((email) => email.id);
  }
};

</script>

<style lang="scss" scoped>
@use '~/assets/scss/layout/page-content';
</style>