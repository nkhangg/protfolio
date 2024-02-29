<script lang="ts" setup>
import { defineProps, toRefs } from 'vue';
import { IPreviewProject } from '../../interface';

const props = defineProps<{
    data: IPreviewProject;
}>();

const { data } = toRefs(props);
</script>

<template>
    <div class="w-full flex flex-col gap-1">
        <div class="w-full aspect-video rounded-xl overflow-hidden">
            <img class="w-full h-full object-cover hover:scale-110 transition-all ease-out bg-white" :src="data.image" :alt="data.image" />
        </div>
        <router-link :to="`/san-pham/${data.id}`"
            ><p class="max-w-full line-clamp-2 text-lg hover:underline cursor-pointer">{{ data.title }}</p></router-link
        >
    </div>
</template>
