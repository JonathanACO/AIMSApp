<script setup lang="ts">
defineProps<{
  modelValue: string | null;
  options: readonly any[];
  label?: string;
  labelPosition?: "top" | "side";
  afterText?: "string";
  placeHolder?: string;
  hidePlaceHolder?: boolean;
}>();
</script>
<template>
  <div
    class="flex text-stone-500"
    :class="labelPosition == 'top' ? 'flex-col' : 'items-center'"
  >
    <label v-if="label" :class="labelPosition === 'top' ? 'mb-1.5' : 'mr-3'">{{
      label
    }}</label>
    <div class="relative inline-flex items-center w-full">
      <div class="relative flex-grow">
        <select
          class="w-full p-1 pr-9 h-9 outline-none border bg-white border-stone-500 rounded-md"
          :value="modelValue"
          @input="
            $emit(
              'update:modelValue',
              ($event.target as HTMLInputElement).value
            )
          "
        >
          <option value="" hidden>
            {{ placeHolder }}
          </option>
          <option
            v-for="(option, index) in options"
            :key="index"
            :value="option"
          >
            {{ option }}
          </option>
          <option value="">No responder</option>
        </select>
      </div>
      <p v-if="afterText" class="ml-2">{{ afterText }}</p>
    </div>
  </div>
</template>
