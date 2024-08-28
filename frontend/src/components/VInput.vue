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
    <label class="capitalize block text-base mb-2">{{ labelText }}</label>
    <div class="flex">
      <input
        :type="isPassword ? 'password' : 'text'"
        :value="modelValue"
        @input="$emit('update:modelValue', ($event.target as any).value)"
        v-bind="$attrs"
        :disabled="isDisabled"
        :class="{ 'text-base': isDisabled }"
        class="py-3 px-4 block w-full border border-blue-800 rounded-2xl text-sm focus:outline-none focus:border-blue-600 focus:border-2 transition-colors duration-300"
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
