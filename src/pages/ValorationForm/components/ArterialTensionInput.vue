<script setup lang="ts">
import {ref} from "vue";

defineProps<{
  tensionArterialSistolica: number | null;
  tensionArterialDiastolica: number | null;
  afterText?: string;
}>();

const emit = defineEmits<{
  (e: "update:tensionArterialSistolica", value: number | null): void;
  (e: "update:tensionArterialDiastolica", value: number | null): void;
}>();

const leftValue = ref<number | null>(null);
const rightValue = ref<number | null>(null);
const leftInputRef = ref<HTMLInputElement | null>(null);
const rightInputRef = ref<HTMLInputElement | null>(null);

const handleInput = (side: "left" | "right", event: Event) => {
  const input = event.target as HTMLInputElement;
  const numericValue = input.valueAsNumber;

  if (side === "left") {
    leftValue.value = isNaN(numericValue) ? null : numericValue;
    if (leftValue.value !== null && leftValue.value.toString().length === 3) {
      rightInputRef.value?.focus();
    }
  } else {
    rightValue.value = isNaN(numericValue) ? null : numericValue;
    if (
        rightValue.value !== null &&
        rightValue.value.toString().length === 3 &&
        (leftValue.value === null || leftValue.value.toString().length < 3)
    ) {
      leftInputRef.value?.focus();
    }
  }

  emit("update:tensionArterialSistolica", leftValue.value);
  emit("update:tensionArterialDiastolica", rightValue.value);
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
          type="number"
          maxlength="3"
          placeholder="000"
          class="w-12 bg-white text-center outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
      />
      <span class="px-1 text-gray-700">/</span>
      <input
          ref="rightInputRef"
          v-model="rightValue"
          @input="handleInput('right', $event)"
          type="number"
          maxlength="3"
          placeholder="000"
          class="w-12 bg-white text-center outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
      />
    </div>

    <p v-if="afterText" class="ml-3 min-w-max">{{ afterText }}</p>
  </div>
</template>
