<template>
    <section class="w-screen h-screen bg-primary flex items-center justify-center">
        <div class="bg-secondary rounded-2xl p-2 py-10 text-primary w-1/3 flex items-center justify-center">
            <Button @click="handleLogin" :title="'Đăng nhập với google'" :icon="['fas', 'chevron-right']" />
        </div>
    </section>
</template>

<script setup lang="ts">
import Button from '@/components/buttons/Button.vue';
import { auth, provider } from '@/config/firebase';
import { signInWithPopup } from 'firebase/auth';
import { isOwner } from '../ultils/app';
import { useRouter } from 'vue-router';
const routes = useRouter();

const handleLogin = async () => {
    await signInWithPopup(auth, provider);

    console.log(auth.currentUser);

    if (isOwner()) {
        routes.push({ name: 'home' });
    } else {
        await auth.signOut();
        alert('Bạn không có quyền truy cập !');
    }
};
</script>
