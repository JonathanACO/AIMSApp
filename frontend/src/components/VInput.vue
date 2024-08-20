<script setup lang="ts">
import { eyeOffOutline, eyeOutline } from "ionicons/icons";
import { ref } from "vue";

const props = defineProps<{
  modelValue: string | null;
  labelText: string;
  isDisabled?: boolean;
  type: "text" | "email" | "password";
  hasEye?: boolean;
}>();
const emit = defineEmits<{
  (e: "update:modelValue", value: string): void;
}>();

const isPassword = ref(props.type === "password");
const showEye = props.hasEye && props.type === "password";

const togglePasswordVisibility = () => {
  isPassword.value = !isPassword.value;
};
</script>

<template>
  <div class="z-0">
    <label class="capitalize text-base">{{ labelText }}</label>
    <div class="flex">
      <input
        :type="isPassword ? 'password' : 'text'"
        :value="modelValue"
        @input="$emit('update:modelValue', ($event.target as any).value)"
        v-bind="$attrs"
        :disabled="isDisabled"
        :class="{ 'text-base': isDisabled }"
        class="rounded-lg w-full p-2 pr-10"
      />
      <button
        v-if="showEye"
        type="button"
        @click="togglePasswordVisibility"
        class="-ml-8 flex items-center"
      >
        <ion-icon
          :icon="isPassword ? eyeOffOutline : eyeOutline"
          class="text-2xl"
        ></ion-icon>
      </button>
    </div>
  </div>
</template>
