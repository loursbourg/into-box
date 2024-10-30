<template>
  <div @click="props.onOpen(email)" :class="['container', { unread: !read }]">
    <div class="inner">
      <input type="checkbox" class="checkbox" :checked="isSelected" @change="props.onSelect(email)" />
      <span class="text">{{ email.content }}</span>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { defineProps, ref } from 'vue';
import type { Email } from '~/types';


// Define props with TypeScript
const props = defineProps<{
  email: Email;
  onSelect: (email: Email) => void;
  onOpen: (email: Email) => void;
  read?: boolean
  isSelected: boolean;
}>();

</script>

<style scoped lang="scss">
.container {
  /* Frame 67 */

  box-sizing: border-box;

  /* Auto layout */
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px 24px;
  gap: 50px;

  height: 60px;

  background: #FFFFFF;
  border: 1px solid #E5E7EB;

  /* Inside auto layout */
  flex: none;
  order: 0;
  align-self: stretch;
  flex-grow: 0;
  margin: -1px 0px;
  opacity: 0.5;


  &.unread {
    opacity: 1;

    background: #F3F6FB;
    cursor: pointer;
    border: 1px solid #E5E7EB;
  }

  &:hover {
    background: #D1E2FF;
    border: 1px solid #E5E7EB;
  }

  .inner {
    /* Frame 421 */

    /* Auto layout */
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0px;
    gap: 20px;

    width: 20px;
    height: 20px;


    /* Inside auto layout */
    flex: none;
    order: 0;
    flex-grow: 0;

    .checkbox {
      /* Frame 421 */

      /* Auto layout */
      display: flex;
      flex-direction: row;
      align-items: center;
      padding: 0px;
      gap: 20px;

      width: 20px;
      height: 20px;


      /* Inside auto layout */
      flex: none;
      order: 0;
      flex-grow: 0;

    }

    .text {
      /* Wave hello with video, reactions and more now in huddles */
      height: 18px;
      font-style: normal;
      font-weight: 500;
      font-size: 14px;
      line-height: 18px;

      color: #121829;


      /* Inside auto layout */
      flex: none;
      order: 1;
      flex-grow: 0;

    }
  }

}
</style>