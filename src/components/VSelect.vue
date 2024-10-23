<script setup lang="ts">
defineProps<{
  modelValue: string | number | null;
  options: { value: string | number; label?: string }[] | any[];
  label?: string;
  disabled?: boolean;
  labelPosition?: "top" | "side";
  afterText?: "string";
  placeHolder?: string;
}>();

const isObjectOption = (
  option: any
): option is { value: string | number; label?: string } => {
  return typeof option === "object" && "value" in option;
};
</script>
<template>
  <div
    class="flex"
    :class="`${disabled ? 'text-stone-300' : 'text-stone-500'} ${
      labelPosition == 'top' ? 'flex-col' : 'items-center'
    }`"
  >
    <label v-if="label" :class="labelPosition === 'top' ? 'mb-1.5' : 'mr-3'">{{
      label
    }}</label>
    <div class="relative inline-flex items-center w-full">
      <div class="relative flex-grow">
        <select
          class="w-full p-1 pr-9 h-9 outline-none border bg-white border-stone-500 disabled:border-stone-300 rounded-md"
          :disabled="disabled"
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
            :value="isObjectOption(option) ? option.value : option"
          >
            {{ isObjectOption(option) ? option.label || option.value : option }}
          </option>
          <option value="">No responder</option>
        </select>
      </div>
      <p v-if="afterText" class="ml-2">{{ afterText }}</p>
    </div>
  </div>
</template>
