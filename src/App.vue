<template>
    <div class="bg-primary">
        <Header />
        <router-view />

        <Footer v-if="currentRouteName && !['home', 'login'].includes(currentRouteName as string)  " />

        <div v-if="auth.currentUser" class="fixed bottom-0 right-0 text-primary p-9">
            <router-link :to="{ name: 'create' }"
                ><button class="border border-primary rounded-full w-12 h-12 text-sm active:scale-95"><fa :icon="['fas', 'plus']" /></button
            ></router-link>
        </div>
    </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import Header from './components/common/Header.vue';
import Footer from './components/common/Footer.vue';
import { useRoute } from 'vue-router';
import { auth } from './config/firebase';
const route = useRoute();
const currentRouteName = computed(() => route.name);
</script>
