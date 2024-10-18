<script setup lang="ts">
import { ref } from "vue";

const props = defineProps<{
  modelValue: string;
  afterText?: string;
}>();

const emit = defineEmits<{
  (e: "update:modelValue", value: string): void;
}>();

const leftValue = ref("");
const rightValue = ref("");
const leftInputRef = ref<HTMLInputElement | null>(null);
const rightInputRef = ref<HTMLInputElement | null>(null);

const handleInput = (side: "left" | "right", event: Event) => {
  const input = event.target as HTMLInputElement;
  const numericValue = input.value.replace(/\D/g, "");

  if (side === "left") {
    leftValue.value = numericValue;
    if (numericValue.length === 3) {
      rightInputRef.value?.focus();
    }
  } else {
    rightValue.value = numericValue;
    if (numericValue.length === 3 && leftValue.value.length < 3) {
      leftInputRef.value?.focus();
    }
  }

  emit("update:modelValue", `${leftValue.value}/${rightValue.value}`);
};
</script>

<template>
  <div class="relative inline-flex items-center w-full text-stone-500">
    <div
      class="inline-flex items-center border h-9 bg-white border-stone-500 rounded-md overflow-hidden"
    >
      <input
        ref="leftInputRef"
        v-model="leftValue"
        @input="handleInput('left', $event)"
        type="text"
        maxlength="3"
        placeholder="000"
        class="w-12 bg-white text-center outline-none"
      />
      <span class="px-1 text-gray-700">/</span>
      <input
        ref="rightInputRef"
        v-model="rightValue"
        @input="handleInput('right', $event)"
        type="text"
        maxlength="3"
        placeholder="000"
        class="w-12 bg-white text-center outline-none"
      />
    </div>

    <p v-if="afterText" class="ml-3 min-w-max">{{ afterText }}</p>
  </div>
</template>
