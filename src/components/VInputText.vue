<script setup lang="ts">
defineProps<{
  modelValue: string | number | Date;
  label?: string;
  labelPosition?: "top" | "side";
  type: "text" | "number" | "date";
  unit?: string;
  afterText?: string;
  placeHolder?: string;
}>();
defineEmits<{
  (e: "update:modelValue", value: string): void;
}>();
</script>
<template>
  <div
    class="flex"
    :class="labelPosition == 'top' ? 'flex-col' : 'items-center'"
  >
    <label v-if="label" :for="modelValue.toString" class="mr-3">{{
      label
    }}</label>
    <div class="relative inline-flex items-center w-full">
      <div class="relative flex-grow">
        <input
          :value="modelValue"
          :id="modelValue.toString"
          :type="type"
          :placeholder="placeHolder"
          :class="{
            'text-center': type == 'date',
            '[appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none':
              type == 'number',
          }"
          class="w-full p-1 pr-9 outline-none border bg-white border-black rounded-md"
          @input="
            $emit(
              'update:modelValue',
              ($event.target as HTMLInputElement).value
            )
          "
        />
        <span
          v-if="unit"
          class="absolute right-2 top-1/2 transform -translate-y-1/2 pointer-events-none"
        >
          {{ unit }}
        </span>
      </div>
      <p v-if="afterText" class="ml-2">{{ afterText }}</p>
    </div>
  </div>
</template>
