<template>
  <div class="wrapper">
    <h3 class="heading">Inbox</h3>
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
import type { Email } from "~/types";

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
  emails: Email[];
  read: Record<string, boolean>;
  onOpen: (email: Email) => void;
}>();

const handleOpen = (email: Email) => {
  props.onOpen(email);
};
const isAllSelected = computed(() =>
  props.emails.every((email) => selectedIds.value.includes(email.id))
);

const handleToggleAll = () => {
  if (isAllSelected.value) {
    selectedIds.value = [];
  } else {
    selectedIds.value = props.emails.map((email) => email.id);
  }
};

const selectedIds = ref<string[]>([]);
</script>

<style scoped lang="scss">
.wrapper {
  flex: 1;
}

.heading {
  /* Frame 418 */

  /* Auto layout */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 0px 24px;

  width: 1021px;
  height: 41px;

  /* Inside auto layout */
  flex: none;
  order: 0;
  align-self: stretch;
  flex-grow: 0;
}

.top-nav {
  /* Top_Nav */

  /* Auto layout */
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px 24px;
  gap: 20px;
  margin-bottom: 24px;
  height: 20px;

  /* Inside auto layout */
  flex: none;
  order: 0;
  flex-grow: 0;

  .checkbox-container {
    /* Checkbox */

    /* Auto layout */
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0px;
    gap: 12px;

    height: 20px;

    /* Inside auto layout */
    flex: none;
    order: 0;
    flex-grow: 0;

    .checkbox {
      /* Rectangle 6 */

      box-sizing: border-box;

      width: 20px;
      height: 20px;

      background: #ffffff;
      border: 1px solid #cad6e4;
      border-radius: 5px;

      /* Inside auto layout */
      flex: none;
      order: 0;
      flex-grow: 0;
    }
  }
}
</style>
