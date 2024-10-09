<script setup lang="ts">
defineProps<{
  modelValue: string | number | Date | null;
  type: "text" | "number" | "date";
  label?: string;
  labelPosition?: "top" | "side";
  unit?: string;
  afterText?: string;
  placeHolder?: string;
  disabled?: boolean;
}>();
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
      <div class="relative flex-grow">
        <input
          :disabled="disabled"
          :value="modelValue"
          :type="type"
          :placeholder="placeHolder"
          :class="{
            'text-center [&::-webkit-calendar-picker-indicator]:w-0 cursor-pointer':
              type == 'date',
            'pr-9': type !== 'date',
            '[appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none':
              type == 'number',
          }"
          class="w-full p-1 h-9 outline-none border bg-white border-stone-500 rounded-md disabled:border-stone-300"
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
      <p v-if="afterText" class="ml-2">{{ afterText }}</p>
    </div>
  </div>
</template>
