<script lang="ts" setup>
import { footerData } from '@/data/footer';
</script>

<template>
    <footer class="text-primary w-full flex items-center justify-center mt-[8%] py-11">
        <div class="w-[1240px] grid grid-cols-3 gap-10">
            <div class="flex flex-col gap-2" v-for="data in footerData" :key="data.title">
                <h4 class="font-medium text-lg">{{ data.title }}</h4>
                <div class="flex flex-col gap-1 text-sm">
                    <span class="hover:underline cursor-pointer" v-for="i in data.details" :key="i">{{ i }}</span>
                </div>
            </div>
        </div>
    </footer>
</template>

<style></style>
