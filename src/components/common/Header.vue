<script setup lang="ts">
import { auth } from '@/config/firebase';
import { headerData } from '@/data/header';
import { ref, watch, watchEffect } from 'vue';
import { delay } from '@/ultils/app';

const userData = ref(auth.currentUser);

const handleLogout = async () => {
    await auth.signOut();

    window.location.reload();
};

watchEffect(async () => {
    await delay(800);
    userData.value = auth.currentUser;
});
</script>

<template>
    <header class="fixed top-12 left-0 right-0 flex items-center justify-end px-10 bg-transparent z-50">
        <div class="flex items-center gap-9 text-lg font-medium text-primary">
            <span v-for="data in headerData" :key="data.title" class="hover:underline cursor-pointer"
                ><router-link :to="data.link">{{ data.title }}</router-link></span
            >

            <span @click="handleLogout" v-if="userData" class="hover:underline cursor-pointer">{{ userData.displayName }}</span>
        </div>
    </header>
</template>
