<script setup lang="ts">
import { computed } from "vue";

const props = defineProps<{
  modelValue: string | boolean | null;
  value: string | boolean;
  label?: string;
  isDisabled?: boolean;
}>();

const emits = defineEmits<{
  (e: "update:modelValue", value: string | boolean | null): void;
}>();

function handleOnClick() {
  if (props.isDisabled !== true)
    if (props.modelValue !== props.value)
      emits("update:modelValue", props.value);
    else emits("update:modelValue", null);
}

const displayLabel = computed(() => props.label ?? props.value.toString());
</script>

<template>
  <div
    class="text-stone-500 flex items-center cursor-pointer"
    @click="handleOnClick()"
  >
    <div
      class="w-7 h-7 border my-1 rounded-full border-stone-500 flex items-center justify-center"
    >
      <div
        class="w-3 h-3 rounded-full bg-stone-500"
        :class="modelValue === value ? 'block' : 'hidden'"
      ></div>
    </div>
    <label class="ml-3 cursor-pointer">
      {{ displayLabel }}
    </label>
  </div>
</template>
