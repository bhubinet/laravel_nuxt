<script lang="ts" setup>
const form = ref();

const state = reactive({
  email: "",
});

const { refresh: onSubmit, status: forgotStatus } = useFetch<any>("forgot-password", {
  method: "POST",
  body: state,
  immediate: false,
  watch: false,
  async onResponse({ response }) {
    if (response?.status === 422) {
      form.value.setErrors(response._data?.errors);
    } else if (response._data?.ok) {
      useToast().add({
        title: "Success",
        description: response._data.message,
        color: "emerald",
      });
    }
  }
});
</script>

<template>
  <div class="space-y-4">
    <UForm ref="form" :state="state" @submit="onSubmit" class="space-y-4">
      <UFormGroup :label="$t('login.email')" name="email" required>
        <UInput
          v-model="state.email"
          placeholder="you@example.com"
          icon="i-heroicons-envelope"
          trailing
          type="email"
          autofocus
        />
      </UFormGroup>

      <div class="flex items-center justify-end space-x-4">
        <UButton class="w-full justify-center" type="submit" :label="$t('forgot_password.btn_action')" :loading="forgotStatus === 'pending'" />
      </div>
    </UForm>

    <div class="text-sm text-center">
      <NuxtLink class="text-sm" to="/auth/login">{{ $t('forgot_password.back_login') }}</NuxtLink>
    </div>
  </div>
</template>
