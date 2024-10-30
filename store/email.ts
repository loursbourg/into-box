import { defineStore } from "pinia";
import { ref, reactive } from "vue";
import type { Email } from "~/types";

/**
 * Email store
 *
 */
export const useEmailStore = defineStore("email", () => {
  const emails = ref<Email[]>([
    {
      id: "a76387cb-1c2b-45c8-8ff2-7fb8f073a456",
      content: "Wave hello with video, reactions and more now in huddles",
    },
    {
      id: "b15dcc2c-2e3d-4828-acf4-ba01b2c4d041",
      content: "Wave hello with video, reactions and more now in huddles",
    },
    {
      id: "2d58367a-8c9a-430d-95f2-69f0fae37bfe",
      content:
        "[JIRA] (LXQ-2604) Learning path- file - Existing File -two buttons for viewing the file",
    },
    {
      id: "9565781e-7339-4a9f-a4ef-07399aa5c48c",
      content: "Wave hello with video, reactions and more now in huddles",
    },
    {
      id: "772db15a-c147-4de8-ae01-3c1ea4a6b0a9",
      content: "Wave hello with video, reactions and more now in huddles",
    },
    {
      id: "66d79824-ee22-474f-a2ab-5aeabb5cae19",
      content: "Wave hello with video, reactions and more now in huddles",
    },
    {
      id: "ba40b6a2-028c-4c34-857a-6fb141be57bc",
      content: "Wave hello with video, reactions and more now in huddles",
    },
    {
      id: "c8bb5b20-a906-466d-a4ae-a44f04f8f176",
      content: "Wave hello with video, reactions and more now in huddles",
    },
    {
      id: "99680be0-8b43-412a-a284-7d2230877460",
      content: "Wave hello with video, reactions and more now in huddles",
    },
    {
      id: "d49e3cdc-3881-4c19-94e0-8aef5bae47ab",
      content: "Wave hello with video, reactions and more now in huddles",
    },
    {
      id: "9273cf8f-0cb2-4c15-8a3b-1800715af6fc",
      content: "Wave hello with video, reactions and more now in huddles",
    },
    {
      id: "60f1e331-7968-4f94-bf70-923fbf6331cc",
      content: "Wave hello with video, reactions and more now in huddles",
    },
  ]);

  const openEmail = ref<Email>();

  const read = reactive<Record<string, boolean>>({});
  const archived = reactive<Record<string, boolean>>({});
  const selectedIds = ref<string[]>([]);

  const onOpen = (email: { id: string; content: string }) => {
    openEmail.value = email;
  };

  const onRead = () => {
    if (openEmail.value) {
      read[openEmail.value.id] = true;
      openEmail.value = undefined;
    }
  };

  const onArchive = () => {
    if (openEmail.value) {
      archived[openEmail.value.id] = true;
      openEmail.value = undefined;
    }
  };

  const onDismissModal = () => {
    openEmail.value = undefined;
  };

  return {
    emails,
    openEmail,
    archived,
    read,
    onArchive,
    onOpen,
    onRead,
    selectedIds,
    onDismissModal,
  };
});
