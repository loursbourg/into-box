<template>
    <div class="app-container">
        <Sidebar />
        <NuxtPage :read="read" :onOpen="emailStore.onOpen" />
    </div>
    <EmailDetailsModal v-if="openEmail" :onDismiss="emailStore.onDismissModal" :email="openEmail"
        :onRead="emailStore.onRead" />
</template>

<script setup lang="ts">
import { useEmailStore } from '~/store/email';

const emailStore = useEmailStore();

const { openEmail, read } = storeToRefs(emailStore);

</script>

<style lang="scss" scoped>
.app-container {
    display: flex;
    flex: 1;
}
</style>
