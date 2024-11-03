<script lang="ts" setup>
definePageMeta({
  middleware: ["auth"],
});

const { t } = useI18n();
const localePath = useLocalePath()

const links = [
  [
    {
      label: t('account.general'),
      icon: "i-heroicons-user",
      to: localePath("/account/general"),
    },
    {
      label: t('account.devices'),
      icon: "i-heroicons-device-phone-mobile",
      to: localePath("/account/devices"),
    },
  ],
];
</script>
<template>
  <NuxtLayout>
    <UHorizontalNavigation
      :links="links"
      class="border-b border-gray-200 dark:border-gray-800 mb-4"
    />
    <NuxtPage class="col-span-10 md:col-span-8" />
  </NuxtLayout>
</template>
