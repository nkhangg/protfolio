<template>
    <section id="home" class="h-screen w-screen text-primary relative overflow-hidden">
        <div class="absolute inset-0 flex items-center justify-center">
            <div class="w-full max-w-[1240px]">
                <div class="flex items-center justify-between">
                    <div>
                        <div class="flex flex-col text-[60px]">
                            <span
                                v-motion
                                :initial="{
                                    y: 60,
                                    opacity: 0,
                                }"
                                :enter="{
                                    y: 0,
                                    opacity: 1,
                                    transition: {
                                        ease: 'backIn',
                                        repeatType: 'mirror',
                                    },
                                }"
                                >Hi</span
                            >
                            <span
                                v-motion
                                :initial="{
                                    y: 60,
                                    opacity: 0,
                                }"
                                :enter="{
                                    y: 0,
                                    opacity: 1,
                                    transition: {
                                        delay: 200,
                                        ease: 'backIn',
                                        repeatType: 'mirror',
                                    },
                                }"
                                >I'm Khang</span
                            >
                        </div>
                        <p
                            v-motion
                            :initial="{
                                y: 60,
                                opacity: 0,
                            }"
                            :enter="{
                                y: 0,
                                opacity: 1,
                                transition: {
                                    delay: 300,
                                    ease: 'backIn',
                                    repeatType: 'mirror',
                                },
                            }"
                            class="max-w-[520px] break-all"
                        >
                            Là một lập trình viên có kinh nghiệm hơn 6 tháng trong mảng front-end. Với mục tiêu trở thành một lập trình viên fullstack, tôi không chỉ hiểu biết về
                            các framwork front end như react, nextjs, vuejs, mà còn sỡ hữu kiến thức về back end (Java, Nodejs) và mobile (flutter)
                        </p>
                    </div>

                    <div
                        v-motion
                        :initial="{
                            y: 60,
                        }"
                        :enter="{
                            y: -60,
                            transition: {
                                ease: 'linear',
                                duration: 2000,
                                repeat: Infinity,
                                repeatType: 'mirror',
                            },
                        }"
                        class="w-96"
                    >
                        <img class="w-full h-full object-cover" src="../assets//icons/astro1.png" alt="astro1" />
                    </div>
                </div>

                <div class="w-full flex items-center justify-center mt-[12%]">
                    <div
                        v-motion
                        :initial="{
                            x: 80,
                            opacity: 0,
                        }"
                        :enter="{
                            x: 0,
                            opacity: 1,
                            transition: {
                                delay: 1000,
                                ease: 'easeInOut',
                                repeatType: 'mirror',
                            },
                        }"
                    >
                        <router-link to="/tieu-su"><Button :title="'Tìm hiểu thêm'" :icon="['fas', 'chevron-right']" /></router-link>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script lang="ts" setup>
import Button from '../components/buttons/Button.vue';
</script>

<style scoped>
#home {
    background-image: url('../assets/images/2024.jpg');
    background-position: center; /* Center the image */
    background-repeat: no-repeat;
    background-size: cover;
}
</style>
