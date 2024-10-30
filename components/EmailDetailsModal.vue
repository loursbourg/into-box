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
          <div class="frame-426" @click="onRead">
            <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10.25 0.75L0.75 10.25M0.75 0.75L10.25 10.25" stroke="#88909B" stroke-width="1.5"
                stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            <span> Mark as read (r) </span>
          </div>
          <div class="frame-426" @click="onDismiss">
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

const props = defineProps<{
  onRead: () => void;
  email: Email;
  onDismiss: () => void;
}>();

import { onMounted, onBeforeUnmount } from 'vue'

const handleKeyPress = (event: KeyboardEvent): void => {
  if (event.key === 'R' || event.key === 'r') {
    props.onRead()
  } else if (event.key === 'Escape') {
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

<style scoped lang="scss">
.wrapper {
  /* Inbox - Open Email */
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: flex-end;
  width: 100vw;
  height: 100vh;

  .backdrop {
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0px;
    top: 0px;
    background: rgba(76, 87, 100, 0.8);
  }

  .elements-panel {
    /* Element_Panel */
    z-index: 1;

    box-sizing: border-box;

    /* Auto layout */
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 32px;
    gap: 32px;
    max-width: 752px;
    background: #ffffff;
    border: 1px solid #e5e7eb;

    .frame-424 {
      /* Frame 424 */

      /* Auto layout */
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      padding: 0px;
      gap: 40px;

      width: 688px;
      height: 19px;

      /* Inside auto layout */
      flex: none;
      order: 0;
      align-self: stretch;
      flex-grow: 0;

      .frame-426 {
        /* Frame 426 */

        /* Auto layout */
        display: flex;
        flex-direction: row;
        align-items: center;
        padding: 0px;
        gap: 12px;
        cursor: pointer;
        height: 19px;

        /* Inside auto layout */
        flex: none;
        order: 0;
        flex-grow: 0;
      }

      .frame-425 {
        /* Frame 425 */

        /* Auto layout */
        display: flex;
        flex-direction: row;
        align-items: flex-start;
        padding: 0px;
        gap: 40px;

        width: 274px;
        height: 19px;

        /* Inside auto layout */
        flex: none;
        order: 1;
        flex-grow: 0;
      }
    }
  }
}

.title {
  /* Wave hello with video, reactions and more now in huddles */

  width: 688px;
  height: 26px;

  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 26px;
  /* identical to box height */

  color: #121829;

  /* Inside auto layout */
  flex: none;
  order: 0;
  flex-grow: 0;
}

.content {
  width: 688px;
  height: 54px;

  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;

  color: #4b5563;

  flex: none;
  order: 1;
  flex-grow: 0;
}
</style>
