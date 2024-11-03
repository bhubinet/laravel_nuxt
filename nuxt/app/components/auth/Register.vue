<script lang="ts" setup>
const router = useRouter();
const form = ref();

const state = reactive({
  name: "",
  email: "",
  password: "",
  password_confirmation: "",
});

const { refresh: onSubmit, status: registerStatus } = useFetch<any>("register", {
  method: "POST",
  body: state,
  immediate: false,
  watch: false,
  async onResponse({ response }) {
    if (response?.status === 422) {
      form.value.setErrors(response._data?.errors);
    } else if (response._data?.ok) {
      useToast().add({
        icon: "i-heroicons-check-circle-20-solid",
        title: "You have been registered successfully.",
        color: "emerald",
        actions: [
          {
            label: "Log In now",
            to: "/auth/login",
            color: "emerald",
          },
        ],
      });

      router.push("/auth/login");
    }
  }
});
</script>

<template>
  <div class="space-y-4">
    <UForm ref="form" :state="state" @submit="onSubmit" class="space-y-4">
      <UFormGroup :label="$t('register.fullname')" name="name" required>
        <UInput v-model="state.name" type="text" autofocus />
      </UFormGroup>

      <UFormGroup :label="$t('login.email')" name="email" required>
        <UInput
          v-model="state.email"
          placeholder="you@example.com"
          icon="i-heroicons-envelope"
          trailing
          type="email"
        />
      </UFormGroup>

      <UFormGroup
        :label="$t('login.password')"
        name="password"
        :hint="$t('register.password_hint')"
        :ui="{ hint: 'text-xs text-gray-500 dark:text-gray-400' }"
        required
      >
        <UInput v-model="state.password" type="password" autocomplete="off" />
      </UFormGroup>

      <UFormGroup :label="$t('register.password_repeat')" name="password_confirmation" required>
        <UInput
          v-model="state.password_confirmation"
          type="password"
          autocomplete="off"
        />
      </UFormGroup>

      <div class="flex items-center justify-end space-x-4">
        <UButton class="w-full justify-center" type="submit" :label="$t('register.btn_action')" :loading="registerStatus === 'pending'" />
      </div>
    </UForm>

    <div class="text-sm text-center">
      {{ $t('register.already_have_account') }}
      <NuxtLink class="text-sm" to="/auth/login">{{ $t('register.login_now') }}</NuxtLink>
    </div>
  </div>
</template>
