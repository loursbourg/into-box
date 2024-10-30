<template>
  <div class="side-bar-container">
    <div class="box">
      <div class="logo-container">
        <svg width="40" height="20" viewBox="0 0 40 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd"
            d="M1.87665 17.5784C-0.625583 15.0981 -0.625543 11.0769 1.87673 8.59664L8.673 1.8602C10.7883 -0.236476 14.0146 -0.560742 16.4736 0.887405C17.2342 1.33533 17.2275 2.36286 16.602 2.98293C15.9764 3.603 14.9552 3.54963 14.1061 3.30347C13.0188 2.98825 11.796 3.25565 10.9384 4.10564L4.14212 10.8421C2.891 12.0822 2.89098 14.0928 4.14208 15.333C5.39324 16.5732 7.4218 16.5732 8.67296 15.333L22.2654 1.86029C24.7676 -0.619962 28.8246 -0.61997 31.3269 1.86026L38.1232 8.59664C40.6256 11.0769 40.6256 15.0982 38.1233 17.5784C35.621 20.0587 31.564 20.0587 29.0617 17.5784L26.7963 15.333L23.9645 18.1398C21.8492 20.2365 18.6229 20.5608 16.1639 19.1126C15.4034 18.6647 15.41 17.6371 16.0356 17.0171C16.6612 16.397 17.6823 16.4504 18.5314 16.6965C19.6188 17.0118 20.8415 16.7444 21.6991 15.8944L24.6118 13.0073C25.8182 11.8115 27.7743 11.8115 28.9807 13.0073L31.3271 15.333C32.5782 16.5731 34.6067 16.5731 35.8579 15.333C37.109 14.0929 37.109 12.0822 35.8579 10.8421L29.0616 4.10572C27.8104 2.86562 25.7819 2.86562 24.5308 4.10576L10.9384 17.5785C8.43604 20.0588 4.37892 20.0588 1.87665 17.5784Z"
            fill="black"></path>
        </svg>
      </div>
      <div class="button-container">
        <!-- menu item -->
        <NuxtLink active-class="active" to="/inbox" class="menu-item">
          <div class="menu-item-content">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M2.5 12H5.88197C6.56717 12 7.19357 12.3871 7.5 13C7.80643 13.6129 8.43283 14 9.11803 14H14.882C15.5672 14 16.1936 13.6129 16.5 13C16.8064 12.3871 17.4328 12 18.118 12H21.5M8.96656 4H15.0334C16.1103 4 16.6487 4 17.1241 4.16396C17.5445 4.30896 17.9274 4.5456 18.2451 4.85675C18.6043 5.2086 18.8451 5.6902 19.3267 6.65337L21.4932 10.9865C21.6822 11.3645 21.7767 11.5535 21.8434 11.7515C21.9026 11.9275 21.9453 12.1085 21.971 12.2923C22 12.4992 22 12.7105 22 13.1331V15.2C22 16.8802 22 17.7202 21.673 18.362C21.3854 18.9265 20.9265 19.3854 20.362 19.673C19.7202 20 18.8802 20 17.2 20H6.8C5.11984 20 4.27976 20 3.63803 19.673C3.07354 19.3854 2.6146 18.9265 2.32698 18.362C2 17.7202 2 16.8802 2 15.2V13.1331C2 12.7105 2 12.4992 2.02897 12.2923C2.05471 12.1085 2.09744 11.9275 2.15662 11.7515C2.22326 11.5535 2.31776 11.3645 2.50675 10.9865L4.67331 6.65337C5.1549 5.69019 5.3957 5.2086 5.75495 4.85675C6.07263 4.5456 6.45551 4.30896 6.87589 4.16396C7.35125 4 7.88969 4 8.96656 4Z"
                stroke="#121829" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
            </svg>

            <span>Inbox</span>
          </div>
          <span> 12 </span>
        </NuxtLink>

        <!-- menu item -->
        <NuxtLink active-class="active" to="/archive" class="menu-item">
          <div class="menu-item-content">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M2.5 12H5.88197C6.56717 12 7.19357 12.3871 7.5 13C7.80643 13.6129 8.43283 14 9.11803 14H14.882C15.5672 14 16.1936 13.6129 16.5 13C16.8064 12.3871 17.4328 12 18.118 12H21.5M8.96656 4H15.0334C16.1103 4 16.6487 4 17.1241 4.16396C17.5445 4.30896 17.9274 4.5456 18.2451 4.85675C18.6043 5.2086 18.8451 5.6902 19.3267 6.65337L21.4932 10.9865C21.6822 11.3645 21.7767 11.5535 21.8434 11.7515C21.9026 11.9275 21.9453 12.1085 21.971 12.2923C22 12.4992 22 12.7105 22 13.1331V15.2C22 16.8802 22 17.7202 21.673 18.362C21.3854 18.9265 20.9265 19.3854 20.362 19.673C19.7202 20 18.8802 20 17.2 20H6.8C5.11984 20 4.27976 20 3.63803 19.673C3.07354 19.3854 2.6146 18.9265 2.32698 18.362C2 17.7202 2 16.8802 2 15.2V13.1331C2 12.7105 2 12.4992 2.02897 12.2923C2.05471 12.1085 2.09744 11.9275 2.15662 11.7515C2.22326 11.5535 2.31776 11.3645 2.50675 10.9865L4.67331 6.65337C5.1549 5.69019 5.3957 5.2086 5.75495 4.85675C6.07263 4.5456 6.45551 4.30896 6.87589 4.16396C7.35125 4 7.88969 4 8.96656 4Z"
                stroke="#121829" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
            </svg>

            <span>Archive</span>
          </div>
          <span> 8 </span>
        </NuxtLink>
      </div>
    </div>
    <div class="footer">
      <div class="button-container">
        <!-- menu item -->
        <a class="menu-item">
          <div class="menu-item-content">
            <svg width="22" height="20" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M17 6L21 10M21 10L17 14M21 10H8M14 2.20404C12.7252 1.43827 11.2452 1 9.66667 1C4.8802 1 1 5.02944 1 10C1 14.9706 4.8802 19 9.66667 19C11.2452 19 12.7252 18.5617 14 17.796"
                stroke="#4B5563" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            <span>Logout</span>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">


</script>


<style lang="scss" scoped>
.side-bar-container {
  /* Nav Menu */

  box-sizing: border-box;

  /* Auto layout */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0px;
  gap: 173px;

  width: 260px;

  background: #f8fafc;
  border: 1px solid #e5e7eb;

  /* Inside auto layout */
  flex: none;
  order: 0;
  align-self: stretch;
  flex-grow: 0;
  margin: 0px -1px;

  .menu-item {
    /* Frame 158 */
    /* Auto layout */
    text-decoration: none;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 12px 24px;
    gap: 12px;
    border-radius: 54px;
    color: black;

    /* Inside auto layout */
    flex: none;
    order: 0;
    align-self: stretch;
    flex-grow: 0;

    .menu-item-content {
      /* Frame 420 */

      /* Auto layout */
      display: flex;
      flex-direction: row;
      align-items: center;
      padding: 0px;
      gap: 12px;

      /* Inside auto layout */
      flex: none;
      order: 0;
      flex-grow: 0;
    }

    &.active {
      background: #d6e2fb;
    }

    &:hover {
      background: #d6e2fb;
      cursor: pointer;
    }
  }

  .footer {
    width: 260px;
  }

  .box {
    /* Top */

    /* Auto layout */
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0px;
    gap: 32px;

    margin: 0 auto;
    width: 260px;
    height: 160px;

    /* Inside auto layout */
    flex: none;
    order: 0;
    align-self: stretch;
    flex-grow: 0;
  }

  .button-container {
    /* Frame 419 */

    /* Auto layout */
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0px 10px;
    gap: 12px;

    /* Inside auto layout */
    flex: none;
    order: 1;
    align-self: stretch;
    flex-grow: 0;
  }
}

.logo-container {
  /* Frame 164 */

  /* Auto layout */
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px 24px;
  gap: 40px;

  width: 260px;
  height: 20px;

  /* Inside auto layout */
  flex: none;
  order: 0;
  align-self: stretch;
  flex-grow: 0;
}
</style>
