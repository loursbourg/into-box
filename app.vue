<template>
    <div class="app-container">
        <Sidebar />
        <NuxtPage :read="read" :onOpen="onOpen"/>
    </div>
    <EmailDetailsModal v-if="openEmail" :onDismiss="onDismissModal" :email="openEmail" :onRead="onRead" />
</template>

<script setup lang="ts">
import { defineProps, reactive, ref } from "vue";
import type { Email } from "./types";

const openEmail = ref();

const onDismissModal = () => {
    openEmail.value = undefined;
};

const read = reactive<Record<string, boolean>>({});

const onOpen = (email: Email) => {
    openEmail.value = email;
}

const onRead = () => {
    read[openEmail.value.id] = true;
    openEmail.value = undefined;
}
</script>

<style>
.app-container {
    display: flex;
    flex: 1;
}
</style>
