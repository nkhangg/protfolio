<template>
    <div class="bg-secondary rounded-xl w-full h-fit py-6 px-9 flex flex-col gap-3">
        <h2 class="text-2xl font-medium">{{ props.title }}</h2>
        <div class="flex flex-col gap-5 tracking-wider">
            <slot />
        </div>
    </div>
</template>
<script lang="ts" setup>
import { defineProps } from 'vue';

const props = defineProps<{
    title: string;
}>();
</script>
