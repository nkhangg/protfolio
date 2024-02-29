<template>
    <button
        id="button"
        ref="refButton"
        @click="emit('click')"
        class="border min-w-[135px] rounded-full py-2 px-5 pr-10 flex items-center gap-2 border-primary relative transition-all ease-linear active:scale-[.99] outline-none"
    >
        <span> {{ props.title }}</span>

        <fa id="button-icon" class="absolute top-[50%] translate-y-[-50%] right-5 transition-all ease-linear" :icon="props.icon" />
    </button>
</template>
<script lang="ts" setup>
import { ref, defineProps, defineEmits } from 'vue';
const refButton = ref<HTMLButtonElement>();

const emit = defineEmits(['click']);

const props = defineProps<{
    title: string;
    icon: string[];
}>();
</script>

<style scoped>
#button:hover #button-icon {
    right: 16px !important;
}
</style>
