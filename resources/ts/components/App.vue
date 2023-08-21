<script lang="ts" setup>
const enviroments = import.meta.env;
const props = defineProps<{ name: string }>();
import { ref } from 'vue';
const counter = ref(0);
</script>
<template>
  <div class="mt-6">
    <span class="text-white text-xl mb-2 font-bold">Enviroments</span>
    <div
      v-for="env in Object.entries(enviroments)"
      class="flex items-center gap-2"
    >
      <span class="text-[#E0234E] font-semibold">{{ env[0] }}:</span>
      <span class="text-white">{{ env[1] }}</span>
    </div>
  </div>
  <p class="text-white text-center mb-3">Hi, {{ props.name }}</p>
  <div class="flex items-center justify-center gap-6">
    <button
      @click="counter++"
      class="text-white p-4 rounded-md bg-black bg-opacity-70"
    >
      +
    </button>
    <span class="text-white text-2xl">{{ counter }}</span>
    <button
      @click="counter--"
      class="text-white p-4 rounded-md bg-black bg-opacity-70"
    >
      -
    </button>
  </div>
</template>
