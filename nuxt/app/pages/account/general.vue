<script lang="ts" setup>
useSeoMeta({
  title: 'Account',
})
</script>
<template>
  <UCard :ui="{ body: { base: 'grid grid-cols-12 gap-6 md:gap-8' } }">
    <div class="col-span-12 lg:col-span-4">
      <div class="text-lg font-semibold mb-2">{{ $t('account.profile_information') }}</div>
      <div class="text-sm opacity-80">
        {{ $t('account.profile_information_desc') }}
      </div>
    </div>
    <div class="col-span-12 lg:col-span-8">
      <AccountUpdateProfile />
    </div>
    <UDivider class="col-span-12" />
    <div class="col-span-12 lg:col-span-4">
      <div class="text-lg font-semibold mb-2">{{ $t('account.update_password') }}</div>
      <div class="text-sm opacity-80">
        {{ $t('account.update_password_desc') }}
      </div>
    </div>
    <div class="col-span-12 lg:col-span-8">
      <AccountUpdatePassword />
    </div>
  </UCard>
</template>
