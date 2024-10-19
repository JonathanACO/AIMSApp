<script setup lang="ts">
import { computed } from "vue";

const props = defineProps<{
  modelValue: string | number | Date | null;
  type: "text" | "number" | "date";
  label?: string;
  labelPosition?: "top" | "side";
  unit?: string;
  afterText?: string;
  placeHolder?: string;
  disabled?: boolean | null;
  centerText?: boolean;
  inputWidth?: string;
}>();

const inputWidthClass = computed(() => {
  if (!props.inputWidth) return "w-full";
  const validWidths = [
    "w-12",
    "w-16",
    "w-24",
    "w-28",
    "w-32",
    "w-36",
    "w-40",
    "w-44",
    "w-48",
    "w-52",
    "w-56",
    "w-60",
    "w-64",
    "w-72",
    "w-80",
    "w-96",
  ];
  return validWidths.includes(`w-${props.inputWidth}`)
    ? `w-${props.inputWidth}`
    : "w-full";
});

defineEmits<{
  (e: "update:modelValue", value: string | number | Date): void;
}>();
</script>

<template>
  <div
    class="flex"
    :class="{
      'flex-col': labelPosition == 'top',
      'items-center': labelPosition !== 'top',
      'text-stone-300': disabled,
      'text-stone-500': !disabled,
    }"
  >
    <label
      v-if="label"
      class="min-w-max"
      :class="labelPosition === 'top' ? 'mb-1.5' : 'mr-3'"
      >{{ label }}</label
    >
    <div class="relative inline-flex items-center w-full">
      <div class="relative w-full">
        <input
          :disabled="disabled === true"
          :value="modelValue"
          :type="type"
          :placeholder="placeHolder"
          :class="[
            inputWidthClass,
            {
              '[&::-webkit-calendar-picker-indicator]:w-0 cursor-pointer':
                type == 'date',
              'pr-9': type !== 'date' && unit,
              '[appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none':
                type == 'number',
              'text-center': centerText,
            },
          ]"
          class="p-1 h-9 outline-none border bg-white border-stone-500 rounded-md disabled:border-stone-300"
          @input="
            $emit(
              'update:modelValue',
              ($event.target as HTMLInputElement).value
            )
          "
        />
        <span
          v-if="unit"
          class="absolute top-1/2 transform -translate-y-1/2 pointer-events-none right-2"
        >
          {{ unit }}
        </span>
      </div>
      <p v-if="afterText" class="ml-3 min-w-max">{{ afterText }}</p>
    </div>
  </div>
</template>
